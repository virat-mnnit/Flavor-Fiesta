import Comment from '../models/Comment.js';
import { failure } from '../utils/response.js';

// Add comment
export const addComment = async (req, res, next) => {
  try {
    const { recipeId, comment } = req.body;
    if (!recipeId || !comment) return failure(res, 'recipeId and comment required', 400);
    const c = new Comment({ userId: req.user.id, recipeId, comment });
    await c.save();
    res.status(201).json(c);
  } catch (err) {
    next(err);
  }
};

// Get comments for recipe
export const getComments = async (req, res, next) => {
  try {
    const cs = await Comment.find({ recipeId: req.params.recipeId }).populate('userId', 'displayName');
    res.json(cs);
  } catch (err) {
    next(err);
  }
};

// Update comment (owner)
export const updateComment = async (req, res, next) => {
  try {
    const { comment } = req.body;
    const c = await Comment.findById(req.params.id);
    if (!c) return failure(res, 'Not found', 404);
    if (c.userId.toString() !== req.user.id) return failure(res, 'Forbidden', 403);
    c.comment = comment || c.comment;
    c.updatedAt = new Date();
    await c.save();
    res.json(c);
  } catch (err) {
    next(err);
  }
};

// Delete comment (owner)
export const deleteComment = async (req, res, next) => {
  try {
    const c = await Comment.findById(req.params.id);
    if (!c) return failure(res, 'Not found', 404);
    if (c.userId.toString() !== req.user.id) return failure(res, 'Forbidden', 403);
    await c.deleteOne();
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
