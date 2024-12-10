const Rating = require("../models/rating-model");

const createRating = async (ratingData) => {
  const rating = new Rating(ratingData);
  return await rating.save();
};

const getRatings = async (filter = {}, options = {}) => {
  return await Rating.find(filter, null, options).populate("book user");
};

const getRatingById = async (id) => {
  return await Rating.findById(id).populate("book user");
};

const updateRating = async (id, updateData) => {
  return await Rating.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteRating = async (id) => {
  return await Rating.findByIdAndDelete(id);
};

module.exports = {
  createRating,
  getRatings,
  getRatingById,
  updateRating,
  deleteRating,
};
