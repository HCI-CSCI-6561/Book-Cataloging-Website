const express = require("express");
const router = express.Router();
const Rating = require("../models/rating-model");
const Book = require("../models/book-model");

// Create a new rating
router.post("/", async (req, res) => {
  try {
    const { book, rating, user, isAnonymous } = req.body;
    const newRating = new Rating({ book, rating, user, isAnonymous });
    await newRating.save();

    // Update book with the new rating
    const bookDoc = await Book.findById(book);
    bookDoc.ratings.push(newRating._id);

    // Recalculate average rating
    const totalRatings = bookDoc.ratings.length;
    const totalScore = (await Rating.find({ book })).reduce((sum, r) => sum + r.rating, 0);
    bookDoc.averageRating = totalScore / totalRatings;

    await bookDoc.save();

    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all ratings for a book
router.get("/book/:bookId", async (req, res) => {
  try {
    const ratings = await Rating.find({ book: req.params.bookId }).populate("user");
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a rating
router.put("/:id", async (req, res) => {
  try {
    const rating = await Rating.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rating) return res.status(404).json({ error: "Rating not found" });

    // Recalculate average rating
    const bookDoc = await Book.findById(rating.book);
    const totalRatings = bookDoc.ratings.length;
    const totalScore = (await Rating.find({ book: rating.book })).reduce((sum, r) => sum + r.rating, 0);
    bookDoc.averageRating = totalScore / totalRatings;

    await bookDoc.save();

    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a rating
router.delete("/:id", async (req, res) => {
  try {
    const rating = await Rating.findByIdAndDelete(req.params.id);
    if (!rating) return res.status(404).json({ error: "Rating not found" });

    // Remove rating from book
    const bookDoc = await Book.findById(rating.book);
    bookDoc.ratings = bookDoc.ratings.filter((rId) => rId.toString() !== rating._id.toString());

    // Recalculate average rating
    const totalRatings = bookDoc.ratings.length;
    const totalScore = totalRatings > 0
      ? (await Rating.find({ book: rating.book })).reduce((sum, r) => sum + r.rating, 0)
      : 0;
    bookDoc.averageRating = totalRatings > 0 ? totalScore / totalRatings : 0;

    await bookDoc.save();

    res.status(200).json({ message: "Rating deleted", rating });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
