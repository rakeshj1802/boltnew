import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Instagram, Twitter, Facebook, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Film className="text-primary-600" size={32} strokeWidth={1.5} />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                MovieHub
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for movies and web series. Download and enjoy the latest content in HD quality.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Latest Movies', 'Hollywood', 'Bollywood', 'South Indian', 'Web Series', 'Dubbed Movies'].map((category, index) => (
                <li key={index}>
                  <Link 
                    to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/trending"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/latest"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/hollywood"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                >
                  Most Downloaded
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/bollywood"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                >
                  Request Movie
                </Link>
              </li>
              {/* Admin Login Link */}
              <li>
                <Link 
                  to="/admin"
                  className="text-gray-400 hover:text-primary-500 transition-colors text-sm flex items-center gap-1"
                >
                  <Shield size={14} />
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Help & Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'DMCA', 'About Us'].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} MovieHub. All rights reserved. This site does not store any files on its server.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;