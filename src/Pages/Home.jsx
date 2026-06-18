// Home.jsx
// Landing page

const Home = ({ onNavigate }) => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg">
            <div className="card-body text-center p-5">
              <h1 className="card-title mb-4">
                Welcome to Game Manager
              </h1>
              <p className="card-text lead mb-4">
                A simple application to manage your game collection with ease.
              </p>

              <div className="row mt-5">
                <div className="col-md-4">
                  <button 
                    className="btn btn-outline-primary btn-lg w-100 feature-btn"
                    onClick={() => onNavigate('games')}
                  >
                    <div className="text-center">
                      <h3 className="mb-2">📚</h3>
                      <h5>Browse Games</h5>
                      <p className="text-muted small">
                        View your entire game collection
                      </p>
                    </div>
                  </button>
                </div>
                <div className="col-md-4">
                  <button 
                    className="btn btn-outline-success btn-lg w-100 feature-btn"
                    onClick={() => onNavigate('games')}
                  >
                    <div className="text-center">
                      <h3 className="mb-2">➕</h3>
                      <h5>Add Games</h5>
                      <p className="text-muted small">
                        Add new games to your collection
                      </p>
                    </div>
                  </button>
                </div>
                <div className="col-md-4">
                  <button 
                    className="btn btn-outline-warning btn-lg w-100 feature-btn"
                    onClick={() => onNavigate('games')}
                  >
                    <div className="text-center">
                      <h3 className="mb-2">⚙️</h3>
                      <h5>Manage Games</h5>
                      <p className="text-muted small">
                        Edit or delete games from your list
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => onNavigate('games')}
                >
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
