import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByCategory } from '../data/movieData';
import MovieGrid from '../components/movies/MovieGrid';
import AdManager from '../components/ads/AdManager';

const CategoryPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const movies = getMoviesByCategory(type || '');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [type]);
  
  // Helper function to format category name for display
  const formatCategoryName = (category: string) => {
    switch (category) {
      case 'latest':
        return 'Latest Movies';
      case 'hollywood':
        return 'Hollywood Movies';
      case 'bollywood':
        return 'Bollywood Movies';
      case 'south-indian':
        return 'South Indian Movies';
      case 'web-series':
        return 'Web Series';
      case 'dubbed':
        return 'Dubbed Movies';
      case 'trending':
        return 'Trending Movies';
      default:
        return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  };
  
  // Helper function to get category description
  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'latest':
        return 'Browse and download the newest movie releases';
      case 'hollywood':
        return 'Latest English movies from Hollywood';
      case 'bollywood':
        return 'Latest Hindi movies from Bollywood';
      case 'south-indian':
        return 'Movies from Telugu, Tamil, Malayalam and Kannada film industries';
      case 'web-series':
        return 'Popular web series and TV shows';
      case 'dubbed':
        return 'Foreign movies dubbed in English';
      case 'trending':
        return 'Most popular and trending movies right now';
      default:
        return 'Browse and download movies';
    }
  };
  
  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">{formatCategoryName(type || '')}</h1>
          <p className="text-gray-400 mt-2">{getCategoryDescription(type || '')}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Ad Banner */}
        <div className="mb-8">
          <AdManager type="banner" id="category-top-banner" />
        </div>
        
        {/* Movies Grid */}
        <MovieGrid movies={movies} />
        
        {/* Ad Banner */}
        <div className="mt-8">
          <AdManager type="banner" id="category-bottom-banner" />
        </div>
      </div>
      
      {/* Initialize popunder ad */}
      <AdManager type="popunder" />
    </div>
  );
};

export default CategoryPage;