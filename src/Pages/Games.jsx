// Games.jsx
// CRUD management interface

import { useState, useEffect } from 'react';
import GameForm from '../Components/GameForm';
import GameList from '../Components/GameList';
import {
  getAllGames,
  addGame,
  updateGame,
  deleteGame,
  getGameById,
} from '../services/GameService';

const Games = () => {
  // Games list
  const [games, setGames] = useState([]);
  // Editing mode
  const [editingGame, setEditingGame] = useState(null);

  // Load games on mount
  useEffect(() => {
    loadGames();
  }, []);

  // Load all games
  const loadGames = () => {
    const loadedGames = getAllGames();
    setGames(loadedGames);
  };

  // Save game
  const handleSaveGame = (gameData) => {
    if (editingGame) {
      // Update
      updateGame(editingGame.id, gameData);
      alert('Game updated successfully!');
      setEditingGame(null);
    } else {
      // Add new
      addGame(gameData);
      alert('Game added successfully!');
    }
    // Reload
    loadGames();
  };

  // Edit game
  const handleEditGame = (game) => {
    setEditingGame(game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delete game
  const handleDeleteGame = (id) => {
    deleteGame(id);
    alert('Game deleted successfully!');
    // Reload
    loadGames();
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingGame(null);
  };

  return (
    <div className="container-lg mt-2">
      <div className="row g-4">
        <div className="col-md-6">
          <h2 className="mb-4 text-success fw-bold">
            {editingGame ? 'Update Game' : 'Add a New Game'}
          </h2>

          {/* Game form */}
          <GameForm
            onSubmit={handleSaveGame}
            initialGame={editingGame}
            buttonLabel={editingGame ? 'Update Game' : 'Add Game'}
          />

          {/* Cancel button */}
          {editingGame && (
            <button
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel Editing
            </button>
          )}
        </div>

        <div className="col-lg-5 col-md-6">
          <h2 className="mb-4 text-primary fw-bold">Games List ({games.length})</h2>

          {/* Games list */}
          <GameList
            games={games}
            onEdit={handleEditGame}
            onDelete={handleDeleteGame}
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
