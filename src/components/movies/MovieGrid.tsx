import React from 'react';
import MovieCard from './MovieCard';
import { MovieType } from '../../data/movieData';

interface MovieGridProps {
  movies: MovieType[];
  title?: string;
  subtitle?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, title, subtitle }) => {
  if (movies.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-xl font-semibold text-gray-300">No movies found</h2>
        <p className="text-gray-400 mt-2">Try a different search or category</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;