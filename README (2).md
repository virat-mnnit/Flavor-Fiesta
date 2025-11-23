# Recipes Frontend

This is the frontend client for the Virat_recipe application. It is a modern, responsive single-page application built with React and Vite.

## Tech Stack

-   **React**: UI Library.
-   **Vite**: Build tool and dev server.
-   **TypeScript**: For type safety.
-   **TailwindCSS**: Utility-first CSS framework.
-   **Shadcn UI**: Reusable UI components.
-   **React Query**: For data fetching and caching.
-   **React Router DOM**: For client-side routing.

## Setup & Installation

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file (or `.env.local`) if needed, though the default setup proxies requests to the backend.
    Ensure the backend is running on port 5000.

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

### Pages (`src/pages`)
-   **Index**: The landing page with hero section and featured recipes.
-   **Recipes**: The main recipe listing page with filtering and sorting.
-   **RecipeDetail**: Detailed view of a single recipe, including ingredients, instructions, comments, and ratings.
-   **Favorites**: Displays the user's favorite recipes.
-   **Auth**: Login and Registration forms.
-   **RecipeFinder**: A tool to find recipes based on available ingredients (supports image upload).

### Components (`src/components`)
-   **Header**: Main navigation bar.
-   **Hero**: Hero section for the landing page.
-   **RecipeCard**: Reusable card component to display recipe summary.
-   **RecipeFiltersPanel**: Sidebar/Modal for filtering recipes by cuisine, difficulty, etc.
-   **IngredientSearchForm**: Form to input or upload ingredients for search.
-   **RecipeComments**: Section to view and add comments.
-   **RecipeRating**: Component to rate recipes.

### UI Components (`src/components/ui`)
-   Contains reusable Shadcn UI components like Buttons, Inputs, Dialogs, Toasts, etc.

## Features
-   **Responsive Design**: Works seamlessly on mobile and desktop.
-   **Dark Mode**: Supported via `ThemeProvider`.
-   **Real-time Feedback**: Toasts and notifications for user actions.
-   **Image Recognition**: Upload ingredient images to auto-fill search.
