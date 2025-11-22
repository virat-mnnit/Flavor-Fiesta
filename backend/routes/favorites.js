import express from 'express';
import { addFavorite, removeFavorite, listFavorites } from '../controllers/favoriteController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, addFavorite);
router.delete('/:recipeId', authenticateToken, removeFavorite);
router.get('/me', authenticateToken, listFavorites);

export default router;
