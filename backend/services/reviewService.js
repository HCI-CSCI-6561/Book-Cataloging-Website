const Review = require("../models/review-model");

const createReview = async (reviewData) => {
  const review = new Review(reviewData);
  return await review.save();
};

const getReviews = async (filter = {}, options = {}) => {
  return await Review.find(filter, null, options).populate("book user");
};

const getReviewById = async (id) => {
  return await Review.findById(id).populate("book user");
};

const updateReview = async (id, updateData) => {
  return await Review.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteReview = async (id) => {
  return await Review.findByIdAndDelete(id);
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
