import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Calendar, Download, ArrowLeft, User, Film, Globe } from 'lucide-react';
import { useMovies, useMoviesByCategory } from '../hooks/useMovies';
import { getMovieById } from '../utils/movieStore';
import MovieGrid from '../components/movies/MovieGrid';
import AdManager from '../components/ads/AdManager';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Get the specific movie
  const movie = getMovieById(id || '');
  
  // Get related movies with real-time updates
  const relatedMovies = useMoviesByCategory(movie?.category || '')
    .filter(m => m.id !== movie?.id)
    .slice(0, 6);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If movie not found, redirect to 404
    if (!movie && id) {
      navigate('/not-found');
    }
  }, [id, movie, navigate]);
  
  if (!movie) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70"></div>
        </div>
        
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="shrink-0 w-48 h-72 md:w-64 md:h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-dark-700">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {movie.title} <span className="text-gray-400">({movie.year})</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center bg-dark-800/70 px-2 py-1 rounded">
                  <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                  <span>{movie.rating.toFixed(1)}/10</span>
                </div>
                <div className="flex items-center bg-dark-800/70 px-2 py-1 rounded">
                  <Clock size={16} className="mr-1" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center bg-dark-800/70 px-2 py-1 rounded">
                  <Calendar size={16} className="mr-1" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center bg-dark-800/70 px-2 py-1 rounded">
                  <Globe size={16} className="mr-1" />
                  <span>{movie.language}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre, index) => (
                  <Link
                    key={index}
                    to={`/category/${genre.toLowerCase()}`}
                    className="bg-dark-700/50 hover:bg-dark-600 px-3 py-1 rounded text-sm transition-colors"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {movie.synopsis}
              </p>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-start">
                  <User size={18} className="text-gray-400 mt-1 mr-2" />
                  <div>
                    <span className="text-gray-400 mr-2">Starring:</span>
                    <span className="text-gray-200">{movie.actors.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Film size={18} className="text-gray-400 mt-1 mr-2" />
                  <div>
                    <span className="text-gray-400 mr-2">Director:</span>
                    <span className="text-gray-200">{movie.director}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-dark-800 rounded-lg p-6 shadow-lg border border-dark-700">
          <h2 className="text-2xl font-bold mb-6">Download "{movie.title}"</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movie.quality.map((quality, index) => (
              <div 
                key={index}
                className="border border-dark-600 rounded-lg overflow-hidden"
              >
                <div className="bg-dark-700 px-4 py-2 font-medium">
                  {quality} Quality
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">File Size:</span>
                    <span className="text-sm">
                      {quality === '720p' ? '1.2 GB' : quality === '1080p' ? '2.4 GB' : '5.1 GB'}
                    </span>
                  </div>
                  <button 
                    className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded transition-colors gap-2"
                    onClick={() => {
                      // Trigger popunder ad on download click
                      // In a real implementation, this would also start the download
                      alert(`Download started for ${movie.title} in ${quality}`);
                    }}
                  >
                    <Download size={18} />
                    Download {quality}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-dark-700/50 rounded-lg text-sm text-gray-300">
            <p>
              <strong>How to download:</strong> Click on the download button corresponding to your preferred quality. 
              The download will start immediately. If you face any issues, please contact us.
            </p>
          </div>
        </div>
        
        {/* Ad Banner */}
        <div className="my-8">
          <AdManager type="banner" id="movie-detail-banner" />
        </div>
        
        {/* Related Movies - Now with real-time updates */}
        <MovieGrid 
          movies={relatedMovies} 
          title="You May Also Like" 
          subtitle="Similar movies you might enjoy"
        />
      </div>
      
      {/* Initialize popunder ad */}
      <AdManager type="popunder" />
    </div>
  );
};

export default MovieDetailPage;