import Rating from '../models/Rating.js';
import { failure } from '../utils/response.js';

// Add or update rating
export const saveRating = async (req, res, next) => {
  try {
    const { recipeId, rating } = req.body;
    if (!recipeId || typeof rating !== 'number') return failure(res, 'recipeId and rating required', 400);
    if (rating < 1 || rating > 5) return failure(res, 'rating must be between 1 and 5', 400);

    let r = await Rating.findOne({ userId: req.user.id, recipeId });
    if (r) {
      r.rating = rating;
      r.updatedAt = new Date();
      await r.save();
      return res.json(r);
    }
    r = new Rating({ userId: req.user.id, recipeId, rating });
    await r.save();
    res.status(201).json(r);
  } catch (err) {
    next(err);
  }
};

// Get average rating
export const getRating = async (req, res, next) => {
  try {
    const stats = await Rating.aggregate([
      { $match: { recipeId: req.params.recipeId } },
      { $group: { _id: '$recipeId', avgRating: { $avg: '$rating' }, count: { $sum: 1 } } }
    ]);
    res.json(stats[0] || { avgRating: 0, count: 0 });
  } catch (err) {
    next(err);
  }
};
