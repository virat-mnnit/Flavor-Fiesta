import express from 'express';
import { saveRating, getRating } from '../controllers/ratingController.js';
import { authenticateToken, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, saveRating);
router.get('/:recipeId', optionalAuth, getRating);

export default router;
