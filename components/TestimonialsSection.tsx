'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Project Manager, San Francisco',
    image: '/images/testimonial-1.jpg',
    quote:
      'The 8 weeks transformed how I handle stress. For the first time in years, I can breathe through anxiety instead of spiraling. Dr. Elena\'s approach felt warm, personal, and genuinely transformative.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    title: 'Executive Coach, Austin',
    image: '/images/testimonial-2.jpg',
    quote:
      'I was skeptical at first, but the tools and community changed everything. I\'m sleeping better, making clearer decisions, and feel genuinely at peace. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    title: 'Product Designer, New York',
    image: '/images/testimonial-3.jpg',
    quote:
      'Dr. Elena taught me that emotional health is as important as physical health. The sustainable habits she helped me build are now second nature. I feel like myself again.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    title: 'Software Engineer, Seattle',
    image: '/images/dr-elena.jpg', // Placeholder for more variety
    quote:
      'This program gave me a roadmap for emotional clarity that I never knew existed. The combination of science and mindfulness is exactly what I needed.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="testimonials" className="bg-[#F5F1EC] py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
            Transformation Stories
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Real people, real results. Here&apos;s what past participants are saying.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className={`relative transition-all duration-1000 delay-300 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex animate-marquee gap-8 py-4">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#5A8D73]/10 hover:border-[#5A8D73]/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 fill-[#5A8D73] text-[#5A8D73] transition-all duration-500 ${
                      isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: `${index * 150 + i * 100 + 500}ms` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#6B6B6B] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8E4DE]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#F5F1EC]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">{testimonial.name}</p>
                  <p className="text-xs text-[#6B6B6B]">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F1EC] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F1EC] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
