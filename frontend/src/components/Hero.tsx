import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-kitchen.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img src={heroImage} alt="Kitchen" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Discover Delicious Recipes Based on What You Have
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Turn your available ingredients into amazing meals. Get personalized recipe suggestions, 
            nutritional information, and step-by-step cooking instructions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/recipes">
              <Button size="lg" variant="secondary" className="group">
                Find Recipes
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/recipes">
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Browse All
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
