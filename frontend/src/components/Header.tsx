import { Button } from '@/components/ui/button';
import { ChefHat, Search, LogOut, User, Moon, Sun, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from 'react';

export function Header() {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link to="/" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start">Home</Button>
      </Link>
      <Link to="/recipes" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start">
          <Search className="h-4 w-4 mr-2" />
          Recipes
        </Button>
      </Link>
      <Link to="/search" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start">
          <Search className="h-4 w-4 mr-2" />
          Ingredient Search
        </Button>
      </Link>
      <Link to="/favorites" onClick={() => setIsOpen(false)}>
        <Button variant="ghost" className="w-full justify-start">Favorites</Button>
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <ChefHat className="h-6 w-6 text-primary" />
          <span>Smart Recipe</span>
        </Link>

      
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/recipes">
            <Button variant="ghost">
              <Search className="h-4 w-4 mr-2" />
              Recipes
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="ghost">
              <Search className="h-4 w-4 mr-2" />
              Ingredient Search
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost">Favorites</Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>
                  <User className="mr-2 h-4 w-4" />
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          )}
        </nav>

    
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-primary" />
                  Smart Recipe
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {user && (
                  <div className="flex items-center gap-3 px-2 py-2 rounded-md bg-muted/50">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-medium truncate">{user.email}</span>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-xs text-muted-foreground justify-start"
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                      >
                        Sign Out
                      </Button>
                    </div>
                  </div>
                )}

                <NavItems />

                {!user && (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign In</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
