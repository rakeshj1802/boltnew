import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { movies as initialMovies, MovieType } from '../data/movieData';
import AdminPanel from '../components/admin/AdminPanel';
import MovieCard from '../components/movies/MovieCard';

const AdminPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieType[]>(initialMovies);
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleAddMovie = (newMovie: MovieType) => {
    setMovies(prev => [newMovie, ...prev]);
    // In a real app, you would save this to a database
    console.log('New movie added:', newMovie);
  };

  const handleDeleteMovie = (id: string) => {
    if (confirm('Are you sure you want to delete this movie?')) {
      setMovies(prev => prev.filter(movie => movie.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Movie Management</h1>
            <p className="text-gray-400 mt-2">Add, edit, and manage your movie collection</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-dark-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-600' : 'hover:bg-dark-700'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-primary-600' : 'hover:bg-dark-700'
                }`}
              >
                List
              </button>
            </div>
            
            <button
              onClick={() => setShowAddPanel(true)}
              className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add Movie
            </button>
          </div>
        </div>

        <div className="bg-dark-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span>Total Movies: <strong>{movies.length}</strong></span>
            <span>New Releases: <strong>{movies.filter(m => m.isNew).length}</strong></span>
            <span>Trending: <strong>{movies.filter(m => m.isTrending).length}</strong></span>
          </div>
        </div>

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
              <div key={movie.id} className="bg-dark-800 rounded-lg p-4 flex items-center gap-4">
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
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★ {movie.rating}</span>
                  <button
                    onClick={() => handleDeleteMovie(movie.id)}
                    className="bg-red-600 hover:bg-red-700 p-2 rounded text-white transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

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