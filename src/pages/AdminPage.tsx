import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, LogOut, Shield, Users, Film, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MovieType } from '../data/movieData';
import { useMovies } from '../hooks/useMovies';
import { addMovie, deleteMovie } from '../utils/movieStore';
import AdminPanel from '../components/admin/AdminPanel';
import MovieCard from '../components/movies/MovieCard';

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();
  
  // Use real-time movie data
  const movies = useMovies();

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const session = localStorage.getItem('moviehub_admin_session');
      const loginTime = localStorage.getItem('moviehub_admin_login_time');
      
      if (session === 'authenticated' && loginTime) {
        const currentTime = Date.now();
        const sessionTime = parseInt(loginTime);
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours
        
        if (currentTime - sessionTime < sessionDuration) {
          setIsAuthenticated(true);
        } else {
          // Session expired
          localStorage.removeItem('moviehub_admin_session');
          localStorage.removeItem('moviehub_admin_login_time');
          navigate('/admin');
        }
      } else {
        navigate('/admin');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('moviehub_admin_session');
    localStorage.removeItem('moviehub_admin_login_time');
    setIsAuthenticated(false);
    navigate('/admin');
  };

  const handleAddMovie = (newMovie: MovieType) => {
    // Add movie to the centralized store - this will automatically update all components
    addMovie(newMovie);
    console.log('New movie added:', newMovie);
  };

  const handleDeleteMovie = (id: string) => {
    if (confirm('Are you sure you want to delete this movie? This will remove it from the entire website.')) {
      // Delete movie from the centralized store - this will automatically update all components
      deleteMovie(id);
      console.log('Movie deleted:', id);
    }
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, this will be handled by useEffect redirect
  if (!isAuthenticated) {
    return null;
  }

  // Show admin dashboard if authenticated
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Admin Header */}
      <div className="bg-dark-800 border-b border-dark-700 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary-600/20 p-2 rounded-lg">
                <Shield className="text-primary-500" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-gray-400">MovieHub Management Panel</p>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards - Now with real-time data */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Movies</p>
                <p className="text-2xl font-bold">{movies.length}</p>
              </div>
              <Film className="text-primary-500" size={32} />
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">New Releases</p>
                <p className="text-2xl font-bold">{movies.filter(m => m.isNew).length}</p>
              </div>
              <Plus className="text-green-500" size={32} />
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Trending</p>
                <p className="text-2xl font-bold">{movies.filter(m => m.isTrending).length}</p>
              </div>
              <TrendingUp className="text-yellow-500" size={32} />
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Categories</p>
                <p className="text-2xl font-bold">{new Set(movies.map(m => m.category)).size}</p>
              </div>
              <Users className="text-blue-500" size={32} />
            </div>
          </div>
        </div>

        {/* Management Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Movie Management</h2>
            <p className="text-gray-400 mt-1">Add, edit, and manage your movie collection</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-dark-800 rounded-lg p-1 border border-dark-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded transition-colors text-sm ${
                  viewMode === 'grid' ? 'bg-primary-600' : 'hover:bg-dark-700'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded transition-colors text-sm ${
                  viewMode === 'list' ? 'bg-primary-600' : 'hover:bg-dark-700'
                }`}
              >
                List
              </button>
            </div>
            
            <button
              onClick={() => setShowAddPanel(true)}
              className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add Movie
            </button>
          </div>
        </div>

        {/* Real-time Update Indicator */}
        <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-3 mb-6">
          <p className="text-green-400 text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Data: Changes made here will instantly reflect across the entire website
          </p>
        </div>

        {/* Movies Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="relative group">
                <MovieCard movie={movie} />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => handleDeleteMovie(movie.id)}
                      className="bg-red-600 hover:bg-red-700 p-1 rounded text-white transition-colors"
                      title="Delete Movie"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-dark-800 rounded-lg p-4 flex items-center gap-4 border border-dark-700">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-16 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{movie.title}</h3>
                  <p className="text-gray-400 text-sm">{movie.year} • {movie.language} • {movie.duration}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {movie.genres.slice(0, 3).map((genre, index) => (
                      <span key={index} className="bg-dark-700 text-xs px-2 py-1 rounded">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {movie.isNew && (
                      <span className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded">NEW</span>
                    )}
                    {movie.isTrending && (
                      <span className="bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded">TRENDING</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 flex items-center gap-1">
                    ⭐ {movie.rating}
                  </span>
                  <button
                    onClick={() => handleDeleteMovie(movie.id)}
                    className="bg-red-600 hover:bg-red-700 p-2 rounded text-white transition-colors"
                    title="Delete Movie"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Movie Panel */}
        {showAddPanel && (
          <AdminPanel
            onAddMovie={handleAddMovie}
            onClose={() => setShowAddPanel(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPage;