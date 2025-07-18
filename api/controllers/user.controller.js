import { successHandler } from "../middleware/successHandler.js";
import User from "../models/user.model.js";
import { createError } from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  successHandler(res, 200, "User deleted Successfully!");
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  successHandler(res, 200, user);
};
