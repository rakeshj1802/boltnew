import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download } from 'lucide-react';
import { MovieType } from '../../data/movieData';

interface MovieCardProps {
  movie: MovieType;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      className="group relative bg-dark-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={onClick}
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={movie.poster} 
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
          
          {movie.isNew && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              NEW
            </div>
          )}
          
          <div className="absolute top-2 right-2 flex items-center bg-dark-800/80 text-white text-xs px-2 py-1 rounded-full">
            <Star size={14} className="text-yellow-400 mr-1" fill="currentColor" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-3">
            <h3 className="text-white font-medium text-base line-clamp-2 group-hover:text-primary-500 transition-colors">
              {movie.title}
            </h3>
            
            <div className="flex items-center justify-between mt-1 text-xs text-gray-300">
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="p-3 pt-0">
        <div className="flex flex-wrap gap-1 mt-2 mb-2">
          {movie.genres.slice(0, 3).map((genre, index) => (
            <span 
              key={index} 
              className="bg-dark-700 text-gray-300 text-xs px-2 py-0.5 rounded"
            >
              {genre}
            </span>
          ))}
        </div>
        
        <Link
          to={`/movie/${movie.id}`}
          className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded transition-colors text-sm gap-1"
        >
          <Download size={16} />
          Download
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;