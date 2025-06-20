import React from 'react';
import { AlertTriangle, Mail, FileText, Clock } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

const DMCAPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">DMCA Policy</h1>
          </div>
          <p className="text-gray-400">Digital Millennium Copyright Act Compliance</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="dmca-top-banner" />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-dark-800 rounded-lg p-6 border border-dark-700 space-y-6">
              
              <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-500 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-yellow-400 mb-2">Important Notice</h3>
                    <p className="text-sm text-gray-300">
                      MovieHub respects the intellectual property rights of others and expects our users to do the same. 
                      We respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act.
                    </p>
                  </div>
                </div>
              </div>

              <section>
                <h2 className="text-xl font-semibold mb-4">Our Policy</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  MovieHub does not host any copyrighted content on our servers. We are a search engine that provides 
                  links to content hosted on third-party websites. However, we take copyright infringement seriously 
                  and will respond promptly to valid DMCA takedown notices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you believe that your copyrighted work has been copied in a way that constitutes copyright 
                  infringement and is accessible through our service, please notify us as outlined below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="text-primary-500" size={20} />
                  Filing a DMCA Notice
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  To file a DMCA takedown notice, please provide the following information:
                </p>
                <div className="bg-dark-700/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Identification of the copyrighted work</h4>
                      <p className="text-sm text-gray-400">
                        Provide a description of the copyrighted work that you claim has been infringed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Location of infringing material</h4>
                      <p className="text-sm text-gray-400">
                        Provide the specific URL(s) where the allegedly infringing material is located
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Your contact information</h4>
                      <p className="text-sm text-gray-400">
                        Include your name, address, telephone number, and email address
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Good faith statement</h4>
                      <p className="text-sm text-gray-400">
                        A statement that you have a good faith belief that the use is not authorized
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Accuracy statement</h4>
                      <p className="text-sm text-gray-400">
                        A statement that the information is accurate and you are authorized to act
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Electronic signature</h4>
                      <p className="text-sm text-gray-400">
                        Your physical or electronic signature
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="text-primary-500" size={20} />
                  How to Submit
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Please send your DMCA takedown notice to our designated agent:
                </p>
                <div className="bg-dark-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-primary-400 mb-2">DMCA Agent Contact Information</h4>
                  <div className="text-gray-300 space-y-1">
                    <p><strong>Email:</strong> dmca@moviehub.com</p>
                    <p><strong>Subject Line:</strong> DMCA Takedown Notice</p>
                    <p><strong>Response Time:</strong> 24-48 hours</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="text-primary-500" size={20} />
                  Our Response Process
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Upon receiving a valid DMCA notice, we will:
                </p>
                <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                  <li>Review the notice for completeness and validity</li>
                  <li>Remove or disable access to the allegedly infringing material</li>
                  <li>Notify the user who posted the material (if applicable)</li>
                  <li>Provide the user with a copy of the takedown notice</li>
                  <li>Inform the user of their right to file a counter-notice</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Counter-Notification</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  If you believe that your material was removed or disabled by mistake or misidentification, 
                  you may file a counter-notification. Your counter-notification must include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Your physical or electronic signature</li>
                  <li>Identification of the material that was removed</li>
                  <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                  <li>Your contact information</li>
                  <li>A statement consenting to jurisdiction of federal court</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Repeat Infringers</h2>
                <p className="text-gray-300 leading-relaxed">
                  MovieHub has a policy of terminating, in appropriate circumstances, users who are repeat infringers. 
                  We may also limit access to our service and/or terminate accounts of users who infringe any 
                  intellectual property rights of others.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">False Claims</h2>
                <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Warning:</strong> Under Section 512(f) of the DMCA, any person who knowingly materially 
                    misrepresents that material is infringing may be subject to liability for damages. 
                    Please ensure your claim is valid before submitting a DMCA notice.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For all DMCA-related inquiries, please contact our designated agent at dmca@moviehub.com. 
                  For general questions about our service, please use our regular contact form.
                </p>
              </section>

            </div>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="dmca-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default DMCAPage;