import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";
import UserModel from "../models/user.model.js";
import { catchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import {
  accessTokenOptions,
  refreshTokenOptions,
  sendToken,
} from "../utils/jwt.js";
import { getUserById } from "../services/user.service.js";

// Register new user
export const registerUser = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, contactNumber, password, address, role } = req.body;

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return next(new ErrorHandler("Email already exists", 400));
    }

    if (role === "admin") {
      return next(
        new ErrorHandler(
          "You are creating a new user that is not admin role",
          400
        )
      );
    }

    let userAvatar;
    if (req.file) {
      const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "User",
      });

      userAvatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }

    const createdUser = await UserModel.create({
      name,
      email,
      contactNumber,
      password,
      address,
      role,
      avatar: userAvatar,
    });

    res.status(201).json({
      success: true,
      message: "New user is created",
      createdUser,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// register for a non-user
export const registerUserForNonUser = catchAsyncError(
  async (req, res, next) => {
    try {
      const { name, email, contactNumber, password, address } = req.body;

      const userExists = await UserModel.findOne({ email });
      if (userExists) {
        return next(new ErrorHandler("Email already exists", 400));
      }

      let userAvatar;
      if (req.file) {
        const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "User",
        });

        userAvatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      const createdUser = await UserModel.create({
        name,
        email,
        contactNumber,
        password,
        address,
        role: "customer",
        avatar: userAvatar,
      });

      res.status(201).json({
        success: true,
        message: `Account created`,
        createdUser,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// Login
export const loginUser = catchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please enter email and password", 400));
    }

    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler(`No user with the Email of ${email}`));
    }

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }

    sendToken(user, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Logout
export const logoutUser = catchAsyncError(async (req, res, next) => {
  try {
    res.cookie("access_token", "", { maxAge: 1 });
    res.cookie("refresh_token", "", { maxAge: 1 });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Update access token
export const updateAccessToken = catchAsyncError(async (req, res, next) => {
  try {
    const refresh_token = req.cookies.refresh_token;
    const message = "Could not refresh token";

    const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN);
    if (!decoded) {
      return next(new ErrorHandler(message, 400));
    }

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return next(
        new ErrorHandler("Please login to access this resource", 400)
      );
    }

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: "3d",
      }
    );

    req.user = user;

    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);

    res.status(200).json({
      success: true,
      accessToken,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Get user info
export const getUserInfo = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;

    getUserById(userId, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Update user password
export const updateUserPassword = catchAsyncError(async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const userId = req.user._id;

    if (!oldPassword && !newPassword) {
      return next(new ErrorHandler("Please enter old or new password", 400));
    }

    if (oldPassword === newPassword) {
      return next(
        new ErrorHandler(
          "You entered an old password, please enter something unique",
          400
        )
      );
    }

    const user = await UserModel.findById(userId).select("+password");
    if (user?.password === undefined) {
      return next(new ErrorHandler("Invalid User", 400));
    }

    const isPasswordMatch = await user?.comparePassword(oldPassword);
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid Old Password", 400));
    }

    user.password = newPassword;

    await user?.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// update user info
export const updateUserInfo = catchAsyncError(async (req, res, next) => {
  try {
    const { userData } = req.body;
    const { userId } = req.params;

    const user = await UserModel.findById(userId);

    if (userData.fullName && user) {
      user.name = userData.fullName;
    }

    if (userData.contactNumber && user) {
      user.contactNumber = userData.contactNumber;
    }

    if (userData.email && user) {
      const isEmailExists = await UserModel.findOne({ email: userData.email });
      if (isEmailExists) {
        return next(new ErrorHandler("Email already exists", 400));
      }
      user.email = email;
    }

    await user.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
