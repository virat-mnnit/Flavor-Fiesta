# System Design Document

## 1. Architecture Overview

The **Virat_recipe** application follows a classic **MERN (MongoDB, Express, React, Node.js)** stack architecture. It is designed as a Client-Server model where the frontend (Client) communicates with the backend (Server) via RESTful APIs.

### High-Level Architecture Diagram

```mermaid
graph TD
    Client[Frontend (React + Vite)]
    Server[Backend (Node.js + Express)]
    DB[(MongoDB Database)]
    Gemini[Gemini AI API]

    Client -- HTTP Requests (JSON) --> Server
    Server -- Mongoose Queries --> DB
    DB -- Data --> Server
    Server -- Image Analysis --> Gemini
    Gemini -- Ingredients List --> Server
    Server -- JSON Response --> Client
```

## 2. Tech Stack

### Frontend
-   **Framework**: React (with Vite for build tooling)
-   **Language**: TypeScript
-   **Styling**: TailwindCSS, Shadcn UI
-   **State Management**: React Query (TanStack Query) for server state
-   **Routing**: React Router DOM

### Backend
-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Database**: MongoDB (with Mongoose ODM)
-   **Authentication**: JWT (JSON Web Tokens)
-   **AI Integration**: Google Gemini API (via `@google/generative-ai`)

## 3. Data Flow

### 3.1 User Authentication
1.  User submits credentials (email/password) on the Client.
2.  Client sends `POST /api/auth/login` to Server.
3.  Server verifies credentials against `User` collection in DB.
4.  If valid, Server generates a JWT and returns it to Client.
5.  Client stores JWT (e.g., in localStorage) and attaches it to subsequent authenticated requests.

### 3.2 Recipe Creation with AI
1.  User uploads an image of ingredients on the Client.
2.  Client sends image data to Server.
3.  Server forwards image to **Gemini API** for analysis.
4.  Gemini returns a list of identified ingredients.
5.  Server sends ingredients back to Client.
6.  User fills in remaining recipe details and submits.
7.  Server saves new `Recipe` document to DB.

## 4. Database Schema

### User Collection
-   `_id`: ObjectId
-   `email`: String (Unique)
-   `password`: String (Hashed)
-   `displayName`: String

### Recipe Collection
-   `_id`: ObjectId
-   `title`: String
-   `ingredients`: [String]
-   `instructions`: [String]
-   `authorId`: ObjectId (Ref: User)
-   `nutritionalInfo`: Object (Calories, Protein, etc.)

### Comment Collection
-   `_id`: ObjectId
-   `userId`: ObjectId (Ref: User)
-   `recipeId`: ObjectId (Ref: Recipe)
-   `comment`: String

### Rating Collection
-   `_id`: ObjectId
-   `userId`: ObjectId (Ref: User)
-   `recipeId`: ObjectId (Ref: Recipe)
-   `rating`: Number (1-5)

### Favorite Collection
-   `_id`: ObjectId
-   `userId`: ObjectId (Ref: User)
-   `recipeId`: ObjectId (Ref: Recipe)
