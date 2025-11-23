# Recipes Backend

This is the backend server for the Virat_recipe application. It provides RESTful APIs for user authentication, recipe management, comments, ratings, and AI-powered ingredient recognition.

## Tech Stack

-   **Node.js**: JavaScript runtime.
-   **Express.js**: Web framework.
-   **MongoDB**: NoSQL database.
-   **Mongoose**: ODM for MongoDB.
-   **JWT**: For secure authentication.
-   **Google Gemini API**: For image-based ingredient recognition.

## Setup & Installation

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the `backend` directory with the following variables:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/virat_recipe
    JWT_SECRET=your_super_secret_key
    GEMINI_API_KEY=your_google_gemini_api_key
    ```

4.  **Start the server:**
    -   Development (with nodemon):
        ```bash
        npm run dev
        ```
    -   Production:
        ```bash
        npm start
        ```

## API Endpoints

### Authentication (`/api/auth`)
-   `POST /register`: Register a new user.
-   `POST /login`: Authenticate user and get token.

### Recipes (`/api/recipes`)
-   `GET /`: Get all recipes (supports filtering).
-   `GET /:id`: Get a specific recipe by ID.
-   `POST /`: Create a new recipe (Protected).
-   `PUT /:id`: Update a recipe (Protected, Author only).
-   `DELETE /:id`: Delete a recipe (Protected, Author only).
-   `POST /identify-ingredients`: Upload image to identify ingredients (Protected).

### Comments (`/api/comments`)
-   `POST /`: Add a comment to a recipe (Protected).
-   `GET /recipe/:recipeId`: Get all comments for a recipe.

### Ratings (`/api/ratings`)
-   `POST /`: Rate a recipe (Protected).
-   `GET /recipe/:recipeId/user`: Get user's rating for a recipe.

### Favorites (`/api/favorites`)
-   `POST /toggle`: Toggle favorite status for a recipe (Protected).
-   `GET /`: Get user's favorite recipes (Protected).
-   `GET /check/:recipeId`: Check if a recipe is favorited.

## Database Schema

The database consists of the following collections:
-   **Users**: Stores user credentials and profile info.
-   **Recipes**: Stores recipe details, ingredients, instructions, and nutritional info.
-   **Comments**: Stores user comments on recipes.
-   **Ratings**: Stores user ratings (1-5) for recipes.
-   **Favorites**: Stores user's favorite recipes.

See `models/` directory for detailed schema definitions.
