import express from 'express';
import { addComment, getComments, updateComment, deleteComment } from '../controllers/commentController.js';
import { authenticateToken, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, addComment);
router.get('/:recipeId', optionalAuth, getComments);
router.put('/:id', authenticateToken, updateComment);
router.delete('/:id', authenticateToken, deleteComment);

export default router;
