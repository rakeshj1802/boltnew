// Movie Store - Centralized data management with real-time updates
import { MovieType } from '../data/movieData';

class MovieStore {
  private movies: MovieType[] = [];
  private listeners: Array<(movies: MovieType[]) => void> = [];

  constructor(initialMovies: MovieType[]) {
    this.movies = [...initialMovies];
  }

  // Get all movies
  getMovies(): MovieType[] {
    return [...this.movies];
  }

  // Add a movie
  addMovie(movie: MovieType): void {
    this.movies = [movie, ...this.movies];
    this.notifyListeners();
  }

  // Delete a movie
  deleteMovie(id: string): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
    this.notifyListeners();
  }

  // Update a movie
  updateMovie(id: string, updatedMovie: Partial<MovieType>): void {
    this.movies = this.movies.map(movie =>
      movie.id === id ? { ...movie, ...updatedMovie } : movie
    );
    this.notifyListeners();
  }

  // Get movie by ID
  getMovieById(id: string): MovieType | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  // Get movies by category
  getMoviesByCategory(category: string): MovieType[] {
    if (category === 'latest') {
      return this.movies.filter(movie => movie.isNew).sort((a, b) => b.year - a.year);
    }
    
    if (category === 'trending') {
      return this.movies.filter(movie => movie.isTrending);
    }
    
    return this.movies.filter(movie => movie.category === category);
  }

  // Search movies
  searchMovies(query: string): MovieType[] {
    const lowerCaseQuery = query.toLowerCase();
    return this.movies.filter(movie => 
      movie.title.toLowerCase().includes(lowerCaseQuery) ||
      movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery)) ||
      movie.actors.some(actor => actor.toLowerCase().includes(lowerCaseQuery)) ||
      movie.director.toLowerCase().includes(lowerCaseQuery) ||
      movie.language.toLowerCase().includes(lowerCaseQuery)
    );
  }

  // Subscribe to changes
  subscribe(listener: (movies: MovieType[]) => void): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners of changes
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener([...this.movies]));
  }
}

// Create singleton instance
import { movies as initialMovies } from '../data/movieData';
export const movieStore = new MovieStore(initialMovies);

// Export utility functions that use the store
export const getMovies = () => movieStore.getMovies();
export const addMovie = (movie: MovieType) => movieStore.addMovie(movie);
export const deleteMovie = (id: string) => movieStore.deleteMovie(id);
export const updateMovie = (id: string, movie: Partial<MovieType>) => movieStore.updateMovie(id, movie);
export const getMovieById = (id: string) => movieStore.getMovieById(id);
export const getMoviesByCategory = (category: string) => movieStore.getMoviesByCategory(category);
export const searchMovies = (query: string) => movieStore.searchMovies(query);
export const subscribeToMovies = (listener: (movies: MovieType[]) => void) => movieStore.subscribe(listener);