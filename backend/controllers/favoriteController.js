import Favorite from '../models/Favorite.js';
import { failure } from '../utils/response.js';
import mongoose from 'mongoose';


export const addFavorite = async (req, res, next) => {
  try {
    const { recipeId } = req.body;


    if (!recipeId) return failure(res, 'recipeId required', 400);

  
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ error: 'Invalid recipeId format' });
    }

    const recipeObjectId = new mongoose.Types.ObjectId(recipeId);
    const fav = new Favorite({ userId: req.user.id, recipeId: recipeObjectId });
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    // duplicate
    if (err.code === 11000) return res.status(409).json({ error: 'Already favorited' });
    next(err);
  }
};


export const removeFavorite = async (req, res, next) => {
  try {
    const { recipeId } = req.params;


    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      console.error('Invalid recipeId format:', recipeId);
      return failure(res, 'Invalid recipeId format', 400);
    }

    const recipeObjectId = new mongoose.Types.ObjectId(recipeId);
    await Favorite.deleteOne({ userId: req.user.id, recipeId: recipeObjectId });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};


export const listFavorites = async (req, res, next) => {
  try {
    const list = await Favorite.find({ userId: req.user.id }).populate('recipeId');
    res.json(list);
  } catch (err) {
    next(err);
  }
};
