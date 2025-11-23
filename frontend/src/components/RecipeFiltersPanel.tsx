import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { X, Filter } from 'lucide-react';
import { RecipeFilters, DietaryRestriction, Cuisine, Difficulty } from '@/types/recipe';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface RecipeFiltersProps {
  filters: RecipeFilters;
  onFiltersChange: (filters: RecipeFilters) => void;
}

const commonIngredients = [
  'chicken', 'beef', 'pork', 'shrimp', 'salmon', 'eggs', 'tofu',
  'rice', 'pasta', 'quinoa', 'bread',
  'tomato', 'onion', 'garlic', 'potato', 'broccoli', 'carrot', 'bell pepper',
  'cheese', 'butter', 'milk', 'yogurt',
  'olive oil', 'soy sauce', 'lemon'
];

const dietaryOptions: DietaryRestriction[] = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'nut-free', 'none'];
const cuisineOptions: Cuisine[] = ['italian', 'mexican', 'asian', 'american', 'mediterranean', 'indian', 'french', 'other'];
const difficultyOptions: Difficulty[] = ['easy', 'medium', 'hard'];

export function RecipeFiltersPanel({ filters, onFiltersChange }: RecipeFiltersProps) {
  const [ingredientInput, setIngredientInput] = useState('');

  const addIngredient = (ingredient: string) => {
    if (ingredient && !filters.ingredients.includes(ingredient.toLowerCase())) {
      onFiltersChange({
        ...filters,
        ingredients: [...filters.ingredients, ingredient.toLowerCase()],
      });
    }
    setIngredientInput('');
  };

  const removeIngredient = (ingredient: string) => {
    onFiltersChange({
      ...filters,
      ingredients: filters.ingredients.filter((i) => i !== ingredient),
    });
  };

  const toggleDietary = (dietary: DietaryRestriction) => {
    const newDietary = filters.dietary.includes(dietary)
      ? filters.dietary.filter((d) => d !== dietary)
      : [...filters.dietary, dietary];
    onFiltersChange({ ...filters, dietary: newDietary });
  };

  const toggleCuisine = (cuisine: Cuisine) => {
    const newCuisine = filters.cuisine.includes(cuisine)
      ? filters.cuisine.filter((c) => c !== cuisine)
      : [...filters.cuisine, cuisine];
    onFiltersChange({ ...filters, cuisine: newCuisine });
  };

  const toggleDifficulty = (difficulty: Difficulty) => {
    const newDifficulty = filters.difficulty.includes(difficulty)
      ? filters.difficulty.filter((d) => d !== difficulty)
      : [...filters.difficulty, difficulty];
    onFiltersChange({ ...filters, difficulty: newDifficulty });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search" className="text-base font-semibold">Search Recipes</Label>
        <Input
          id="search"
          placeholder="Search by recipe name..."
          value={filters.searchQuery}
          onChange={(e) => onFiltersChange({ ...filters, searchQuery: e.target.value })}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="text-base font-semibold">Available Ingredients</Label>
        <div className="flex gap-2 mt-2">
          <Input
            placeholder="Add ingredient..."
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addIngredient(ingredientInput)}
          />
          <Button onClick={() => addIngredient(ingredientInput)}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {filters.ingredients.map((ingredient) => (
            <Badge key={ingredient} variant="secondary" className="gap-1">
              {ingredient}
              <X className="h-3 w-3 cursor-pointer" onClick={() => removeIngredient(ingredient)} />
            </Badge>
          ))}
        </div>
        <div className="mt-3">
          <p className="text-sm text-muted-foreground mb-2">Quick add:</p>
          <div className="flex flex-wrap gap-2">
            {commonIngredients.slice(0, 12).map((ingredient) => (
              <Badge
                key={ingredient}
                variant="outline"
                className="cursor-pointer hover:bg-muted"
                onClick={() => addIngredient(ingredient)}
              >
                + {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold">Dietary Restrictions</Label>
        <div className="space-y-2 mt-2">
          {dietaryOptions.map((dietary) => (
            <div key={dietary} className="flex items-center space-x-2">
              <Checkbox
                id={dietary}
                checked={filters.dietary.includes(dietary)}
                onCheckedChange={() => toggleDietary(dietary)}
              />
              <label htmlFor={dietary} className="text-sm capitalize cursor-pointer">
                {dietary}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold">Cuisine Type</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {cuisineOptions.map((cuisine) => (
            <Badge
              key={cuisine}
              variant={filters.cuisine.includes(cuisine) ? 'default' : 'outline'}
              className="cursor-pointer capitalize"
              onClick={() => toggleCuisine(cuisine)}
            >
              {cuisine}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold">Difficulty</Label>
        <div className="flex gap-2 mt-2">
          {difficultyOptions.map((difficulty) => (
            <Badge
              key={difficulty}
              variant={filters.difficulty.includes(difficulty) ? 'default' : 'outline'}
              className="cursor-pointer capitalize"
              onClick={() => toggleDifficulty(difficulty)}
            >
              {difficulty}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="cookingTime" className="text-base font-semibold">
          Max Cooking Time: {filters.maxCookingTime} min
        </Label>
        <Input
          id="cookingTime"
          type="range"
          min="10"
          max="120"
          step="5"
          value={filters.maxCookingTime}
          onChange={(e) => onFiltersChange({ ...filters, maxCookingTime: parseInt(e.target.value) })}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="servings" className="text-base font-semibold">
          Min Servings: {filters.minServings || 1}
        </Label>
        <Input
          id="servings"
          type="range"
          min="1"
          max="12"
          step="1"
          value={filters.minServings || 1}
          onChange={(e) => onFiltersChange({ ...filters, minServings: parseInt(e.target.value) })}
          className="mt-2"
        />
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() =>
          onFiltersChange({
            ingredients: [],
            dietary: [],
            cuisine: [],
            difficulty: [],
            maxCookingTime: 120,
            minServings: 1,
            searchQuery: '',
          })
        }
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <>
     
      <Card className="hidden lg:block p-6 sticky top-20 h-fit">
        <FilterContent />
      </Card>


      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden fixed bottom-4 right-4 z-40 shadow-lg">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filter Recipes</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
