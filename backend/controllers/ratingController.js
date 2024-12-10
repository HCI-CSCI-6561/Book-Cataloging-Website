const ratingService = require("../services/ratingService");

const createRating = async (req, res) => {
  try {
    const newRating = await ratingService.createRating(req.body);
    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRatings = async (req, res) => {
  try {
    const ratings = await ratingService.getRatings(req.query);
    res.status(200).json(ratings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRatingById = async (req, res) => {
  try {
    const rating = await ratingService.getRatingById(req.params.id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRating = async (req, res) => {
  try {
    const updatedRating = await ratingService.updateRating(req.params.id, req.body);
    if (!updatedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(updatedRating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRating = async (req, res) => {
  try {
    const deletedRating = await ratingService.deleteRating(req.params.id);
    if (!deletedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createRating,
  getRatings,
  getRatingById,
  updateRating,
  deleteRating,
};
