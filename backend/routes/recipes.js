import express from 'express';
import {
  createRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipes
} from '../controllers/recipeController.js';
import { authenticateToken, optionalAuth } from '../middleware/auth.js';

import multer from 'multer';
import { analyzeImage } from '../controllers/analysisController.js';

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();
router.post('/analyze-image', upload.single('image'), analyzeImage);

router.get("/search", searchRecipes);
router.post('/', authenticateToken, createRecipe);
router.get('/', optionalAuth, getAllRecipes);
router.get('/:id', optionalAuth, getRecipe);
router.put('/:id', authenticateToken, updateRecipe);
router.delete('/:id', authenticateToken, deleteRecipe);





export default router;
