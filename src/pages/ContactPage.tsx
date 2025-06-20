import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin, Clock } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">Contact Us</h1>
          </div>
          <p className="text-gray-400">Get in touch with our support team</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="contact-top-banner" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400 text-sm">support@moviehub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MessageSquare className="text-primary-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-gray-400 text-sm">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium">Response Time</h3>
                      <p className="text-gray-400 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-dark-700/50 rounded-lg">
                  <h3 className="font-medium mb-2">Quick Tips</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Include movie title for download issues</li>
                    <li>• Describe your problem clearly</li>
                    <li>• Check FAQ before contacting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-6">
                      <Send className="mx-auto text-green-500 mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                      <p className="text-gray-300">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="download-issue">Download Issue</option>
                        <option value="movie-request">Movie Request</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Please describe your issue or question in detail..."
                        required
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="contact-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default ContactPage;