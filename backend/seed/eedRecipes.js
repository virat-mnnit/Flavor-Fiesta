import mongoose from "mongoose";
import Recipe from "../models/Recipe.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();


const LOCAL_NO_IMAGE =
  "C:/Users/Dell/Desktop/Virat_recipe/frontend/src/assets/no-image-available.webp";


import { recipes } from "../../frontend/src/components/data/recipes_updated.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const MONGO_URL =
  process.env.MONGO_URL;

function transformRecipe(recipe) {
  return {
    title: recipe.title || "",
    description: recipe.description || "",
    image:
      recipe.image && !recipe.image.startsWith("/src")
        ? recipe.image
        : LOCAL_NO_IMAGE,

    cuisine: recipe.cuisine || "",
    difficulty: recipe.difficulty || "",
    cookingTime: recipe.cookingTime || 0,
    servings: recipe.servings || 1,

    ingredients: recipe.ingredients?.map((i) => i.toLowerCase().trim()) || [],
    instructions: recipe.instructions || [],

    nutritionalInfo: recipe.nutritionalInfo || {},

    dietaryRestrictions: (recipe.dietaryRestrictions || []).map((d) =>
      d.toLowerCase()
    ),

    rating: recipe.rating || 0,

   
    authorId: null,
  };
}

async function seedRecipes() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGO_URL);

    console.log("Connected!");

    await Recipe.deleteMany({});
    console.log("Old recipes cleared!");

    const formatted = recipes.map(transformRecipe);

    await Recipe.insertMany(formatted);

    console.log("🎉 All recipes inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ SEED ERROR:", err);
    process.exit(1);
  }
}

seedRecipes();
