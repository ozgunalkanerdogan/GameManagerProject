// App.jsx
// Main application component

import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Games from './Pages/Games';
import { initializeGames } from './services/GameService';
import './App.css';

function App() {
  // Current page state
  const [currentPage, setCurrentPage] = useState('home');

  // Initialize games on mount
  useEffect(() => {
    initializeGames();
  }, []);

  // Render active page
  const renderPage = () => {
    switch (currentPage) {
      case 'games':
        return <Games />;
      case 'home':
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">🎮 Game Manager</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    currentPage === 'home' ? 'active' : ''
                  }`}
                  onClick={() => setCurrentPage('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    currentPage === 'games' ? 'active' : ''
                  }`}
                  onClick={() => setCurrentPage('games')}
                >
                  Games
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="page-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <p className="mb-0">&copy; 2026 Game Manager Project. Created by Özgün Alkan Erdoğan</p>
      </footer>
    </div>
  );
}

export default App;
