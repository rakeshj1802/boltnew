import React, { useState } from 'react';
import { Send, Film, Star, Calendar, User, MessageSquare } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const RequestMoviePage: React.FC = () => {
  const [formData, setFormData] = useState({
    movieTitle: '',
    year: '',
    genre: '',
    language: '',
    requestType: 'movie',
    description: '',
    requesterName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      movieTitle: '',
      year: '',
      genre: '',
      language: '',
      requestType: 'movie',
      description: '',
      requesterName: '',
      email: ''
    });
  };

  const popularRequests = [
    { title: 'Spider-Man: No Way Home', requests: 245 },
    { title: 'The Batman', requests: 189 },
    { title: 'Doctor Strange 2', requests: 156 },
    { title: 'Top Gun: Maverick', requests: 134 },
    { title: 'Black Panther 2', requests: 98 }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Film className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">Request Movies</h1>
          </div>
          <p className="text-gray-400">Can't find a movie? Request it and we'll try to add it to our collection!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="request-top-banner" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Request Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MessageSquare className="text-primary-500" size={20} />
                  Submit Movie Request
                </h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-6">
                      <Send className="mx-auto text-green-500 mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-green-400 mb-2">Request Submitted!</h3>
                      <p className="text-gray-300 mb-4">
                        Thank you for your movie request. We'll review it and try to add it to our collection soon.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded transition-colors"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Movie/Show Title *</label>
                        <input
                          type="text"
                          name="movieTitle"
                          value={formData.movieTitle}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter movie or show title"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Release Year</label>
                        <input
                          type="number"
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="2024"
                          min="1900"
                          max="2030"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type *</label>
                        <select
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="movie">Movie</option>
                          <option value="web-series">Web Series</option>
                          <option value="tv-show">TV Show</option>
                          <option value="documentary">Documentary</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Language</label>
                        <select
                          name="language"
                          value={formData.language}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">Select Language</option>
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                          <option value="Telugu">Telugu</option>
                          <option value="Tamil">Tamil</option>
                          <option value="Malayalam">Malayalam</option>
                          <option value="Kannada">Kannada</option>
                          <option value="Spanish">Spanish</option>
                          <option value="French">French</option>
                          <option value="Korean">Korean</option>
                          <option value="Japanese">Japanese</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Genre</label>
                      <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Action, Comedy, Drama, etc."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          name="requesterName"
                          value={formData.requesterName}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your name (optional)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="your@email.com (optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Details</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Any additional information about the movie/show you're requesting..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white py-3 rounded font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Popular Requests */}
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} />
                  Most Requested
                </h3>
                <div className="space-y-3">
                  {popularRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-dark-700/50 rounded">
                      <div>
                        <h4 className="font-medium text-sm">{request.title}</h4>
                        <p className="text-xs text-gray-400">{request.requests} requests</p>
                      </div>
                      <div className="text-primary-500 text-xs font-medium">
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Guidelines */}
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="text-primary-500" size={20} />
                  Request Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Be specific with movie titles and years</li>
                  <li>• Check if the movie is already available</li>
                  <li>• Popular requests get priority</li>
                  <li>• We try to fulfill requests within 1-2 weeks</li>
                  <li>• Not all requests can be guaranteed</li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h3 className="text-lg font-semibold mb-4">Request Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Requests</span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fulfilled</span>
                    <span className="font-medium text-green-400">892</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Success Rate</span>
                    <span className="font-medium text-primary-400">71.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="request-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default RequestMoviePage;