import React from 'react';
import { FileText, Shield, AlertTriangle } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="terms-top-banner" />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-dark-800 rounded-lg p-6 border border-dark-700 space-y-6">
              
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="text-primary-500" size={20} />
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using MovieHub, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Permission is granted to temporarily download one copy of the materials on MovieHub for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials on MovieHub are provided on an 'as is' basis. MovieHub makes no warranties, expressed or implied, 
                  and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions 
                  of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Content Policy</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  MovieHub does not host any files on its servers. All content is provided through third-party links. 
                  We are not responsible for the content of external websites or the availability of download links.
                </p>
                <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-1">Important Notice</h4>
                      <p className="text-sm text-gray-300">
                        Users are responsible for ensuring they have the right to download and use any content. 
                        Please respect copyright laws in your jurisdiction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. User Conduct</h2>
                <p className="text-gray-300 leading-relaxed mb-3">You agree not to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Upload or distribute malicious software</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Limitations</h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall MovieHub or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on MovieHub, even if MovieHub or its authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Revisions</h2>
                <p className="text-gray-300 leading-relaxed">
                  MovieHub may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at support@moviehub.com
                </p>
              </section>

            </div>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="terms-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default TermsPage;