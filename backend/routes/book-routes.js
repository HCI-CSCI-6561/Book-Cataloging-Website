const express = require("express");
const router = express.Router();
const Book = require("../models/book-model");

// Create a new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all books or filtered books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find(req.query).populate("reviews").populate("ratings");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a specific book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("reviews").populate("ratings");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
