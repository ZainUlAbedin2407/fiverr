import User from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import { successHandler } from "../middleware/successHandler.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    successHandler(res, 201, "User registered successfully", {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Invalid credentials"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, {
      httpOnly: true,
    });

    successHandler(res, 200, "Login successful", info);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  res.clearCookie("accessToken", {
    sameSite: "none",
    secure: true
  });

  successHandler(res,200,"User has been logged out.")
};
