const Book = require("../models/book-model");

const createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

const getBooks = async (filter = {}, options = {}) => {
  return await Book.find(filter, null, options).populate("reviews ratings");
};

const getBookById = async (id) => {
  return await Book.findById(id).populate("reviews ratings");
};

const updateBook = async (id, updateData) => {
  return await Book.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
