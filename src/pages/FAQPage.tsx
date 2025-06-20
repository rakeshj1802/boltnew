import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import AdManager from '../components/ads/AdManager';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      question: "How do I download movies from MovieHub?",
      answer: "To download movies, simply browse our collection, click on any movie you like, and select your preferred quality (720p, 1080p, or 4K). Click the download button and the file will start downloading immediately."
    },
    {
      question: "Are the movies free to download?",
      answer: "Yes, all movies on MovieHub are completely free to download. We support our platform through advertisements, so you might see some ads during your browsing experience."
    },
    {
      question: "What video qualities are available?",
      answer: "We offer multiple quality options including 720p HD, 1080p Full HD, and 4K Ultra HD. The availability depends on the specific movie. Higher quality files are larger in size."
    },
    {
      question: "How often do you add new movies?",
      answer: "We add new movies regularly, typically 5-10 new releases every week. Check our 'Latest Movies' section or follow our social media for updates on new additions."
    },
    {
      question: "Can I request a specific movie?",
      answer: "Yes! You can request movies through our contact form or social media channels. While we can't guarantee every request, we do our best to add popular requested titles."
    },
    {
      question: "Why do I see advertisements?",
      answer: "Advertisements help us keep MovieHub free for all users. They cover our server costs and allow us to continue providing high-quality movie downloads at no charge."
    },
    {
      question: "Are the downloads safe and virus-free?",
      answer: "Yes, all our movie files are scanned for viruses and malware before being made available. However, we always recommend using updated antivirus software on your device."
    },
    {
      question: "What file formats do you provide?",
      answer: "Most of our movies are available in MP4 format, which is compatible with virtually all devices and media players. Some titles may also be available in MKV format."
    },
    {
      question: "Can I watch movies online or only download?",
      answer: "Currently, MovieHub focuses on providing download links. This ensures you can enjoy movies offline and have permanent access to your downloaded content."
    },
    {
      question: "How do I report a broken download link?",
      answer: "If you encounter a broken download link, please contact us through our support page with the movie title and the issue you're experiencing. We'll fix it as soon as possible."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="text-primary-600" size={32} />
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-gray-400">Find answers to common questions about MovieHub</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <AdManager type="banner" id="faq-top-banner" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-dark-800 rounded-lg border border-dark-700 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-700/50 transition-colors"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-primary-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-dark-800 rounded-lg p-6 text-center border border-dark-700">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-gray-400 mb-4">
              Can't find what you're looking for? Get in touch with our support team.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Contact Support
            </a>
          </div>

          <div className="mt-8">
            <AdManager type="banner" id="faq-bottom-banner" />
          </div>
        </div>
      </div>

      <AdManager type="popunder" />
    </div>
  );
};

export default FAQPage;