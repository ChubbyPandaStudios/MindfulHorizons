'use client';

import { useState } from 'react';
import { X, CheckCircle, Leaf } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    why: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.why) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', why: '' });
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#E8E4DE]">
          <h2 className="text-2xl font-bold text-[#1A1A2E]">
            {isSubmitted ? 'You\'re In!' : 'Enroll in the Program'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#F5F1EC] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-[#6B6B6B]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            // Success State
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-[#6B9E84]" />
              </div>
              <p className="text-lg font-semibold text-[#1A1A2E]">
                Thank you for your interest!
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                We&apos;ve received your enrollment interest. Dr. Elena&apos;s team will reach out within 48 hours to welcome you and discuss next steps.
              </p>
              <div className="pt-4 flex gap-3">
                <Leaf className="w-5 h-5 text-[#6B9E84] flex-shrink-0" />
                <p className="text-sm text-[#6B6B6B]">
                  Get ready to transform your life. You&apos;re about to start an incredible journey.
                </p>
              </div>
            </div>
          ) : (
            // Form State
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#1A1A2E] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-[#E8E4DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9E84] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1A1A2E] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-[#E8E4DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9E84] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="why"
                  className="block text-sm font-semibold text-[#1A1A2E] mb-2"
                >
                  Why are you joining this program?
                </label>
                <textarea
                  id="why"
                  name="why"
                  value={formData.why}
                  onChange={handleChange}
                  placeholder="Share your goals or what brings you here..."
                  rows={4}
                  className="w-full px-4 py-2 border border-[#E8E4DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9E84] focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#6B9E84] text-[#FAFAF7] font-semibold rounded-lg hover:bg-[#5A8D73] transition-colors duration-300"
              >
                Complete Enrollment
              </button>

              <p className="text-xs text-[#6B6B6B] text-center">
                We respect your privacy. No spam, just transformation.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
