import React from 'react';
import { Film, Users, Download, Star, Shield, Zap } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Film, label: 'Movies Available', value: '10,000+' },
    { icon: Users, label: 'Active Users', value: '500K+' },
    { icon: Download, label: 'Downloads', value: '2M+' },
    { icon: Star, label: 'User Rating', value: '4.8/5' }
  ];

  const features = [
    {
      icon: Download,
      title: 'Free Downloads',
      description: 'All movies are completely free to download with no hidden charges or subscriptions required.'
    },
    {
      icon: Zap,
      title: 'High Speed',
      description: 'Fast download speeds with multiple server options to ensure the best possible experience.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All files are scanned for viruses and malware to ensure your device stays protected.'
    },
    {
      icon: Star,
      title: 'HD Quality',
      description: 'Multiple quality options including 720p, 1080p, and 4K for the best viewing experience.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Film className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">About MovieHub</h1>
          </div>
          <p className="text-gray-400">Your ultimate destination for movie downloads</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="about-top-banner" />
          </div>

          {/* Hero Section */}
          <div className="bg-dark-800 rounded-lg p-8 border border-dark-700 mb-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Welcome to MovieHub</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                MovieHub is your premier destination for downloading the latest movies and web series. 
                We provide high-quality content across multiple genres and languages, ensuring there's 
                something for every movie enthusiast. Our platform is designed to offer a seamless 
                and enjoyable experience for all users.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-dark-800 rounded-lg p-6 text-center border border-dark-700">
                <stat.icon className="mx-auto text-primary-500 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose MovieHub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-600/20 p-3 rounded-lg">
                      <feature.icon className="text-primary-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-dark-800 rounded-lg p-8 border border-dark-700 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At MovieHub, our mission is to make entertainment accessible to everyone. We believe that 
                  great movies and shows should be available to all, regardless of geographical location or 
                  economic circumstances.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We strive to maintain the highest quality standards while ensuring our platform remains 
                  user-friendly and completely free. Our team works tirelessly to bring you the latest 
                  releases and timeless classics in the best possible quality.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-lg p-6 border border-primary-600/30">
                <h3 className="text-xl font-semibold mb-4 text-primary-400">Our Values</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Free access to quality entertainment</li>
                  <li>• User privacy and security</li>
                  <li>• Regular content updates</li>
                  <li>• Community-driven improvements</li>
                  <li>• Responsive customer support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Categories */}
          <div className="bg-dark-800 rounded-lg p-8 border border-dark-700 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">Hollywood Movies</h3>
                <p className="text-gray-400 text-sm">
                  Latest blockbusters, action films, comedies, dramas, and more from Hollywood's biggest studios.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">Bollywood & Regional</h3>
                <p className="text-gray-400 text-sm">
                  Hindi movies, South Indian cinema, and regional films in multiple languages and genres.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">Web Series & Shows</h3>
                <p className="text-gray-400 text-sm">
                  Popular web series, TV shows, documentaries, and exclusive content from various platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary-600/20 to-primary-800/20 rounded-lg p-8 border border-primary-600/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Have questions, suggestions, or need help? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact-us"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/faq"
                className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="about-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default AboutPage;