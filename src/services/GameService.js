// GameService.js
// Game data and storage management

const GAMES_KEY = 'games_data';

// Initialize with sample data - resets on every page load
export const initializeGames = () => {
  const sampleGames = [
    { id: 1, name: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure', price: 59.99 },
    { id: 2, name: 'Elden Ring', genre: 'RPG', price: 59.99 },
    { id: 3, name: 'Minecraft', genre: 'Sandbox', price: 26.95 },
    { id: 4, name: 'Fortnite', genre: 'Battle Royale', price: 0.00 },
    { id: 5, name: 'Cyberpunk 2077', genre: 'Action RPG', price: 49.99 },
    { id: 6, name: 'Stardew Valley', genre: 'Simulation', price: 14.99 },
  ];
  localStorage.setItem(GAMES_KEY, JSON.stringify(sampleGames));
};

// Read - Get all games
export const getAllGames = () => {
  const games = localStorage.getItem(GAMES_KEY);
  return games ? JSON.parse(games) : [];
};

// Read - Get a single game by ID
export const getGameById = (id) => {
  const games = getAllGames();
  return games.find(game => game.id === parseInt(id));
};

// Create - Add a new game
export const addGame = (game) => {
  const games = getAllGames();
  // Generate a new ID based on the highest existing ID
  const newId = games.length > 0 ? Math.max(...games.map(g => g.id)) + 1 : 1;
  const newGame = { ...game, id: newId };
  games.push(newGame);
  localStorage.setItem(GAMES_KEY, JSON.stringify(games));
  return newGame;
};

// Update - Update an existing game
export const updateGame = (id, updatedGame) => {
  const games = getAllGames();
  const index = games.findIndex(game => game.id === parseInt(id));
  if (index !== -1) {
    games[index] = { ...games[index], ...updatedGame, id: parseInt(id) };
    localStorage.setItem(GAMES_KEY, JSON.stringify(games));
    return games[index];
  }
  return null;
};

// Delete - Remove a game
export const deleteGame = (id) => {
  const games = getAllGames();
  const filteredGames = games.filter(game => game.id !== parseInt(id));
  localStorage.setItem(GAMES_KEY, JSON.stringify(filteredGames));
  return true;
};
