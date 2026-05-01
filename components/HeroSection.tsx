'use client';

import Image from 'next/image';
import { Leaf } from 'lucide-react';

interface HeroSectionProps {
  onEnrollClick: () => void;
}

export default function HeroSection({ onEnrollClick }: HeroSectionProps) {
  return (
    <section className="relative bg-[#F5F1EC] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start animate-fade-in">
            <div className="relative w-80 h-96 md:w-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/dr-elena.jpg"
                alt="Dr. Elena Voss - Mental Wellness Coach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="animate-slide-in-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] text-balance leading-tight">
                Transform Your Life in 8 Weeks
              </h1>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Discover a compassionate, evidence-based approach to mental wellness. Dr. Elena Voss guides you through sustainable habits, emotional clarity, and lasting transformation.
              </p>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Leaf className="w-6 h-6 text-[#6B9E84] flex-shrink-0 mt-1" />
              <p className="text-[#6B6B6B]">
                <strong>30-day guarantee:</strong> If you don&apos;t feel noticeably calmer and more grounded, we&apos;ll refund your investment, no questions asked.
              </p>
            </div>

            <button
              onClick={onEnrollClick}
              className="inline-block px-8 py-3 bg-[#6B9E84] text-[#FAFAF7] font-semibold rounded-lg hover:bg-[#5A8D73] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now – 8-Week Program
            </button>

            <p className="text-sm text-[#6B6B6B]">
              ✓ Limited spots available • ✓ Cohort-based learning • ✓ Lifetime access to materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
