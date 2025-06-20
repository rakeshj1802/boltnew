import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Film, ChevronDown, Shield } from 'lucide-react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useOnClickOutside(searchRef, () => setIsSearchFocused(false));
  useOnClickOutside(categoryRef, () => setIsCategoryOpen(false));

  // Check admin authentication status
  useEffect(() => {
    const checkAdminAuth = () => {
      const session = localStorage.getItem('moviehub_admin_session');
      const loginTime = localStorage.getItem('moviehub_admin_login_time');
      
      if (session === 'authenticated' && loginTime) {
        const currentTime = Date.now();
        const sessionTime = parseInt(loginTime);
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours
        
        if (currentTime - sessionTime < sessionDuration) {
          setIsAdminAuthenticated(true);
        } else {
          setIsAdminAuthenticated(false);
        }
      } else {
        setIsAdminAuthenticated(false);
      }
    };

    checkAdminAuth();
    
    // Check every minute for session expiry
    const interval = setInterval(checkAdminAuth, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Auto search as user types (after 500ms of no typing)
    if (query.trim()) {
      debounceSearch(query);
    }
  };

  const debounceSearch = (() => {
    let timer: NodeJS.Timeout;
    return (query: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        navigate(`/search?q=${encodeURIComponent(query.trim().toLowerCase())}`);
      }, 500);
    };
  })();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim().toLowerCase())}`);
      setIsSearchFocused(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Latest Movies', path: '/category/latest' },
    { name: 'Hollywood', path: '/category/hollywood' },
    { name: 'Bollywood', path: '/category/bollywood' },
    { name: 'South Indian', path: '/category/south-indian' },
    { name: 'Web Series', path: '/category/web-series' },
    { name: 'Dubbed Movies', path: '/category/dubbed' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 shadow-lg backdrop-blur-sm' : 'bg-gradient-to-b from-dark-900 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Film className="text-primary-600" size={32} strokeWidth={1.5} />
            <span className="hidden sm:inline bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              MovieHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-primary-500 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <div className="relative" ref={categoryRef}>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center hover:text-primary-500 transition-colors text-sm font-medium"
              >
                Categories <ChevronDown className="ml-1" size={16} />
              </button>
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-1 bg-dark-800 rounded-md shadow-lg overflow-hidden w-48 py-1 z-50">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="block px-4 py-2 text-sm hover:bg-dark-700 hover:text-primary-500 transition-colors"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/category/latest"
              className="hover:text-primary-500 transition-colors text-sm font-medium"
            >
              Latest
            </Link>
            <Link
              to="/category/trending"
              className="hover:text-primary-500 transition-colors text-sm font-medium"
            >
              Trending
            </Link>
            {/* Admin Link - Only show if authenticated */}
            {isAdminAuthenticated && (
              <Link
                to="/admin"
                className="flex items-center gap-1 hover:text-primary-500 transition-colors text-sm font-medium"
              >
                <Shield size={16} />
                Admin
              </Link>
            )}
          </nav>

          {/* Search */}
          <div className="relative ml-auto mr-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                className={`bg-dark-700/50 border border-dark-600 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                  isSearchFocused ? 'w-64 md:w-80' : 'w-36 md:w-48'
                }`}
              />
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={18} 
              />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-dark-700/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="py-2 hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="py-2 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              {/* Admin Link in Mobile Menu - Only show if authenticated */}
              {isAdminAuthenticated && (
                <Link
                  to="/admin"
                  className="py-2 hover:text-primary-500 transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield size={16} />
                  Admin Panel
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;