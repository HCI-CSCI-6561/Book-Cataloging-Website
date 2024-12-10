const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  bookid: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    default: [],
  },
  pages: {
    type: Number,
  },
  volume: {
    type: Number,
  },
  totalVolumes: {
    type: Number,
  },
  publishDate: {
    type: Date,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  image: {
    type: String, // URL of the book's cover image
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
  ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', bookSchema);
