import UserModel from "../models/user.model.js";

export const getUserById = async (id, res) => {
  const user = await UserModel.findById(id);

  if (user) {
    res.status(200).json({
      success: true,
      user,
    });
  }
};
