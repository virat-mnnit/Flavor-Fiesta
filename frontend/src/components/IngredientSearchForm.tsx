import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, X, Search, Camera } from "lucide-react";
import { API_URL } from "@/config";


interface Props {
    onRecipesFound: (recipes: any[]) => void;
}

export const IngredientSearchForm = ({ onRecipesFound }: Props) => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
    const [cuisine, setCuisine] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [loading, setLoading] = useState(false);
    const [analyzing, setAnalyzing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addIngredient = (ing: string = currentIngredient) => {
        if (!ing.trim()) return;
        const trimmed = ing.trim().toLowerCase();
        if (!ingredients.includes(trimmed)) {
            setIngredients(prev => [...prev, trimmed]);
        }
        setCurrentIngredient("");
    };

    const removeIngredient = (ingredient: string) => {
        setIngredients(ingredients.filter((i) => i !== ingredient));
    };

    const toggleDietary = (r: string) => {
        if (dietaryRestrictions.includes(r)) {
            setDietaryRestrictions(dietaryRestrictions.filter((x) => x !== r));
        } else {
            setDietaryRestrictions([...dietaryRestrictions, r]);
        }
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setAnalyzing(true);
        const toastId = toast.loading("Analyzing image with Gemini AI...");

        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch(`${API_URL}/recipes/analyze-image`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Analysis failed');

            const data = await response.json();
            const detectedIngredients = data.ingredients || [];

            if (detectedIngredients.length > 0) {
                detectedIngredients.forEach((ing: string) => addIngredient(ing));
                toast.success(`Detected: ${detectedIngredients.join(", ")}`, { id: toastId });
            } else {
                toast.info("No specific ingredients detected.", { id: toastId });
            }

        } catch (error) {
            console.error("Recognition error:", error);
            toast.error("Failed to analyze image", { id: toastId });
        } finally {
            setAnalyzing(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const buildQuery = () => {
        const params = new URLSearchParams();

        if (ingredients.length)
            params.set("ingredients", ingredients.join(","));

        if (cuisine)
            params.set("cuisine", cuisine);

        if (difficulty)
            params.set("difficulty", difficulty);

        if (dietaryRestrictions.length)
            params.set("dietary", dietaryRestrictions.join(","));

        return params.toString();
    };

    const handleSearch = async () => {
        if (ingredients.length === 0) {
            toast.error("Add at least one ingredient");
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem('auth_token');
            const headers: any = {};
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const res = await fetch(`${API_URL}/recipes/search?${buildQuery()}`, { headers });
            if (!res.ok) throw new Error("Server error");

            const data = await res.json();
            const results = data.recipes || [];

            if (results.length === 0) {
                toast.info("No recipes found matching your criteria");
            } else {
                toast.success(`Found ${results.length} recipes!`);
            }

            onRecipesFound(results);
        } catch (err) {
            console.error("Search error:", err);
            toast.error("Failed to search recipes");
            onRecipesFound([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Ingredient Search
                </CardTitle>
                <CardDescription>
                    Enter ingredients or upload a photo to find matching recipes.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
               
                <div className="space-y-2">
                    <Label>Ingredients</Label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                            placeholder="e.g., chicken, tomato, pasta"
                            value={currentIngredient}
                            onChange={(e) => setCurrentIngredient(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addIngredient()}
                        />
                        <Button onClick={() => addIngredient()} variant="secondary">
                            Add
                        </Button>

                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={analyzing}
                                title="Upload Image to Detect Ingredients"
                            >
                                {analyzing ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Camera className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>

                    
                    <div className="flex flex-wrap gap-2 mt-2">
                        {ingredients.map((i) => (
                            <Badge key={i} className="flex gap-1 px-2 py-1">
                                {i}
                                <X
                                    className="h-3 w-3 cursor-pointer"
                                    onClick={() => removeIngredient(i)}
                                />
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Dietary Restrictions</Label>
                    <div className="flex flex-wrap gap-2">
                        {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"].map((d) => (
                            <Badge
                                key={d}
                                variant={dietaryRestrictions.includes(d) ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => toggleDietary(d)}
                            >
                                {d}
                            </Badge>
                        ))}
                    </div>
                </div>

      
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Cuisine</Label>
                        <Select value={cuisine} onValueChange={setCuisine}>
                            <SelectTrigger>
                                <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="italian">Italian</SelectItem>
                                <SelectItem value="mexican">Mexican</SelectItem>
                                <SelectItem value="asian">Asian</SelectItem>
                                <SelectItem value="indian">Indian</SelectItem>
                                <SelectItem value="american">American</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>Difficulty</Label>
                        <Select value={difficulty} onValueChange={setDifficulty}>
                            <SelectTrigger>
                                <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

           
                <Button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full"
                    size="lg"
                >
                    {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                    Find Recipes
                </Button>
            </CardContent>
        </Card>
    );
};
