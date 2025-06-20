import React, { useState, useEffect } from 'react';
import { Lock, User, Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const ADMIN_CREDENTIALS = {
    username: 'Admin2002',
    password: 'admin@944'
  };

  // Check if already authenticated
  useEffect(() => {
    const session = localStorage.getItem('moviehub_admin_session');
    const loginTime = localStorage.getItem('moviehub_admin_login_time');
    
    if (session === 'authenticated' && loginTime) {
      const currentTime = Date.now();
      const sessionTime = parseInt(loginTime);
      const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours
      
      if (currentTime - sessionTime < sessionDuration) {
        // Already authenticated, redirect to dashboard
        navigate('/admin-dashboard');
      }
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      // Store admin session
      localStorage.setItem('moviehub_admin_session', 'authenticated');
      localStorage.setItem('moviehub_admin_login_time', Date.now().toString());
      
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
    } else {
      setError('Invalid username or password. Please check your credentials.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-dark-800 rounded-lg shadow-xl border border-dark-700 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary-500" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">Enter your credentials to access the admin panel</p>
          </div>

          {/* Demo Credentials Info */}
          <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-3 mb-6">
            <p className="text-blue-400 text-sm text-center">
              <strong>Demo Credentials:</strong><br />
              Username: Admin2002<br />
              Password: admin@944
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter admin username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg pl-10 pr-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock size={18} />
                  Login to Admin Panel
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-dark-700/50 rounded-lg">
            <p className="text-xs text-gray-400 text-center">
              🔒 This is a secure admin area. Session expires after 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;