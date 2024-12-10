const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5, // Ratings range from 1 to 5
  },
  isAnonymous: {
    type: Boolean,
    default: false, // Anonymous rating
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Rating', ratingSchema);
