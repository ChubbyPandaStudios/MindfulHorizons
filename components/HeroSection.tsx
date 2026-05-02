'use client';

import Image from 'next/image';
import { Leaf } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface HeroSectionProps {
  onEnrollClick: () => void;
}

export default function HeroSection({ onEnrollClick }: HeroSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-[#F5F1EC] py-16 md:py-24 overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#5A8D73]/10 rounded-full blur-[100px] transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className={`flex justify-center md:justify-start transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative w-80 h-96 md:w-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl animate-float-bob">
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
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] text-balance leading-tight">
                <span className="relative inline-block">
                  Transform Your Life
                  <span className={`absolute -bottom-2 left-0 h-2 bg-[#5A8D73]/20 transition-all duration-1000 delay-700 rounded-full ${
                    isIntersecting ? 'w-full' : 'w-0'
                  }`} />
                </span> in 8 Weeks
              </h1>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Discover a compassionate, evidence-based approach to mental wellness. Dr. Elena Voss guides you through sustainable habits, emotional clarity, and lasting transformation.
              </p>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Leaf className="w-6 h-6 text-[#5A8D73] flex-shrink-0 mt-1" />
              <p className="text-[#6B6B6B]">
                <strong>30-day guarantee:</strong> If you don&apos;t feel noticeably calmer and more grounded, we&apos;ll refund your investment, no questions asked.
              </p>
            </div>

            <button
              onClick={onEnrollClick}
              className="inline-block px-8 py-3 bg-[#5A8D73] text-[#FAFAF7] font-semibold rounded-lg hover:bg-[#4A7D63] hover:shadow-xl transition-all duration-300 transform hover:scale-105 shimmer-sweep ripple-effect shadow-md"
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
