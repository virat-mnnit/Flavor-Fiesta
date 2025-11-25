# Flavor-Fiesta

Flavor-Fiesta is a full-stack recipe finder and social app. It provides search and discovery of recipes, user authentication, ratings, comments, favorites, and a modern TypeScript React frontend built with Vite and Tailwind.

**Status:** Development

**Key features**
- Search recipes by ingredients, cuisine, difficulty, and other filters.
- User accounts (register/login) with JWT authentication.
- Rate recipes and leave comments.
- Favorite recipes for later.
- Seed script with a rich set of sample recipes.

**Tech stack**
- Backend: Node.js, Express, MongoDB (Mongoose)
- Frontend: React + TypeScript, Vite, TailwindCSS
- Auth: JSON Web Tokens (JWT)
- Dev tooling: Nodemon (backend), Vite (frontend)

**Primary folders**
- `backend/` — Express API, Mongoose models, controllers, routes, and seeding scripts.
- `frontend/` — Vite + React + TypeScript application (UI, pages, components).
- Root docs: `Backend.md`, `Frontend.md`, `SYSTEM_DESIGN.md`, `Flavour-Fiesta.md`.

**Backend details**
- Entry: `backend/server.js`
- DB connector: `backend/config/db.js` (expects `MONGO_URI` environment variable)
- Routes mounted under:
  - `/api/auth` — authentication (register, login, me)
  - `/api/recipes` — recipe CRUD & search
  - `/api/comments` — comments on recipes
  - `/api/ratings` — recipe ratings
  - `/api/favorites` — user favorites
  - `/api/health` — healthcheck

- Useful files:
  - `backend/seed.js` — seed sample recipes into MongoDB
  - `backend/models/` — Mongoose models (`User`, `Recipe`, `Comment`, `Rating`, `Favorite`)
  - `backend/controllers/` — controller logic (e.g., `authController.js` uses `JWT_SECRET`)

**Backend scripts (from `backend/package.json`)**
- `npm run start` — run `node server.js`
- `npm run dev` — run `nodemon server.js` (development)

**Frontend scripts (from `frontend/package.json`)**
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview built app

**Environment variables**
Create a `.env` file in `backend/` with at least:

```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/flavor-fiesta?retryWrites=true&w=majority
JWT_SECRET=some_long_random_secret
PORT=5000
```

Notes:
- `MONGO_URI` is required — `backend/config/db.js` will throw if it's missing.
- `JWT_SECRET` secures tokens created in `authController.js`.
- `PORT` defaults to `5000` if not provided.

**Local development (quickstart)**
1) Backend

Open PowerShell and run:

```powershell
cd backend
npm install
# create .env (see example above)
# Run in development mode (auto-reloads):
npm run dev
# Or run production-like:
npm start
# To seed the DB with sample recipes:
node seed.js
```

2) Frontend

Open a separate PowerShell terminal and run:

```powershell
cd frontend
npm install
npm run dev
```

Vite typically serves the frontend at `http://localhost:5173` (check console output).

**Seeding the database**
- The seeder is `backend/seed.js` and uses `process.env.MONGO_URI` to connect. Run from the `backend/` folder:

```powershell
cd backend
node seed.js
```

This will clear certain collections and insert a set of sample recipes defined in that file.

**API examples**
- Healthcheck

```powershell
curl http://localhost:5000/api/health
```

- Register (example)

```powershell
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"email":"you@example.com","password":"pass123","displayName":"You"}'
```

- Login (example)

```powershell
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"you@example.com","password":"pass123"}'
```

After login you'll receive a JWT token. Pass that token in `Authorization: Bearer <token>` to protected endpoints.

**Development notes & recommendations**
- Use MongoDB Atlas for a quick managed DB or run a local MongoDB instance and put the connection string into `MONGO_URI`.
- Keep `JWT_SECRET` private and long in production.
- The backend uses `helmet`, `cors`, and `morgan` for security and logging.
- To add a `npm` script to run the seeder, you can add in `backend/package.json`:

```json
"scripts": {
  "seed": "node seed.js",
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

**Project structure (high-level)**
- `backend/`
  - `server.js`
  - `package.json`
  - `seed.js`
  - `config/db.js`
  - `controllers/` — route handlers
  - `models/` — Mongoose schemas
  - `routes/` — Express route definitions
  - `middleware/` — auth and error handlers
- `frontend/`
  - `package.json`
  - `src/` — React app, components, pages
  - `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`

**Where to look next**
- Backend route implementations: `backend/routes/*.js` and `backend/controllers/*.js`.
- Frontend main app entry: `frontend/src/main.tsx` and pages under `frontend/src/pages`.

**Contact / Contribution**
This README was generated to help onboard contributors and document common workflows. If you want, I can also:
- Add a `.env.example` file to `backend/`.
- Add a `seed` npm script to `backend/package.json`.
- Add a short developer checklist or a CONTRIBUTING.md.

---

