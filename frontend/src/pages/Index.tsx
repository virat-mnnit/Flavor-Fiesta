import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { RecipeCard } from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { API_URL } from '@/config';

import { Recipe } from '@/types/recipe';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Clock, Heart } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
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

    fetchRecipes();
  }, []);

  const featuredRecipes = recipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

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
      <Hero />


      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Smart Recipe?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">22+ Diverse Recipes</h3>
              <p className="text-muted-foreground">
                From Italian classics to Asian fusion, explore cuisines from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Smart Filtering</h3>
              <p className="text-muted-foreground">
                Filter by ingredients, dietary needs, cooking time, and difficulty level
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Save Favorites</h3>
              <p className="text-muted-foreground">
                Keep track of your favorite recipes and access them anytime
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Rated Recipes</h2>
              <p className="text-muted-foreground">Discover our most loved recipes</p>
            </div>
            <Link to="/recipes">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Enter your available ingredients and discover amazing recipes you can make right now
          </p>
          <Link to="/recipes">
            <Button size="lg" variant="secondary" className="group">
              Find Your Recipe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      
      <footer className="py-8 border-t">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Smart Recipe Generator. Built for discovering delicious meals.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
