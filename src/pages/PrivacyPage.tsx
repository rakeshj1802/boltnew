import React from 'react';
import { Shield, Eye, Database, Lock } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="privacy-top-banner" />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-dark-800 rounded-lg p-6 border border-dark-700 space-y-6">
              
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="text-primary-500" size={20} />
                  Information We Collect
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We collect information to provide better services to our users. The types of information we collect include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and download preferences</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience</li>
                  <li><strong>Contact Information:</strong> Email address and name when you contact us or subscribe to updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary-500" size={20} />
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>To provide and maintain our service</li>
                  <li>To improve and personalize your experience</li>
                  <li>To analyze usage patterns and optimize our website</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you updates about new movies and features (with your consent)</li>
                  <li>To detect and prevent fraud or abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, user information may be transferred</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                <div className="bg-dark-700/50 rounded-lg p-4 space-y-3">
                  <div>
                    <h4 className="font-medium text-primary-400">Essential Cookies</h4>
                    <p className="text-sm text-gray-400">Required for basic website functionality</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-400">Analytics Cookies</h4>
                    <p className="text-sm text-gray-400">Help us understand how visitors use our site</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-400">Advertising Cookies</h4>
                    <p className="text-sm text-gray-400">Used to deliver relevant advertisements</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="text-primary-500" size={20} />
                  Data Security
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                  practices of these external sites. We encourage you to read their privacy policies before providing any information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If you are a parent or guardian and believe your child has provided 
                  us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-dark-700/50 rounded-lg p-4 mt-3">
                  <p className="text-gray-300">
                    <strong>Email:</strong> privacy@moviehub.com<br />
                    <strong>Subject:</strong> Privacy Policy Inquiry
                  </p>
                </div>
              </section>

            </div>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="privacy-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default PrivacyPage;