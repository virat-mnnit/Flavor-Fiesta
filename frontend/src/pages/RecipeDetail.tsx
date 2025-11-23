import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Recipe } from '@/types/recipe';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, ChefHat, Users, Heart, Star, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Header } from '@/components/Header';
import { RecipeRating } from '@/components/RecipeRating';
import { RecipeComments } from '@/components/RecipeComments';
import { API_URL } from '@/config';

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [servings, setServings] = useState(4);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('auth_token');
        const headers: any = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`${API_URL}/recipes/${id}`, { headers });
        if (!response.ok) throw new Error('Recipe not found');
        const data = await response.json();
        setRecipe(data);
        setServings(data.servings);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        toast.error('Recipe not found');
        navigate('/recipes');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchRecipe();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!recipe) return null;

  const servingMultiplier = servings / recipe.servings;

  const toggleFavorite = async () => {
    if (!recipe) return;
    try {
      const isFav = recipe.isFavorite;
      const method = isFav ? 'DELETE' : 'POST';
      const url = isFav ? `${API_URL}/favorites/${recipe.id}` : `${API_URL}/favorites`;
      const body = isFav ? undefined : JSON.stringify({ recipeId: recipe.id });

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

      setRecipe({ ...recipe, isFavorite: !isFav });
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
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-soft mb-6">
              {imageError || recipe.image.includes('no-image-available') ? (
                <img
                  src="https://images.unsplash.com/photo-1495521821758-02d0106a15f3?q=80&w=1000&auto=format&fit=crop"
                  alt={recipe.title}
                  className="w-full h-96 object-cover opacity-80"
                />
              ) : (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-96 object-cover"
                  onError={() => setImageError(true)}
                />
              )}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={toggleFavorite}
              >
                <Heart className={recipe.isFavorite ? 'fill-primary text-primary' : ''} />
              </Button>
            </div>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Nutritional Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="text-2xl font-bold">{Math.round(recipe.nutritionalInfo.calories * servingMultiplier)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Protein</p>
                  <p className="text-2xl font-bold">{Math.round(recipe.nutritionalInfo.protein * servingMultiplier)}g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Carbs</p>
                  <p className="text-2xl font-bold">{Math.round(recipe.nutritionalInfo.carbs * servingMultiplier)}g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fat</p>
                  <p className="text-2xl font-bold">{Math.round(recipe.nutritionalInfo.fat * servingMultiplier)}g</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
                <p className="text-muted-foreground text-lg">{recipe.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="capitalize">{recipe.cuisine}</Badge>
              {recipe.dietaryRestrictions.map((restriction) => (
                <Badge key={restriction} variant="outline" className="capitalize">
                  {restriction}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>{recipe.cookingTime} min</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-muted-foreground" />
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span>{recipe.rating}</span>
              </div>
            </div>

            <Card className="p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">Servings:</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setServings(Math.max(1, servings - 1))}
                  >
                    -
                  </Button>
                  <span className="font-bold text-lg w-8 text-center">{servings}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setServings(servings + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </Card>

            <Separator className="my-6" />

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="capitalize">{ingredient}</span>
                    {servingMultiplier !== 1 && (
                      <span className="text-muted-foreground text-sm">
                        (×{servingMultiplier.toFixed(1)})
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-6" />

            <div>
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <p className="pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          <RecipeRating recipeId={id!} />
          <RecipeComments recipeId={id!} />
        </div>
      </div>
    </div>
  );
}
