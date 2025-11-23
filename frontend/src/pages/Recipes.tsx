import { useState, useEffect, useMemo } from 'react';
import { Recipe, RecipeFilters } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { RecipeFiltersPanel } from '@/components/RecipeFiltersPanel';
import { Header } from '@/components/Header';
import { toast } from 'sonner';
import { API_URL } from '@/config';
import { Loader2 } from 'lucide-react';

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<RecipeFilters>({
    ingredients: [],
    dietary: [],
    cuisine: [],
    difficulty: [],
    maxCookingTime: 120,
    minServings: 1,
    searchQuery: '',
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem('auth_token');
      const headers: any = {};
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const response = await fetch(`${API_URL}/recipes?limit=100`, { headers });
      if (!response.ok) throw new Error('Failed to fetch recipes');
      const data = await response.json();
      setRecipes(data.recipes || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      toast.error('Failed to load recipes');
    } finally {
      setLoading(false);
    }
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
     
      if (filters.searchQuery && !recipe.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
        return false;
      }

    
      if (filters.ingredients.length > 0) {
        const hasIngredient = filters.ingredients.some((filterIngredient) =>
          recipe.ingredients.some((recipeIngredient) =>
            recipeIngredient.toLowerCase().includes(filterIngredient.toLowerCase())
          )
        );
        if (!hasIngredient) return false;
      }

    
      if (filters.dietary.length > 0) {
        const matchesDietary = filters.dietary.some((dietary) =>
          recipe.dietaryRestrictions.includes(dietary)
        );
        if (!matchesDietary) return false;
      }

    
      if (filters.cuisine.length > 0 && !filters.cuisine.includes(recipe.cuisine)) {
        return false;
      }

      
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(recipe.difficulty)) {
        return false;
      }

   
      if (recipe.cookingTime > filters.maxCookingTime) {
        return false;
      }

     
      if (filters.minServings && recipe.servings < filters.minServings) {
        return false;
      }

      return true;
    });
  }, [recipes, filters]);

  const toggleFavorite = async (id: string) => {
    try {
      const recipe = recipes.find((r) => r.id === id);
      if (!recipe) return;

      const isFav = recipe.isFavorite;
      const method = isFav ? 'DELETE' : 'POST';
      const url = isFav ? `${API_URL}/favorites/${id}` : `${API_URL}/favorites`;
      const body = isFav ? undefined : JSON.stringify({ recipeId: id });

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body
      });

      if (!res.ok) {
        if (res.status === 401) {
          toast.error('Please login to save favorites');
          return;
        }
        throw new Error('Failed to update favorite');
      }

      setRecipes((prev) =>
        prev.map((r) =>
          r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
        )
      );
      toast.success(isFav ? 'Removed from favorites' : 'Added to favorites');
    } catch (err) {
      console.error(err);
      toast.error('Failed to update favorite');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Discover Recipes</h1>
          <p className="text-muted-foreground">
            {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          <RecipeFiltersPanel filters={filters} onFiltersChange={setFilters} />

          <div>
            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : filteredRecipes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No recipes match your criteria</p>
                <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={toggleFavorite} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
