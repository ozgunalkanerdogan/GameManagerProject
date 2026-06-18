// GameList.jsx
// Display and manage games

const GameList = ({ games, onEdit, onDelete }) => {
  return (
    <div>
      {games.length === 0 ? (
        // No games
        <div className="alert alert-info">
          No games found. Add a game to get started!
        </div>
      ) : (
        // Games table
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.name}</td>
                <td>{game.genre}</td>
                <td>${game.price.toFixed(2)}</td>
                <td>
                  {/* Edit */}
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(game)}
                  >
                    Edit
                  </button>
                  {/* Delete */}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      // Confirmation dialog before deletion
                      if (
                        window.confirm(
                          `Are you sure you want to delete "${game.name}"?`
                        )
                      ) {
                        onDelete(game.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GameList;
