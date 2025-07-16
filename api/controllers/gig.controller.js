import Gig from "../models/gig.model.js";
import { createError } from "../utils/createError.js";
import { successHandler } from "../middleware/successHandler.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only Sellers can create a gig!"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    successHandler(res, 201, `Gig Created Successfully ${savedGig}`);
  } catch (error) {
    next(error.message);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId !== req.userId)
      next(createError(403, "You can delete only your gig"));

    await Gig.findByIdAndDelete(req.params.id);
    successHandler(res, 200, "Gig has been deleted");
    respons;
  } catch (error) {
    next(error);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) next(createError(404, "Gig not found!"));

    successHandler(res, 200, gig);
  } catch (error) {
    next(error);
  }
};

export const getGigs = async (req, res, next) => {
  try {
    const { userId, cat, search, min, max, sort } = req.query;

    const filters = {};

    // 👤 Filter by userId if provided
    if (userId) filters.userId = userId;

    // 🗂️ Filter by category if provided
    if (cat) filters.cat = cat;

    // 🔍 Filter by search in title
    if (search) filters.title = { $regex: search, $options: "i" };

    // 💰 Filter by price range if valid numbers
    const minNum = Number(min);
    const maxNum = Number(max);

    if ((!isNaN(minNum) && min !== "") || (!isNaN(maxNum) && max !== "")) {
      filters.price = {};
      if (!isNaN(minNum) && min !== "") filters.price.$gt = minNum;
      if (!isNaN(maxNum) && max !== "") filters.price.$lt = maxNum;
    }

    // 📦 Find and sort gigs
    const gigs = await Gig.find(filters).sort({ [sort || "createdAt"]: -1 });

    // ✅ Send success response
    successHandler(res, 200, gigs);
  } catch (error) {
    next(error);
  }
};



