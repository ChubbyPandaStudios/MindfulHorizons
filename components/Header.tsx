'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onEnrollClick: () => void;
}

export default function Header({ onEnrollClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
          
          setScrollProgress(scroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#5A8D73] z-[60] transition-all duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-[#E8E4DE]'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#5A8D73]">
              Mindful Horizons
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#about"
              className="text-[#1A1A2E] hover:text-[#5A8D73] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#benefits"
              className="text-[#1A1A2E] hover:text-[#5A8D73] transition-colors duration-300"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="text-[#1A1A2E] hover:text-[#5A8D73] transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-[#1A1A2E] hover:text-[#5A8D73] transition-colors duration-300"
            >
              Testimonials
            </a>
            <button
              onClick={onEnrollClick}
              className="px-6 py-2 bg-[#FAFAF7] text-[#5A8D73] font-semibold rounded-lg hover:bg-[#F5F1EC] hover:shadow-lg transition-all duration-300 transform hover:scale-105 shimmer-sweep ripple-effect"
            >
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1A1A2E] hover:bg-[#F5F1EC] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-fade-in bg-white px-4 absolute w-full left-0 shadow-lg border-t border-[#E8E4DE]">
            <a
              href="#about"
              className="block text-[#1A1A2E] hover:text-[#5A8D73] transition-colors pt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#benefits"
              className="block text-[#1A1A2E] hover:text-[#5A8D73] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="block text-[#1A1A2E] hover:text-[#5A8D73] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block text-[#1A1A2E] hover:text-[#5A8D73] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <button
              onClick={() => {
                onEnrollClick();
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-[#FAFAF7] text-[#5A8D73] font-semibold rounded-lg hover:bg-[#F5F1EC] transition-colors shimmer-sweep ripple-effect"
            >
              Enroll Now
            </button>
          </nav>
        )}
      </div>
    </header>
    </>
  );
}
