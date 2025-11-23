export type DietaryRestriction = 'vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free' | 'nut-free' | 'none';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Cuisine = 'italian' | 'mexican' | 'asian' | 'american' | 'mediterranean' | 'indian' | 'french' | 'other';

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cuisine: Cuisine;
  difficulty: Difficulty;
  cookingTime: number; // in minutes
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutritionalInfo: NutritionalInfo;
  dietaryRestrictions: DietaryRestriction[];
  rating: number;
  isFavorite: boolean;
}

export interface RecipeFilters {
  ingredients: string[];
  dietary: DietaryRestriction[];
  cuisine: Cuisine[];
  difficulty: Difficulty[];
  maxCookingTime: number;
  minServings?: number;
  searchQuery: string;
}
