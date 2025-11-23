import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ChefHat, Star, Heart, ImageOff } from 'lucide-react';
import { Recipe } from '@/types/recipe';
import { Link } from 'react-router-dom';


interface RecipeCardProps {
  recipe: Recipe;
  onToggleFavorite: (id: string) => void;
}

import { useState } from 'react';

export function RecipeCard({ recipe, onToggleFavorite }: RecipeCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-hover">
      <div className="relative overflow-hidden h-48">
        {imageError || recipe.image.includes('no-image-available') ? (
          <div className="w-full h-full bg-muted flex flex-col items-center justify-center text-muted-foreground">
            <ImageOff className="h-8 w-8 mb-2 opacity-50" />
            <span className="text-sm font-medium">No Image</span>
          </div>
        ) : (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite(recipe.id);
          }}
        >
          <Heart className={recipe.isFavorite ? 'fill-primary text-primary' : ''} />
        </Button>
        <div className="absolute bottom-2 left-2 flex gap-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {recipe.cuisine}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg line-clamp-1">{recipe.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookingTime}m</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>{recipe.rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/recipe/${recipe.id}`} className="w-full">
          <Button className="w-full">View Recipe</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
