# Recipes Backend (Modular)

## Setup

1. Copy `.env` and fill `MONGO_URI` and `JWT_SECRET`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start:
   ```bash
   npm run dev
   ```

## Endpoints (examples)
- POST /api/auth/register
- POST /api/auth/login
- GET  /api/auth/me
- POST /api/recipes
- GET  /api/recipes
- GET  /api/recipes/:id
- PUT  /api/recipes/:id
- DELETE /api/recipes/:id
- POST /api/comments
- GET /api/comments/:recipeId
- POST /api/ratings
- GET /api/ratings/:recipeId
- POST /api/favorites
- GET /api/favorites/me
