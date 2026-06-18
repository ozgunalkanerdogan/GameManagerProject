// GameForm.jsx
// Add and update games

import { useState, useEffect } from 'react';

const GameForm = ({ onSubmit, initialGame = null, buttonLabel = 'Add Game' }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    price: '',
  });

  // Pre-fill for edit mode
  useEffect(() => {
    if (initialGame) {
      setFormData({
        name: initialGame.name,
        genre: initialGame.genre,
        price: initialGame.price,
      });
    }
  }, [initialGame]);

  // Update form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate fields
    if (!formData.name.trim() || !formData.genre.trim() || !formData.price) {
      alert('Please fill in all fields');
      return;
    }

    // Validate price
    if (isNaN(formData.price) || parseFloat(formData.price) < 0) {
      alert('Please enter a valid price');
      return;
    }

    // Submit form data
    onSubmit({
      name: formData.name.trim(),
      genre: formData.genre.trim(),
      price: parseFloat(formData.price),
    });

    // Reset form
    setFormData({
      name: '',
      genre: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Game Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter game name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <select
          className="form-select"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        >
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
          <option value="Sandbox">Sandbox</option>
          <option value="Battle Royale">Battle Royale</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price ($)
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          step="0.01"
          min="0"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {buttonLabel}
      </button>
    </form>
  );
};

export default GameForm;
