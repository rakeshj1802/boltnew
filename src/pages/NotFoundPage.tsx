import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded font-medium flex items-center justify-center space-x-2 transition-colors"
          >
            <Home size={18} />
            <span>Go to Homepage</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded font-medium flex items-center justify-center space-x-2 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>
        
        {/* Ad Banner */}
        <div className="mt-12">
          <AdManager type="banner" id="not-found-banner" />
        </div>
      </div>
      
      {/* Initialize popunder ad */}
      <AdManager type="popunder" />
    </div>
  );
};

export default NotFoundPage;