# Game Manager - ReactJS + Vite Project

A professional ReactJS application for managing a game collection. This project demonstrates CRUD operations using LocalStorage, React Hooks, and Bootstrap 5 for styling.

## Project Overview

Game Manager is a simple yet effective web application that allows users to:
- **Add** new games with name, genre, and price
- **View** all games in an organized table
- **Update** game information
- **Delete** games from the collection

All data is stored locally in the browser's LocalStorage, providing persistent storage across sessions without requiring a backend server.

## Features

- CRUD Operations: Add, Read, Update, Delete games
- LocalStorage: Data persistence without a backend
- Responsive Design: Works on desktop and mobile devices
- Form Validation: Ensures data integrity
- Confirmation Dialogs: Prevents accidental deletion
- Simple Navigation: User-friendly interface with two main pages
- Clean Code: Well-structured and maintainable codebase

## Project Structure

\\\
src/
+-- Components/              # Reusable React components
�   +-- GameForm.jsx        # Form for adding/editing games
�   +-- GameList.jsx        # Table displaying all games
+-- Pages/                  # Page components
�   +-- Home.jsx           # Landing page
�   +-- Games.jsx          # Games management page
+-- services/              # Business logic layer
�   +-- GameService.js     # LocalStorage operations
+-- App.jsx               # Main application component
+-- App.css               # Global styles
+-- main.jsx              # Application entry point
+-- index.css             # Base styles
\\\

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Navigate to the project directory:
\\\ash
cd "Javascript Project"
\\\

2. Install dependencies:
\\\ash
npm install
\\\

### Running the Project

Start the development server:
\\\ash
npm run dev
\\\

The application will be available at \http://localhost:5173\

### Building for Production

Create an optimized production build:
\\\ash
npm run build
\\\

## How to Use

### Home Page
- Welcome screen with application overview
- Click "Games" in the navigation to start managing your collection

### Games Page
**Left Column - Add/Edit Game:**
- Fill in the game name, genre, and price
- Click "Add Game" to add a new game
- To edit an existing game, click the "Edit" button in the games list
- To cancel editing, click the "Cancel Editing" button

**Right Column - Games List:**
- View all games in a table format
- Each row displays: ID, Name, Genre, Price, and action buttons
- **Edit Button**: Modify game information
- **Delete Button**: Remove a game from the collection (with confirmation)

## Game Data Structure

Each game contains the following fields:
- **ID**: Unique identifier (auto-generated)
- **Name**: Game title
- **Genre**: Category (e.g., RPG, Action, Adventure, Strategy)
- **Price**: Cost in USD

### Example Game Object
\\\javascript
{
  id: 1,
  name: "The Legend of Zelda",
  genre: "Adventure",
  price: 59.99
}
\\\

## Technologies Used

- **React 18+**: UI library with Hooks
- **Vite**: Modern development build tool
- **Bootstrap 5**: CSS framework for styling
- **LocalStorage API**: Browser data persistence

## Code Highlights

### GameService.js - Core CRUD Operations
\\\javascript
getAllGames()           // Retrieve all games
getGameById(id)         // Get a specific game
addGame(game)           // Create new game
updateGame(id, data)    // Update existing game
deleteGame(id)          // Remove a game
\\\

### React Hooks Implementation
- useState: Manage component state (games, form data, editing mode)
- useEffect: Handle side effects and initialization
- Event handlers: Form submission and user interactions

## Key Implementation Details

This application implements the following web development concepts:
1. **Component Composition**: Modular and reusable UI components
2. **State Management**: Using React Hooks for component state
3. **Side Effects**: Lifecycle management with useEffect Hook
4. **Form Handling**: Form validation and data binding
5. **Data Persistence**: Client-side storage with LocalStorage API
6. **Navigation**: Page-based navigation system
7. **Responsive Design**: Bootstrap 5 framework integration

## Limitations

- No backend server required
- Data stored in browser's LocalStorage only
- No user authentication
- Single user environment
- No advanced features (filtering, sorting, search)

## Future Enhancements

Possible improvements to expand functionality:
- Add search and filter functionality
- Sort games by name, genre, or price
- Export/Import game data (CSV/JSON)
- Dark mode toggle
- Add game ratings or reviews
- Implement React Router for advanced navigation
- Add automated tests with Jest

## License

This project is open source and available for public use.

## Deployment Information

Ready for deployment on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

---

**Project Status**: Active and maintained.
