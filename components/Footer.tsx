'use client';

interface FooterProps {
  onEnrollClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onEnrollClick, onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-[#FAFAF7] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="bg-[#5A8D73] rounded-lg p-8 md:p-12 mb-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Ready to Transform Your Life?
          </h3>
          <p className="text-[#F5F1EC] mb-6 max-w-2xl mx-auto">
            Take the first step toward lasting peace and emotional resilience. Join the next cohort and experience the Mindful Horizons difference.
          </p>
          <button
            onClick={onEnrollClick}
            className="px-8 py-3 bg-[#FAFAF7] text-[#5A8D73] font-semibold rounded-lg hover:bg-[#F5F1EC] transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now – Limited Spots Available
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[#E8E4DE]">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Mindful Horizons</h2>
            <p className="text-[#E8E4DE] text-sm">
              Transforming lives through evidence-based mental wellness coaching. With Dr. Elena Voss.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#E8E4DE]">
              <li>
                <a href="#about" className="hover:text-[#5A8D73] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#5A8D73] transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#5A8D73] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#5A8D73] transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-[#F5F1EC]/80 text-sm">
              <li>
                <a
                  href="mailto:hello@mindfuhorizons.com"
                  className="hover:text-[#5A8D73] transition-colors"
                >
                  hello@mindfuhorizons.com
                </a>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-[#5A8D73] transition-colors text-left"
                >
                  Send us a message
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#FAFAF7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F5F1EC]/60">
          <p>© {new Date().getFullYear()} Mindful Horizons. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#5A8D73] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#5A8D73] transition-colors">
              Terms of Service
            </a>
            <button onClick={onContactClick} className="hover:text-[#5A8D73] transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
