import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import MovieGrid from '../components/movies/MovieGrid';
import AdManager from '../components/ads/AdManager';
import { useMovies, useMoviesByCategory } from '../hooks/useMovies';

const HomePage: React.FC = () => {
  // Use real-time movie data
  const allMovies = useMovies();
  
  // Get featured movies (trending ones)
  const featuredMovies = allMovies.filter(movie => movie.isTrending).slice(0, 5);
  
  // Get movies by categories with real-time updates
  const latestMovies = useMoviesByCategory('latest');
  const trendingMovies = useMoviesByCategory('trending');
  const hollywoodMovies = useMoviesByCategory('hollywood');
  const bollywoodMovies = useMoviesByCategory('bollywood');
  const southIndianMovies = useMoviesByCategory('south-indian');
  
  return (
    <div className="min-h-screen">
      <HeroSection featuredMovies={featuredMovies} />
      
      <div className="container mx-auto px-4 py-6">
        {/* Latest Movies Section */}
        <MovieGrid 
          movies={latestMovies} 
          title="Latest Movies" 
          subtitle="Fresh releases to download and enjoy"
        />
        
        {/* Ad Banner */}
        <div className="my-8">
          <AdManager type="banner" id="home-banner-1" />
        </div>
        
        {/* Trending Movies Section */}
        <MovieGrid 
          movies={trendingMovies} 
          title="Trending Now" 
          subtitle="Most popular movies this week"
        />
        
        {/* Hollywood Movies Section */}
        <MovieGrid 
          movies={hollywoodMovies} 
          title="Hollywood Hits" 
          subtitle="Best of international cinema"
        />
        
        {/* Ad Banner */}
        <div className="my-8">
          <AdManager type="banner" id="home-banner-2" />
        </div>
        
        {/* Bollywood Movies Section */}
        <MovieGrid 
          movies={bollywoodMovies} 
          title="Bollywood Collection" 
          subtitle="Latest Hindi movies"
        />
        
        {/* South Indian Movies Section */}
        <MovieGrid 
          movies={southIndianMovies} 
          title="South Indian Cinema" 
          subtitle="Telugu, Tamil, Malayalam and Kannada movies"
        />
      </div>
      
      {/* Initialize popunder ad */}
      <AdManager type="popunder" />
    </div>
  );
};

export default HomePage;