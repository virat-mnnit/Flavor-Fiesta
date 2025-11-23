import { useState, useEffect } from 'react';
import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { Header } from '@/components/Header';
import { toast } from 'sonner';
import { API_URL } from '@/config';
import { Loader2 } from 'lucide-react';

export default function Favorites() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_URL}/favorites/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('Failed to fetch favorites');

        const data = await response.json();
 
        const mappedRecipes = data.map((item: any) => ({
          ...item.recipeId,
          id: item.recipeId.id || item.recipeId._id, 
          isFavorite: true
        }));

        setRecipes(mappedRecipes);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        toast.error('Failed to load favorites');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const toggleFavorite = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/favorites/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });

      if (!res.ok) throw new Error('Failed to remove favorite');

      setRecipes((prev) => prev.filter((r) => r.id !== id));
      toast.success('Removed from favorites');
    } catch (err) {
      console.error(err);
      toast.error('Failed to remove favorite');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Favorite Recipes</h1>
          <p className="text-muted-foreground">
            {recipes.length} favorite recipe{recipes.length !== 1 ? 's' : ''}
          </p>
        </div>

        {recipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No favorite recipes yet</p>
            <p className="text-muted-foreground mt-2">Start exploring and save your favorites!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
