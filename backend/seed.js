import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Recipe from './models/Recipe.js';
import User from './models/User.js';
import Favorite from './models/Favorite.js';
import Rating from './models/Rating.js';
import Comment from './models/Comment.js';

dotenv.config();

const recipes = [
    {
        title: "Pizza Margherita",
        description: "Classic Neapolitan pizza with tomato, mozzarella and basil",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop",
        cuisine: "italian",
        difficulty: "easy",
        cookingTime: 45,
        servings: 2,
        ingredients: ["Flour", "Tomato", "Mozzarella", "Basil", "Olive oil"],
        instructions: ["Prepare dough", "Add toppings", "Bake at 450F for 15 mins"],
        nutritionalInfo: { calories: 502, protein: 28, carbs: 54, fat: 14, fiber: 12 },
        dietaryRestrictions: ["vegetarian"]
    },
    {
        title: "Sushi Platter",
        description: "Assorted fresh sushi with wasabi and ginger",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop",
        cuisine: "japanese",
        difficulty: "medium",
        cookingTime: 60,
        servings: 4,
        ingredients: ["Sushi rice", "Nori", "Fresh fish", "Vegetables", "Soy sauce"],
        instructions: ["Cook rice", "Prepare fillings", "Roll sushi", "Slice and serve"],
        nutritionalInfo: { calories: 422, protein: 39, carbs: 57, fat: 5, fiber: 9 },
        dietaryRestrictions: ["pescatarian"]
    },
    {
        title: "Tacos al Pastor",
        description: "Marinated pork tacos with pineapple",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000&auto=format&fit=crop",
        cuisine: "mexican",
        difficulty: "medium",
        cookingTime: 54,
        servings: 4,
        ingredients: ["Pork", "Pineapple", "Corn tortillas", "Onion", "Cilantro"],
        instructions: ["Marinate pork", "Grill pork and pineapple", "Assemble tacos"],
        nutritionalInfo: { calories: 487, protein: 25, carbs: 57, fat: 14, fiber: 2 },
        dietaryRestrictions: []
    },
    {
        title: "Peking Duck",
        description: "Crispy roasted duck served with pancakes",
        image: "https://images.unsplash.com/photo-1631515243349-e0603e48808b?q=80&w=1000&auto=format&fit=crop",
        cuisine: "chinese",
        difficulty: "hard",
        cookingTime: 120,
        servings: 4,
        ingredients: ["Duck", "Honey", "Soy sauce", "Five spice", "Pancakes"],
        instructions: ["Dry duck skin", "Glaze and roast", "Serve with pancakes"],
        nutritionalInfo: { calories: 623, protein: 35, carbs: 14, fat: 28, fiber: 1 },
        dietaryRestrictions: []
    },
    {
        title: "Pad Thai",
        description: "Stir-fried rice noodle dish with tamarind",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1000&auto=format&fit=crop",
        cuisine: "thai",
        difficulty: "medium",
        cookingTime: 32,
        servings: 3,
        ingredients: ["Rice noodles", "Shrimp", "Tofu", "Peanuts", "Bean sprouts"],
        instructions: ["Soak noodles", "Stir fry ingredients", "Toss with sauce"],
        nutritionalInfo: { calories: 657, protein: 27, carbs: 68, fat: 22, fiber: 6 },
        dietaryRestrictions: ["gluten-free"]
    },
    {
        title: "Ratatouille",
        description: "Vegetable stew from Provence",
        image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=1000&auto=format&fit=crop",
        cuisine: "french",
        difficulty: "medium",
        cookingTime: 71,
        servings: 4,
        ingredients: ["Eggplant", "Zucchini", "Tomato", "Bell pepper", "Herbs"],
        instructions: ["Slice vegetables", "Layer in dish", "Bake until tender"],
        nutritionalInfo: { calories: 237, protein: 5, carbs: 18, fat: 14, fiber: 10 },
        dietaryRestrictions: ["vegan", "vegetarian"]
    },
    {
        title: "Paella",
        description: "Saffron rice with seafood or meat",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1000&auto=format&fit=crop",
        cuisine: "spanish",
        difficulty: "hard",
        cookingTime: 60,
        servings: 6,
        ingredients: ["Bomba rice", "Saffron", "Seafood mix", "Chicken", "Peas"],
        instructions: ["Sauté meats", "Add rice and broth", "Simmer until absorbed"],
        nutritionalInfo: { calories: 486, protein: 23, carbs: 61, fat: 11, fiber: 2 },
        dietaryRestrictions: ["gluten-free"]
    },
    {
        title: "Butter Chicken",
        description: "Creamy tomato-based chicken curry",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000&auto=format&fit=crop",
        cuisine: "indian",
        difficulty: "medium",
        cookingTime: 45,
        servings: 4,
        ingredients: ["Chicken", "Yogurt", "Tomato puree", "Cream", "Spices"],
        instructions: ["Marinate chicken", "Cook sauce", "Simmer chicken in sauce"],
        nutritionalInfo: { calories: 569, protein: 25, carbs: 11, fat: 38, fiber: 2 },
        dietaryRestrictions: ["gluten-free"]
    },
    {
        title: "Pho",
        description: "Aromatic beef noodle soup",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1000&auto=format&fit=crop",
        cuisine: "vietnamese",
        difficulty: "hard",
        cookingTime: 180,
        servings: 6,
        ingredients: ["Beef bones", "Rice noodles", "Beef slices", "Herbs", "Spices"],
        instructions: ["Simmer broth", "Cook noodles", "Assemble bowls"],
        nutritionalInfo: { calories: 506, protein: 39, carbs: 56, fat: 17, fiber: 1 },
        dietaryRestrictions: ["gluten-free"]
    },
    {
        title: "Moussaka",
        description: "Layered eggplant and meat casserole",
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop",
        cuisine: "greek",
        difficulty: "hard",
        cookingTime: 90,
        servings: 8,
        ingredients: ["Eggplant", "Ground meat", "Potatoes", "Béchamel sauce"],
        instructions: ["Fry eggplant", "Cook meat sauce", "Layer and bake"],
        nutritionalInfo: { calories: 585, protein: 24, carbs: 29, fat: 37, fiber: 6 },
        dietaryRestrictions: []
    },
    {
        title: "Shakshuka",
        description: "Poached eggs in spicy tomato sauce",
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=1000&auto=format&fit=crop",
        cuisine: "middle eastern",
        difficulty: "easy",
        cookingTime: 25,
        servings: 4,
        ingredients: ["Eggs", "Tomatoes", "Peppers", "Onion", "Spices"],
        instructions: ["Make sauce", "Crack eggs into sauce", "Cover and cook"],
        nutritionalInfo: { calories: 237, protein: 16, carbs: 10, fat: 17, fiber: 4 },
        dietaryRestrictions: ["vegetarian", "gluten-free"]
    },
    {
        title: "Bibimbap",
        description: "Mixed rice bowl with vegetables and egg",
        image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1000&auto=format&fit=crop",
        cuisine: "korean",
        difficulty: "medium",
        cookingTime: 45,
        servings: 2,
        ingredients: ["Rice", "Beef", "Vegetables", "Egg", "Gochujang"],
        instructions: ["Cook rice", "Sauté vegetables", "Fry egg", "Assemble"],
        nutritionalInfo: { calories: 583, protein: 26, carbs: 64, fat: 15, fiber: 5 },
        dietaryRestrictions: []
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await Recipe.deleteMany({});
        await Favorite.deleteMany({});
        await Rating.deleteMany({});
        await Comment.deleteMany({});
        console.log('Cleared existing data');

        // Insert new recipes
        await Recipe.insertMany(recipes);
        console.log('Seeded recipes');

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
