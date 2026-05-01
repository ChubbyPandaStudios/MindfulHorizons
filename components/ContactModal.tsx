'use client';

import { useState } from 'react';
import { X, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
    if (formData.name && formData.email && formData.subject && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
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
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#E8E4DE]">
          <h2 className="text-2xl font-bold text-[#1A1A2E]">
            {isSubmitted ? 'Message Sent!' : 'Get in Touch'}
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
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-[#6B9E84]" />
              </div>
              <div>
                <p className="text-lg font-semibold text-[#1A1A2E] mb-2">
                  Thank You!
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  We&apos;ve received your message. Dr. Elena&apos;s team will get back to you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex gap-3 p-3 bg-[#F5F1EC] rounded-lg">
                  <Mail className="w-5 h-5 text-[#6B9E84] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#6B6B6B]">Email</p>
                    <p className="text-sm text-[#1A1A2E]">hello@mindfulhorizons.com</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-[#F5F1EC] rounded-lg">
                  <Phone className="w-5 h-5 text-[#6B9E84] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#6B6B6B]">Phone</p>
                    <p className="text-sm text-[#1A1A2E]">(415) 555-MIND</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-[#F5F1EC] rounded-lg">
                  <MapPin className="w-5 h-5 text-[#6B9E84] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#6B6B6B]">Location</p>
                    <p className="text-sm text-[#1A1A2E]">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Form */}
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
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#1A1A2E] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border border-[#E8E4DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9E84] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1A1A2E] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows={4}
                    className="w-full px-4 py-2 border border-[#E8E4DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9E84] focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-[#6B9E84] text-[#FAFAF7] font-semibold rounded-lg hover:bg-[#5A8D73] transition-colors duration-300"
                >
                  Send Message
                </button>

                <p className="text-xs text-[#6B6B6B] text-center">
                  We respect your privacy. We&apos;ll respond within 24 hours.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
