import Recipe from '../models/Recipe.js';
import { failure } from '../utils/response.js';

export const createRecipe = async (req, res, next) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      image,
      cuisine,
      difficulty,
      cookingTime,
      servings,
      nutritionalInfo,
      dietaryRestrictions,
      rating
    } = req.body;

    if (!title) return failure(res, 'Title required', 400);

    const recipe = new Recipe({
      title,
      description,
      ingredients: Array.isArray(ingredients) ? ingredients : [],
      instructions: Array.isArray(instructions) ? instructions : [],
      image: image || '',
      cuisine: cuisine || '',
      difficulty: difficulty || '',
      cookingTime: cookingTime || 0,
      servings: servings || 1,
      nutritionalInfo: nutritionalInfo || {},
      dietaryRestrictions: dietaryRestrictions || [],
      rating: rating || 0,
      authorId: req.user ? req.user.id : null
    });

    await recipe.save();
    res.status(201).json(recipe);

  } catch (err) {
    next(err);
  }
};


const populateFavorites = async (recipes, userId) => {
  if (!userId) return recipes;

  const favorites = await import('../models/Favorite.js').then(m => m.default.find({ userId }).select('recipeId'));
  const favoriteIds = new Set(favorites.map(f => f.recipeId.toString()));

  return recipes.map(r => {
    const recipeObj = r.toJSON ? r.toJSON() : r;
    return { ...recipeObj, isFavorite: favoriteIds.has(recipeObj.id || recipeObj._id.toString()) };
  });
};


export const searchRecipes = async (req, res) => {
  try {
    const { ingredients, cuisine, difficulty, dietary } = req.query;
    const query = {};

    
    if (ingredients) {
      const ingList = ingredients
        .split(',')
        .map(i => i.trim().toLowerCase());
      query.ingredients = { $in: ingList };
    }

    const escapeRegex = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    
    if (cuisine) query.cuisine = new RegExp(`^${escapeRegex(cuisine)}$`, 'i');
    if (difficulty) query.difficulty = new RegExp(`^${escapeRegex(difficulty)}$`, 'i');

  
    if (dietary) {
      const dList = dietary.split(',').map(d => d.trim().toLowerCase());
      query.dietaryRestrictions = { $in: dList };
    }

    let results = await Recipe.find(query).limit(200);


    if (req.user) {
      results = await populateFavorites(results, req.user.id);
    }

    return res.json({ recipes: results });

  } catch (err) {
    console.error('Search Error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const getAllRecipes = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page || '1'));
    const limit = Math.min(50, parseInt(req.query.limit || '20'));
    const skip = (page - 1) * limit;

    const total = await Recipe.countDocuments();
    let recipes = await Recipe.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('authorId', 'displayName');

   
    if (req.user) {
      recipes = await populateFavorites(recipes, req.user.id);
    }

    res.json({ total, page, limit, recipes });
  } catch (err) {
    next(err);
  }
};


export const getRecipe = async (req, res, next) => {
  try {
    let recipe = await Recipe.findById(req.params.id)
      .populate('authorId', 'displayName');

    if (!recipe) return failure(res, 'Not found', 404);

    
    if (req.user) {
      const [updatedRecipe] = await populateFavorites([recipe], req.user.id);
      recipe = updatedRecipe;
    }

    res.json(recipe);
  } catch (err) {
    next(err);
  }
};


export const updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return failure(res, 'Not found', 404);

   
    if (recipe.authorId && recipe.authorId.toString() !== req.user.id)
      return failure(res, 'Forbidden', 403);

    const updatedData = {
      ...req.body,
      ingredients: Array.isArray(req.body.ingredients)
        ? req.body.ingredients
        : recipe.ingredients,
      instructions: Array.isArray(req.body.instructions)
        ? req.body.instructions
        : recipe.instructions
    };

    Object.assign(recipe, updatedData);
    await recipe.save();

    res.json(recipe);
  } catch (err) {
    next(err);
  }
};


export const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return failure(res, 'Not found', 404);

    if (recipe.authorId && recipe.authorId.toString() !== req.user.id)
      return failure(res, 'Forbidden', 403);

    await recipe.deleteOne();
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
