# Virat_recipe - Smart Recipe Generator

Welcome to the **Virat_recipe** project! This is a full-stack web application designed to help users discover, create, and manage recipes. It features AI-powered ingredient recognition, allowing users to upload photos of ingredients to find matching recipes.

## 🚀 Features

-   **Recipe Discovery**: Browse a vast collection of recipes with filtering options (Cuisine, Difficulty, Time).
-   **AI Ingredient Recognition**: Upload an image of your fridge or pantry, and let Gemini AI suggest recipes based on what you have.
-   **User Accounts**: Register and login to save favorites, rate recipes, and leave comments.
-   **Responsive Design**: Optimized for both desktop and mobile devices.
-   **Interactive UI**: Built with React, TailwindCSS, and Shadcn UI for a premium feel.

## 🛠️ Tech Stack

-   **Frontend**: React, Vite, TypeScript, TailwindCSS, Shadcn UI, React Query.
-   **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT.
-   **AI**: Google Gemini API.

## 📂 Documentation

-   [**System Design**](./SYSTEM_DESIGN.md): Architecture diagrams and data flow.
-   [**Frontend Documentation**](./frontend/README.md): Component structure and client-side details.
-   [**Backend Documentation**](./backend/README.md): API endpoints and database schema.

## 🏁 Quick Start

### Prerequisites
-   Node.js (v16+)
-   MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Virat_recipe
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    # Create .env file (see backend/README.md)
    npm run seed # Optional: Populate DB with sample data
    npm run dev
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

4.  **Open App:**
    Visit `http://localhost:5173` in your browser.

## ❓ FAQ

### Q: How does the image recognition work?
**A:** When you upload an image in the "Recipe Finder" section, the backend sends the image to Google's Gemini API. The AI analyzes the image to identify ingredients and returns a list, which is then used to search for matching recipes in our database.

### Q: Can I run this without MongoDB installed locally?
**A:** Yes, you can use a cloud-hosted MongoDB instance (like MongoDB Atlas). Just update the `MONGO_URI` in your `backend/.env` file.

### Q: How do I reset the database?
**A:** You can run `npm run seed` in the `backend` directory. **Warning:** This will delete all existing data and replace it with the default sample recipes.

### Q: Is the application mobile-friendly?
**A:** Absolutely! The frontend is built with TailwindCSS and is fully responsive, ensuring a great experience on phones, tablets, and desktops.

### Q: I'm getting a "Gemini API Error". What should I do?
**A:** Ensure you have a valid API key in your `backend/.env` file under `GEMINI_API_KEY`. You can get one from Google AI Studio.
