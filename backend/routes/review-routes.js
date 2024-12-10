const express = require("express");
const router = express.Router();
const Review = require("../models/review-model");
const Book = require("../models/book-model");

// Create a new review
router.post("/", async (req, res) => {
  try {
    const { book, review, user, isAnonymous } = req.body;
    const newReview = new Review({ book, review, user, isAnonymous });
    await newReview.save();

    // Update book with the new review
    await Book.findByIdAndUpdate(book, { $push: { reviews: newReview._id } });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all reviews for a book
router.get("/book/:bookId", async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId }).populate("user");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a review
router.put("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ error: "Review not found" });

    // Remove review from book
    await Book.findByIdAndUpdate(review.book, { $pull: { reviews: review._id } });

    res.status(200).json({ message: "Review deleted", review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
