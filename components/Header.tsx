'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onEnrollClick: () => void;
}

export default function Header({ onEnrollClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#6B9E84] text-[#FAFAF7] shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#FAFAF7]">
              Mindful Horizons
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#about"
              className="hover:text-[#F5F1EC] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#benefits"
              className="hover:text-[#F5F1EC] transition-colors duration-300"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="hover:text-[#F5F1EC] transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#F5F1EC] transition-colors duration-300"
            >
              Testimonials
            </a>
            <button
              onClick={onEnrollClick}
              className="px-6 py-2 bg-[#FAFAF7] text-[#6B9E84] font-semibold rounded-lg hover:bg-[#F5F1EC] hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-[#5A8D73] rounded-lg transition-colors"
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
          <nav className="md:hidden pb-4 space-y-3 animate-fade-in">
            <a
              href="#about"
              className="block hover:text-[#F5F1EC] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#benefits"
              className="block hover:text-[#F5F1EC] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="block hover:text-[#F5F1EC] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block hover:text-[#F5F1EC] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <button
              onClick={() => {
                onEnrollClick();
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-[#FAFAF7] text-[#6B9E84] font-semibold rounded-lg hover:bg-[#F5F1EC] transition-colors"
            >
              Enroll Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
