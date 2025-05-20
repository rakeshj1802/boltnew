import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../data/movieData';
import MovieGrid from '../components/movies/MovieGrid';
import AdManager from '../components/ads/AdManager';
import { Search } from 'lucide-react';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState(searchMovies(query));
  
  useEffect(() => {
    // Update results when query changes
    setSearchQuery(query);
    setResults(searchMovies(query));
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [query]);
  
  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Search Results</h1>
          <p className="text-gray-400 mt-2">
            {results.length > 0 
              ? `Found ${results.length} results for "${query}"` 
              : `No results found for "${query}"`}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Empty results suggestion */}
        {results.length === 0 && (
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 text-center mb-8">
            <Search size={48} className="mx-auto text-gray-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No movies found</h2>
            <p className="text-gray-400 mb-4">Try different keywords or browse our categories</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Latest', 'Hollywood', 'Bollywood', 'South Indian', 'Web Series'].map((category, index) => (
                <a 
                  key={index}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-dark-700 hover:bg-dark-600 px-3 py-1 rounded text-sm transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Ad Banner */}
        <div className="mb-8">
          <AdManager type="banner" id="search-top-banner" />
        </div>
        
        {/* Results Grid */}
        <MovieGrid movies={results} />
        
        {/* Ad Banner */}
        <div className="mt-8">
          <AdManager type="banner" id="search-bottom-banner" />
        </div>
      </div>
      
      {/* Initialize popunder ad */}
      <AdManager type="popunder" />
    </div>
  );
};

export default SearchResultsPage;