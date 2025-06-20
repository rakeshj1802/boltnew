import { useState, useEffect } from 'react';
import { MovieType } from '../data/movieData';
import { subscribeToMovies, getMovies } from '../utils/movieStore';

// Custom hook for real-time movie data
export const useMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>(getMovies());

  useEffect(() => {
    // Subscribe to movie store changes
    const unsubscribe = subscribeToMovies((updatedMovies) => {
      setMovies(updatedMovies);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  return movies;
};

// Custom hook for movies by category with real-time updates
export const useMoviesByCategory = (category: string) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const allMovies = useMovies();

  useEffect(() => {
    if (category === 'latest') {
      setMovies(allMovies.filter(movie => movie.isNew).sort((a, b) => b.year - a.year));
    } else if (category === 'trending') {
      setMovies(allMovies.filter(movie => movie.isTrending));
    } else {
      setMovies(allMovies.filter(movie => movie.category === category));
    }
  }, [allMovies, category]);

  return movies;
};

// Custom hook for movie search with real-time updates
export const useMovieSearch = (query: string) => {
  const [results, setResults] = useState<MovieType[]>([]);
  const allMovies = useMovies();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const searchResults = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(lowerCaseQuery) ||
      movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery)) ||
      movie.actors.some(actor => actor.toLowerCase().includes(lowerCaseQuery)) ||
      movie.director.toLowerCase().includes(lowerCaseQuery) ||
      movie.language.toLowerCase().includes(lowerCaseQuery)
    );

    setResults(searchResults);
  }, [allMovies, query]);

  return results;
};