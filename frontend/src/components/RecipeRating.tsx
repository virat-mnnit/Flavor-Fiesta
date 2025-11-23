import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { API_URL } from "@/config";

interface RecipeRatingProps {
  recipeId: string;
}

export const RecipeRating = ({ recipeId }: RecipeRatingProps) => {
  const { user } = useAuth();
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    fetchRatings();
  }, [recipeId, user]);

  const fetchRatings = async () => {
    try {
      // Fetch average rating
      const res = await fetch(`${API_URL}/ratings/${recipeId}`);
      if (res.ok) {
        const data = await res.json();
        setAverageRating(data.avgRating || 0);
        setTotalRatings(data.count || 0);
      }


    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  const handleRating = async (rating: number) => {
    if (!user) {
      toast.error("Please sign in to rate recipes");
      return;
    }

    try {
      const token = localStorage.getItem('auth_token');
      const res = await fetch(`${API_URL}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ recipeId, rating })
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to rate');
      }

      setUserRating(rating);
      toast.success("Rating submitted!");
      fetchRatings();
    } catch (error: any) {
      console.error("Error submitting rating:", error);
      toast.error(error.message || "Failed to submit rating");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rating</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold">{averageRating > 0 ? averageRating.toFixed(1) : "—"}</div>
          <div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${star <= Math.round(averageRating)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                    }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{totalRatings} ratings</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            {user ? "Your Rating:" : "Sign in to rate this recipe"}
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                disabled={!user}
                className="transition-transform hover:scale-110 disabled:cursor-not-allowed"
              >
                <Star
                  className={`h-8 w-8 ${star <= (hoveredRating || userRating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};