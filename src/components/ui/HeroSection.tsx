import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, Download } from 'lucide-react';
import { MovieType } from '../../data/movieData';

interface HeroSectionProps {
  featuredMovies: MovieType[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredMovies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const movie = featuredMovies[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-3">
            <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              FEATURED
            </span>
            <span className="bg-dark-700/70 text-gray-200 text-xs px-2 py-1 rounded-full flex items-center">
              <Star size={14} className="text-yellow-400 mr-1" fill="currentColor" />
              {movie.rating.toFixed(1)}/10
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre, index) => (
                <span key={index} className="bg-dark-700/50 px-2 py-0.5 rounded">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 mb-6 line-clamp-3 md:line-clamp-4">
            {movie.synopsis}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/movie/${movie.id}`}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded font-medium flex items-center space-x-2 transition-colors"
            >
              <Download size={18} />
              <span>Download Now</span>
            </Link>
            <Link
              to={`/movie/${movie.id}`}
              className="bg-dark-700/50 hover:bg-dark-600 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-primary-500 w-6'
                : 'bg-gray-400/50 hover:bg-gray-300/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;