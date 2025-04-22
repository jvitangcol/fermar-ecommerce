import express from "express";
import {
  registerUserForNonUser,
  registerUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  updateUserPassword,
} from "../controllers/user.controller.js";
import { authorizeRoles, isAuthenticated } from "../middleware/auth.js";
import upload from "../middleware/multerConfig.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  isAuthenticated,
  authorizeRoles("admin"),
  registerUser
);

userRouter.post(
  "/register-non-user",
  upload.single("avatar"),
  registerUserForNonUser
);

userRouter.post("/login", loginUser);

userRouter.get("/logout", isAuthenticated, logoutUser);

userRouter.get("/refresh-token", updateAccessToken);

userRouter.get("/me", isAuthenticated, getUserInfo);

userRouter.put("/update-user-password", isAuthenticated, updateUserPassword);

export default userRouter;
