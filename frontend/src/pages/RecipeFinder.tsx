import { useState } from "react";
import { Header } from "@/components/Header";
import { IngredientSearchForm } from "@/components/IngredientSearchForm";
import { RecipeCard } from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";
import { API_URL } from "@/config";
import { toast } from "sonner";

export default function RecipeFinder() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleRecipesFound = (foundRecipes: Recipe[]) => {
        setRecipes(foundRecipes);
    };

    const handleToggleFavorite = async (id: string) => {
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
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">Recipe Finder</h1>
                        <p className="text-muted-foreground text-lg">
                            Find recipes based on the ingredients you have.
                        </p>
                    </div>

                    <IngredientSearchForm onRecipesFound={handleRecipesFound} />

                    {recipes.length > 0 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Found Recipes</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {recipes.map((recipe) => (
                                    <RecipeCard
                                        key={recipe.id}
                                        recipe={recipe}
                                        onToggleFavorite={handleToggleFavorite}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
