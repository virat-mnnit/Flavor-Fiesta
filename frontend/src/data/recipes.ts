import { Recipe } from '@/types/recipe';

export const recipes = [
  {
    "id": "1",
    "title": "Pizza Margherita",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "https://example.com/images/Pizza_Margherita.jpg",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 84,
    "servings": 2,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 502,
      "protein": 28,
      "carbs": 54,
      "fat": 14,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "2",
    "title": "Sushi",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 10,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 422,
      "protein": 39,
      "carbs": 57,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "3",
    "title": "Tacos al Pastor",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 54,
    "servings": 4,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 487,
      "protein": 7,
      "carbs": 57,
      "fat": 14,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "4",
    "title": "Peking Duck",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 64,
    "servings": 4,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 623,
      "protein": 7,
      "carbs": 14,
      "fat": 28,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "5",
    "title": "Pad Thai",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 32,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 27,
      "carbs": 28,
      "fat": 22,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "6",
    "title": "Ratatouille",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 71,
    "servings": 4,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 637,
      "protein": 19,
      "carbs": 68,
      "fat": 14,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "7",
    "title": "Paella",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 54,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 286,
      "protein": 23,
      "carbs": 11,
      "fat": 11,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "8",
    "title": "Feijoada",
    "description": "Black bean and pork stew",
    "image": "https://example.com/images/Feijoada.jpg",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 89,
    "servings": 3,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 607,
      "protein": 11,
      "carbs": 17,
      "fat": 13,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "9",
    "title": "Borscht",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "hard",
    "cookingTime": 35,
    "servings": 5,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 586,
      "protein": 25,
      "carbs": 73,
      "fat": 7,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "10",
    "title": "Butter Chicken",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 32,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 269,
      "protein": 25,
      "carbs": 11,
      "fat": 28,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "11",
    "title": "Pho",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "easy",
    "cookingTime": 39,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 506,
      "protein": 39,
      "carbs": 16,
      "fat": 17,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "12",
    "title": "Moussaka",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 51,
    "servings": 3,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": 34,
      "carbs": 29,
      "fat": 17,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "13",
    "title": "Goulash",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 58,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 416,
      "protein": 18,
      "carbs": 79,
      "fat": 11,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "14",
    "title": "Kimchi",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 5,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 423,
      "protein": 16,
      "carbs": 18,
      "fat": 23,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "15",
    "title": "Shakshuka",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "https://example.com/images/Shakshuka.jpg",
    "cuisine": "tunisia",
    "difficulty": "hard",
    "cookingTime": 18,
    "servings": 6,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 237,
      "protein": 16,
      "carbs": 10,
      "fat": 17,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "16",
    "title": "Jollof Rice",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "medium",
    "cookingTime": 67,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 485,
      "protein": 17,
      "carbs": 39,
      "fat": 27,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "17",
    "title": "Ceviche",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 89,
    "servings": 3,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 536,
      "protein": 10,
      "carbs": 27,
      "fat": 5,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "18",
    "title": "Sauerbraten",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 59,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 204,
      "protein": 5,
      "carbs": 52,
      "fat": 7,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "19",
    "title": "Bibimbap",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 583,
      "protein": 36,
      "carbs": 24,
      "fat": 15,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "20",
    "title": "Laksa",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 43,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 391,
      "protein": 13,
      "carbs": 25,
      "fat": 16,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "21",
    "title": "Poutine",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "medium",
    "cookingTime": 34,
    "servings": 4,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 682,
      "protein": 18,
      "carbs": 26,
      "fat": 11,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "22",
    "title": "Pierogi",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "https://example.com/images/Pierogi.jpg",
    "cuisine": "poland",
    "difficulty": "medium",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 614,
      "protein": 19,
      "carbs": 73,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "23",
    "title": "Tapas - Patatas Bravas",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 681,
      "protein": 17,
      "carbs": 63,
      "fat": 14,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "24",
    "title": "Biryani",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 39,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 370,
      "protein": 36,
      "carbs": 53,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "25",
    "title": "Fufu & Egusi",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 5,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 329,
      "protein": 26,
      "carbs": 47,
      "fat": 8,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "26",
    "title": "Souvlaki",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 3,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 410,
      "protein": 9,
      "carbs": 11,
      "fat": 9,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "27",
    "title": "Empanadas",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "easy",
    "cookingTime": 33,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 543,
      "protein": 30,
      "carbs": 36,
      "fat": 23,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "28",
    "title": "Rendang",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 63,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 536,
      "protein": 5,
      "carbs": 78,
      "fat": 16,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "29",
    "title": "Baklava",
    "description": "Sweet layered pastry with nuts",
    "image": "https://example.com/images/Baklava.jpg",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 3,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 447,
      "protein": 26,
      "carbs": 69,
      "fat": 20,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "30",
    "title": "Arepas",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "medium",
    "cookingTime": 81,
    "servings": 4,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 349,
      "protein": 16,
      "carbs": 74,
      "fat": 26,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "31",
    "title": "Tamales",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 58,
    "servings": 5,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 336,
      "protein": 29,
      "carbs": 64,
      "fat": 10,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "32",
    "title": "Okonomiyaki",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 189,
      "protein": 8,
      "carbs": 55,
      "fat": 15,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "33",
    "title": "Congee",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 641,
      "protein": 36,
      "carbs": 36,
      "fat": 23,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "34",
    "title": "Couscous",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 56,
    "servings": 6,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 335,
      "protein": 15,
      "carbs": 60,
      "fat": 7,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "35",
    "title": "Chicken Adobo",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 55,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 324,
      "protein": 25,
      "carbs": 37,
      "fat": 7,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "36",
    "title": "Fondue",
    "description": "Melted cheese dip",
    "image": "https://example.com/images/Fondue.jpg",
    "cuisine": "switzerland",
    "difficulty": "medium",
    "cookingTime": 46,
    "servings": 5,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 224,
      "protein": 39,
      "carbs": 70,
      "fat": 27,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "37",
    "title": "Churrasco",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 55,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 666,
      "protein": 18,
      "carbs": 67,
      "fat": 15,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "38",
    "title": "Goloka (Ilokano)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 76,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 216,
      "protein": 9,
      "carbs": 46,
      "fat": 22,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "39",
    "title": "Khachapuri",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 470,
      "protein": 7,
      "carbs": 48,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "40",
    "title": "Bobotie",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 196,
      "protein": 8,
      "carbs": 18,
      "fat": 29,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "41",
    "title": "Chole Bhature",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 57,
    "servings": 2,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 286,
      "protein": 27,
      "carbs": 76,
      "fat": 22,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "42",
    "title": "Okro Soup",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 32,
    "servings": 6,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 522,
      "protein": 13,
      "carbs": 65,
      "fat": 6,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "43",
    "title": "Katsu Curry",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "https://example.com/images/Katsu_Curry.jpg",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 42,
    "servings": 2,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 621,
      "protein": 20,
      "carbs": 78,
      "fat": 12,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "44",
    "title": "Sancocho",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "hard",
    "cookingTime": 79,
    "servings": 3,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 585,
      "protein": 8,
      "carbs": 13,
      "fat": 27,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "45",
    "title": "Tteokbokki",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 90,
    "servings": 5,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 655,
      "protein": 40,
      "carbs": 48,
      "fat": 16,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "46",
    "title": "Maki Ramen",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 31,
    "servings": 4,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 599,
      "protein": 8,
      "carbs": 13,
      "fat": 6,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "47",
    "title": "Kebabs - D\u00f6ner",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 23,
    "servings": 3,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 429,
      "protein": 8,
      "carbs": 22,
      "fat": 14,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "48",
    "title": "Cassoulet",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 2,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 584,
      "protein": 34,
      "carbs": 57,
      "fat": 25,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "49",
    "title": "Pavlova",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 5,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 661,
      "protein": 30,
      "carbs": 15,
      "fat": 5,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "50",
    "title": "Currywurst",
    "description": "Sliced sausage with curry ketchup",
    "image": "https://example.com/images/Currywurst.jpg",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 68,
    "servings": 2,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 695,
      "protein": 30,
      "carbs": 70,
      "fat": 9,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "51",
    "title": "Lamb Tagine",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 57,
    "servings": 2,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 238,
      "protein": 39,
      "carbs": 47,
      "fat": 10,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "52",
    "title": "Okonomiyaki",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 539,
      "protein": 30,
      "carbs": 43,
      "fat": 5,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "53",
    "title": "Sushi Rolls - California Roll",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 70,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 668,
      "protein": 10,
      "carbs": 28,
      "fat": 27,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "54",
    "title": "Kulfi",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 21,
    "servings": 4,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 632,
      "protein": 19,
      "carbs": 77,
      "fat": 28,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "55",
    "title": "Anticuchos",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 15,
    "servings": 2,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 224,
      "protein": 5,
      "carbs": 49,
      "fat": 13,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "56",
    "title": "Hummus",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 6,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 349,
      "protein": 20,
      "carbs": 26,
      "fat": 8,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "57",
    "title": "Fajitas",
    "description": "Sizzling grilled meat with peppers",
    "image": "https://example.com/images/Fajitas.jpg",
    "cuisine": "mexico/usa",
    "difficulty": "medium",
    "cookingTime": 20,
    "servings": 5,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 445,
      "protein": 13,
      "carbs": 19,
      "fat": 6,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "58",
    "title": "Pizza Napoletana",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 585,
      "protein": 22,
      "carbs": 55,
      "fat": 17,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "59",
    "title": "Sm\u00f8rrebr\u00f8d",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 6,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 231,
      "protein": 32,
      "carbs": 50,
      "fat": 17,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "60",
    "title": "Salm\u00f3n a la Plancha",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 64,
    "servings": 3,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 28,
      "carbs": 70,
      "fat": 20,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "61",
    "title": "Doro Wat",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "easy",
    "cookingTime": 65,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 259,
      "protein": 10,
      "carbs": 16,
      "fat": 18,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "62",
    "title": "Aloo Gobi",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 66,
    "servings": 2,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 336,
      "protein": 33,
      "carbs": 73,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "63",
    "title": "Paneer Tikka",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 88,
    "servings": 6,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 414,
      "protein": 25,
      "carbs": 34,
      "fat": 6,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "64",
    "title": "Ramen - Tonkotsu",
    "description": "Rich pork bone broth ramen",
    "image": "https://example.com/images/Ramen_-_Tonkotsu.jpg",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 45,
    "servings": 6,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 439,
      "protein": 17,
      "carbs": 35,
      "fat": 20,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "65",
    "title": "Croque Monsieur",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 78,
    "servings": 6,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 257,
      "protein": 34,
      "carbs": 22,
      "fat": 7,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "66",
    "title": "Gado-Gado",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 71,
    "servings": 4,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 668,
      "protein": 32,
      "carbs": 31,
      "fat": 12,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "67",
    "title": "Cottage Pie",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 54,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 595,
      "protein": 31,
      "carbs": 60,
      "fat": 28,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "68",
    "title": "Khao Soi",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 694,
      "protein": 5,
      "carbs": 24,
      "fat": 25,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "69",
    "title": "Bangers and Mash",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 5,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 513,
      "protein": 38,
      "carbs": 44,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "70",
    "title": "Lahmacun",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 42,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 514,
      "protein": 20,
      "carbs": 34,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "71",
    "title": "Chimichurri Steak",
    "description": "Grilled steak with herb sauce",
    "image": "https://example.com/images/Chimichurri_Steak.jpg",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 241,
      "protein": 27,
      "carbs": 33,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "72",
    "title": "P\u00e3o de Queijo",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 3,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 482,
      "protein": 20,
      "carbs": 30,
      "fat": 7,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "73",
    "title": "Samosa",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 72,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 362,
      "protein": 26,
      "carbs": 49,
      "fat": 24,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "74",
    "title": "Pizza Margherita (Regional)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 31,
    "servings": 3,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 644,
      "protein": 15,
      "carbs": 39,
      "fat": 8,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "75",
    "title": "Sushi (Home-style)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 31,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 196,
      "protein": 18,
      "carbs": 51,
      "fat": 7,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "76",
    "title": "Tacos al Pastor (Authentic)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 54,
    "servings": 4,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 593,
      "protein": 24,
      "carbs": 76,
      "fat": 15,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "77",
    "title": "Peking Duck (Slow-cooked)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 20,
    "servings": 4,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 231,
      "protein": 5,
      "carbs": 12,
      "fat": 16,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "78",
    "title": "Pad Thai (Grilled)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "https://example.com/images/Pad_Thai_(Grilled).jpg",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 39,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 370,
      "protein": 30,
      "carbs": 40,
      "fat": 23,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "79",
    "title": "Ratatouille (Spiced)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 18,
    "servings": 4,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 496,
      "protein": 35,
      "carbs": 16,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "80",
    "title": "Paella (Heritage)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 44,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 341,
      "protein": 16,
      "carbs": 47,
      "fat": 14,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "81",
    "title": "Feijoada (Classic)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 87,
    "servings": 6,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 396,
      "protein": 36,
      "carbs": 37,
      "fat": 28,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "82",
    "title": "Borscht (Traditional)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 85,
    "servings": 2,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 37,
      "carbs": 13,
      "fat": 6,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "83",
    "title": "Butter Chicken (Street Style)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 17,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 346,
      "protein": 29,
      "carbs": 58,
      "fat": 8,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "84",
    "title": "Pho (Regional)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 76,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 661,
      "protein": 14,
      "carbs": 18,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "85",
    "title": "Moussaka (Home-style)",
    "description": "Layered eggplant and meat casserole",
    "image": "https://example.com/images/Moussaka_(Home-style).jpg",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 17,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 376,
      "protein": 22,
      "carbs": 73,
      "fat": 12,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "86",
    "title": "Goulash (Authentic)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "hard",
    "cookingTime": 45,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 627,
      "protein": 9,
      "carbs": 28,
      "fat": 22,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "87",
    "title": "Kimchi (Slow-cooked)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 47,
    "servings": 5,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 545,
      "protein": 19,
      "carbs": 75,
      "fat": 27,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "88",
    "title": "Shakshuka (Grilled)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 30,
    "servings": 3,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 297,
      "protein": 12,
      "carbs": 66,
      "fat": 23,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "89",
    "title": "Jollof Rice (Spiced)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 192,
      "protein": 20,
      "carbs": 44,
      "fat": 7,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "90",
    "title": "Ceviche (Heritage)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 675,
      "protein": 8,
      "carbs": 78,
      "fat": 10,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "91",
    "title": "Sauerbraten (Classic)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 59,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 17,
      "carbs": 40,
      "fat": 5,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "92",
    "title": "Bibimbap (Traditional)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "https://example.com/images/Bibimbap_(Traditional).jpg",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 82,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 570,
      "protein": 15,
      "carbs": 34,
      "fat": 25,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "93",
    "title": "Laksa (Street Style)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "medium",
    "cookingTime": 19,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 560,
      "protein": 37,
      "carbs": 70,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "94",
    "title": "Poutine (Regional)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 23,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 610,
      "protein": 18,
      "carbs": 73,
      "fat": 15,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "95",
    "title": "Pierogi (Home-style)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "hard",
    "cookingTime": 38,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 323,
      "protein": 5,
      "carbs": 70,
      "fat": 13,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "96",
    "title": "Tapas - Patatas Bravas (Authentic)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 17,
    "servings": 4,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 554,
      "protein": 20,
      "carbs": 17,
      "fat": 14,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "97",
    "title": "Biryani (Slow-cooked)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 74,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 619,
      "protein": 15,
      "carbs": 34,
      "fat": 23,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "98",
    "title": "Fufu & Egusi (Grilled)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "hard",
    "cookingTime": 72,
    "servings": 4,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 240,
      "protein": 10,
      "carbs": 19,
      "fat": 24,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "99",
    "title": "Souvlaki (Spiced)",
    "description": "Grilled skewered meat",
    "image": "https://example.com/images/Souvlaki_(Spiced).jpg",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 88,
    "servings": 3,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 193,
      "protein": 8,
      "carbs": 32,
      "fat": 16,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "100",
    "title": "Empanadas (Heritage)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 35,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 292,
      "protein": 32,
      "carbs": 75,
      "fat": 15,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "101",
    "title": "Rendang (Classic)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 10,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 653,
      "protein": 36,
      "carbs": 65,
      "fat": 30,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "102",
    "title": "Baklava (Traditional)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 50,
    "servings": 3,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 660,
      "protein": 35,
      "carbs": 33,
      "fat": 19,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "103",
    "title": "Arepas (Street Style)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 53,
    "servings": 4,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 535,
      "protein": 34,
      "carbs": 71,
      "fat": 29,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "104",
    "title": "Tamales (Regional)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 69,
    "servings": 3,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 647,
      "protein": 35,
      "carbs": 25,
      "fat": 7,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "105",
    "title": "Okonomiyaki (Home-style)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 679,
      "protein": 36,
      "carbs": 36,
      "fat": 25,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "106",
    "title": "Congee (Authentic)",
    "description": "Rice porridge often with savory toppings",
    "image": "https://example.com/images/Congee_(Authentic).jpg",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 24,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 689,
      "protein": 31,
      "carbs": 10,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "107",
    "title": "Couscous (Slow-cooked)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 3,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 337,
      "protein": 7,
      "carbs": 16,
      "fat": 20,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "108",
    "title": "Chicken Adobo (Grilled)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 52,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 606,
      "protein": 29,
      "carbs": 65,
      "fat": 23,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "109",
    "title": "Fondue (Spiced)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 508,
      "protein": 5,
      "carbs": 69,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "110",
    "title": "Churrasco (Heritage)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 87,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 668,
      "protein": 19,
      "carbs": 73,
      "fat": 23,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "111",
    "title": "Goloka (Ilokano) (Classic)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 49,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 280,
      "protein": 12,
      "carbs": 78,
      "fat": 27,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "112",
    "title": "Khachapuri (Traditional)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 33,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 347,
      "protein": 11,
      "carbs": 46,
      "fat": 10,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "113",
    "title": "Bobotie (Street Style)",
    "description": "Curried mince baked with egg custard",
    "image": "https://example.com/images/Bobotie_(Street_Style).jpg",
    "cuisine": "south africa",
    "difficulty": "easy",
    "cookingTime": 67,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 370,
      "protein": 26,
      "carbs": 13,
      "fat": 18,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "114",
    "title": "Chole Bhature (Regional)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 5,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 622,
      "protein": 6,
      "carbs": 22,
      "fat": 19,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "115",
    "title": "Okro Soup (Home-style)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "medium",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 635,
      "protein": 32,
      "carbs": 10,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "116",
    "title": "Katsu Curry (Authentic)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 31,
    "servings": 6,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 504,
      "protein": 5,
      "carbs": 50,
      "fat": 20,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "117",
    "title": "Sancocho (Slow-cooked)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "hard",
    "cookingTime": 83,
    "servings": 2,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 199,
      "protein": 10,
      "carbs": 65,
      "fat": 25,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "118",
    "title": "Tteokbokki (Grilled)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 58,
    "servings": 2,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 183,
      "protein": 31,
      "carbs": 75,
      "fat": 20,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "119",
    "title": "Maki Ramen (Spiced)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 3,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 430,
      "protein": 22,
      "carbs": 73,
      "fat": 21,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "120",
    "title": "Kebabs - D\u00f6ner (Heritage)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "https://example.com/images/Kebabs_-_D\u00f6ner_(Heritage).jpg",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 5,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 598,
      "protein": 31,
      "carbs": 18,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "121",
    "title": "Cassoulet (Classic)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 45,
    "servings": 3,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 462,
      "protein": 6,
      "carbs": 37,
      "fat": 19,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "122",
    "title": "Pavlova (Traditional)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "hard",
    "cookingTime": 32,
    "servings": 6,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 307,
      "protein": 7,
      "carbs": 25,
      "fat": 27,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "123",
    "title": "Currywurst (Street Style)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 85,
    "servings": 2,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 13,
      "carbs": 33,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "124",
    "title": "Lamb Tagine (Regional)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 2,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 577,
      "protein": 5,
      "carbs": 74,
      "fat": 7,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "125",
    "title": "Okonomiyaki (Home-style)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 370,
      "protein": 9,
      "carbs": 70,
      "fat": 13,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "126",
    "title": "Sushi Rolls - California Roll (Authentic)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "hard",
    "cookingTime": 40,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": 7,
      "carbs": 59,
      "fat": 23,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "127",
    "title": "Kulfi (Slow-cooked)",
    "description": "Dense ice cream dessert",
    "image": "https://example.com/images/Kulfi_(Slow-cooked).jpg",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 42,
    "servings": 3,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 543,
      "protein": 18,
      "carbs": 75,
      "fat": 13,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "128",
    "title": "Anticuchos (Grilled)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 4,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 637,
      "protein": 23,
      "carbs": 78,
      "fat": 27,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "129",
    "title": "Hummus (Spiced)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "easy",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 212,
      "protein": 27,
      "carbs": 32,
      "fat": 13,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "130",
    "title": "Fajitas (Heritage)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "medium",
    "cookingTime": 81,
    "servings": 3,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 684,
      "protein": 29,
      "carbs": 12,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "131",
    "title": "Pizza Napoletana (Classic)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 30,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 378,
      "protein": 34,
      "carbs": 40,
      "fat": 16,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "132",
    "title": "Sm\u00f8rrebr\u00f8d (Traditional)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "hard",
    "cookingTime": 35,
    "servings": 2,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 632,
      "protein": 37,
      "carbs": 48,
      "fat": 26,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "133",
    "title": "Salm\u00f3n a la Plancha (Street Style)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 38,
    "servings": 3,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 515,
      "protein": 14,
      "carbs": 16,
      "fat": 24,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "134",
    "title": "Doro Wat (Regional)",
    "description": "Spicy chicken stew with berbere",
    "image": "https://example.com/images/Doro_Wat_(Regional).jpg",
    "cuisine": "ethiopia",
    "difficulty": "medium",
    "cookingTime": 58,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 565,
      "protein": 15,
      "carbs": 43,
      "fat": 11,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "135",
    "title": "Aloo Gobi (Home-style)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 48,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 563,
      "protein": 32,
      "carbs": 10,
      "fat": 29,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "136",
    "title": "Paneer Tikka (Authentic)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 88,
    "servings": 5,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 447,
      "protein": 7,
      "carbs": 77,
      "fat": 23,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "137",
    "title": "Ramen - Tonkotsu (Slow-cooked)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 90,
    "servings": 4,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 381,
      "protein": 38,
      "carbs": 32,
      "fat": 26,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "138",
    "title": "Croque Monsieur (Grilled)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 12,
    "servings": 2,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 180,
      "protein": 11,
      "carbs": 15,
      "fat": 7,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "139",
    "title": "Gado-Gado (Spiced)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 64,
    "servings": 6,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 421,
      "protein": 38,
      "carbs": 70,
      "fat": 22,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "140",
    "title": "Cottage Pie (Heritage)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 40,
    "servings": 2,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 257,
      "protein": 10,
      "carbs": 41,
      "fat": 8,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "141",
    "title": "Khao Soi (Classic)",
    "description": "Curry noodle soup from the north",
    "image": "https://example.com/images/Khao_Soi_(Classic).jpg",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 3,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 539,
      "protein": 23,
      "carbs": 43,
      "fat": 10,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "142",
    "title": "Bangers and Mash (Traditional)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 69,
    "servings": 4,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 338,
      "protein": 37,
      "carbs": 49,
      "fat": 12,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "143",
    "title": "Lahmacun (Street Style)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 61,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 184,
      "protein": 24,
      "carbs": 27,
      "fat": 20,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "144",
    "title": "Chimichurri Steak (Regional)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "easy",
    "cookingTime": 61,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 374,
      "protein": 27,
      "carbs": 45,
      "fat": 10,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "145",
    "title": "P\u00e3o de Queijo (Home-style)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 4,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 486,
      "protein": 27,
      "carbs": 80,
      "fat": 11,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "146",
    "title": "Samosa (Authentic)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 37,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 428,
      "protein": 10,
      "carbs": 10,
      "fat": 8,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "147",
    "title": "Pizza Margherita (Slow-cooked)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 303,
      "protein": 36,
      "carbs": 65,
      "fat": 5,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "148",
    "title": "Sushi (Grilled)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "https://example.com/images/Sushi_(Grilled).jpg",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 498,
      "protein": 14,
      "carbs": 58,
      "fat": 10,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "149",
    "title": "Tacos al Pastor (Spiced)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 31,
    "servings": 3,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 594,
      "protein": 32,
      "carbs": 28,
      "fat": 28,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "150",
    "title": "Peking Duck (Heritage)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 79,
    "servings": 4,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 190,
      "protein": 15,
      "carbs": 49,
      "fat": 20,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "151",
    "title": "Pad Thai (Classic)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "medium",
    "cookingTime": 20,
    "servings": 5,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 653,
      "protein": 33,
      "carbs": 49,
      "fat": 21,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "152",
    "title": "Ratatouille (Traditional)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 526,
      "protein": 21,
      "carbs": 13,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "153",
    "title": "Paella (Street Style)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 552,
      "protein": 7,
      "carbs": 70,
      "fat": 24,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "154",
    "title": "Feijoada (Regional)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 4,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 508,
      "protein": 17,
      "carbs": 80,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "155",
    "title": "Borscht (Home-style)",
    "description": "Beetroot soup often served with sour cream",
    "image": "https://example.com/images/Borscht_(Home-style).jpg",
    "cuisine": "ukraine",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 4,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 528,
      "protein": 19,
      "carbs": 78,
      "fat": 23,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "156",
    "title": "Butter Chicken (Authentic)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 399,
      "protein": 23,
      "carbs": 48,
      "fat": 19,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "157",
    "title": "Pho (Slow-cooked)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "easy",
    "cookingTime": 17,
    "servings": 5,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 575,
      "protein": 13,
      "carbs": 53,
      "fat": 13,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "158",
    "title": "Moussaka (Grilled)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 18,
    "servings": 3,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 603,
      "protein": 14,
      "carbs": 74,
      "fat": 17,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "159",
    "title": "Goulash (Spiced)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 227,
      "protein": 26,
      "carbs": 38,
      "fat": 17,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "160",
    "title": "Kimchi (Heritage)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 23,
    "servings": 6,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 686,
      "protein": 36,
      "carbs": 43,
      "fat": 19,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "161",
    "title": "Shakshuka (Classic)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "hard",
    "cookingTime": 80,
    "servings": 2,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 559,
      "protein": 9,
      "carbs": 80,
      "fat": 7,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "162",
    "title": "Jollof Rice (Traditional)",
    "description": "One-pot tomato rice with spices",
    "image": "https://example.com/images/Jollof_Rice_(Traditional).jpg",
    "cuisine": "nigeria",
    "difficulty": "hard",
    "cookingTime": 81,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 218,
      "protein": 13,
      "carbs": 80,
      "fat": 24,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "163",
    "title": "Ceviche (Street Style)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 90,
    "servings": 2,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 220,
      "protein": 28,
      "carbs": 42,
      "fat": 19,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "164",
    "title": "Sauerbraten (Regional)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 425,
      "protein": 16,
      "carbs": 56,
      "fat": 20,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "165",
    "title": "Bibimbap (Home-style)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 51,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 337,
      "protein": 13,
      "carbs": 80,
      "fat": 30,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "166",
    "title": "Laksa (Authentic)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 23,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 279,
      "protein": 12,
      "carbs": 20,
      "fat": 18,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "167",
    "title": "Poutine (Slow-cooked)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 664,
      "protein": 23,
      "carbs": 64,
      "fat": 19,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "168",
    "title": "Pierogi (Grilled)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 565,
      "protein": 13,
      "carbs": 32,
      "fat": 14,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "169",
    "title": "Tapas - Patatas Bravas (Spiced)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "https://example.com/images/Tapas_-_Patatas_Bravas_(Spiced).jpg",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 29,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 37,
      "carbs": 18,
      "fat": 20,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "170",
    "title": "Biryani (Heritage)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 63,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 566,
      "protein": 13,
      "carbs": 61,
      "fat": 17,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "171",
    "title": "Fufu & Egusi (Classic)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "hard",
    "cookingTime": 10,
    "servings": 6,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 262,
      "protein": 34,
      "carbs": 51,
      "fat": 20,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "172",
    "title": "Souvlaki (Traditional)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 17,
    "servings": 4,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 220,
      "protein": 11,
      "carbs": 61,
      "fat": 30,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "173",
    "title": "Empanadas (Street Style)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 34,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 393,
      "protein": 18,
      "carbs": 75,
      "fat": 19,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "174",
    "title": "Rendang (Regional)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 432,
      "protein": 39,
      "carbs": 63,
      "fat": 14,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "175",
    "title": "Baklava (Home-style)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 73,
    "servings": 5,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 503,
      "protein": 24,
      "carbs": 73,
      "fat": 6,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "176",
    "title": "Arepas (Authentic)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "https://example.com/images/Arepas_(Authentic).jpg",
    "cuisine": "venezuela",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 446,
      "protein": 39,
      "carbs": 41,
      "fat": 18,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "177",
    "title": "Tamales (Slow-cooked)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 82,
    "servings": 4,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 604,
      "protein": 32,
      "carbs": 46,
      "fat": 9,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "178",
    "title": "Okonomiyaki (Grilled)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 58,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 471,
      "protein": 17,
      "carbs": 35,
      "fat": 20,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "179",
    "title": "Congee (Spiced)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 79,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 323,
      "protein": 13,
      "carbs": 59,
      "fat": 6,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "180",
    "title": "Couscous (Heritage)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 17,
    "servings": 3,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 291,
      "protein": 17,
      "carbs": 36,
      "fat": 29,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "181",
    "title": "Chicken Adobo (Classic)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 27,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 514,
      "protein": 35,
      "carbs": 61,
      "fat": 24,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "182",
    "title": "Fondue (Traditional)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "medium",
    "cookingTime": 65,
    "servings": 3,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 521,
      "protein": 18,
      "carbs": 30,
      "fat": 7,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "183",
    "title": "Churrasco (Street Style)",
    "description": "Grilled steak often with chimichurri",
    "image": "https://example.com/images/Churrasco_(Street_Style).jpg",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 10,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 649,
      "protein": 19,
      "carbs": 34,
      "fat": 5,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "184",
    "title": "Goloka (Ilokano) (Regional)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 61,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 189,
      "protein": 7,
      "carbs": 16,
      "fat": 13,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "185",
    "title": "Khachapuri (Home-style)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "hard",
    "cookingTime": 42,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 537,
      "protein": 18,
      "carbs": 66,
      "fat": 29,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "186",
    "title": "Bobotie (Authentic)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 4,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 588,
      "protein": 8,
      "carbs": 49,
      "fat": 5,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "187",
    "title": "Chole Bhature (Slow-cooked)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 56,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 544,
      "protein": 8,
      "carbs": 16,
      "fat": 24,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "188",
    "title": "Okro Soup (Grilled)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 5,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 544,
      "protein": 16,
      "carbs": 64,
      "fat": 7,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "189",
    "title": "Katsu Curry (Spiced)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 5,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 364,
      "protein": 14,
      "carbs": 13,
      "fat": 21,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "190",
    "title": "Sancocho (Heritage)",
    "description": "Hearty meat & root stew",
    "image": "https://example.com/images/Sancocho_(Heritage).jpg",
    "cuisine": "dominican republic",
    "difficulty": "hard",
    "cookingTime": 88,
    "servings": 2,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 475,
      "protein": 14,
      "carbs": 76,
      "fat": 12,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "191",
    "title": "Tteokbokki (Classic)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 59,
    "servings": 4,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 420,
      "protein": 13,
      "carbs": 20,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "192",
    "title": "Maki Ramen (Traditional)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 5,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 666,
      "protein": 18,
      "carbs": 24,
      "fat": 19,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "193",
    "title": "Kebabs - D\u00f6ner (Street Style)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 3,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 256,
      "protein": 10,
      "carbs": 74,
      "fat": 15,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "194",
    "title": "Cassoulet (Regional)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 6,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 307,
      "protein": 37,
      "carbs": 62,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "195",
    "title": "Pavlova (Home-style)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "hard",
    "cookingTime": 17,
    "servings": 2,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 299,
      "protein": 22,
      "carbs": 66,
      "fat": 20,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "196",
    "title": "Currywurst (Authentic)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": 21,
      "carbs": 16,
      "fat": 28,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "197",
    "title": "Lamb Tagine (Slow-cooked)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "https://example.com/images/Lamb_Tagine_(Slow-cooked).jpg",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 3,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 289,
      "protein": 25,
      "carbs": 76,
      "fat": 8,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "198",
    "title": "Okonomiyaki (Grilled)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 87,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 577,
      "protein": 19,
      "carbs": 29,
      "fat": 30,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "199",
    "title": "Sushi Rolls - California Roll (Spiced)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 256,
      "protein": 9,
      "carbs": 80,
      "fat": 18,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "200",
    "title": "Kulfi (Heritage)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 6,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 424,
      "protein": 8,
      "carbs": 27,
      "fat": 30,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "201",
    "title": "Anticuchos (Classic)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 76,
    "servings": 2,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 473,
      "protein": 37,
      "carbs": 36,
      "fat": 8,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "202",
    "title": "Hummus (Traditional)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 2,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 395,
      "protein": 17,
      "carbs": 65,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "203",
    "title": "Fajitas (Street Style)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 6,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 286,
      "protein": 34,
      "carbs": 43,
      "fat": 15,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "204",
    "title": "Pizza Napoletana (Regional)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "https://example.com/images/Pizza_Napoletana_(Regional).jpg",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 44,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 464,
      "protein": 5,
      "carbs": 28,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "205",
    "title": "Sm\u00f8rrebr\u00f8d (Home-style)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 71,
    "servings": 2,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 483,
      "protein": 37,
      "carbs": 54,
      "fat": 28,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "206",
    "title": "Salm\u00f3n a la Plancha (Authentic)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 27,
    "servings": 4,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 556,
      "protein": 37,
      "carbs": 35,
      "fat": 5,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "207",
    "title": "Doro Wat (Slow-cooked)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 315,
      "protein": 36,
      "carbs": 24,
      "fat": 15,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "208",
    "title": "Aloo Gobi (Grilled)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 73,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 692,
      "protein": 18,
      "carbs": 10,
      "fat": 11,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "209",
    "title": "Paneer Tikka (Spiced)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 84,
    "servings": 4,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 290,
      "protein": 6,
      "carbs": 76,
      "fat": 13,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "210",
    "title": "Ramen - Tonkotsu (Heritage)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 6,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 236,
      "protein": 12,
      "carbs": 27,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "211",
    "title": "Croque Monsieur (Classic)",
    "description": "Grilled ham and cheese sandwich",
    "image": "https://example.com/images/Croque_Monsieur_(Classic).jpg",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 85,
    "servings": 6,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 684,
      "protein": 28,
      "carbs": 61,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "212",
    "title": "Gado-Gado (Traditional)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 4,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 292,
      "protein": 28,
      "carbs": 30,
      "fat": 5,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "213",
    "title": "Cottage Pie (Street Style)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 84,
    "servings": 5,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 268,
      "protein": 40,
      "carbs": 78,
      "fat": 27,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "214",
    "title": "Khao Soi (Regional)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 5,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 335,
      "protein": 39,
      "carbs": 14,
      "fat": 19,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "215",
    "title": "Bangers and Mash (Home-style)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 6,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 296,
      "protein": 37,
      "carbs": 42,
      "fat": 7,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "216",
    "title": "Lahmacun (Authentic)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 81,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 697,
      "protein": 19,
      "carbs": 78,
      "fat": 17,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "217",
    "title": "Chimichurri Steak (Slow-cooked)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "easy",
    "cookingTime": 47,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 253,
      "protein": 19,
      "carbs": 39,
      "fat": 18,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "218",
    "title": "P\u00e3o de Queijo (Grilled)",
    "description": "Cheesy cassava bread",
    "image": "https://example.com/images/P\u00e3o_de_Queijo_(Grilled).jpg",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 80,
    "servings": 3,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 269,
      "protein": 15,
      "carbs": 25,
      "fat": 21,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "219",
    "title": "Samosa (Spiced)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 384,
      "protein": 16,
      "carbs": 56,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "220",
    "title": "Pizza Margherita (Heritage)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 5,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 206,
      "protein": 12,
      "carbs": 10,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "221",
    "title": "Sushi (Classic)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 59,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 690,
      "protein": 40,
      "carbs": 39,
      "fat": 29,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "222",
    "title": "Tacos al Pastor (Traditional)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 65,
    "servings": 3,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 637,
      "protein": 20,
      "carbs": 71,
      "fat": 8,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "223",
    "title": "Peking Duck (Street Style)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 6,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 683,
      "protein": 14,
      "carbs": 61,
      "fat": 27,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "224",
    "title": "Pad Thai (Regional)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 50,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 546,
      "protein": 21,
      "carbs": 36,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "225",
    "title": "Ratatouille (Home-style)",
    "description": "Vegetable stew from Provence",
    "image": "https://example.com/images/Ratatouille_(Home-style).jpg",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 3,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 244,
      "protein": 23,
      "carbs": 25,
      "fat": 7,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "226",
    "title": "Paella (Authentic)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 57,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 654,
      "protein": 33,
      "carbs": 20,
      "fat": 27,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "227",
    "title": "Feijoada (Slow-cooked)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 372,
      "protein": 24,
      "carbs": 79,
      "fat": 17,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "228",
    "title": "Borscht (Grilled)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 51,
    "servings": 6,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 643,
      "protein": 13,
      "carbs": 47,
      "fat": 14,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "229",
    "title": "Butter Chicken (Spiced)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 61,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 329,
      "protein": 38,
      "carbs": 39,
      "fat": 30,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "230",
    "title": "Pho (Heritage)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 496,
      "protein": 24,
      "carbs": 42,
      "fat": 17,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "231",
    "title": "Moussaka (Classic)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 2,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 329,
      "protein": 25,
      "carbs": 44,
      "fat": 13,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "232",
    "title": "Goulash (Traditional)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "https://example.com/images/Goulash_(Traditional).jpg",
    "cuisine": "hungary",
    "difficulty": "easy",
    "cookingTime": 42,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 221,
      "protein": 20,
      "carbs": 48,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "233",
    "title": "Kimchi (Street Style)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 27,
    "servings": 2,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 397,
      "protein": 5,
      "carbs": 19,
      "fat": 17,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "234",
    "title": "Shakshuka (Regional)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "hard",
    "cookingTime": 66,
    "servings": 6,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 298,
      "protein": 15,
      "carbs": 15,
      "fat": 8,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "235",
    "title": "Jollof Rice (Home-style)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 426,
      "protein": 40,
      "carbs": 13,
      "fat": 6,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "236",
    "title": "Ceviche (Authentic)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "hard",
    "cookingTime": 48,
    "servings": 4,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 371,
      "protein": 40,
      "carbs": 21,
      "fat": 19,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "237",
    "title": "Sauerbraten (Slow-cooked)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 75,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 311,
      "protein": 12,
      "carbs": 58,
      "fat": 25,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "238",
    "title": "Bibimbap (Grilled)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 73,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 588,
      "protein": 31,
      "carbs": 68,
      "fat": 10,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "239",
    "title": "Laksa (Spiced)",
    "description": "Spicy coconut noodle soup",
    "image": "https://example.com/images/Laksa_(Spiced).jpg",
    "cuisine": "malaysia",
    "difficulty": "medium",
    "cookingTime": 67,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 247,
      "protein": 12,
      "carbs": 19,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "240",
    "title": "Poutine (Heritage)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "easy",
    "cookingTime": 17,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 401,
      "protein": 39,
      "carbs": 43,
      "fat": 23,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "241",
    "title": "Pierogi (Classic)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "hard",
    "cookingTime": 47,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 301,
      "protein": 36,
      "carbs": 68,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "242",
    "title": "Tapas - Patatas Bravas (Traditional)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 71,
    "servings": 3,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 465,
      "protein": 36,
      "carbs": 43,
      "fat": 29,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "243",
    "title": "Biryani (Street Style)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 21,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 349,
      "protein": 37,
      "carbs": 33,
      "fat": 9,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "244",
    "title": "Fufu & Egusi (Regional)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "easy",
    "cookingTime": 90,
    "servings": 2,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 660,
      "protein": 8,
      "carbs": 53,
      "fat": 13,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "245",
    "title": "Souvlaki (Home-style)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 87,
    "servings": 5,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 431,
      "protein": 15,
      "carbs": 41,
      "fat": 25,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "246",
    "title": "Empanadas (Authentic)",
    "description": "Stuffed pastry turnovers",
    "image": "https://example.com/images/Empanadas_(Authentic).jpg",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 76,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 261,
      "protein": 34,
      "carbs": 61,
      "fat": 22,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "247",
    "title": "Rendang (Slow-cooked)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 68,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 220,
      "protein": 29,
      "carbs": 53,
      "fat": 19,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "248",
    "title": "Baklava (Grilled)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 33,
    "servings": 5,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 409,
      "protein": 27,
      "carbs": 78,
      "fat": 14,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "249",
    "title": "Arepas (Spiced)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "hard",
    "cookingTime": 82,
    "servings": 2,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 686,
      "protein": 30,
      "carbs": 48,
      "fat": 16,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "250",
    "title": "Tamales (Heritage)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 5,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 593,
      "protein": 36,
      "carbs": 37,
      "fat": 22,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "251",
    "title": "Okonomiyaki (Classic)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 503,
      "protein": 24,
      "carbs": 64,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "252",
    "title": "Congee (Traditional)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "medium",
    "cookingTime": 22,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 514,
      "protein": 39,
      "carbs": 41,
      "fat": 29,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "253",
    "title": "Couscous (Street Style)",
    "description": "Steamed semolina with stew",
    "image": "https://example.com/images/Couscous_(Street_Style).jpg",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 2,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 335,
      "protein": 20,
      "carbs": 58,
      "fat": 19,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "254",
    "title": "Chicken Adobo (Regional)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 38,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 662,
      "protein": 38,
      "carbs": 60,
      "fat": 24,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "255",
    "title": "Fondue (Home-style)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 607,
      "protein": 8,
      "carbs": 17,
      "fat": 21,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "256",
    "title": "Churrasco (Authentic)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 243,
      "protein": 29,
      "carbs": 20,
      "fat": 26,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "257",
    "title": "Goloka (Ilokano) (Slow-cooked)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 646,
      "protein": 27,
      "carbs": 55,
      "fat": 7,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "258",
    "title": "Khachapuri (Grilled)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 410,
      "protein": 19,
      "carbs": 23,
      "fat": 14,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "259",
    "title": "Bobotie (Spiced)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 43,
    "servings": 5,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 501,
      "protein": 8,
      "carbs": 61,
      "fat": 8,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "260",
    "title": "Chole Bhature (Heritage)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "https://example.com/images/Chole_Bhature_(Heritage).jpg",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 75,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 464,
      "protein": 14,
      "carbs": 57,
      "fat": 24,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "261",
    "title": "Okro Soup (Classic)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "hard",
    "cookingTime": 89,
    "servings": 4,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 18,
      "carbs": 13,
      "fat": 19,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "262",
    "title": "Katsu Curry (Traditional)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 41,
    "servings": 5,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 337,
      "protein": 20,
      "carbs": 54,
      "fat": 7,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "263",
    "title": "Sancocho (Street Style)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "easy",
    "cookingTime": 73,
    "servings": 2,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 573,
      "protein": 14,
      "carbs": 65,
      "fat": 15,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "264",
    "title": "Tteokbokki (Regional)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 43,
    "servings": 3,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 297,
      "protein": 7,
      "carbs": 13,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "265",
    "title": "Maki Ramen (Home-style)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 2,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 436,
      "protein": 40,
      "carbs": 50,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "266",
    "title": "Kebabs - D\u00f6ner (Authentic)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 2,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 236,
      "protein": 30,
      "carbs": 52,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "267",
    "title": "Cassoulet (Slow-cooked)",
    "description": "Slow white bean & meat stew",
    "image": "https://example.com/images/Cassoulet_(Slow-cooked).jpg",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 34,
    "servings": 4,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 258,
      "protein": 27,
      "carbs": 71,
      "fat": 13,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "268",
    "title": "Pavlova (Grilled)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "easy",
    "cookingTime": 15,
    "servings": 2,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 463,
      "protein": 27,
      "carbs": 70,
      "fat": 18,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "269",
    "title": "Currywurst (Spiced)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 46,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 11,
      "carbs": 11,
      "fat": 22,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "270",
    "title": "Lamb Tagine (Heritage)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 603,
      "protein": 24,
      "carbs": 58,
      "fat": 23,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "271",
    "title": "Okonomiyaki (Classic)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 367,
      "protein": 24,
      "carbs": 78,
      "fat": 21,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "272",
    "title": "Sushi Rolls - California Roll (Traditional)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 87,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 229,
      "protein": 32,
      "carbs": 61,
      "fat": 18,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "273",
    "title": "Kulfi (Street Style)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 2,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 515,
      "protein": 40,
      "carbs": 60,
      "fat": 27,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "274",
    "title": "Anticuchos (Regional)",
    "description": "Grilled skewers usually beef heart",
    "image": "https://example.com/images/Anticuchos_(Regional).jpg",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 38,
    "servings": 6,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 651,
      "protein": 26,
      "carbs": 64,
      "fat": 25,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "275",
    "title": "Hummus (Home-style)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "easy",
    "cookingTime": 68,
    "servings": 6,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 185,
      "protein": 18,
      "carbs": 53,
      "fat": 27,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "276",
    "title": "Fajitas (Authentic)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "hard",
    "cookingTime": 66,
    "servings": 5,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 356,
      "protein": 37,
      "carbs": 56,
      "fat": 7,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "277",
    "title": "Pizza Napoletana (Slow-cooked)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 544,
      "protein": 28,
      "carbs": 30,
      "fat": 19,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "278",
    "title": "Sm\u00f8rrebr\u00f8d (Grilled)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "medium",
    "cookingTime": 54,
    "servings": 6,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 585,
      "protein": 39,
      "carbs": 31,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "279",
    "title": "Salm\u00f3n a la Plancha (Spiced)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 77,
    "servings": 3,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 429,
      "protein": 27,
      "carbs": 69,
      "fat": 22,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "280",
    "title": "Doro Wat (Heritage)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "medium",
    "cookingTime": 50,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": 28,
      "carbs": 75,
      "fat": 28,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "281",
    "title": "Aloo Gobi (Classic)",
    "description": "Potato and cauliflower dry curry",
    "image": "https://example.com/images/Aloo_Gobi_(Classic).jpg",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 5,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 504,
      "protein": 11,
      "carbs": 73,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "282",
    "title": "Paneer Tikka (Traditional)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 73,
    "servings": 5,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 481,
      "protein": 19,
      "carbs": 71,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "283",
    "title": "Ramen - Tonkotsu (Street Style)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 46,
    "servings": 2,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 532,
      "protein": 30,
      "carbs": 56,
      "fat": 22,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "284",
    "title": "Croque Monsieur (Regional)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 60,
    "servings": 4,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 298,
      "protein": 40,
      "carbs": 31,
      "fat": 28,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "285",
    "title": "Gado-Gado (Home-style)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 46,
    "servings": 5,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 228,
      "protein": 19,
      "carbs": 15,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "286",
    "title": "Cottage Pie (Authentic)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 55,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 568,
      "protein": 35,
      "carbs": 36,
      "fat": 25,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "287",
    "title": "Khao Soi (Slow-cooked)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "medium",
    "cookingTime": 88,
    "servings": 5,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 453,
      "protein": 33,
      "carbs": 76,
      "fat": 7,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "288",
    "title": "Bangers and Mash (Grilled)",
    "description": "Sausages with mashed potato and gravy",
    "image": "https://example.com/images/Bangers_and_Mash_(Grilled).jpg",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 5,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 590,
      "protein": 26,
      "carbs": 79,
      "fat": 20,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "289",
    "title": "Lahmacun (Spiced)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 438,
      "protein": 22,
      "carbs": 25,
      "fat": 17,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "290",
    "title": "Chimichurri Steak (Heritage)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 343,
      "protein": 22,
      "carbs": 69,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "291",
    "title": "P\u00e3o de Queijo (Classic)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 5,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 587,
      "protein": 5,
      "carbs": 10,
      "fat": 28,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "292",
    "title": "Samosa (Traditional)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 87,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 354,
      "protein": 31,
      "carbs": 76,
      "fat": 23,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "293",
    "title": "Pizza Margherita (Street Style)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 6,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 597,
      "protein": 20,
      "carbs": 35,
      "fat": 26,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "294",
    "title": "Sushi (Regional)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 62,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 627,
      "protein": 24,
      "carbs": 73,
      "fat": 28,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "295",
    "title": "Tacos al Pastor (Home-style)",
    "description": "Marinated pork tacos with pineapple",
    "image": "https://example.com/images/Tacos_al_Pastor_(Home-style).jpg",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 21,
    "servings": 5,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 300,
      "protein": 40,
      "carbs": 76,
      "fat": 21,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "296",
    "title": "Peking Duck (Authentic)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 74,
    "servings": 2,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 200,
      "protein": 34,
      "carbs": 77,
      "fat": 8,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "297",
    "title": "Pad Thai (Slow-cooked)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "medium",
    "cookingTime": 47,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 491,
      "protein": 33,
      "carbs": 26,
      "fat": 25,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "298",
    "title": "Ratatouille (Grilled)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 66,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 698,
      "protein": 30,
      "carbs": 30,
      "fat": 30,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "299",
    "title": "Paella (Spiced)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 49,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 383,
      "protein": 11,
      "carbs": 15,
      "fat": 24,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "300",
    "title": "Feijoada (Heritage)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 44,
    "servings": 4,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 299,
      "protein": 40,
      "carbs": 10,
      "fat": 23,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "301",
    "title": "Borscht (Classic)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "hard",
    "cookingTime": 81,
    "servings": 5,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 182,
      "protein": 37,
      "carbs": 68,
      "fat": 18,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "302",
    "title": "Butter Chicken (Traditional)",
    "description": "Creamy tomato-based chicken curry",
    "image": "https://example.com/images/Butter_Chicken_(Traditional).jpg",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 44,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 477,
      "protein": 34,
      "carbs": 33,
      "fat": 26,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "303",
    "title": "Pho (Street Style)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 31,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 593,
      "protein": 19,
      "carbs": 59,
      "fat": 26,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "304",
    "title": "Moussaka (Regional)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 80,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 229,
      "protein": 9,
      "carbs": 55,
      "fat": 26,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "305",
    "title": "Goulash (Home-style)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 14,
      "carbs": 31,
      "fat": 21,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "306",
    "title": "Kimchi (Authentic)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 4,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 457,
      "protein": 29,
      "carbs": 52,
      "fat": 25,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "307",
    "title": "Shakshuka (Slow-cooked)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 3,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 406,
      "protein": 35,
      "carbs": 41,
      "fat": 9,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "308",
    "title": "Jollof Rice (Grilled)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "hard",
    "cookingTime": 73,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 183,
      "protein": 8,
      "carbs": 41,
      "fat": 28,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "309",
    "title": "Ceviche (Spiced)",
    "description": "Raw seafood cured in citrus juice",
    "image": "https://example.com/images/Ceviche_(Spiced).jpg",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 49,
    "servings": 3,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 447,
      "protein": 10,
      "carbs": 51,
      "fat": 16,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "310",
    "title": "Sauerbraten (Heritage)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 13,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 612,
      "protein": 30,
      "carbs": 51,
      "fat": 28,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "311",
    "title": "Bibimbap (Classic)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 31,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 466,
      "protein": 35,
      "carbs": 76,
      "fat": 12,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "312",
    "title": "Laksa (Traditional)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 627,
      "protein": 35,
      "carbs": 51,
      "fat": 21,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "313",
    "title": "Poutine (Street Style)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 613,
      "protein": 30,
      "carbs": 72,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "314",
    "title": "Pierogi (Regional)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "hard",
    "cookingTime": 13,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 206,
      "protein": 20,
      "carbs": 22,
      "fat": 15,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "315",
    "title": "Tapas - Patatas Bravas (Home-style)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 10,
    "servings": 3,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 327,
      "protein": 12,
      "carbs": 33,
      "fat": 23,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "316",
    "title": "Biryani (Authentic)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "https://example.com/images/Biryani_(Authentic).jpg",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 45,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 457,
      "protein": 25,
      "carbs": 29,
      "fat": 7,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "317",
    "title": "Fufu & Egusi (Slow-cooked)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 6,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 500,
      "protein": 25,
      "carbs": 22,
      "fat": 10,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "318",
    "title": "Souvlaki (Grilled)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 61,
    "servings": 5,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 288,
      "protein": 38,
      "carbs": 77,
      "fat": 9,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "319",
    "title": "Empanadas (Spiced)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 614,
      "protein": 7,
      "carbs": 62,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "320",
    "title": "Rendang (Heritage)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 89,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 364,
      "protein": 21,
      "carbs": 78,
      "fat": 30,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "321",
    "title": "Baklava (Classic)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 73,
    "servings": 2,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 254,
      "protein": 17,
      "carbs": 42,
      "fat": 23,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "322",
    "title": "Arepas (Traditional)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 78,
    "servings": 3,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 694,
      "protein": 12,
      "carbs": 70,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "323",
    "title": "Tamales (Street Style)",
    "description": "Masa dough steamed in corn husks",
    "image": "https://example.com/images/Tamales_(Street_Style).jpg",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 391,
      "protein": 31,
      "carbs": 40,
      "fat": 27,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "324",
    "title": "Okonomiyaki (Regional)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 15,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 503,
      "protein": 37,
      "carbs": 45,
      "fat": 22,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "325",
    "title": "Congee (Home-style)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 60,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 320,
      "protein": 30,
      "carbs": 44,
      "fat": 16,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "326",
    "title": "Couscous (Authentic)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 51,
    "servings": 6,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 261,
      "protein": 12,
      "carbs": 57,
      "fat": 14,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "327",
    "title": "Chicken Adobo (Slow-cooked)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 38,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 555,
      "protein": 30,
      "carbs": 56,
      "fat": 11,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "328",
    "title": "Fondue (Grilled)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "easy",
    "cookingTime": 14,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 370,
      "protein": 22,
      "carbs": 59,
      "fat": 21,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "329",
    "title": "Churrasco (Spiced)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 595,
      "protein": 17,
      "carbs": 27,
      "fat": 18,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "330",
    "title": "Goloka (Ilokano) (Heritage)",
    "description": "Traditional Ilocano dish - example",
    "image": "https://example.com/images/Goloka_(Ilokano)_(Heritage).jpg",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 71,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 513,
      "protein": 40,
      "carbs": 13,
      "fat": 10,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "331",
    "title": "Khachapuri (Classic)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "medium",
    "cookingTime": 44,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 601,
      "protein": 14,
      "carbs": 48,
      "fat": 9,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "332",
    "title": "Bobotie (Traditional)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 57,
    "servings": 6,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 226,
      "protein": 11,
      "carbs": 29,
      "fat": 28,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "333",
    "title": "Chole Bhature (Street Style)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 65,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 682,
      "protein": 6,
      "carbs": 41,
      "fat": 22,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "334",
    "title": "Okro Soup (Regional)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 544,
      "protein": 38,
      "carbs": 49,
      "fat": 21,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "335",
    "title": "Katsu Curry (Home-style)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 31,
    "servings": 5,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 696,
      "protein": 30,
      "carbs": 53,
      "fat": 9,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "336",
    "title": "Sancocho (Authentic)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 2,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 462,
      "protein": 10,
      "carbs": 19,
      "fat": 14,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "337",
    "title": "Tteokbokki (Slow-cooked)",
    "description": "Spicy rice cake street food",
    "image": "https://example.com/images/Tteokbokki_(Slow-cooked).jpg",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 57,
    "servings": 6,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 414,
      "protein": 36,
      "carbs": 62,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "338",
    "title": "Maki Ramen (Grilled)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 3,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 283,
      "protein": 6,
      "carbs": 77,
      "fat": 15,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "339",
    "title": "Kebabs - D\u00f6ner (Spiced)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 47,
    "servings": 4,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 576,
      "protein": 30,
      "carbs": 32,
      "fat": 18,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "340",
    "title": "Cassoulet (Heritage)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 87,
    "servings": 3,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 471,
      "protein": 25,
      "carbs": 45,
      "fat": 9,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "341",
    "title": "Pavlova (Classic)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 6,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 400,
      "protein": 30,
      "carbs": 50,
      "fat": 16,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "342",
    "title": "Currywurst (Traditional)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 46,
    "servings": 6,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 522,
      "protein": 39,
      "carbs": 57,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "343",
    "title": "Lamb Tagine (Street Style)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 3,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 422,
      "protein": 17,
      "carbs": 30,
      "fat": 10,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "344",
    "title": "Okonomiyaki (Regional)",
    "description": "Savory pancake with various toppings",
    "image": "https://example.com/images/Okonomiyaki_(Regional).jpg",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 80,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 677,
      "protein": 33,
      "carbs": 70,
      "fat": 6,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "345",
    "title": "Sushi Rolls - California Roll (Home-style)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "hard",
    "cookingTime": 67,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 610,
      "protein": 19,
      "carbs": 71,
      "fat": 29,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "346",
    "title": "Kulfi (Authentic)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 34,
    "servings": 5,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 316,
      "protein": 32,
      "carbs": 35,
      "fat": 19,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "347",
    "title": "Anticuchos (Slow-cooked)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 35,
    "servings": 3,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 300,
      "protein": 14,
      "carbs": 28,
      "fat": 10,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "348",
    "title": "Hummus (Grilled)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "hard",
    "cookingTime": 48,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 531,
      "protein": 34,
      "carbs": 66,
      "fat": 18,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "349",
    "title": "Fajitas (Spiced)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "easy",
    "cookingTime": 41,
    "servings": 4,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 578,
      "protein": 37,
      "carbs": 31,
      "fat": 26,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "350",
    "title": "Pizza Napoletana (Heritage)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 63,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 577,
      "protein": 30,
      "carbs": 57,
      "fat": 12,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "351",
    "title": "Sm\u00f8rrebr\u00f8d (Classic)",
    "description": "Open-faced sandwiches on rye",
    "image": "https://example.com/images/Sm\u00f8rrebr\u00f8d_(Classic).jpg",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 12,
    "servings": 4,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 451,
      "protein": 33,
      "carbs": 44,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "352",
    "title": "Salm\u00f3n a la Plancha (Traditional)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 68,
    "servings": 3,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 627,
      "protein": 21,
      "carbs": 71,
      "fat": 17,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "353",
    "title": "Doro Wat (Street Style)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "hard",
    "cookingTime": 44,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 356,
      "protein": 16,
      "carbs": 77,
      "fat": 18,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "354",
    "title": "Aloo Gobi (Regional)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 52,
    "servings": 2,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 617,
      "protein": 5,
      "carbs": 72,
      "fat": 28,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "355",
    "title": "Paneer Tikka (Home-style)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 3,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 332,
      "protein": 24,
      "carbs": 33,
      "fat": 15,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "356",
    "title": "Ramen - Tonkotsu (Authentic)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 55,
    "servings": 3,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 429,
      "protein": 22,
      "carbs": 76,
      "fat": 24,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "357",
    "title": "Croque Monsieur (Slow-cooked)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 40,
    "servings": 4,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 317,
      "protein": 10,
      "carbs": 40,
      "fat": 24,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "358",
    "title": "Gado-Gado (Grilled)",
    "description": "Vegetable salad with peanut sauce",
    "image": "https://example.com/images/Gado-Gado_(Grilled).jpg",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 17,
    "servings": 2,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 243,
      "protein": 26,
      "carbs": 32,
      "fat": 24,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "359",
    "title": "Cottage Pie (Spiced)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 10,
    "servings": 2,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 289,
      "protein": 38,
      "carbs": 65,
      "fat": 15,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "360",
    "title": "Khao Soi (Heritage)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "medium",
    "cookingTime": 87,
    "servings": 5,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 612,
      "protein": 15,
      "carbs": 37,
      "fat": 22,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "361",
    "title": "Bangers and Mash (Classic)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 63,
    "servings": 4,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 504,
      "protein": 38,
      "carbs": 72,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "362",
    "title": "Lahmacun (Traditional)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 690,
      "protein": 33,
      "carbs": 20,
      "fat": 22,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "363",
    "title": "Chimichurri Steak (Street Style)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 32,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 181,
      "protein": 16,
      "carbs": 65,
      "fat": 11,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "364",
    "title": "P\u00e3o de Queijo (Regional)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 72,
    "servings": 4,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 428,
      "protein": 36,
      "carbs": 50,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "365",
    "title": "Samosa (Home-style)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "https://example.com/images/Samosa_(Home-style).jpg",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 19,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 676,
      "protein": 8,
      "carbs": 42,
      "fat": 29,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "366",
    "title": "Pizza Margherita (Authentic)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 29,
    "servings": 4,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 619,
      "protein": 25,
      "carbs": 49,
      "fat": 29,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "367",
    "title": "Sushi (Slow-cooked)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 40,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 475,
      "protein": 5,
      "carbs": 31,
      "fat": 14,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "368",
    "title": "Tacos al Pastor (Grilled)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 15,
    "servings": 2,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 601,
      "protein": 31,
      "carbs": 26,
      "fat": 17,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "369",
    "title": "Peking Duck (Spiced)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 26,
    "servings": 2,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 647,
      "protein": 39,
      "carbs": 75,
      "fat": 15,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "370",
    "title": "Pad Thai (Heritage)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 15,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 326,
      "protein": 9,
      "carbs": 42,
      "fat": 25,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "371",
    "title": "Ratatouille (Classic)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 35,
    "servings": 4,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 414,
      "protein": 22,
      "carbs": 58,
      "fat": 14,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "372",
    "title": "Paella (Traditional)",
    "description": "Saffron rice with seafood or meat",
    "image": "https://example.com/images/Paella_(Traditional).jpg",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 343,
      "protein": 21,
      "carbs": 15,
      "fat": 14,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "373",
    "title": "Feijoada (Street Style)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 6,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 638,
      "protein": 34,
      "carbs": 19,
      "fat": 21,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "374",
    "title": "Borscht (Regional)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 31,
    "servings": 5,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 339,
      "protein": 27,
      "carbs": 32,
      "fat": 24,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "375",
    "title": "Butter Chicken (Home-style)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 61,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 380,
      "protein": 12,
      "carbs": 70,
      "fat": 27,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "376",
    "title": "Pho (Authentic)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 37,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 381,
      "protein": 20,
      "carbs": 51,
      "fat": 25,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "377",
    "title": "Moussaka (Slow-cooked)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 69,
    "servings": 2,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 587,
      "protein": 37,
      "carbs": 71,
      "fat": 19,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "378",
    "title": "Goulash (Grilled)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "hard",
    "cookingTime": 86,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 475,
      "protein": 25,
      "carbs": 40,
      "fat": 6,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "379",
    "title": "Kimchi (Spiced)",
    "description": "Spicy fermented cabbage side dish",
    "image": "https://example.com/images/Kimchi_(Spiced).jpg",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 3,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 525,
      "protein": 11,
      "carbs": 77,
      "fat": 19,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "380",
    "title": "Shakshuka (Heritage)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "hard",
    "cookingTime": 42,
    "servings": 6,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 546,
      "protein": 29,
      "carbs": 71,
      "fat": 27,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "381",
    "title": "Jollof Rice (Classic)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 451,
      "protein": 5,
      "carbs": 48,
      "fat": 25,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "382",
    "title": "Ceviche (Traditional)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 5,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 689,
      "protein": 33,
      "carbs": 34,
      "fat": 27,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "383",
    "title": "Sauerbraten (Street Style)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 474,
      "protein": 29,
      "carbs": 20,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "384",
    "title": "Bibimbap (Regional)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 676,
      "protein": 18,
      "carbs": 35,
      "fat": 17,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "385",
    "title": "Laksa (Home-style)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 487,
      "protein": 33,
      "carbs": 64,
      "fat": 28,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "386",
    "title": "Poutine (Authentic)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "https://example.com/images/Poutine_(Authentic).jpg",
    "cuisine": "canada",
    "difficulty": "easy",
    "cookingTime": 47,
    "servings": 6,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 374,
      "protein": 25,
      "carbs": 11,
      "fat": 7,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "387",
    "title": "Pierogi (Slow-cooked)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "medium",
    "cookingTime": 78,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 526,
      "protein": 25,
      "carbs": 11,
      "fat": 9,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "388",
    "title": "Tapas - Patatas Bravas (Grilled)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 443,
      "protein": 40,
      "carbs": 57,
      "fat": 13,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "389",
    "title": "Biryani (Spiced)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 564,
      "protein": 34,
      "carbs": 53,
      "fat": 30,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "390",
    "title": "Fufu & Egusi (Heritage)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 3,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 190,
      "protein": 35,
      "carbs": 27,
      "fat": 26,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "391",
    "title": "Souvlaki (Classic)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 13,
    "servings": 3,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 308,
      "protein": 27,
      "carbs": 74,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "392",
    "title": "Empanadas (Traditional)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": 21,
      "carbs": 76,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "393",
    "title": "Rendang (Street Style)",
    "description": "Slow-cooked coconut beef curry",
    "image": "https://example.com/images/Rendang_(Street_Style).jpg",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 74,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 374,
      "protein": 20,
      "carbs": 39,
      "fat": 17,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "394",
    "title": "Baklava (Regional)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 80,
    "servings": 6,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 700,
      "protein": 12,
      "carbs": 74,
      "fat": 15,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "395",
    "title": "Arepas (Home-style)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 4,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 522,
      "protein": 34,
      "carbs": 48,
      "fat": 17,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "396",
    "title": "Tamales (Authentic)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 89,
    "servings": 3,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 262,
      "protein": 35,
      "carbs": 20,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "397",
    "title": "Okonomiyaki (Slow-cooked)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 631,
      "protein": 18,
      "carbs": 24,
      "fat": 19,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "398",
    "title": "Congee (Grilled)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "medium",
    "cookingTime": 44,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 681,
      "protein": 7,
      "carbs": 79,
      "fat": 22,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "399",
    "title": "Couscous (Spiced)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 278,
      "protein": 7,
      "carbs": 22,
      "fat": 10,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "400",
    "title": "Chicken Adobo (Heritage)",
    "description": "Soy-vinegar marinated chicken",
    "image": "https://example.com/images/Chicken_Adobo_(Heritage).jpg",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 498,
      "protein": 25,
      "carbs": 61,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "401",
    "title": "Fondue (Classic)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "easy",
    "cookingTime": 69,
    "servings": 3,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 294,
      "protein": 11,
      "carbs": 79,
      "fat": 5,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "402",
    "title": "Churrasco (Traditional)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 87,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 641,
      "protein": 39,
      "carbs": 59,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "403",
    "title": "Goloka (Ilokano) (Street Style)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 332,
      "protein": 38,
      "carbs": 59,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "404",
    "title": "Khachapuri (Regional)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 698,
      "protein": 28,
      "carbs": 67,
      "fat": 10,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "405",
    "title": "Bobotie (Home-style)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 34,
    "servings": 2,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 393,
      "protein": 16,
      "carbs": 40,
      "fat": 22,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "406",
    "title": "Chole Bhature (Authentic)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 65,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 337,
      "protein": 30,
      "carbs": 66,
      "fat": 7,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "407",
    "title": "Okro Soup (Slow-cooked)",
    "description": "Okra stew often with palm oil",
    "image": "https://example.com/images/Okro_Soup_(Slow-cooked).jpg",
    "cuisine": "sierra leone",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 5,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 323,
      "protein": 27,
      "carbs": 58,
      "fat": 22,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "408",
    "title": "Katsu Curry (Grilled)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 45,
    "servings": 2,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 390,
      "protein": 31,
      "carbs": 51,
      "fat": 22,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "409",
    "title": "Sancocho (Spiced)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "medium",
    "cookingTime": 82,
    "servings": 5,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 368,
      "protein": 25,
      "carbs": 48,
      "fat": 12,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "410",
    "title": "Tteokbokki (Heritage)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 21,
    "servings": 6,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 594,
      "protein": 5,
      "carbs": 41,
      "fat": 14,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "411",
    "title": "Maki Ramen (Classic)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 18,
    "servings": 4,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 660,
      "protein": 25,
      "carbs": 79,
      "fat": 12,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "412",
    "title": "Kebabs - D\u00f6ner (Traditional)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 5,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 516,
      "protein": 31,
      "carbs": 32,
      "fat": 13,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "413",
    "title": "Cassoulet (Street Style)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 84,
    "servings": 2,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 538,
      "protein": 11,
      "carbs": 26,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "414",
    "title": "Pavlova (Regional)",
    "description": "Meringue dessert with fruit",
    "image": "https://example.com/images/Pavlova_(Regional).jpg",
    "cuisine": "australia",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 5,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 555,
      "protein": 20,
      "carbs": 45,
      "fat": 17,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "415",
    "title": "Currywurst (Home-style)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 84,
    "servings": 2,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 586,
      "protein": 14,
      "carbs": 74,
      "fat": 30,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "416",
    "title": "Lamb Tagine (Authentic)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 4,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 612,
      "protein": 12,
      "carbs": 34,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "417",
    "title": "Okonomiyaki (Slow-cooked)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 601,
      "protein": 8,
      "carbs": 11,
      "fat": 14,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "418",
    "title": "Sushi Rolls - California Roll (Grilled)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "hard",
    "cookingTime": 80,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 327,
      "protein": 35,
      "carbs": 18,
      "fat": 14,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "419",
    "title": "Kulfi (Spiced)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 58,
    "servings": 6,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 399,
      "protein": 12,
      "carbs": 29,
      "fat": 10,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "420",
    "title": "Anticuchos (Heritage)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 10,
    "servings": 5,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 307,
      "protein": 22,
      "carbs": 68,
      "fat": 14,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "421",
    "title": "Hummus (Classic)",
    "description": "Chickpea dip with tahini",
    "image": "https://example.com/images/Hummus_(Classic).jpg",
    "cuisine": "middle east",
    "difficulty": "hard",
    "cookingTime": 42,
    "servings": 2,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 354,
      "protein": 17,
      "carbs": 62,
      "fat": 24,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "422",
    "title": "Fajitas (Traditional)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 534,
      "protein": 14,
      "carbs": 38,
      "fat": 12,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "423",
    "title": "Pizza Napoletana (Street Style)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 28,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 617,
      "protein": 24,
      "carbs": 70,
      "fat": 19,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "424",
    "title": "Sm\u00f8rrebr\u00f8d (Regional)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 2,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 328,
      "protein": 26,
      "carbs": 43,
      "fat": 26,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "425",
    "title": "Salm\u00f3n a la Plancha (Home-style)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 682,
      "protein": 18,
      "carbs": 61,
      "fat": 9,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "426",
    "title": "Doro Wat (Authentic)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "medium",
    "cookingTime": 23,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 294,
      "protein": 21,
      "carbs": 26,
      "fat": 26,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "427",
    "title": "Aloo Gobi (Slow-cooked)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 90,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 304,
      "protein": 34,
      "carbs": 28,
      "fat": 19,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "428",
    "title": "Paneer Tikka (Grilled)",
    "description": "Grilled spiced paneer cubes",
    "image": "https://example.com/images/Paneer_Tikka_(Grilled).jpg",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 76,
    "servings": 4,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 602,
      "protein": 31,
      "carbs": 65,
      "fat": 28,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "429",
    "title": "Ramen - Tonkotsu (Spiced)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 6,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 660,
      "protein": 38,
      "carbs": 24,
      "fat": 29,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "430",
    "title": "Croque Monsieur (Heritage)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 30,
    "servings": 6,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 345,
      "protein": 29,
      "carbs": 59,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "431",
    "title": "Gado-Gado (Classic)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 76,
    "servings": 6,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 498,
      "protein": 34,
      "carbs": 32,
      "fat": 26,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "432",
    "title": "Cottage Pie (Traditional)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 579,
      "protein": 22,
      "carbs": 13,
      "fat": 12,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "433",
    "title": "Khao Soi (Street Style)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 5,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 180,
      "protein": 17,
      "carbs": 66,
      "fat": 25,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "434",
    "title": "Bangers and Mash (Regional)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 602,
      "protein": 25,
      "carbs": 21,
      "fat": 23,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "435",
    "title": "Lahmacun (Home-style)",
    "description": "Thin flatbread topped with minced meat",
    "image": "https://example.com/images/Lahmacun_(Home-style).jpg",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 34,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 385,
      "protein": 8,
      "carbs": 77,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "436",
    "title": "Chimichurri Steak (Authentic)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 50,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 505,
      "protein": 33,
      "carbs": 63,
      "fat": 12,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "437",
    "title": "P\u00e3o de Queijo (Slow-cooked)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 76,
    "servings": 5,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 673,
      "protein": 10,
      "carbs": 12,
      "fat": 25,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "438",
    "title": "Samosa (Grilled)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 39,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 417,
      "protein": 29,
      "carbs": 32,
      "fat": 29,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "439",
    "title": "Pizza Margherita (Spiced)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 3,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 538,
      "protein": 10,
      "carbs": 55,
      "fat": 21,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "440",
    "title": "Sushi (Heritage)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 29,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 225,
      "protein": 22,
      "carbs": 25,
      "fat": 5,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "441",
    "title": "Tacos al Pastor (Classic)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 347,
      "protein": 10,
      "carbs": 28,
      "fat": 13,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "442",
    "title": "Peking Duck (Traditional)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "https://example.com/images/Peking_Duck_(Traditional).jpg",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 12,
    "servings": 4,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 606,
      "protein": 15,
      "carbs": 26,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "443",
    "title": "Pad Thai (Street Style)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 39,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 632,
      "protein": 30,
      "carbs": 28,
      "fat": 23,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "444",
    "title": "Ratatouille (Regional)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 2,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 271,
      "protein": 39,
      "carbs": 29,
      "fat": 29,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "445",
    "title": "Paella (Home-style)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 424,
      "protein": 11,
      "carbs": 62,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "446",
    "title": "Feijoada (Authentic)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 33,
    "servings": 2,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 387,
      "protein": 38,
      "carbs": 52,
      "fat": 14,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "447",
    "title": "Borscht (Slow-cooked)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 85,
    "servings": 4,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 694,
      "protein": 30,
      "carbs": 61,
      "fat": 23,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "448",
    "title": "Butter Chicken (Grilled)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 50,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 415,
      "protein": 24,
      "carbs": 41,
      "fat": 9,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "449",
    "title": "Pho (Spiced)",
    "description": "Aromatic beef noodle soup",
    "image": "https://example.com/images/Pho_(Spiced).jpg",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 89,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 623,
      "protein": 19,
      "carbs": 29,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "450",
    "title": "Moussaka (Heritage)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 31,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 336,
      "protein": 28,
      "carbs": 74,
      "fat": 30,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "451",
    "title": "Goulash (Classic)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "hard",
    "cookingTime": 32,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 260,
      "protein": 35,
      "carbs": 72,
      "fat": 26,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "452",
    "title": "Kimchi (Traditional)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 5,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 17,
      "carbs": 52,
      "fat": 23,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "453",
    "title": "Shakshuka (Street Style)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "easy",
    "cookingTime": 84,
    "servings": 3,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 330,
      "protein": 10,
      "carbs": 15,
      "fat": 14,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "454",
    "title": "Jollof Rice (Regional)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "medium",
    "cookingTime": 58,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 427,
      "protein": 20,
      "carbs": 35,
      "fat": 27,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "455",
    "title": "Ceviche (Home-style)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 11,
    "servings": 4,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 290,
      "protein": 25,
      "carbs": 11,
      "fat": 25,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "456",
    "title": "Sauerbraten (Authentic)",
    "description": "Marinated pot roast with gravy",
    "image": "https://example.com/images/Sauerbraten_(Authentic).jpg",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 87,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 676,
      "protein": 11,
      "carbs": 25,
      "fat": 26,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "457",
    "title": "Bibimbap (Slow-cooked)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 37,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 425,
      "protein": 10,
      "carbs": 29,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "458",
    "title": "Laksa (Grilled)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 471,
      "protein": 37,
      "carbs": 41,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "459",
    "title": "Poutine (Spiced)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 573,
      "protein": 27,
      "carbs": 58,
      "fat": 19,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "460",
    "title": "Pierogi (Heritage)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "easy",
    "cookingTime": 66,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 606,
      "protein": 5,
      "carbs": 57,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "461",
    "title": "Tapas - Patatas Bravas (Classic)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 5,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 218,
      "protein": 29,
      "carbs": 16,
      "fat": 11,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "462",
    "title": "Biryani (Traditional)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 19,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 411,
      "protein": 17,
      "carbs": 45,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "463",
    "title": "Fufu & Egusi (Street Style)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "https://example.com/images/Fufu_&_Egusi_(Street_Style).jpg",
    "cuisine": "ghana",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 3,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 360,
      "protein": 36,
      "carbs": 22,
      "fat": 29,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "464",
    "title": "Souvlaki (Regional)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 4,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 234,
      "protein": 13,
      "carbs": 60,
      "fat": 12,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "465",
    "title": "Empanadas (Home-style)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 20,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 462,
      "protein": 12,
      "carbs": 77,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "466",
    "title": "Rendang (Authentic)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 67,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 200,
      "protein": 22,
      "carbs": 67,
      "fat": 18,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "467",
    "title": "Baklava (Slow-cooked)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 44,
    "servings": 5,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 679,
      "protein": 15,
      "carbs": 36,
      "fat": 24,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "468",
    "title": "Arepas (Grilled)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 3,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 360,
      "protein": 10,
      "carbs": 79,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "469",
    "title": "Tamales (Spiced)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 58,
    "servings": 5,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 437,
      "protein": 5,
      "carbs": 54,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "470",
    "title": "Okonomiyaki (Heritage)",
    "description": "Savory pancake with various toppings",
    "image": "https://example.com/images/Okonomiyaki_(Heritage).jpg",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 189,
      "protein": 34,
      "carbs": 65,
      "fat": 5,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "471",
    "title": "Congee (Classic)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 70,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 563,
      "protein": 34,
      "carbs": 70,
      "fat": 9,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "472",
    "title": "Couscous (Traditional)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 4,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 592,
      "protein": 5,
      "carbs": 27,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "473",
    "title": "Chicken Adobo (Street Style)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 33,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 181,
      "protein": 34,
      "carbs": 78,
      "fat": 16,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "474",
    "title": "Fondue (Regional)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 269,
      "protein": 15,
      "carbs": 12,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "475",
    "title": "Churrasco (Home-style)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 74,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 669,
      "protein": 29,
      "carbs": 22,
      "fat": 20,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "476",
    "title": "Goloka (Ilokano) (Authentic)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 45,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 633,
      "protein": 6,
      "carbs": 34,
      "fat": 25,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "477",
    "title": "Khachapuri (Slow-cooked)",
    "description": "Cheese-filled bread",
    "image": "https://example.com/images/Khachapuri_(Slow-cooked).jpg",
    "cuisine": "georgia",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 545,
      "protein": 33,
      "carbs": 49,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "478",
    "title": "Bobotie (Grilled)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 58,
    "servings": 2,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 358,
      "protein": 10,
      "carbs": 24,
      "fat": 12,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "479",
    "title": "Chole Bhature (Spiced)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 72,
    "servings": 5,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 336,
      "protein": 30,
      "carbs": 13,
      "fat": 20,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "480",
    "title": "Okro Soup (Heritage)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 4,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 189,
      "protein": 12,
      "carbs": 57,
      "fat": 25,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "481",
    "title": "Katsu Curry (Classic)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 22,
    "servings": 2,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 573,
      "protein": 26,
      "carbs": 42,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "482",
    "title": "Sancocho (Traditional)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "easy",
    "cookingTime": 74,
    "servings": 3,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 649,
      "protein": 24,
      "carbs": 54,
      "fat": 24,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "483",
    "title": "Tteokbokki (Street Style)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 39,
    "servings": 3,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 522,
      "protein": 5,
      "carbs": 80,
      "fat": 25,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "484",
    "title": "Maki Ramen (Regional)",
    "description": "Noodles in savory broth with toppings",
    "image": "https://example.com/images/Maki_Ramen_(Regional).jpg",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 89,
    "servings": 4,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 222,
      "protein": 8,
      "carbs": 33,
      "fat": 22,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "485",
    "title": "Kebabs - D\u00f6ner (Home-style)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 54,
    "servings": 5,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 470,
      "protein": 36,
      "carbs": 74,
      "fat": 27,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "486",
    "title": "Cassoulet (Authentic)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 4,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 302,
      "protein": 10,
      "carbs": 48,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "487",
    "title": "Pavlova (Slow-cooked)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 3,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 512,
      "protein": 15,
      "carbs": 39,
      "fat": 10,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "488",
    "title": "Currywurst (Grilled)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 74,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 217,
      "protein": 40,
      "carbs": 75,
      "fat": 26,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "489",
    "title": "Lamb Tagine (Spiced)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 79,
    "servings": 2,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 626,
      "protein": 11,
      "carbs": 40,
      "fat": 15,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "490",
    "title": "Okonomiyaki (Heritage)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 634,
      "protein": 33,
      "carbs": 50,
      "fat": 29,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "491",
    "title": "Sushi Rolls - California Roll (Classic)",
    "description": "Crab and avocado sushi roll",
    "image": "https://example.com/images/Sushi_Rolls_-_California_Roll_(Classic).jpg",
    "cuisine": "usa (japanese origin)",
    "difficulty": "hard",
    "cookingTime": 10,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 638,
      "protein": 28,
      "carbs": 14,
      "fat": 14,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "492",
    "title": "Kulfi (Traditional)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 69,
    "servings": 2,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 6,
      "carbs": 59,
      "fat": 13,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "493",
    "title": "Anticuchos (Street Style)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 6,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 549,
      "protein": 29,
      "carbs": 55,
      "fat": 24,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "494",
    "title": "Hummus (Regional)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 6,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 673,
      "protein": 11,
      "carbs": 12,
      "fat": 23,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "495",
    "title": "Fajitas (Home-style)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "hard",
    "cookingTime": 59,
    "servings": 6,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 632,
      "protein": 10,
      "carbs": 15,
      "fat": 19,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "496",
    "title": "Pizza Napoletana (Authentic)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 40,
      "carbs": 60,
      "fat": 25,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "497",
    "title": "Sm\u00f8rrebr\u00f8d (Slow-cooked)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "medium",
    "cookingTime": 73,
    "servings": 6,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 187,
      "protein": 22,
      "carbs": 16,
      "fat": 20,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "498",
    "title": "Salm\u00f3n a la Plancha (Grilled)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "https://example.com/images/Salm\u00f3n_a_la_Plancha_(Grilled).jpg",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 38,
    "servings": 4,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 643,
      "protein": 23,
      "carbs": 47,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "499",
    "title": "Doro Wat (Spiced)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 317,
      "protein": 8,
      "carbs": 70,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "500",
    "title": "Aloo Gobi (Heritage)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 71,
    "servings": 4,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 633,
      "protein": 8,
      "carbs": 27,
      "fat": 19,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "501",
    "title": "Paneer Tikka (Classic)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 60,
    "servings": 4,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 284,
      "protein": 11,
      "carbs": 10,
      "fat": 21,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "502",
    "title": "Ramen - Tonkotsu (Traditional)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 3,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 367,
      "protein": 26,
      "carbs": 68,
      "fat": 6,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "503",
    "title": "Croque Monsieur (Street Style)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 6,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 656,
      "protein": 37,
      "carbs": 18,
      "fat": 21,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "504",
    "title": "Gado-Gado (Regional)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 3,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 212,
      "protein": 28,
      "carbs": 18,
      "fat": 21,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "505",
    "title": "Cottage Pie (Home-style)",
    "description": "Minced beef topped with mashed potato",
    "image": "https://example.com/images/Cottage_Pie_(Home-style).jpg",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 30,
    "servings": 6,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 638,
      "protein": 10,
      "carbs": 24,
      "fat": 10,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "506",
    "title": "Khao Soi (Authentic)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 3,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 380,
      "protein": 29,
      "carbs": 73,
      "fat": 27,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "507",
    "title": "Bangers and Mash (Slow-cooked)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 31,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 697,
      "protein": 22,
      "carbs": 64,
      "fat": 21,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "508",
    "title": "Lahmacun (Grilled)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 43,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 411,
      "protein": 8,
      "carbs": 61,
      "fat": 24,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "509",
    "title": "Chimichurri Steak (Spiced)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 66,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 549,
      "protein": 16,
      "carbs": 68,
      "fat": 23,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "510",
    "title": "P\u00e3o de Queijo (Heritage)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 2,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 261,
      "protein": 21,
      "carbs": 32,
      "fat": 18,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "511",
    "title": "Samosa (Classic)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 347,
      "protein": 39,
      "carbs": 64,
      "fat": 6,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "512",
    "title": "Pizza Margherita (Traditional)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "https://example.com/images/Pizza_Margherita_(Traditional).jpg",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 30,
    "servings": 5,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 473,
      "protein": 27,
      "carbs": 48,
      "fat": 13,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "513",
    "title": "Sushi (Street Style)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 46,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 337,
      "protein": 11,
      "carbs": 53,
      "fat": 19,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "514",
    "title": "Tacos al Pastor (Regional)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 62,
    "servings": 4,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 440,
      "protein": 31,
      "carbs": 66,
      "fat": 23,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "515",
    "title": "Peking Duck (Home-style)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 59,
    "servings": 5,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 402,
      "protein": 24,
      "carbs": 27,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "516",
    "title": "Pad Thai (Authentic)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "medium",
    "cookingTime": 19,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 306,
      "protein": 33,
      "carbs": 21,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "517",
    "title": "Ratatouille (Slow-cooked)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 57,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 655,
      "protein": 29,
      "carbs": 13,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "518",
    "title": "Paella (Grilled)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 42,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 501,
      "protein": 17,
      "carbs": 28,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "519",
    "title": "Feijoada (Spiced)",
    "description": "Black bean and pork stew",
    "image": "https://example.com/images/Feijoada_(Spiced).jpg",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 41,
    "servings": 4,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 448,
      "protein": 21,
      "carbs": 20,
      "fat": 11,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "520",
    "title": "Borscht (Heritage)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 12,
    "servings": 6,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 306,
      "protein": 12,
      "carbs": 24,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "521",
    "title": "Butter Chicken (Classic)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 37,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 482,
      "protein": 28,
      "carbs": 48,
      "fat": 18,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "522",
    "title": "Pho (Traditional)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 71,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 335,
      "protein": 10,
      "carbs": 73,
      "fat": 27,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "523",
    "title": "Moussaka (Street Style)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 411,
      "protein": 27,
      "carbs": 16,
      "fat": 13,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "524",
    "title": "Goulash (Regional)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 289,
      "protein": 14,
      "carbs": 51,
      "fat": 20,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "525",
    "title": "Kimchi (Home-style)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 63,
    "servings": 5,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 224,
      "protein": 32,
      "carbs": 79,
      "fat": 5,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "526",
    "title": "Shakshuka (Authentic)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "https://example.com/images/Shakshuka_(Authentic).jpg",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 48,
    "servings": 3,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 541,
      "protein": 18,
      "carbs": 44,
      "fat": 8,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "527",
    "title": "Jollof Rice (Slow-cooked)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "medium",
    "cookingTime": 68,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 616,
      "protein": 10,
      "carbs": 48,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "528",
    "title": "Ceviche (Grilled)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 45,
    "servings": 2,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 557,
      "protein": 26,
      "carbs": 20,
      "fat": 13,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "529",
    "title": "Sauerbraten (Spiced)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 87,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 536,
      "protein": 12,
      "carbs": 44,
      "fat": 19,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "530",
    "title": "Bibimbap (Heritage)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 41,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 316,
      "protein": 30,
      "carbs": 25,
      "fat": 13,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "531",
    "title": "Laksa (Classic)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "medium",
    "cookingTime": 85,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 501,
      "protein": 39,
      "carbs": 57,
      "fat": 21,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "532",
    "title": "Poutine (Traditional)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "easy",
    "cookingTime": 32,
    "servings": 4,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 466,
      "protein": 21,
      "carbs": 19,
      "fat": 15,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "533",
    "title": "Pierogi (Street Style)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "https://example.com/images/Pierogi_(Street_Style).jpg",
    "cuisine": "poland",
    "difficulty": "easy",
    "cookingTime": 52,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 563,
      "protein": 33,
      "carbs": 24,
      "fat": 6,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "534",
    "title": "Tapas - Patatas Bravas (Regional)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 2,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 320,
      "protein": 23,
      "carbs": 80,
      "fat": 15,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "535",
    "title": "Biryani (Home-style)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 29,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 387,
      "protein": 35,
      "carbs": 24,
      "fat": 12,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "536",
    "title": "Fufu & Egusi (Authentic)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "medium",
    "cookingTime": 34,
    "servings": 3,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 584,
      "protein": 14,
      "carbs": 56,
      "fat": 6,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "537",
    "title": "Souvlaki (Slow-cooked)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 6,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 307,
      "protein": 33,
      "carbs": 66,
      "fat": 21,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "538",
    "title": "Empanadas (Grilled)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 20,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 217,
      "protein": 13,
      "carbs": 27,
      "fat": 25,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "539",
    "title": "Rendang (Spiced)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 20,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 460,
      "protein": 37,
      "carbs": 68,
      "fat": 11,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "540",
    "title": "Baklava (Heritage)",
    "description": "Sweet layered pastry with nuts",
    "image": "https://example.com/images/Baklava_(Heritage).jpg",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 29,
    "servings": 3,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 387,
      "protein": 7,
      "carbs": 29,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "541",
    "title": "Arepas (Classic)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "hard",
    "cookingTime": 69,
    "servings": 6,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 268,
      "protein": 17,
      "carbs": 12,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "542",
    "title": "Tamales (Traditional)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 51,
    "servings": 4,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 541,
      "protein": 33,
      "carbs": 10,
      "fat": 6,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "543",
    "title": "Okonomiyaki (Street Style)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 75,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 651,
      "protein": 40,
      "carbs": 17,
      "fat": 23,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "544",
    "title": "Congee (Regional)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 31,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 286,
      "protein": 25,
      "carbs": 30,
      "fat": 26,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "545",
    "title": "Couscous (Home-style)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 61,
    "servings": 5,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 505,
      "protein": 38,
      "carbs": 60,
      "fat": 15,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "546",
    "title": "Chicken Adobo (Authentic)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 525,
      "protein": 36,
      "carbs": 41,
      "fat": 5,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "547",
    "title": "Fondue (Slow-cooked)",
    "description": "Melted cheese dip",
    "image": "https://example.com/images/Fondue_(Slow-cooked).jpg",
    "cuisine": "switzerland",
    "difficulty": "hard",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 443,
      "protein": 33,
      "carbs": 78,
      "fat": 23,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "548",
    "title": "Churrasco (Grilled)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 80,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 433,
      "protein": 19,
      "carbs": 22,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "549",
    "title": "Goloka (Ilokano) (Spiced)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 334,
      "protein": 40,
      "carbs": 42,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "550",
    "title": "Khachapuri (Heritage)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 510,
      "protein": 38,
      "carbs": 72,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "551",
    "title": "Bobotie (Classic)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "easy",
    "cookingTime": 21,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 236,
      "protein": 22,
      "carbs": 32,
      "fat": 25,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "552",
    "title": "Chole Bhature (Traditional)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 42,
    "servings": 5,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 190,
      "protein": 8,
      "carbs": 75,
      "fat": 14,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "553",
    "title": "Okro Soup (Street Style)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 76,
    "servings": 4,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 325,
      "protein": 16,
      "carbs": 45,
      "fat": 24,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "554",
    "title": "Katsu Curry (Regional)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "https://example.com/images/Katsu_Curry_(Regional).jpg",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 78,
    "servings": 3,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 698,
      "protein": 11,
      "carbs": 41,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "555",
    "title": "Sancocho (Home-style)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "easy",
    "cookingTime": 76,
    "servings": 4,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 448,
      "protein": 20,
      "carbs": 52,
      "fat": 11,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "556",
    "title": "Tteokbokki (Authentic)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 66,
    "servings": 5,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 649,
      "protein": 35,
      "carbs": 61,
      "fat": 14,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "557",
    "title": "Maki Ramen (Slow-cooked)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 50,
    "servings": 2,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 348,
      "protein": 10,
      "carbs": 19,
      "fat": 26,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "558",
    "title": "Kebabs - D\u00f6ner (Grilled)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 77,
    "servings": 2,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 541,
      "protein": 23,
      "carbs": 65,
      "fat": 22,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "559",
    "title": "Cassoulet (Spiced)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 23,
    "servings": 4,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 362,
      "protein": 19,
      "carbs": 74,
      "fat": 10,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "560",
    "title": "Pavlova (Heritage)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "medium",
    "cookingTime": 39,
    "servings": 4,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 617,
      "protein": 31,
      "carbs": 39,
      "fat": 18,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "561",
    "title": "Currywurst (Classic)",
    "description": "Sliced sausage with curry ketchup",
    "image": "https://example.com/images/Currywurst_(Classic).jpg",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 85,
    "servings": 4,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 426,
      "protein": 24,
      "carbs": 69,
      "fat": 30,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "562",
    "title": "Lamb Tagine (Traditional)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 80,
    "servings": 4,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 248,
      "protein": 18,
      "carbs": 11,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "563",
    "title": "Okonomiyaki (Street Style)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 23,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 607,
      "protein": 8,
      "carbs": 29,
      "fat": 27,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "564",
    "title": "Sushi Rolls - California Roll (Regional)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 17,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 384,
      "protein": 29,
      "carbs": 14,
      "fat": 17,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "565",
    "title": "Kulfi (Home-style)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 76,
    "servings": 6,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 647,
      "protein": 18,
      "carbs": 44,
      "fat": 17,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "566",
    "title": "Anticuchos (Authentic)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 6,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 658,
      "protein": 14,
      "carbs": 10,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "567",
    "title": "Hummus (Slow-cooked)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "easy",
    "cookingTime": 52,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 376,
      "protein": 28,
      "carbs": 28,
      "fat": 21,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "568",
    "title": "Fajitas (Grilled)",
    "description": "Sizzling grilled meat with peppers",
    "image": "https://example.com/images/Fajitas_(Grilled).jpg",
    "cuisine": "mexico/usa",
    "difficulty": "medium",
    "cookingTime": 49,
    "servings": 3,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 591,
      "protein": 35,
      "carbs": 78,
      "fat": 11,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "569",
    "title": "Pizza Napoletana (Spiced)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 84,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 520,
      "protein": 29,
      "carbs": 69,
      "fat": 8,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "570",
    "title": "Sm\u00f8rrebr\u00f8d (Heritage)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 2,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 599,
      "protein": 21,
      "carbs": 75,
      "fat": 14,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "571",
    "title": "Salm\u00f3n a la Plancha (Classic)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 82,
    "servings": 6,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 186,
      "protein": 12,
      "carbs": 33,
      "fat": 6,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "572",
    "title": "Doro Wat (Traditional)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 598,
      "protein": 29,
      "carbs": 52,
      "fat": 15,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "573",
    "title": "Aloo Gobi (Street Style)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 36,
    "servings": 3,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 576,
      "protein": 17,
      "carbs": 60,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "574",
    "title": "Paneer Tikka (Regional)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 28,
    "servings": 6,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 294,
      "protein": 39,
      "carbs": 37,
      "fat": 28,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "575",
    "title": "Ramen - Tonkotsu (Home-style)",
    "description": "Rich pork bone broth ramen",
    "image": "https://example.com/images/Ramen_-_Tonkotsu_(Home-style).jpg",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 76,
    "servings": 5,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 199,
      "protein": 28,
      "carbs": 22,
      "fat": 17,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "576",
    "title": "Croque Monsieur (Authentic)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 522,
      "protein": 7,
      "carbs": 20,
      "fat": 7,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "577",
    "title": "Gado-Gado (Slow-cooked)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 51,
    "servings": 6,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 249,
      "protein": 11,
      "carbs": 56,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "578",
    "title": "Cottage Pie (Grilled)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 19,
    "servings": 6,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 628,
      "protein": 26,
      "carbs": 32,
      "fat": 11,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "579",
    "title": "Khao Soi (Spiced)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 69,
    "servings": 6,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 494,
      "protein": 40,
      "carbs": 51,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "580",
    "title": "Bangers and Mash (Heritage)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 4,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 404,
      "protein": 21,
      "carbs": 38,
      "fat": 30,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "581",
    "title": "Lahmacun (Classic)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 447,
      "protein": 37,
      "carbs": 77,
      "fat": 21,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "582",
    "title": "Chimichurri Steak (Traditional)",
    "description": "Grilled steak with herb sauce",
    "image": "https://example.com/images/Chimichurri_Steak_(Traditional).jpg",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 50,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 525,
      "protein": 12,
      "carbs": 46,
      "fat": 7,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "583",
    "title": "P\u00e3o de Queijo (Street Style)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 3,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 238,
      "protein": 6,
      "carbs": 18,
      "fat": 18,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "584",
    "title": "Samosa (Regional)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 235,
      "protein": 19,
      "carbs": 63,
      "fat": 15,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "585",
    "title": "Pizza Margherita (Home-style)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 43,
    "servings": 2,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 214,
      "protein": 26,
      "carbs": 33,
      "fat": 11,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "586",
    "title": "Sushi (Authentic)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 17,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 205,
      "protein": 9,
      "carbs": 68,
      "fat": 14,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "587",
    "title": "Tacos al Pastor (Slow-cooked)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 6,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 534,
      "protein": 23,
      "carbs": 71,
      "fat": 8,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "588",
    "title": "Peking Duck (Grilled)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 63,
    "servings": 5,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 553,
      "protein": 24,
      "carbs": 51,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "589",
    "title": "Pad Thai (Spiced)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "https://example.com/images/Pad_Thai_(Spiced).jpg",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 74,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 353,
      "protein": 27,
      "carbs": 72,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "590",
    "title": "Ratatouille (Heritage)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 37,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 397,
      "protein": 15,
      "carbs": 54,
      "fat": 25,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "591",
    "title": "Paella (Classic)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 57,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 664,
      "protein": 14,
      "carbs": 49,
      "fat": 13,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "592",
    "title": "Feijoada (Traditional)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 2,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 280,
      "protein": 26,
      "carbs": 59,
      "fat": 6,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "593",
    "title": "Borscht (Street Style)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "easy",
    "cookingTime": 63,
    "servings": 4,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 281,
      "protein": 37,
      "carbs": 27,
      "fat": 11,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "594",
    "title": "Butter Chicken (Regional)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 85,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 399,
      "protein": 30,
      "carbs": 34,
      "fat": 26,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "595",
    "title": "Pho (Home-style)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "medium",
    "cookingTime": 68,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 495,
      "protein": 13,
      "carbs": 66,
      "fat": 10,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "596",
    "title": "Moussaka (Authentic)",
    "description": "Layered eggplant and meat casserole",
    "image": "https://example.com/images/Moussaka_(Authentic).jpg",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 71,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 661,
      "protein": 30,
      "carbs": 72,
      "fat": 6,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "597",
    "title": "Goulash (Slow-cooked)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 346,
      "protein": 17,
      "carbs": 24,
      "fat": 27,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "598",
    "title": "Kimchi (Grilled)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 89,
    "servings": 2,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 571,
      "protein": 33,
      "carbs": 77,
      "fat": 18,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "599",
    "title": "Shakshuka (Spiced)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 81,
    "servings": 6,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 228,
      "protein": 24,
      "carbs": 59,
      "fat": 11,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "600",
    "title": "Jollof Rice (Heritage)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 261,
      "protein": 18,
      "carbs": 42,
      "fat": 22,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "601",
    "title": "Ceviche (Classic)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "hard",
    "cookingTime": 39,
    "servings": 5,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 505,
      "protein": 35,
      "carbs": 54,
      "fat": 30,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "602",
    "title": "Sauerbraten (Traditional)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 374,
      "protein": 18,
      "carbs": 10,
      "fat": 25,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "603",
    "title": "Bibimbap (Street Style)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "https://example.com/images/Bibimbap_(Street_Style).jpg",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 679,
      "protein": 26,
      "carbs": 68,
      "fat": 21,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "604",
    "title": "Laksa (Regional)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 68,
    "servings": 5,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 287,
      "protein": 17,
      "carbs": 24,
      "fat": 21,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "605",
    "title": "Poutine (Home-style)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 77,
    "servings": 5,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 299,
      "protein": 30,
      "carbs": 59,
      "fat": 26,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "606",
    "title": "Pierogi (Authentic)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 586,
      "protein": 33,
      "carbs": 43,
      "fat": 20,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "607",
    "title": "Tapas - Patatas Bravas (Slow-cooked)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 403,
      "protein": 32,
      "carbs": 17,
      "fat": 26,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "608",
    "title": "Biryani (Grilled)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 8,
      "carbs": 54,
      "fat": 9,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "609",
    "title": "Fufu & Egusi (Spiced)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 2,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 607,
      "protein": 40,
      "carbs": 10,
      "fat": 5,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "610",
    "title": "Souvlaki (Heritage)",
    "description": "Grilled skewered meat",
    "image": "https://example.com/images/Souvlaki_(Heritage).jpg",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 83,
    "servings": 6,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 234,
      "protein": 36,
      "carbs": 12,
      "fat": 16,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "611",
    "title": "Empanadas (Classic)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 498,
      "protein": 20,
      "carbs": 52,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "612",
    "title": "Rendang (Traditional)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 405,
      "protein": 25,
      "carbs": 52,
      "fat": 12,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "613",
    "title": "Baklava (Street Style)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 31,
    "servings": 4,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 262,
      "protein": 18,
      "carbs": 35,
      "fat": 26,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "614",
    "title": "Arepas (Regional)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 79,
    "servings": 3,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 186,
      "protein": 8,
      "carbs": 23,
      "fat": 19,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "615",
    "title": "Tamales (Home-style)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 51,
    "servings": 6,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 505,
      "protein": 23,
      "carbs": 28,
      "fat": 17,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "616",
    "title": "Okonomiyaki (Authentic)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 536,
      "protein": 9,
      "carbs": 69,
      "fat": 15,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "617",
    "title": "Congee (Slow-cooked)",
    "description": "Rice porridge often with savory toppings",
    "image": "https://example.com/images/Congee_(Slow-cooked).jpg",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 29,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 293,
      "protein": 17,
      "carbs": 68,
      "fat": 10,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "618",
    "title": "Couscous (Grilled)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 332,
      "protein": 6,
      "carbs": 50,
      "fat": 29,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "619",
    "title": "Chicken Adobo (Spiced)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 82,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 211,
      "protein": 29,
      "carbs": 67,
      "fat": 18,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "620",
    "title": "Fondue (Heritage)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "hard",
    "cookingTime": 84,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 597,
      "protein": 14,
      "carbs": 59,
      "fat": 18,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "621",
    "title": "Churrasco (Classic)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 40,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 203,
      "protein": 39,
      "carbs": 42,
      "fat": 11,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "622",
    "title": "Goloka (Ilokano) (Traditional)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 285,
      "protein": 20,
      "carbs": 71,
      "fat": 5,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "623",
    "title": "Khachapuri (Street Style)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "hard",
    "cookingTime": 67,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 372,
      "protein": 5,
      "carbs": 55,
      "fat": 7,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "624",
    "title": "Bobotie (Regional)",
    "description": "Curried mince baked with egg custard",
    "image": "https://example.com/images/Bobotie_(Regional).jpg",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 319,
      "protein": 26,
      "carbs": 39,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "625",
    "title": "Chole Bhature (Home-style)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 85,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 563,
      "protein": 8,
      "carbs": 28,
      "fat": 7,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "626",
    "title": "Okro Soup (Authentic)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 5,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 194,
      "protein": 21,
      "carbs": 70,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "627",
    "title": "Katsu Curry (Slow-cooked)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 3,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 284,
      "protein": 36,
      "carbs": 51,
      "fat": 29,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "628",
    "title": "Sancocho (Grilled)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 3,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 219,
      "protein": 18,
      "carbs": 19,
      "fat": 22,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "629",
    "title": "Tteokbokki (Spiced)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 22,
    "servings": 4,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 203,
      "protein": 20,
      "carbs": 67,
      "fat": 14,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "630",
    "title": "Maki Ramen (Heritage)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 6,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 204,
      "protein": 30,
      "carbs": 44,
      "fat": 8,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "631",
    "title": "Kebabs - D\u00f6ner (Classic)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "https://example.com/images/Kebabs_-_D\u00f6ner_(Classic).jpg",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 33,
    "servings": 2,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 204,
      "protein": 27,
      "carbs": 30,
      "fat": 7,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "632",
    "title": "Cassoulet (Traditional)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 89,
    "servings": 4,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 674,
      "protein": 11,
      "carbs": 70,
      "fat": 16,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "633",
    "title": "Pavlova (Street Style)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "hard",
    "cookingTime": 50,
    "servings": 5,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 355,
      "protein": 20,
      "carbs": 42,
      "fat": 19,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "634",
    "title": "Currywurst (Regional)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 6,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 580,
      "protein": 10,
      "carbs": 17,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "635",
    "title": "Lamb Tagine (Home-style)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 73,
    "servings": 6,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 681,
      "protein": 26,
      "carbs": 56,
      "fat": 29,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "636",
    "title": "Okonomiyaki (Authentic)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 63,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 538,
      "protein": 35,
      "carbs": 57,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "637",
    "title": "Sushi Rolls - California Roll (Slow-cooked)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 75,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 680,
      "protein": 30,
      "carbs": 67,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "638",
    "title": "Kulfi (Grilled)",
    "description": "Dense ice cream dessert",
    "image": "https://example.com/images/Kulfi_(Grilled).jpg",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 85,
    "servings": 2,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 313,
      "protein": 31,
      "carbs": 78,
      "fat": 20,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "639",
    "title": "Anticuchos (Spiced)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 4,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 574,
      "protein": 11,
      "carbs": 50,
      "fat": 14,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "640",
    "title": "Hummus (Heritage)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 311,
      "protein": 31,
      "carbs": 21,
      "fat": 11,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "641",
    "title": "Fajitas (Classic)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "easy",
    "cookingTime": 78,
    "servings": 3,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 618,
      "protein": 40,
      "carbs": 59,
      "fat": 13,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "642",
    "title": "Pizza Napoletana (Traditional)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 32,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 574,
      "protein": 6,
      "carbs": 47,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "643",
    "title": "Sm\u00f8rrebr\u00f8d (Street Style)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "hard",
    "cookingTime": 32,
    "servings": 4,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 508,
      "protein": 26,
      "carbs": 41,
      "fat": 17,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "644",
    "title": "Salm\u00f3n a la Plancha (Regional)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 3,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 448,
      "protein": 13,
      "carbs": 18,
      "fat": 23,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "645",
    "title": "Doro Wat (Home-style)",
    "description": "Spicy chicken stew with berbere",
    "image": "https://example.com/images/Doro_Wat_(Home-style).jpg",
    "cuisine": "ethiopia",
    "difficulty": "easy",
    "cookingTime": 67,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 598,
      "protein": 25,
      "carbs": 35,
      "fat": 11,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "646",
    "title": "Aloo Gobi (Authentic)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 18,
    "servings": 3,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 360,
      "protein": 11,
      "carbs": 62,
      "fat": 22,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "647",
    "title": "Paneer Tikka (Slow-cooked)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 64,
    "servings": 3,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 497,
      "protein": 34,
      "carbs": 43,
      "fat": 9,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "648",
    "title": "Ramen - Tonkotsu (Grilled)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 27,
    "servings": 3,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 526,
      "protein": 33,
      "carbs": 18,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "649",
    "title": "Croque Monsieur (Spiced)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 36,
    "servings": 4,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 697,
      "protein": 6,
      "carbs": 66,
      "fat": 8,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "650",
    "title": "Gado-Gado (Heritage)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 3,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 479,
      "protein": 11,
      "carbs": 12,
      "fat": 9,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "651",
    "title": "Cottage Pie (Classic)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 63,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 401,
      "protein": 7,
      "carbs": 20,
      "fat": 15,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "652",
    "title": "Khao Soi (Traditional)",
    "description": "Curry noodle soup from the north",
    "image": "https://example.com/images/Khao_Soi_(Traditional).jpg",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 26,
    "servings": 3,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 577,
      "protein": 26,
      "carbs": 58,
      "fat": 10,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "653",
    "title": "Bangers and Mash (Street Style)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 89,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 513,
      "protein": 6,
      "carbs": 48,
      "fat": 5,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "654",
    "title": "Lahmacun (Regional)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 22,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 441,
      "protein": 36,
      "carbs": 49,
      "fat": 12,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "655",
    "title": "Chimichurri Steak (Home-style)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 26,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 292,
      "protein": 13,
      "carbs": 74,
      "fat": 18,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "656",
    "title": "P\u00e3o de Queijo (Authentic)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 451,
      "protein": 33,
      "carbs": 25,
      "fat": 7,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "657",
    "title": "Samosa (Slow-cooked)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 89,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 428,
      "protein": 34,
      "carbs": 78,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "658",
    "title": "Pizza Margherita (Grilled)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 3,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 635,
      "protein": 32,
      "carbs": 80,
      "fat": 27,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "659",
    "title": "Sushi (Spiced)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "https://example.com/images/Sushi_(Spiced).jpg",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 27,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 505,
      "protein": 23,
      "carbs": 32,
      "fat": 5,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "660",
    "title": "Tacos al Pastor (Heritage)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 56,
    "servings": 4,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 446,
      "protein": 24,
      "carbs": 17,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "661",
    "title": "Peking Duck (Classic)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 6,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 632,
      "protein": 33,
      "carbs": 61,
      "fat": 28,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "662",
    "title": "Pad Thai (Traditional)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 34,
    "servings": 5,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 312,
      "protein": 27,
      "carbs": 11,
      "fat": 13,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "663",
    "title": "Ratatouille (Street Style)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 85,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 573,
      "protein": 34,
      "carbs": 54,
      "fat": 18,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "664",
    "title": "Paella (Regional)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 567,
      "protein": 16,
      "carbs": 30,
      "fat": 21,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "665",
    "title": "Feijoada (Home-style)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 55,
    "servings": 6,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 577,
      "protein": 40,
      "carbs": 56,
      "fat": 29,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "666",
    "title": "Borscht (Authentic)",
    "description": "Beetroot soup often served with sour cream",
    "image": "https://example.com/images/Borscht_(Authentic).jpg",
    "cuisine": "ukraine",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 2,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 475,
      "protein": 16,
      "carbs": 34,
      "fat": 5,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "667",
    "title": "Butter Chicken (Slow-cooked)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 21,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 379,
      "protein": 40,
      "carbs": 26,
      "fat": 14,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "668",
    "title": "Pho (Grilled)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 441,
      "protein": 16,
      "carbs": 15,
      "fat": 8,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "669",
    "title": "Moussaka (Spiced)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 566,
      "protein": 10,
      "carbs": 13,
      "fat": 30,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "670",
    "title": "Goulash (Heritage)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 368,
      "protein": 32,
      "carbs": 15,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "671",
    "title": "Kimchi (Classic)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 4,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 216,
      "protein": 33,
      "carbs": 17,
      "fat": 29,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "672",
    "title": "Shakshuka (Traditional)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "hard",
    "cookingTime": 55,
    "servings": 4,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 488,
      "protein": 26,
      "carbs": 50,
      "fat": 22,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "673",
    "title": "Jollof Rice (Street Style)",
    "description": "One-pot tomato rice with spices",
    "image": "https://example.com/images/Jollof_Rice_(Street_Style).jpg",
    "cuisine": "nigeria",
    "difficulty": "easy",
    "cookingTime": 82,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 341,
      "protein": 36,
      "carbs": 51,
      "fat": 22,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "674",
    "title": "Ceviche (Regional)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 79,
    "servings": 3,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 611,
      "protein": 29,
      "carbs": 72,
      "fat": 17,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "675",
    "title": "Sauerbraten (Home-style)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 58,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 451,
      "protein": 9,
      "carbs": 47,
      "fat": 6,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "676",
    "title": "Bibimbap (Authentic)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 196,
      "protein": 23,
      "carbs": 66,
      "fat": 8,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "677",
    "title": "Laksa (Slow-cooked)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "easy",
    "cookingTime": 55,
    "servings": 3,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 393,
      "protein": 31,
      "carbs": 55,
      "fat": 14,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "678",
    "title": "Poutine (Grilled)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 60,
    "servings": 5,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 695,
      "protein": 9,
      "carbs": 70,
      "fat": 30,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "679",
    "title": "Pierogi (Spiced)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "easy",
    "cookingTime": 90,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 692,
      "protein": 15,
      "carbs": 70,
      "fat": 10,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "680",
    "title": "Tapas - Patatas Bravas (Heritage)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "https://example.com/images/Tapas_-_Patatas_Bravas_(Heritage).jpg",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 16,
    "servings": 5,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 395,
      "protein": 24,
      "carbs": 11,
      "fat": 15,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "681",
    "title": "Biryani (Classic)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 90,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 352,
      "protein": 22,
      "carbs": 14,
      "fat": 30,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "682",
    "title": "Fufu & Egusi (Traditional)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 5,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 601,
      "protein": 25,
      "carbs": 16,
      "fat": 25,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "683",
    "title": "Souvlaki (Street Style)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 54,
    "servings": 3,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 364,
      "protein": 10,
      "carbs": 60,
      "fat": 25,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "684",
    "title": "Empanadas (Regional)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 184,
      "protein": 26,
      "carbs": 25,
      "fat": 25,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "685",
    "title": "Rendang (Home-style)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 88,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 465,
      "protein": 18,
      "carbs": 57,
      "fat": 16,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "686",
    "title": "Baklava (Authentic)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 86,
    "servings": 2,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 537,
      "protein": 24,
      "carbs": 76,
      "fat": 14,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "687",
    "title": "Arepas (Slow-cooked)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "https://example.com/images/Arepas_(Slow-cooked).jpg",
    "cuisine": "venezuela",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 2,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 470,
      "protein": 21,
      "carbs": 28,
      "fat": 23,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "688",
    "title": "Tamales (Grilled)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 22,
    "servings": 2,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 455,
      "protein": 11,
      "carbs": 52,
      "fat": 28,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "689",
    "title": "Okonomiyaki (Spiced)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 88,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 231,
      "protein": 26,
      "carbs": 37,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "690",
    "title": "Congee (Heritage)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 19,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 690,
      "protein": 35,
      "carbs": 56,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "691",
    "title": "Couscous (Classic)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 55,
    "servings": 5,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 698,
      "protein": 12,
      "carbs": 40,
      "fat": 22,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "692",
    "title": "Chicken Adobo (Traditional)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 68,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 422,
      "protein": 21,
      "carbs": 71,
      "fat": 21,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "693",
    "title": "Fondue (Street Style)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "hard",
    "cookingTime": 37,
    "servings": 5,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 366,
      "protein": 8,
      "carbs": 37,
      "fat": 18,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "694",
    "title": "Churrasco (Regional)",
    "description": "Grilled steak often with chimichurri",
    "image": "https://example.com/images/Churrasco_(Regional).jpg",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 89,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 397,
      "protein": 20,
      "carbs": 49,
      "fat": 27,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "695",
    "title": "Goloka (Ilokano) (Home-style)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 81,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 289,
      "protein": 16,
      "carbs": 69,
      "fat": 10,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "696",
    "title": "Khachapuri (Authentic)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "medium",
    "cookingTime": 83,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 442,
      "protein": 9,
      "carbs": 45,
      "fat": 26,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "697",
    "title": "Bobotie (Slow-cooked)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "medium",
    "cookingTime": 44,
    "servings": 5,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 609,
      "protein": 8,
      "carbs": 40,
      "fat": 16,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "698",
    "title": "Chole Bhature (Grilled)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 68,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 602,
      "protein": 9,
      "carbs": 76,
      "fat": 6,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "699",
    "title": "Okro Soup (Spiced)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "medium",
    "cookingTime": 33,
    "servings": 5,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 428,
      "protein": 10,
      "carbs": 13,
      "fat": 15,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "700",
    "title": "Katsu Curry (Heritage)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 2,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 399,
      "protein": 14,
      "carbs": 78,
      "fat": 12,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "701",
    "title": "Sancocho (Classic)",
    "description": "Hearty meat & root stew",
    "image": "https://example.com/images/Sancocho_(Classic).jpg",
    "cuisine": "dominican republic",
    "difficulty": "medium",
    "cookingTime": 39,
    "servings": 2,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 481,
      "protein": 17,
      "carbs": 74,
      "fat": 24,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "702",
    "title": "Tteokbokki (Traditional)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 37,
    "servings": 3,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 339,
      "protein": 15,
      "carbs": 72,
      "fat": 23,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "703",
    "title": "Maki Ramen (Street Style)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 6,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 419,
      "protein": 39,
      "carbs": 48,
      "fat": 23,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "704",
    "title": "Kebabs - D\u00f6ner (Regional)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 53,
    "servings": 5,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 628,
      "protein": 38,
      "carbs": 21,
      "fat": 20,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "705",
    "title": "Cassoulet (Home-style)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 31,
    "servings": 4,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 242,
      "protein": 17,
      "carbs": 22,
      "fat": 15,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "706",
    "title": "Pavlova (Authentic)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 410,
      "protein": 19,
      "carbs": 67,
      "fat": 14,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "707",
    "title": "Currywurst (Slow-cooked)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 12,
    "servings": 2,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 420,
      "protein": 24,
      "carbs": 39,
      "fat": 10,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "708",
    "title": "Lamb Tagine (Grilled)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "https://example.com/images/Lamb_Tagine_(Grilled).jpg",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 68,
    "servings": 2,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 306,
      "protein": 9,
      "carbs": 47,
      "fat": 14,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "709",
    "title": "Okonomiyaki (Spiced)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 539,
      "protein": 27,
      "carbs": 14,
      "fat": 25,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "710",
    "title": "Sushi Rolls - California Roll (Heritage)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 82,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 613,
      "protein": 10,
      "carbs": 57,
      "fat": 12,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "711",
    "title": "Kulfi (Classic)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 5,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 284,
      "protein": 14,
      "carbs": 17,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "712",
    "title": "Anticuchos (Traditional)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 2,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 671,
      "protein": 5,
      "carbs": 60,
      "fat": 12,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "713",
    "title": "Hummus (Street Style)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "hard",
    "cookingTime": 38,
    "servings": 2,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 438,
      "protein": 17,
      "carbs": 41,
      "fat": 29,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "714",
    "title": "Fajitas (Regional)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "easy",
    "cookingTime": 68,
    "servings": 4,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 513,
      "protein": 13,
      "carbs": 56,
      "fat": 28,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "715",
    "title": "Pizza Napoletana (Home-style)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "https://example.com/images/Pizza_Napoletana_(Home-style).jpg",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 76,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 246,
      "protein": 39,
      "carbs": 66,
      "fat": 10,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "716",
    "title": "Sm\u00f8rrebr\u00f8d (Authentic)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "hard",
    "cookingTime": 65,
    "servings": 4,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 212,
      "protein": 8,
      "carbs": 71,
      "fat": 26,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "717",
    "title": "Salm\u00f3n a la Plancha (Slow-cooked)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 18,
    "servings": 5,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 687,
      "protein": 16,
      "carbs": 27,
      "fat": 15,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "718",
    "title": "Doro Wat (Grilled)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "hard",
    "cookingTime": 22,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 393,
      "protein": 29,
      "carbs": 59,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "719",
    "title": "Aloo Gobi (Spiced)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 59,
    "servings": 2,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 254,
      "protein": 13,
      "carbs": 44,
      "fat": 29,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "720",
    "title": "Paneer Tikka (Heritage)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 66,
    "servings": 5,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 575,
      "protein": 19,
      "carbs": 10,
      "fat": 15,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "721",
    "title": "Ramen - Tonkotsu (Classic)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 3,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 571,
      "protein": 31,
      "carbs": 51,
      "fat": 18,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "722",
    "title": "Croque Monsieur (Traditional)",
    "description": "Grilled ham and cheese sandwich",
    "image": "https://example.com/images/Croque_Monsieur_(Traditional).jpg",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 4,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 632,
      "protein": 15,
      "carbs": 79,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "723",
    "title": "Gado-Gado (Street Style)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 81,
    "servings": 5,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 443,
      "protein": 11,
      "carbs": 54,
      "fat": 12,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "724",
    "title": "Cottage Pie (Regional)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 626,
      "protein": 32,
      "carbs": 16,
      "fat": 13,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "725",
    "title": "Khao Soi (Home-style)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 68,
    "servings": 6,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 383,
      "protein": 39,
      "carbs": 62,
      "fat": 20,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "726",
    "title": "Bangers and Mash (Authentic)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 217,
      "protein": 13,
      "carbs": 74,
      "fat": 29,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "727",
    "title": "Lahmacun (Slow-cooked)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 549,
      "protein": 35,
      "carbs": 15,
      "fat": 13,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "728",
    "title": "Chimichurri Steak (Grilled)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 83,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 604,
      "protein": 13,
      "carbs": 38,
      "fat": 18,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "729",
    "title": "P\u00e3o de Queijo (Spiced)",
    "description": "Cheesy cassava bread",
    "image": "https://example.com/images/P\u00e3o_de_Queijo_(Spiced).jpg",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 31,
    "servings": 4,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 438,
      "protein": 36,
      "carbs": 46,
      "fat": 16,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "730",
    "title": "Samosa (Heritage)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 211,
      "protein": 23,
      "carbs": 29,
      "fat": 29,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "731",
    "title": "Pizza Margherita (Classic)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 57,
    "servings": 6,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 206,
      "protein": 37,
      "carbs": 57,
      "fat": 9,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "732",
    "title": "Sushi (Traditional)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 32,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 373,
      "protein": 6,
      "carbs": 66,
      "fat": 20,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "733",
    "title": "Tacos al Pastor (Street Style)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 43,
    "servings": 5,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 460,
      "protein": 8,
      "carbs": 67,
      "fat": 14,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "734",
    "title": "Peking Duck (Regional)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "medium",
    "cookingTime": 19,
    "servings": 4,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 416,
      "protein": 33,
      "carbs": 38,
      "fat": 14,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "735",
    "title": "Pad Thai (Home-style)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 88,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 612,
      "protein": 20,
      "carbs": 71,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "736",
    "title": "Ratatouille (Authentic)",
    "description": "Vegetable stew from Provence",
    "image": "https://example.com/images/Ratatouille_(Authentic).jpg",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 42,
    "servings": 2,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 380,
      "protein": 19,
      "carbs": 46,
      "fat": 6,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "737",
    "title": "Paella (Slow-cooked)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 47,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 327,
      "protein": 35,
      "carbs": 34,
      "fat": 25,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "738",
    "title": "Feijoada (Grilled)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 44,
    "servings": 6,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 642,
      "protein": 27,
      "carbs": 57,
      "fat": 12,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "739",
    "title": "Borscht (Spiced)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 6,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 323,
      "protein": 23,
      "carbs": 14,
      "fat": 8,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "740",
    "title": "Butter Chicken (Heritage)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 265,
      "protein": 19,
      "carbs": 73,
      "fat": 15,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "741",
    "title": "Pho (Classic)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "hard",
    "cookingTime": 51,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 280,
      "protein": 14,
      "carbs": 63,
      "fat": 18,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "742",
    "title": "Moussaka (Traditional)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 223,
      "protein": 16,
      "carbs": 23,
      "fat": 5,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "743",
    "title": "Goulash (Street Style)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "https://example.com/images/Goulash_(Street_Style).jpg",
    "cuisine": "hungary",
    "difficulty": "hard",
    "cookingTime": 53,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 689,
      "protein": 36,
      "carbs": 32,
      "fat": 5,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "744",
    "title": "Kimchi (Regional)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 49,
    "servings": 4,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 402,
      "protein": 39,
      "carbs": 66,
      "fat": 18,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "745",
    "title": "Shakshuka (Home-style)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 5,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 242,
      "protein": 37,
      "carbs": 23,
      "fat": 19,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "746",
    "title": "Jollof Rice (Authentic)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "easy",
    "cookingTime": 80,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 664,
      "protein": 31,
      "carbs": 37,
      "fat": 15,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "747",
    "title": "Ceviche (Slow-cooked)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 5,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 504,
      "protein": 14,
      "carbs": 32,
      "fat": 28,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "748",
    "title": "Sauerbraten (Grilled)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 87,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 316,
      "protein": 13,
      "carbs": 24,
      "fat": 18,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "749",
    "title": "Bibimbap (Spiced)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 78,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 317,
      "protein": 23,
      "carbs": 18,
      "fat": 15,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "750",
    "title": "Laksa (Heritage)",
    "description": "Spicy coconut noodle soup",
    "image": "https://example.com/images/Laksa_(Heritage).jpg",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 88,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 475,
      "protein": 12,
      "carbs": 27,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "751",
    "title": "Poutine (Classic)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 22,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 404,
      "protein": 6,
      "carbs": 74,
      "fat": 9,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "752",
    "title": "Pierogi (Traditional)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "hard",
    "cookingTime": 76,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 345,
      "protein": 8,
      "carbs": 46,
      "fat": 24,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "753",
    "title": "Tapas - Patatas Bravas (Street Style)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 18,
    "servings": 2,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 685,
      "protein": 34,
      "carbs": 27,
      "fat": 19,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "754",
    "title": "Biryani (Regional)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 31,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 249,
      "protein": 23,
      "carbs": 72,
      "fat": 26,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "755",
    "title": "Fufu & Egusi (Home-style)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 6,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 431,
      "protein": 28,
      "carbs": 12,
      "fat": 12,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "756",
    "title": "Souvlaki (Authentic)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 25,
    "servings": 6,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 555,
      "protein": 39,
      "carbs": 77,
      "fat": 17,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "757",
    "title": "Empanadas (Slow-cooked)",
    "description": "Stuffed pastry turnovers",
    "image": "https://example.com/images/Empanadas_(Slow-cooked).jpg",
    "cuisine": "argentina",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 613,
      "protein": 10,
      "carbs": 10,
      "fat": 7,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "758",
    "title": "Rendang (Grilled)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 443,
      "protein": 9,
      "carbs": 74,
      "fat": 28,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "759",
    "title": "Baklava (Spiced)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 196,
      "protein": 28,
      "carbs": 77,
      "fat": 22,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "760",
    "title": "Arepas (Heritage)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 3,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 642,
      "protein": 27,
      "carbs": 32,
      "fat": 25,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "761",
    "title": "Tamales (Classic)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 65,
    "servings": 5,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 415,
      "protein": 27,
      "carbs": 37,
      "fat": 13,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "762",
    "title": "Okonomiyaki (Traditional)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 19,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 664,
      "protein": 10,
      "carbs": 79,
      "fat": 24,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "763",
    "title": "Congee (Street Style)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 676,
      "protein": 16,
      "carbs": 29,
      "fat": 20,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "764",
    "title": "Couscous (Regional)",
    "description": "Steamed semolina with stew",
    "image": "https://example.com/images/Couscous_(Regional).jpg",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 11,
    "servings": 3,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 574,
      "protein": 14,
      "carbs": 76,
      "fat": 15,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "765",
    "title": "Chicken Adobo (Home-style)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 70,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 684,
      "protein": 26,
      "carbs": 17,
      "fat": 17,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "766",
    "title": "Fondue (Authentic)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "easy",
    "cookingTime": 51,
    "servings": 2,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 441,
      "protein": 25,
      "carbs": 62,
      "fat": 19,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "767",
    "title": "Churrasco (Slow-cooked)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "medium",
    "cookingTime": 39,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 332,
      "protein": 11,
      "carbs": 12,
      "fat": 5,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "768",
    "title": "Goloka (Ilokano) (Grilled)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 85,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 219,
      "protein": 7,
      "carbs": 52,
      "fat": 23,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "769",
    "title": "Khachapuri (Spiced)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 67,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 538,
      "protein": 11,
      "carbs": 25,
      "fat": 9,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "770",
    "title": "Bobotie (Heritage)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 43,
    "servings": 4,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 288,
      "protein": 19,
      "carbs": 62,
      "fat": 19,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "771",
    "title": "Chole Bhature (Classic)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "https://example.com/images/Chole_Bhature_(Classic).jpg",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 38,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 297,
      "protein": 34,
      "carbs": 30,
      "fat": 8,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "772",
    "title": "Okro Soup (Traditional)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "medium",
    "cookingTime": 68,
    "servings": 2,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 633,
      "protein": 8,
      "carbs": 69,
      "fat": 5,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "773",
    "title": "Katsu Curry (Street Style)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 41,
    "servings": 2,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 509,
      "protein": 26,
      "carbs": 66,
      "fat": 6,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "774",
    "title": "Sancocho (Regional)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "easy",
    "cookingTime": 32,
    "servings": 2,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 351,
      "protein": 21,
      "carbs": 54,
      "fat": 27,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "775",
    "title": "Tteokbokki (Home-style)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 90,
    "servings": 2,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 587,
      "protein": 37,
      "carbs": 28,
      "fat": 11,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "776",
    "title": "Maki Ramen (Authentic)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 42,
    "servings": 5,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 552,
      "protein": 33,
      "carbs": 14,
      "fat": 29,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "777",
    "title": "Kebabs - D\u00f6ner (Slow-cooked)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 14,
    "servings": 6,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 651,
      "protein": 40,
      "carbs": 29,
      "fat": 21,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "778",
    "title": "Cassoulet (Grilled)",
    "description": "Slow white bean & meat stew",
    "image": "https://example.com/images/Cassoulet_(Grilled).jpg",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 31,
    "servings": 6,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 442,
      "protein": 21,
      "carbs": 19,
      "fat": 14,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "779",
    "title": "Pavlova (Spiced)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "hard",
    "cookingTime": 26,
    "servings": 4,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 365,
      "protein": 25,
      "carbs": 22,
      "fat": 28,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "780",
    "title": "Currywurst (Heritage)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 58,
    "servings": 4,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 201,
      "protein": 25,
      "carbs": 44,
      "fat": 21,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "781",
    "title": "Lamb Tagine (Classic)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 66,
    "servings": 6,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 650,
      "protein": 32,
      "carbs": 49,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "782",
    "title": "Okonomiyaki (Traditional)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 29,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 222,
      "protein": 13,
      "carbs": 20,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "783",
    "title": "Sushi Rolls - California Roll (Street Style)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "easy",
    "cookingTime": 87,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 526,
      "protein": 25,
      "carbs": 79,
      "fat": 29,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "784",
    "title": "Kulfi (Regional)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 87,
    "servings": 3,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 672,
      "protein": 14,
      "carbs": 46,
      "fat": 5,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "785",
    "title": "Anticuchos (Home-style)",
    "description": "Grilled skewers usually beef heart",
    "image": "https://example.com/images/Anticuchos_(Home-style).jpg",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 81,
    "servings": 3,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 374,
      "protein": 37,
      "carbs": 52,
      "fat": 24,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "786",
    "title": "Hummus (Authentic)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 484,
      "protein": 19,
      "carbs": 15,
      "fat": 12,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "787",
    "title": "Fajitas (Slow-cooked)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "medium",
    "cookingTime": 37,
    "servings": 3,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 588,
      "protein": 8,
      "carbs": 22,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "788",
    "title": "Pizza Napoletana (Grilled)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 394,
      "protein": 27,
      "carbs": 16,
      "fat": 13,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "789",
    "title": "Sm\u00f8rrebr\u00f8d (Spiced)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "hard",
    "cookingTime": 89,
    "servings": 2,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 354,
      "protein": 17,
      "carbs": 31,
      "fat": 28,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "790",
    "title": "Salm\u00f3n a la Plancha (Heritage)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 69,
    "servings": 3,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 601,
      "protein": 6,
      "carbs": 75,
      "fat": 29,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "791",
    "title": "Doro Wat (Classic)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 555,
      "protein": 36,
      "carbs": 59,
      "fat": 11,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "792",
    "title": "Aloo Gobi (Traditional)",
    "description": "Potato and cauliflower dry curry",
    "image": "https://example.com/images/Aloo_Gobi_(Traditional).jpg",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 41,
    "servings": 5,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 438,
      "protein": 38,
      "carbs": 26,
      "fat": 14,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "793",
    "title": "Paneer Tikka (Street Style)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 80,
    "servings": 4,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 523,
      "protein": 12,
      "carbs": 55,
      "fat": 18,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "794",
    "title": "Ramen - Tonkotsu (Regional)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 35,
    "servings": 4,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 440,
      "protein": 40,
      "carbs": 22,
      "fat": 27,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "795",
    "title": "Croque Monsieur (Home-style)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 77,
    "servings": 4,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 339,
      "protein": 29,
      "carbs": 72,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "796",
    "title": "Gado-Gado (Authentic)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 460,
      "protein": 26,
      "carbs": 70,
      "fat": 24,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "797",
    "title": "Cottage Pie (Slow-cooked)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 6,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 539,
      "protein": 10,
      "carbs": 26,
      "fat": 9,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "798",
    "title": "Khao Soi (Grilled)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 54,
    "servings": 5,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 600,
      "protein": 5,
      "carbs": 17,
      "fat": 9,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "799",
    "title": "Bangers and Mash (Spiced)",
    "description": "Sausages with mashed potato and gravy",
    "image": "https://example.com/images/Bangers_and_Mash_(Spiced).jpg",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 89,
    "servings": 6,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 395,
      "protein": 11,
      "carbs": 33,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "800",
    "title": "Lahmacun (Heritage)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 36,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 255,
      "protein": 15,
      "carbs": 11,
      "fat": 25,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "801",
    "title": "Chimichurri Steak (Classic)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 74,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 296,
      "protein": 13,
      "carbs": 61,
      "fat": 23,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "802",
    "title": "P\u00e3o de Queijo (Traditional)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 10,
    "servings": 5,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 500,
      "protein": 36,
      "carbs": 71,
      "fat": 9,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "803",
    "title": "Samosa (Street Style)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 64,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 492,
      "protein": 20,
      "carbs": 70,
      "fat": 20,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "804",
    "title": "Pizza Margherita (Regional)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 6,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 405,
      "protein": 17,
      "carbs": 56,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "805",
    "title": "Sushi (Home-style)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 86,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 458,
      "protein": 15,
      "carbs": 56,
      "fat": 22,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "806",
    "title": "Tacos al Pastor (Authentic)",
    "description": "Marinated pork tacos with pineapple",
    "image": "https://example.com/images/Tacos_al_Pastor_(Authentic).jpg",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 279,
      "protein": 33,
      "carbs": 43,
      "fat": 28,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "807",
    "title": "Peking Duck (Slow-cooked)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 4,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 438,
      "protein": 9,
      "carbs": 73,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "808",
    "title": "Pad Thai (Grilled)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 366,
      "protein": 12,
      "carbs": 43,
      "fat": 21,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "809",
    "title": "Ratatouille (Spiced)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 506,
      "protein": 37,
      "carbs": 46,
      "fat": 8,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "810",
    "title": "Paella (Heritage)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 23,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 633,
      "protein": 40,
      "carbs": 22,
      "fat": 13,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "811",
    "title": "Feijoada (Classic)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 82,
    "servings": 5,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 389,
      "protein": 27,
      "carbs": 59,
      "fat": 25,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "812",
    "title": "Borscht (Traditional)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "hard",
    "cookingTime": 42,
    "servings": 2,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 617,
      "protein": 30,
      "carbs": 29,
      "fat": 13,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "813",
    "title": "Butter Chicken (Street Style)",
    "description": "Creamy tomato-based chicken curry",
    "image": "https://example.com/images/Butter_Chicken_(Street_Style).jpg",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 15,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 499,
      "protein": 25,
      "carbs": 61,
      "fat": 22,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "814",
    "title": "Pho (Regional)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "easy",
    "cookingTime": 53,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 206,
      "protein": 29,
      "carbs": 40,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "815",
    "title": "Moussaka (Home-style)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 601,
      "protein": 32,
      "carbs": 31,
      "fat": 5,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "816",
    "title": "Goulash (Authentic)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 63,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 619,
      "protein": 14,
      "carbs": 62,
      "fat": 28,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "817",
    "title": "Kimchi (Slow-cooked)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 60,
    "servings": 6,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 403,
      "protein": 10,
      "carbs": 26,
      "fat": 25,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "818",
    "title": "Shakshuka (Grilled)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 6,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 425,
      "protein": 33,
      "carbs": 23,
      "fat": 24,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "819",
    "title": "Jollof Rice (Spiced)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "hard",
    "cookingTime": 29,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 581,
      "protein": 19,
      "carbs": 63,
      "fat": 15,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "820",
    "title": "Ceviche (Heritage)",
    "description": "Raw seafood cured in citrus juice",
    "image": "https://example.com/images/Ceviche_(Heritage).jpg",
    "cuisine": "peru",
    "difficulty": "hard",
    "cookingTime": 78,
    "servings": 4,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 544,
      "protein": 32,
      "carbs": 70,
      "fat": 13,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "821",
    "title": "Sauerbraten (Classic)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 85,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 384,
      "protein": 27,
      "carbs": 58,
      "fat": 22,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "822",
    "title": "Bibimbap (Traditional)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 85,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 254,
      "protein": 30,
      "carbs": 12,
      "fat": 19,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "823",
    "title": "Laksa (Street Style)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "medium",
    "cookingTime": 37,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 670,
      "protein": 37,
      "carbs": 24,
      "fat": 13,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "824",
    "title": "Poutine (Regional)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 45,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 681,
      "protein": 29,
      "carbs": 30,
      "fat": 30,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "825",
    "title": "Pierogi (Home-style)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "easy",
    "cookingTime": 73,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 651,
      "protein": 32,
      "carbs": 10,
      "fat": 6,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "826",
    "title": "Tapas - Patatas Bravas (Authentic)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 12,
    "servings": 2,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 502,
      "protein": 28,
      "carbs": 39,
      "fat": 10,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "827",
    "title": "Biryani (Slow-cooked)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "https://example.com/images/Biryani_(Slow-cooked).jpg",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 85,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 433,
      "protein": 39,
      "carbs": 30,
      "fat": 11,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "828",
    "title": "Fufu & Egusi (Grilled)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "medium",
    "cookingTime": 61,
    "servings": 3,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 650,
      "protein": 22,
      "carbs": 14,
      "fat": 17,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "829",
    "title": "Souvlaki (Spiced)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 18,
    "servings": 6,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 183,
      "protein": 25,
      "carbs": 49,
      "fat": 10,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "830",
    "title": "Empanadas (Heritage)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 18,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 666,
      "protein": 39,
      "carbs": 56,
      "fat": 22,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "831",
    "title": "Rendang (Classic)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 55,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 203,
      "protein": 30,
      "carbs": 60,
      "fat": 9,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "832",
    "title": "Baklava (Traditional)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 5,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 531,
      "protein": 40,
      "carbs": 71,
      "fat": 7,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "833",
    "title": "Arepas (Street Style)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "medium",
    "cookingTime": 40,
    "servings": 4,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 425,
      "protein": 14,
      "carbs": 33,
      "fat": 15,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "834",
    "title": "Tamales (Regional)",
    "description": "Masa dough steamed in corn husks",
    "image": "https://example.com/images/Tamales_(Regional).jpg",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 61,
    "servings": 3,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 675,
      "protein": 39,
      "carbs": 66,
      "fat": 14,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "835",
    "title": "Okonomiyaki (Home-style)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 90,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 605,
      "protein": 31,
      "carbs": 43,
      "fat": 11,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "836",
    "title": "Congee (Authentic)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 83,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 279,
      "protein": 8,
      "carbs": 49,
      "fat": 26,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "837",
    "title": "Couscous (Slow-cooked)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "medium",
    "cookingTime": 47,
    "servings": 3,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 298,
      "protein": 28,
      "carbs": 74,
      "fat": 22,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "838",
    "title": "Chicken Adobo (Grilled)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 36,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 688,
      "protein": 35,
      "carbs": 12,
      "fat": 22,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "839",
    "title": "Fondue (Spiced)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "medium",
    "cookingTime": 57,
    "servings": 3,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 578,
      "protein": 6,
      "carbs": 32,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "840",
    "title": "Churrasco (Heritage)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 60,
    "servings": 6,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 580,
      "protein": 37,
      "carbs": 27,
      "fat": 19,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "841",
    "title": "Goloka (Ilokano) (Classic)",
    "description": "Traditional Ilocano dish - example",
    "image": "https://example.com/images/Goloka_(Ilokano)_(Classic).jpg",
    "cuisine": "philippines",
    "difficulty": "easy",
    "cookingTime": 25,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 580,
      "protein": 16,
      "carbs": 49,
      "fat": 25,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "842",
    "title": "Khachapuri (Traditional)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 545,
      "protein": 27,
      "carbs": 43,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "843",
    "title": "Bobotie (Street Style)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "medium",
    "cookingTime": 16,
    "servings": 4,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 200,
      "protein": 36,
      "carbs": 55,
      "fat": 23,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "844",
    "title": "Chole Bhature (Regional)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 78,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 431,
      "protein": 7,
      "carbs": 26,
      "fat": 14,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "845",
    "title": "Okro Soup (Home-style)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 38,
    "servings": 3,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 583,
      "protein": 26,
      "carbs": 26,
      "fat": 6,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "846",
    "title": "Katsu Curry (Authentic)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 15,
    "servings": 5,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 370,
      "protein": 24,
      "carbs": 80,
      "fat": 24,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "847",
    "title": "Sancocho (Slow-cooked)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 289,
      "protein": 14,
      "carbs": 66,
      "fat": 5,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "848",
    "title": "Tteokbokki (Grilled)",
    "description": "Spicy rice cake street food",
    "image": "https://example.com/images/Tteokbokki_(Grilled).jpg",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 47,
    "servings": 3,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 544,
      "protein": 18,
      "carbs": 80,
      "fat": 29,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "849",
    "title": "Maki Ramen (Spiced)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 38,
    "servings": 2,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 506,
      "protein": 40,
      "carbs": 46,
      "fat": 11,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "850",
    "title": "Kebabs - D\u00f6ner (Heritage)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 10,
    "servings": 6,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 300,
      "protein": 25,
      "carbs": 68,
      "fat": 21,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "851",
    "title": "Cassoulet (Classic)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 38,
    "servings": 3,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 516,
      "protein": 18,
      "carbs": 73,
      "fat": 21,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "852",
    "title": "Pavlova (Traditional)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "medium",
    "cookingTime": 35,
    "servings": 3,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 517,
      "protein": 15,
      "carbs": 60,
      "fat": 6,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "853",
    "title": "Currywurst (Street Style)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 16,
    "servings": 4,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 220,
      "protein": 39,
      "carbs": 64,
      "fat": 14,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "854",
    "title": "Lamb Tagine (Regional)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 19,
    "servings": 2,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 587,
      "protein": 10,
      "carbs": 34,
      "fat": 19,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "855",
    "title": "Okonomiyaki (Home-style)",
    "description": "Savory pancake with various toppings",
    "image": "https://example.com/images/Okonomiyaki_(Home-style).jpg",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 56,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 474,
      "protein": 30,
      "carbs": 18,
      "fat": 19,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "856",
    "title": "Sushi Rolls - California Roll (Authentic)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "hard",
    "cookingTime": 85,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 318,
      "protein": 23,
      "carbs": 17,
      "fat": 10,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "857",
    "title": "Kulfi (Slow-cooked)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 6,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 290,
      "protein": 18,
      "carbs": 24,
      "fat": 16,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "858",
    "title": "Anticuchos (Grilled)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 61,
    "servings": 5,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 683,
      "protein": 32,
      "carbs": 25,
      "fat": 16,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "859",
    "title": "Hummus (Spiced)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "medium",
    "cookingTime": 88,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 463,
      "protein": 31,
      "carbs": 58,
      "fat": 11,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "860",
    "title": "Fajitas (Heritage)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "hard",
    "cookingTime": 12,
    "servings": 2,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 665,
      "protein": 34,
      "carbs": 31,
      "fat": 20,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "861",
    "title": "Pizza Napoletana (Classic)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 62,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 421,
      "protein": 29,
      "carbs": 44,
      "fat": 21,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "862",
    "title": "Sm\u00f8rrebr\u00f8d (Traditional)",
    "description": "Open-faced sandwiches on rye",
    "image": "https://example.com/images/Sm\u00f8rrebr\u00f8d_(Traditional).jpg",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 59,
    "servings": 6,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 184,
      "protein": 28,
      "carbs": 33,
      "fat": 17,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "863",
    "title": "Salm\u00f3n a la Plancha (Street Style)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 55,
    "servings": 5,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 323,
      "protein": 5,
      "carbs": 39,
      "fat": 25,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "864",
    "title": "Doro Wat (Regional)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "hard",
    "cookingTime": 30,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 227,
      "protein": 29,
      "carbs": 71,
      "fat": 19,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "865",
    "title": "Aloo Gobi (Home-style)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 60,
    "servings": 5,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 222,
      "protein": 28,
      "carbs": 69,
      "fat": 5,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "866",
    "title": "Paneer Tikka (Authentic)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 55,
    "servings": 5,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 444,
      "protein": 32,
      "carbs": 12,
      "fat": 21,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "867",
    "title": "Ramen - Tonkotsu (Slow-cooked)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 55,
    "servings": 5,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 638,
      "protein": 11,
      "carbs": 36,
      "fat": 16,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "868",
    "title": "Croque Monsieur (Grilled)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 39,
    "servings": 5,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 640,
      "protein": 6,
      "carbs": 41,
      "fat": 22,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "869",
    "title": "Gado-Gado (Spiced)",
    "description": "Vegetable salad with peanut sauce",
    "image": "https://example.com/images/Gado-Gado_(Spiced).jpg",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 36,
    "servings": 6,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 539,
      "protein": 30,
      "carbs": 23,
      "fat": 24,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "870",
    "title": "Cottage Pie (Heritage)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 59,
    "servings": 5,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 448,
      "protein": 27,
      "carbs": 51,
      "fat": 27,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "871",
    "title": "Khao Soi (Classic)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 20,
    "servings": 3,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 425,
      "protein": 9,
      "carbs": 30,
      "fat": 13,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "872",
    "title": "Bangers and Mash (Traditional)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 74,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 622,
      "protein": 32,
      "carbs": 54,
      "fat": 29,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "873",
    "title": "Lahmacun (Street Style)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 58,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 565,
      "protein": 24,
      "carbs": 63,
      "fat": 21,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "874",
    "title": "Chimichurri Steak (Regional)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 19,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 470,
      "protein": 26,
      "carbs": 52,
      "fat": 20,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "875",
    "title": "P\u00e3o de Queijo (Home-style)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 15,
    "servings": 5,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 322,
      "protein": 12,
      "carbs": 54,
      "fat": 6,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "876",
    "title": "Samosa (Authentic)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "https://example.com/images/Samosa_(Authentic).jpg",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 83,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 459,
      "protein": 13,
      "carbs": 29,
      "fat": 10,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "877",
    "title": "Pizza Margherita (Slow-cooked)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "hard",
    "cookingTime": 86,
    "servings": 5,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 511,
      "protein": 40,
      "carbs": 28,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "878",
    "title": "Sushi (Grilled)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 14,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 235,
      "protein": 23,
      "carbs": 65,
      "fat": 19,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "879",
    "title": "Tacos al Pastor (Spiced)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 6,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 700,
      "protein": 39,
      "carbs": 20,
      "fat": 13,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "880",
    "title": "Peking Duck (Heritage)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 6,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 670,
      "protein": 29,
      "carbs": 14,
      "fat": 17,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "881",
    "title": "Pad Thai (Classic)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 79,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 389,
      "protein": 17,
      "carbs": 63,
      "fat": 7,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "882",
    "title": "Ratatouille (Traditional)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 20,
    "servings": 3,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 507,
      "protein": 16,
      "carbs": 18,
      "fat": 5,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "883",
    "title": "Paella (Street Style)",
    "description": "Saffron rice with seafood or meat",
    "image": "https://example.com/images/Paella_(Street_Style).jpg",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 46,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 361,
      "protein": 32,
      "carbs": 55,
      "fat": 27,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "884",
    "title": "Feijoada (Regional)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 14,
    "servings": 6,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 307,
      "protein": 17,
      "carbs": 63,
      "fat": 9,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "885",
    "title": "Borscht (Home-style)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "medium",
    "cookingTime": 50,
    "servings": 4,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 276,
      "protein": 30,
      "carbs": 42,
      "fat": 26,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "886",
    "title": "Butter Chicken (Authentic)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 14,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 225,
      "protein": 18,
      "carbs": 18,
      "fat": 10,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "887",
    "title": "Pho (Slow-cooked)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "easy",
    "cookingTime": 50,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 403,
      "protein": 19,
      "carbs": 18,
      "fat": 26,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "888",
    "title": "Moussaka (Grilled)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 22,
    "servings": 3,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 256,
      "protein": 10,
      "carbs": 30,
      "fat": 8,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "889",
    "title": "Goulash (Spiced)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "medium",
    "cookingTime": 36,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 427,
      "protein": 40,
      "carbs": 79,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "890",
    "title": "Kimchi (Heritage)",
    "description": "Spicy fermented cabbage side dish",
    "image": "https://example.com/images/Kimchi_(Heritage).jpg",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 16,
    "servings": 4,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 534,
      "protein": 28,
      "carbs": 47,
      "fat": 9,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "891",
    "title": "Shakshuka (Classic)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "easy",
    "cookingTime": 78,
    "servings": 4,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 627,
      "protein": 9,
      "carbs": 50,
      "fat": 26,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "892",
    "title": "Jollof Rice (Traditional)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 445,
      "protein": 24,
      "carbs": 80,
      "fat": 18,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "893",
    "title": "Ceviche (Street Style)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "hard",
    "cookingTime": 41,
    "servings": 2,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 679,
      "protein": 23,
      "carbs": 39,
      "fat": 26,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "894",
    "title": "Sauerbraten (Regional)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 52,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 273,
      "protein": 11,
      "carbs": 72,
      "fat": 8,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "895",
    "title": "Bibimbap (Home-style)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 517,
      "protein": 24,
      "carbs": 31,
      "fat": 12,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "896",
    "title": "Laksa (Authentic)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "easy",
    "cookingTime": 62,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 585,
      "protein": 5,
      "carbs": 25,
      "fat": 8,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "897",
    "title": "Poutine (Slow-cooked)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "https://example.com/images/Poutine_(Slow-cooked).jpg",
    "cuisine": "canada",
    "difficulty": "easy",
    "cookingTime": 84,
    "servings": 2,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 400,
      "protein": 19,
      "carbs": 58,
      "fat": 20,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "898",
    "title": "Pierogi (Grilled)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 412,
      "protein": 9,
      "carbs": 73,
      "fat": 21,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "899",
    "title": "Tapas - Patatas Bravas (Spiced)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 63,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 267,
      "protein": 35,
      "carbs": 68,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "900",
    "title": "Biryani (Heritage)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 22,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 662,
      "protein": 8,
      "carbs": 69,
      "fat": 24,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "901",
    "title": "Fufu & Egusi (Classic)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "easy",
    "cookingTime": 47,
    "servings": 4,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 193,
      "protein": 34,
      "carbs": 63,
      "fat": 8,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "902",
    "title": "Souvlaki (Traditional)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 28,
    "servings": 4,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 637,
      "protein": 27,
      "carbs": 37,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "903",
    "title": "Empanadas (Street Style)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "medium",
    "cookingTime": 72,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 352,
      "protein": 31,
      "carbs": 55,
      "fat": 12,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "904",
    "title": "Rendang (Regional)",
    "description": "Slow-cooked coconut beef curry",
    "image": "https://example.com/images/Rendang_(Regional).jpg",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 207,
      "protein": 34,
      "carbs": 44,
      "fat": 12,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "905",
    "title": "Baklava (Home-style)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 5,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 343,
      "protein": 25,
      "carbs": 72,
      "fat": 26,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "906",
    "title": "Arepas (Authentic)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "hard",
    "cookingTime": 55,
    "servings": 3,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 459,
      "protein": 21,
      "carbs": 67,
      "fat": 26,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "907",
    "title": "Tamales (Slow-cooked)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "easy",
    "cookingTime": 29,
    "servings": 4,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 336,
      "protein": 25,
      "carbs": 31,
      "fat": 25,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "908",
    "title": "Okonomiyaki (Grilled)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 74,
    "servings": 6,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 346,
      "protein": 22,
      "carbs": 33,
      "fat": 11,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "909",
    "title": "Congee (Spiced)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 72,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 287,
      "protein": 40,
      "carbs": 27,
      "fat": 5,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "910",
    "title": "Couscous (Heritage)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 3,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 222,
      "protein": 39,
      "carbs": 30,
      "fat": 30,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "911",
    "title": "Chicken Adobo (Classic)",
    "description": "Soy-vinegar marinated chicken",
    "image": "https://example.com/images/Chicken_Adobo_(Classic).jpg",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 64,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 421,
      "protein": 39,
      "carbs": 11,
      "fat": 11,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "912",
    "title": "Fondue (Traditional)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 6,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 674,
      "protein": 32,
      "carbs": 36,
      "fat": 22,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "913",
    "title": "Churrasco (Street Style)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 72,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 546,
      "protein": 38,
      "carbs": 68,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "914",
    "title": "Goloka (Ilokano) (Regional)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "medium",
    "cookingTime": 58,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 300,
      "protein": 5,
      "carbs": 71,
      "fat": 18,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "915",
    "title": "Khachapuri (Home-style)",
    "description": "Cheese-filled bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "georgia",
    "difficulty": "hard",
    "cookingTime": 60,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 223,
      "protein": 5,
      "carbs": 42,
      "fat": 16,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "916",
    "title": "Bobotie (Authentic)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "hard",
    "cookingTime": 59,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 489,
      "protein": 34,
      "carbs": 41,
      "fat": 7,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "917",
    "title": "Chole Bhature (Slow-cooked)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 507,
      "protein": 12,
      "carbs": 73,
      "fat": 16,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "918",
    "title": "Okro Soup (Grilled)",
    "description": "Okra stew often with palm oil",
    "image": "https://example.com/images/Okro_Soup_(Grilled).jpg",
    "cuisine": "sierra leone",
    "difficulty": "medium",
    "cookingTime": 14,
    "servings": 4,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 409,
      "protein": 19,
      "carbs": 43,
      "fat": 24,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "919",
    "title": "Katsu Curry (Spiced)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 36,
    "servings": 6,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 589,
      "protein": 20,
      "carbs": 62,
      "fat": 19,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "920",
    "title": "Sancocho (Heritage)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "easy",
    "cookingTime": 20,
    "servings": 4,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 633,
      "protein": 38,
      "carbs": 58,
      "fat": 23,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "921",
    "title": "Tteokbokki (Classic)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 21,
    "servings": 2,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 512,
      "protein": 18,
      "carbs": 78,
      "fat": 25,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "922",
    "title": "Maki Ramen (Traditional)",
    "description": "Noodles in savory broth with toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 33,
    "servings": 2,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 616,
      "protein": 24,
      "carbs": 50,
      "fat": 27,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "923",
    "title": "Kebabs - D\u00f6ner (Street Style)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 2,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 623,
      "protein": 6,
      "carbs": 10,
      "fat": 29,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "924",
    "title": "Cassoulet (Regional)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "easy",
    "cookingTime": 60,
    "servings": 5,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 391,
      "protein": 18,
      "carbs": 30,
      "fat": 11,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "925",
    "title": "Pavlova (Home-style)",
    "description": "Meringue dessert with fruit",
    "image": "https://example.com/images/Pavlova_(Home-style).jpg",
    "cuisine": "australia",
    "difficulty": "medium",
    "cookingTime": 67,
    "servings": 5,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 633,
      "protein": 40,
      "carbs": 21,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "926",
    "title": "Currywurst (Authentic)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "easy",
    "cookingTime": 67,
    "servings": 2,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 536,
      "protein": 17,
      "carbs": 24,
      "fat": 17,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "927",
    "title": "Lamb Tagine (Slow-cooked)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "hard",
    "cookingTime": 16,
    "servings": 2,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 286,
      "protein": 16,
      "carbs": 46,
      "fat": 25,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "928",
    "title": "Okonomiyaki (Grilled)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 34,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 268,
      "protein": 9,
      "carbs": 39,
      "fat": 18,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "929",
    "title": "Sushi Rolls - California Roll (Spiced)",
    "description": "Crab and avocado sushi roll",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 16,
    "servings": 4,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 684,
      "protein": 20,
      "carbs": 38,
      "fat": 26,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "930",
    "title": "Kulfi (Heritage)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 43,
    "servings": 4,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 495,
      "protein": 13,
      "carbs": 24,
      "fat": 25,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "931",
    "title": "Anticuchos (Classic)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 48,
    "servings": 5,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 441,
      "protein": 36,
      "carbs": 70,
      "fat": 20,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "932",
    "title": "Hummus (Traditional)",
    "description": "Chickpea dip with tahini",
    "image": "https://example.com/images/Hummus_(Traditional).jpg",
    "cuisine": "middle east",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 2,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 502,
      "protein": 20,
      "carbs": 76,
      "fat": 21,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "933",
    "title": "Fajitas (Street Style)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "easy",
    "cookingTime": 29,
    "servings": 5,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 392,
      "protein": 26,
      "carbs": 64,
      "fat": 21,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "934",
    "title": "Pizza Napoletana (Regional)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 43,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 355,
      "protein": 9,
      "carbs": 45,
      "fat": 27,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "935",
    "title": "Sm\u00f8rrebr\u00f8d (Home-style)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 6,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 570,
      "protein": 12,
      "carbs": 69,
      "fat": 6,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "936",
    "title": "Salm\u00f3n a la Plancha (Authentic)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 29,
    "servings": 5,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 623,
      "protein": 19,
      "carbs": 67,
      "fat": 15,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "937",
    "title": "Doro Wat (Slow-cooked)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 2,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 354,
      "protein": 32,
      "carbs": 60,
      "fat": 8,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "938",
    "title": "Aloo Gobi (Grilled)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 56,
    "servings": 4,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 241,
      "protein": 32,
      "carbs": 33,
      "fat": 11,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "939",
    "title": "Paneer Tikka (Spiced)",
    "description": "Grilled spiced paneer cubes",
    "image": "https://example.com/images/Paneer_Tikka_(Spiced).jpg",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 75,
    "servings": 4,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 298,
      "protein": 37,
      "carbs": 30,
      "fat": 22,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "940",
    "title": "Ramen - Tonkotsu (Heritage)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 71,
    "servings": 6,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 218,
      "protein": 30,
      "carbs": 53,
      "fat": 29,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "941",
    "title": "Croque Monsieur (Classic)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 39,
    "servings": 3,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 561,
      "protein": 22,
      "carbs": 26,
      "fat": 9,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "942",
    "title": "Gado-Gado (Traditional)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 33,
    "servings": 3,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 413,
      "protein": 29,
      "carbs": 59,
      "fat": 25,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "943",
    "title": "Cottage Pie (Street Style)",
    "description": "Minced beef topped with mashed potato",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 40,
    "servings": 3,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 657,
      "protein": 5,
      "carbs": 27,
      "fat": 27,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "944",
    "title": "Khao Soi (Regional)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "hard",
    "cookingTime": 81,
    "servings": 5,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 511,
      "protein": 22,
      "carbs": 61,
      "fat": 23,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "945",
    "title": "Bangers and Mash (Home-style)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "medium",
    "cookingTime": 29,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 190,
      "protein": 40,
      "carbs": 67,
      "fat": 19,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "946",
    "title": "Lahmacun (Authentic)",
    "description": "Thin flatbread topped with minced meat",
    "image": "https://example.com/images/Lahmacun_(Authentic).jpg",
    "cuisine": "turkey",
    "difficulty": "medium",
    "cookingTime": 77,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 620,
      "protein": 26,
      "carbs": 31,
      "fat": 14,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "947",
    "title": "Chimichurri Steak (Slow-cooked)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 22,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 509,
      "protein": 33,
      "carbs": 36,
      "fat": 11,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "948",
    "title": "P\u00e3o de Queijo (Grilled)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "easy",
    "cookingTime": 53,
    "servings": 4,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 499,
      "protein": 12,
      "carbs": 38,
      "fat": 15,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "949",
    "title": "Samosa (Spiced)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 54,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 271,
      "protein": 25,
      "carbs": 73,
      "fat": 8,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "950",
    "title": "Pizza Margherita (Heritage)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "easy",
    "cookingTime": 49,
    "servings": 6,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 518,
      "protein": 34,
      "carbs": 45,
      "fat": 28,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "951",
    "title": "Sushi (Classic)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 46,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 246,
      "protein": 39,
      "carbs": 37,
      "fat": 14,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "952",
    "title": "Tacos al Pastor (Traditional)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 69,
    "servings": 3,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 222,
      "protein": 34,
      "carbs": 71,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "953",
    "title": "Peking Duck (Street Style)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "https://example.com/images/Peking_Duck_(Street_Style).jpg",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 34,
    "servings": 6,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 462,
      "protein": 37,
      "carbs": 66,
      "fat": 9,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "954",
    "title": "Pad Thai (Regional)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 55,
    "servings": 6,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 309,
      "protein": 12,
      "carbs": 74,
      "fat": 29,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "955",
    "title": "Ratatouille (Home-style)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 75,
    "servings": 5,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 665,
      "protein": 32,
      "carbs": 62,
      "fat": 16,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "956",
    "title": "Paella (Authentic)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 45,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 621,
      "protein": 39,
      "carbs": 66,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "957",
    "title": "Feijoada (Slow-cooked)",
    "description": "Black bean and pork stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 63,
    "servings": 4,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 469,
      "protein": 8,
      "carbs": 49,
      "fat": 7,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "958",
    "title": "Borscht (Grilled)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "easy",
    "cookingTime": 67,
    "servings": 3,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 576,
      "protein": 24,
      "carbs": 21,
      "fat": 29,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 5.0,
    "isFavorite": false
  },
  {
    "id": "959",
    "title": "Butter Chicken (Spiced)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 47,
    "servings": 6,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 421,
      "protein": 28,
      "carbs": 53,
      "fat": 10,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "960",
    "title": "Pho (Heritage)",
    "description": "Aromatic beef noodle soup",
    "image": "https://example.com/images/Pho_(Heritage).jpg",
    "cuisine": "vietnam",
    "difficulty": "medium",
    "cookingTime": 19,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 590,
      "protein": 21,
      "carbs": 28,
      "fat": 10,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "961",
    "title": "Moussaka (Classic)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 26,
    "servings": 6,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 241,
      "protein": 11,
      "carbs": 49,
      "fat": 25,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "962",
    "title": "Goulash (Traditional)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "easy",
    "cookingTime": 33,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 629,
      "protein": 24,
      "carbs": 74,
      "fat": 22,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "963",
    "title": "Kimchi (Street Style)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 80,
    "servings": 2,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 331,
      "protein": 28,
      "carbs": 71,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "964",
    "title": "Shakshuka (Regional)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "tunisia",
    "difficulty": "medium",
    "cookingTime": 16,
    "servings": 5,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 467,
      "protein": 16,
      "carbs": 59,
      "fat": 22,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "965",
    "title": "Jollof Rice (Home-style)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "medium",
    "cookingTime": 76,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 312,
      "protein": 39,
      "carbs": 57,
      "fat": 27,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "966",
    "title": "Ceviche (Authentic)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 58,
    "servings": 5,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 569,
      "protein": 28,
      "carbs": 38,
      "fat": 29,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "967",
    "title": "Sauerbraten (Slow-cooked)",
    "description": "Marinated pot roast with gravy",
    "image": "https://example.com/images/Sauerbraten_(Slow-cooked).jpg",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 29,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 316,
      "protein": 18,
      "carbs": 40,
      "fat": 17,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "968",
    "title": "Bibimbap (Grilled)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 47,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 323,
      "protein": 13,
      "carbs": 50,
      "fat": 22,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "969",
    "title": "Laksa (Spiced)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "hard",
    "cookingTime": 84,
    "servings": 5,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 199,
      "protein": 33,
      "carbs": 54,
      "fat": 24,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "970",
    "title": "Poutine (Heritage)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 6,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 375,
      "protein": 13,
      "carbs": 31,
      "fat": 24,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "971",
    "title": "Pierogi (Classic)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "poland",
    "difficulty": "hard",
    "cookingTime": 25,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 369,
      "protein": 20,
      "carbs": 74,
      "fat": 12,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "972",
    "title": "Tapas - Patatas Bravas (Traditional)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 18,
    "servings": 4,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 626,
      "protein": 11,
      "carbs": 60,
      "fat": 8,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "973",
    "title": "Biryani (Street Style)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 19,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 203,
      "protein": 5,
      "carbs": 43,
      "fat": 30,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "974",
    "title": "Fufu & Egusi (Regional)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "https://example.com/images/Fufu_&_Egusi_(Regional).jpg",
    "cuisine": "ghana",
    "difficulty": "hard",
    "cookingTime": 87,
    "servings": 5,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 574,
      "protein": 21,
      "carbs": 16,
      "fat": 24,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "975",
    "title": "Souvlaki (Home-style)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 2,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 618,
      "protein": 35,
      "carbs": 39,
      "fat": 5,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "976",
    "title": "Empanadas (Authentic)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 60,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 404,
      "protein": 31,
      "carbs": 76,
      "fat": 10,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "977",
    "title": "Rendang (Slow-cooked)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "medium",
    "cookingTime": 40,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 183,
      "protein": 28,
      "carbs": 27,
      "fat": 5,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "978",
    "title": "Baklava (Grilled)",
    "description": "Sweet layered pastry with nuts",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 88,
    "servings": 5,
    "ingredients": [
      "Phyllo"
    ],
    "instructions": [
      "Prepare the main ingredients: Phyllo.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 297,
      "protein": 39,
      "carbs": 28,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "979",
    "title": "Arepas (Spiced)",
    "description": "Cornmeal patties stuffed with fillings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "venezuela",
    "difficulty": "easy",
    "cookingTime": 75,
    "servings": 4,
    "ingredients": [
      "Cornmeal"
    ],
    "instructions": [
      "Prepare the main ingredients: Cornmeal.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 695,
      "protein": 38,
      "carbs": 36,
      "fat": 11,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "980",
    "title": "Tamales (Heritage)",
    "description": "Masa dough steamed in corn husks",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "medium",
    "cookingTime": 74,
    "servings": 5,
    "ingredients": [
      "Masa"
    ],
    "instructions": [
      "Prepare the main ingredients: Masa.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 329,
      "protein": 36,
      "carbs": 37,
      "fat": 7,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "981",
    "title": "Okonomiyaki (Classic)",
    "description": "Savory pancake with various toppings",
    "image": "https://example.com/images/Okonomiyaki_(Classic).jpg",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 64,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 243,
      "protein": 5,
      "carbs": 30,
      "fat": 30,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "982",
    "title": "Congee (Traditional)",
    "description": "Rice porridge often with savory toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "hard",
    "cookingTime": 28,
    "servings": 5,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 400,
      "protein": 31,
      "carbs": 68,
      "fat": 20,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "983",
    "title": "Couscous (Street Style)",
    "description": "Steamed semolina with stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 17,
    "servings": 6,
    "ingredients": [
      "Semolina"
    ],
    "instructions": [
      "Prepare the main ingredients: Semolina.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 223,
      "protein": 27,
      "carbs": 42,
      "fat": 19,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "984",
    "title": "Chicken Adobo (Regional)",
    "description": "Soy-vinegar marinated chicken",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 75,
    "servings": 5,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 254,
      "protein": 31,
      "carbs": 21,
      "fat": 15,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "985",
    "title": "Fondue (Home-style)",
    "description": "Melted cheese dip",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "switzerland",
    "difficulty": "medium",
    "cookingTime": 56,
    "servings": 4,
    "ingredients": [
      "Cheese"
    ],
    "instructions": [
      "Prepare the main ingredients: Cheese.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 617,
      "protein": 9,
      "carbs": 38,
      "fat": 10,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "986",
    "title": "Churrasco (Authentic)",
    "description": "Grilled steak often with chimichurri",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 16,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 628,
      "protein": 10,
      "carbs": 51,
      "fat": 15,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "987",
    "title": "Goloka (Ilokano) (Slow-cooked)",
    "description": "Traditional Ilocano dish - example",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "philippines",
    "difficulty": "hard",
    "cookingTime": 46,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 254,
      "protein": 18,
      "carbs": 46,
      "fat": 14,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "988",
    "title": "Khachapuri (Grilled)",
    "description": "Cheese-filled bread",
    "image": "https://example.com/images/Khachapuri_(Grilled).jpg",
    "cuisine": "georgia",
    "difficulty": "easy",
    "cookingTime": 61,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 213,
      "protein": 40,
      "carbs": 19,
      "fat": 6,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "989",
    "title": "Bobotie (Spiced)",
    "description": "Curried mince baked with egg custard",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "south africa",
    "difficulty": "easy",
    "cookingTime": 83,
    "servings": 2,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 584,
      "protein": 15,
      "carbs": 75,
      "fat": 16,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "990",
    "title": "Chole Bhature (Heritage)",
    "description": "Spicy chickpea curry with fried bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 462,
      "protein": 8,
      "carbs": 42,
      "fat": 6,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "991",
    "title": "Okro Soup (Classic)",
    "description": "Okra stew often with palm oil",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "sierra leone",
    "difficulty": "easy",
    "cookingTime": 40,
    "servings": 2,
    "ingredients": [
      "Okra"
    ],
    "instructions": [
      "Prepare the main ingredients: Okra.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 306,
      "protein": 31,
      "carbs": 74,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "992",
    "title": "Katsu Curry (Traditional)",
    "description": "Breaded fried cutlet with curry sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 11,
    "servings": 2,
    "ingredients": [
      "Pork/Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork/Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 394,
      "protein": 40,
      "carbs": 40,
      "fat": 19,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "993",
    "title": "Sancocho (Street Style)",
    "description": "Hearty meat & root stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "dominican republic",
    "difficulty": "hard",
    "cookingTime": 35,
    "servings": 6,
    "ingredients": [
      "Meat"
    ],
    "instructions": [
      "Prepare the main ingredients: Meat.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 223,
      "protein": 40,
      "carbs": 11,
      "fat": 15,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "994",
    "title": "Tteokbokki (Regional)",
    "description": "Spicy rice cake street food",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "easy",
    "cookingTime": 14,
    "servings": 2,
    "ingredients": [
      "Rice cakes"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice cakes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 359,
      "protein": 10,
      "carbs": 32,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "995",
    "title": "Maki Ramen (Home-style)",
    "description": "Noodles in savory broth with toppings",
    "image": "https://example.com/images/Maki_Ramen_(Home-style).jpg",
    "cuisine": "japan",
    "difficulty": "easy",
    "cookingTime": 44,
    "servings": 3,
    "ingredients": [
      "Ramen noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Ramen noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 551,
      "protein": 18,
      "carbs": 66,
      "fat": 12,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "996",
    "title": "Kebabs - D\u00f6ner (Authentic)",
    "description": "Rotating grilled meat served in flatbread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "hard",
    "cookingTime": 18,
    "servings": 4,
    "ingredients": [
      "Lamb or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 363,
      "protein": 22,
      "carbs": 52,
      "fat": 29,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "997",
    "title": "Cassoulet (Slow-cooked)",
    "description": "Slow white bean & meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 60,
    "servings": 2,
    "ingredients": [
      "Beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 644,
      "protein": 38,
      "carbs": 33,
      "fat": 15,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "998",
    "title": "Pavlova (Grilled)",
    "description": "Meringue dessert with fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "australia",
    "difficulty": "easy",
    "cookingTime": 30,
    "servings": 4,
    "ingredients": [
      "Egg whites"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg whites.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 336,
      "protein": 30,
      "carbs": 52,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "999",
    "title": "Currywurst (Spiced)",
    "description": "Sliced sausage with curry ketchup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "hard",
    "cookingTime": 68,
    "servings": 3,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 627,
      "protein": 7,
      "carbs": 79,
      "fat": 21,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "1000",
    "title": "Lamb Tagine (Heritage)",
    "description": "Slow-cooked lamb with dried fruit",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "morocco",
    "difficulty": "easy",
    "cookingTime": 53,
    "servings": 4,
    "ingredients": [
      "Lamb"
    ],
    "instructions": [
      "Prepare the main ingredients: Lamb.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 283,
      "protein": 10,
      "carbs": 48,
      "fat": 25,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "1001",
    "title": "Okonomiyaki (Classic)",
    "description": "Savory pancake with various toppings",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "hard",
    "cookingTime": 11,
    "servings": 4,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 576,
      "protein": 6,
      "carbs": 56,
      "fat": 16,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "1002",
    "title": "Sushi Rolls - California Roll (Traditional)",
    "description": "Crab and avocado sushi roll",
    "image": "https://example.com/images/Sushi_Rolls_-_California_Roll_(Traditional).jpg",
    "cuisine": "usa (japanese origin)",
    "difficulty": "medium",
    "cookingTime": 79,
    "servings": 3,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 483,
      "protein": 40,
      "carbs": 68,
      "fat": 17,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "1003",
    "title": "Kulfi (Street Style)",
    "description": "Dense ice cream dessert",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "medium",
    "cookingTime": 41,
    "servings": 2,
    "ingredients": [
      "Milk"
    ],
    "instructions": [
      "Prepare the main ingredients: Milk.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 253,
      "protein": 9,
      "carbs": 77,
      "fat": 22,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "1004",
    "title": "Anticuchos (Regional)",
    "description": "Grilled skewers usually beef heart",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "medium",
    "cookingTime": 25,
    "servings": 4,
    "ingredients": [
      "Beef heart"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef heart.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 592,
      "protein": 8,
      "carbs": 12,
      "fat": 18,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "1005",
    "title": "Hummus (Home-style)",
    "description": "Chickpea dip with tahini",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "middle east",
    "difficulty": "hard",
    "cookingTime": 26,
    "servings": 3,
    "ingredients": [
      "Chickpeas"
    ],
    "instructions": [
      "Prepare the main ingredients: Chickpeas.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 417,
      "protein": 28,
      "carbs": 20,
      "fat": 6,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "1006",
    "title": "Fajitas (Authentic)",
    "description": "Sizzling grilled meat with peppers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico/usa",
    "difficulty": "easy",
    "cookingTime": 36,
    "servings": 5,
    "ingredients": [
      "Beef or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 400,
      "protein": 10,
      "carbs": 31,
      "fat": 9,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "1007",
    "title": "Pizza Napoletana (Slow-cooked)",
    "description": "Classic Neapolitan pizza with fresh tomatoes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 64,
    "servings": 3,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 272,
      "protein": 7,
      "carbs": 28,
      "fat": 22,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "1008",
    "title": "Sm\u00f8rrebr\u00f8d (Grilled)",
    "description": "Open-faced sandwiches on rye",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "denmark",
    "difficulty": "easy",
    "cookingTime": 79,
    "servings": 6,
    "ingredients": [
      "Rye bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Rye bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 245,
      "protein": 36,
      "carbs": 54,
      "fat": 13,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "1009",
    "title": "Salm\u00f3n a la Plancha (Spiced)",
    "description": "Grilled salmon with olive oil and lemon",
    "image": "https://example.com/images/Salm\u00f3n_a_la_Plancha_(Spiced).jpg",
    "cuisine": "spain",
    "difficulty": "easy",
    "cookingTime": 28,
    "servings": 4,
    "ingredients": [
      "Salmon"
    ],
    "instructions": [
      "Prepare the main ingredients: Salmon.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 237,
      "protein": 30,
      "carbs": 16,
      "fat": 9,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "1010",
    "title": "Doro Wat (Heritage)",
    "description": "Spicy chicken stew with berbere",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ethiopia",
    "difficulty": "medium",
    "cookingTime": 84,
    "servings": 4,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 527,
      "protein": 34,
      "carbs": 65,
      "fat": 10,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "1011",
    "title": "Aloo Gobi (Classic)",
    "description": "Potato and cauliflower dry curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 89,
    "servings": 5,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 397,
      "protein": 6,
      "carbs": 53,
      "fat": 26,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "1012",
    "title": "Paneer Tikka (Traditional)",
    "description": "Grilled spiced paneer cubes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 58,
    "servings": 3,
    "ingredients": [
      "Paneer"
    ],
    "instructions": [
      "Prepare the main ingredients: Paneer.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 183,
      "protein": 20,
      "carbs": 14,
      "fat": 10,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "1013",
    "title": "Ramen - Tonkotsu (Street Style)",
    "description": "Rich pork bone broth ramen",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 71,
    "servings": 6,
    "ingredients": [
      "Pork bones"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork bones.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 381,
      "protein": 27,
      "carbs": 23,
      "fat": 13,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "1014",
    "title": "Croque Monsieur (Regional)",
    "description": "Grilled ham and cheese sandwich",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "medium",
    "cookingTime": 59,
    "servings": 5,
    "ingredients": [
      "Bread"
    ],
    "instructions": [
      "Prepare the main ingredients: Bread.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 546,
      "protein": 16,
      "carbs": 21,
      "fat": 30,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "1015",
    "title": "Gado-Gado (Home-style)",
    "description": "Vegetable salad with peanut sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "hard",
    "cookingTime": 26,
    "servings": 2,
    "ingredients": [
      "Vegetables"
    ],
    "instructions": [
      "Prepare the main ingredients: Vegetables.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 227,
      "protein": 37,
      "carbs": 47,
      "fat": 13,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  },
  {
    "id": "1016",
    "title": "Cottage Pie (Authentic)",
    "description": "Minced beef topped with mashed potato",
    "image": "https://example.com/images/Cottage_Pie_(Authentic).jpg",
    "cuisine": "uk",
    "difficulty": "easy",
    "cookingTime": 15,
    "servings": 6,
    "ingredients": [
      "Minced beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Minced beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 227,
      "protein": 5,
      "carbs": 62,
      "fat": 24,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "1017",
    "title": "Khao Soi (Slow-cooked)",
    "description": "Curry noodle soup from the north",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "medium",
    "cookingTime": 28,
    "servings": 2,
    "ingredients": [
      "Egg noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Egg noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 438,
      "protein": 14,
      "carbs": 75,
      "fat": 8,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "1018",
    "title": "Bangers and Mash (Grilled)",
    "description": "Sausages with mashed potato and gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "uk",
    "difficulty": "hard",
    "cookingTime": 68,
    "servings": 5,
    "ingredients": [
      "Sausage"
    ],
    "instructions": [
      "Prepare the main ingredients: Sausage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 464,
      "protein": 24,
      "carbs": 32,
      "fat": 5,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "1019",
    "title": "Lahmacun (Spiced)",
    "description": "Thin flatbread topped with minced meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "turkey",
    "difficulty": "easy",
    "cookingTime": 77,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 425,
      "protein": 19,
      "carbs": 65,
      "fat": 30,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 4.3,
    "isFavorite": false
  },
  {
    "id": "1020",
    "title": "Chimichurri Steak (Heritage)",
    "description": "Grilled steak with herb sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 63,
    "servings": 2,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 404,
      "protein": 39,
      "carbs": 56,
      "fat": 27,
      "fiber": 1
    },
    "dietaryRestrictions": [],
    "rating": 3.6,
    "isFavorite": false
  },
  {
    "id": "1021",
    "title": "P\u00e3o de Queijo (Classic)",
    "description": "Cheesy cassava bread",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 23,
    "servings": 3,
    "ingredients": [
      "Cassava flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Cassava flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 195,
      "protein": 26,
      "carbs": 65,
      "fat": 6,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "1022",
    "title": "Samosa (Traditional)",
    "description": "Fried pastry with spiced potato or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 55,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 662,
      "protein": 28,
      "carbs": 49,
      "fat": 22,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "1023",
    "title": "Pizza Margherita (Street Style)",
    "description": "Classic Neapolitan pizza with tomato, mozzarella and basil",
    "image": "https://example.com/images/Pizza_Margherita_(Street_Style).jpg",
    "cuisine": "italy",
    "difficulty": "medium",
    "cookingTime": 13,
    "servings": 5,
    "ingredients": [
      "Flour",
      "Tomato",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour, Tomato, Mozzarella.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 500,
      "protein": 6,
      "carbs": 52,
      "fat": 26,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "1024",
    "title": "Sushi (Regional)",
    "description": "Vinegared rice with raw fish or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "japan",
    "difficulty": "medium",
    "cookingTime": 24,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 230,
      "protein": 39,
      "carbs": 55,
      "fat": 7,
      "fiber": 4
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "1025",
    "title": "Tacos al Pastor (Home-style)",
    "description": "Marinated pork tacos with pineapple",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "mexico",
    "difficulty": "hard",
    "cookingTime": 24,
    "servings": 5,
    "ingredients": [
      "Pork"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 399,
      "protein": 19,
      "carbs": 39,
      "fat": 8,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "1026",
    "title": "Peking Duck (Authentic)",
    "description": "Crispy roasted duck served with pancakes",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "china",
    "difficulty": "easy",
    "cookingTime": 73,
    "servings": 2,
    "ingredients": [
      "Duck"
    ],
    "instructions": [
      "Prepare the main ingredients: Duck.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 296,
      "protein": 14,
      "carbs": 69,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "1027",
    "title": "Pad Thai (Slow-cooked)",
    "description": "Stir-fried rice noodle dish with tamarind",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "thailand",
    "difficulty": "easy",
    "cookingTime": 23,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 279,
      "protein": 5,
      "carbs": 18,
      "fat": 24,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "1028",
    "title": "Ratatouille (Grilled)",
    "description": "Vegetable stew from Provence",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "france",
    "difficulty": "hard",
    "cookingTime": 86,
    "servings": 2,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 554,
      "protein": 19,
      "carbs": 62,
      "fat": 15,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.5,
    "isFavorite": false
  },
  {
    "id": "1029",
    "title": "Paella (Spiced)",
    "description": "Saffron rice with seafood or meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "medium",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 597,
      "protein": 28,
      "carbs": 47,
      "fat": 20,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "1030",
    "title": "Feijoada (Heritage)",
    "description": "Black bean and pork stew",
    "image": "https://example.com/images/Feijoada_(Heritage).jpg",
    "cuisine": "brazil",
    "difficulty": "hard",
    "cookingTime": 74,
    "servings": 2,
    "ingredients": [
      "Black beans"
    ],
    "instructions": [
      "Prepare the main ingredients: Black beans.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 257,
      "protein": 16,
      "carbs": 10,
      "fat": 11,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "1031",
    "title": "Borscht (Classic)",
    "description": "Beetroot soup often served with sour cream",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ukraine",
    "difficulty": "hard",
    "cookingTime": 37,
    "servings": 4,
    "ingredients": [
      "Beets"
    ],
    "instructions": [
      "Prepare the main ingredients: Beets.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 667,
      "protein": 7,
      "carbs": 39,
      "fat": 16,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.7,
    "isFavorite": false
  },
  {
    "id": "1032",
    "title": "Butter Chicken (Traditional)",
    "description": "Creamy tomato-based chicken curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "easy",
    "cookingTime": 79,
    "servings": 3,
    "ingredients": [
      "Chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 363,
      "protein": 30,
      "carbs": 54,
      "fat": 17,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "1033",
    "title": "Pho (Street Style)",
    "description": "Aromatic beef noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "vietnam",
    "difficulty": "easy",
    "cookingTime": 65,
    "servings": 2,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 513,
      "protein": 37,
      "carbs": 36,
      "fat": 13,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "1034",
    "title": "Moussaka (Regional)",
    "description": "Layered eggplant and meat casserole",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "medium",
    "cookingTime": 53,
    "servings": 4,
    "ingredients": [
      "Eggplant"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggplant.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 596,
      "protein": 8,
      "carbs": 22,
      "fat": 27,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "1035",
    "title": "Goulash (Home-style)",
    "description": "Hearty paprika-spiced meat stew",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "hungary",
    "difficulty": "easy",
    "cookingTime": 13,
    "servings": 5,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 392,
      "protein": 40,
      "carbs": 13,
      "fat": 9,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "1036",
    "title": "Kimchi (Authentic)",
    "description": "Spicy fermented cabbage side dish",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "medium",
    "cookingTime": 43,
    "servings": 2,
    "ingredients": [
      "Napa cabbage"
    ],
    "instructions": [
      "Prepare the main ingredients: Napa cabbage.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 366,
      "protein": 24,
      "carbs": 58,
      "fat": 28,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.9,
    "isFavorite": false
  },
  {
    "id": "1037",
    "title": "Shakshuka (Slow-cooked)",
    "description": "Poached eggs in spicy tomato sauce",
    "image": "https://example.com/images/Shakshuka_(Slow-cooked).jpg",
    "cuisine": "tunisia",
    "difficulty": "easy",
    "cookingTime": 81,
    "servings": 2,
    "ingredients": [
      "Eggs"
    ],
    "instructions": [
      "Prepare the main ingredients: Eggs.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 539,
      "protein": 20,
      "carbs": 48,
      "fat": 22,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.6,
    "isFavorite": false
  },
  {
    "id": "1038",
    "title": "Jollof Rice (Grilled)",
    "description": "One-pot tomato rice with spices",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "nigeria",
    "difficulty": "hard",
    "cookingTime": 70,
    "servings": 2,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 472,
      "protein": 31,
      "carbs": 69,
      "fat": 24,
      "fiber": 7
    },
    "dietaryRestrictions": [],
    "rating": 3.8,
    "isFavorite": false
  },
  {
    "id": "1039",
    "title": "Ceviche (Spiced)",
    "description": "Raw seafood cured in citrus juice",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "peru",
    "difficulty": "easy",
    "cookingTime": 17,
    "servings": 4,
    "ingredients": [
      "Fish"
    ],
    "instructions": [
      "Prepare the main ingredients: Fish.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 254,
      "protein": 21,
      "carbs": 55,
      "fat": 10,
      "fiber": 8
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "1040",
    "title": "Sauerbraten (Heritage)",
    "description": "Marinated pot roast with gravy",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "germany",
    "difficulty": "medium",
    "cookingTime": 47,
    "servings": 3,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 355,
      "protein": 12,
      "carbs": 59,
      "fat": 30,
      "fiber": 6
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "1041",
    "title": "Bibimbap (Classic)",
    "description": "Mixed rice bowl with vegetables and egg",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "korea",
    "difficulty": "hard",
    "cookingTime": 80,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 378,
      "protein": 5,
      "carbs": 49,
      "fat": 26,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.1,
    "isFavorite": false
  },
  {
    "id": "1042",
    "title": "Laksa (Traditional)",
    "description": "Spicy coconut noodle soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "malaysia",
    "difficulty": "easy",
    "cookingTime": 63,
    "servings": 4,
    "ingredients": [
      "Rice noodles"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice noodles.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 670,
      "protein": 33,
      "carbs": 33,
      "fat": 29,
      "fiber": 5
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "1043",
    "title": "Poutine (Street Style)",
    "description": "Fries topped with gravy and cheese curds",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "canada",
    "difficulty": "hard",
    "cookingTime": 18,
    "servings": 5,
    "ingredients": [
      "Potatoes"
    ],
    "instructions": [
      "Prepare the main ingredients: Potatoes.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 325,
      "protein": 37,
      "carbs": 10,
      "fat": 17,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.8,
    "isFavorite": false
  },
  {
    "id": "1044",
    "title": "Pierogi (Regional)",
    "description": "Dumplings stuffed with potato/cheese or meat",
    "image": "https://example.com/images/Pierogi_(Regional).jpg",
    "cuisine": "poland",
    "difficulty": "medium",
    "cookingTime": 10,
    "servings": 5,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 322,
      "protein": 26,
      "carbs": 67,
      "fat": 9,
      "fiber": 10
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "1045",
    "title": "Tapas - Patatas Bravas (Home-style)",
    "description": "Spicy potatoes with tomato sauce",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "spain",
    "difficulty": "hard",
    "cookingTime": 44,
    "servings": 6,
    "ingredients": [
      "Potato"
    ],
    "instructions": [
      "Prepare the main ingredients: Potato.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 512,
      "protein": 33,
      "carbs": 67,
      "fat": 15,
      "fiber": 11
    },
    "dietaryRestrictions": [],
    "rating": 4.4,
    "isFavorite": false
  },
  {
    "id": "1046",
    "title": "Biryani (Authentic)",
    "description": "Layered spiced rice with meat or vegetables",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "india",
    "difficulty": "hard",
    "cookingTime": 17,
    "servings": 6,
    "ingredients": [
      "Rice"
    ],
    "instructions": [
      "Prepare the main ingredients: Rice.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 475,
      "protein": 11,
      "carbs": 80,
      "fat": 6,
      "fiber": 12
    },
    "dietaryRestrictions": [],
    "rating": 3.9,
    "isFavorite": false
  },
  {
    "id": "1047",
    "title": "Fufu & Egusi (Slow-cooked)",
    "description": "Cassava/fufu with melon seed soup",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "ghana",
    "difficulty": "hard",
    "cookingTime": 29,
    "servings": 6,
    "ingredients": [
      "Fufu"
    ],
    "instructions": [
      "Prepare the main ingredients: Fufu.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 668,
      "protein": 18,
      "carbs": 80,
      "fat": 20,
      "fiber": 2
    },
    "dietaryRestrictions": [],
    "rating": 4.0,
    "isFavorite": false
  },
  {
    "id": "1048",
    "title": "Souvlaki (Grilled)",
    "description": "Grilled skewered meat",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "greece",
    "difficulty": "hard",
    "cookingTime": 39,
    "servings": 3,
    "ingredients": [
      "Pork or chicken"
    ],
    "instructions": [
      "Prepare the main ingredients: Pork or chicken.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 658,
      "protein": 20,
      "carbs": 27,
      "fat": 10,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 3.7,
    "isFavorite": false
  },
  {
    "id": "1049",
    "title": "Empanadas (Spiced)",
    "description": "Stuffed pastry turnovers",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "argentina",
    "difficulty": "hard",
    "cookingTime": 11,
    "servings": 2,
    "ingredients": [
      "Flour"
    ],
    "instructions": [
      "Prepare the main ingredients: Flour.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 571,
      "protein": 16,
      "carbs": 36,
      "fat": 29,
      "fiber": 3
    },
    "dietaryRestrictions": [],
    "rating": 4.5,
    "isFavorite": false
  },
  {
    "id": "1050",
    "title": "Rendang (Heritage)",
    "description": "Slow-cooked coconut beef curry",
    "image": "/src/assets/no-image-available.webp",
    "cuisine": "indonesia",
    "difficulty": "easy",
    "cookingTime": 73,
    "servings": 4,
    "ingredients": [
      "Beef"
    ],
    "instructions": [
      "Prepare the main ingredients: Beef.",
      "Cook following traditional method until done.",
      "Serve hot and enjoy."
    ],
    "nutritionalInfo": {
      "calories": 298,
      "protein": 25,
      "carbs": 37,
      "fat": 16,
      "fiber": 9
    },
    "dietaryRestrictions": [],
    "rating": 4.2,
    "isFavorite": false
  }
];
