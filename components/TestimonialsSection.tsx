'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

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
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F5F1EC] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
            Transformation Stories
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Real people, real results. Here&apos;s what past participants are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#6B9E84] text-[#6B9E84]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#6B6B6B] leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8E4DE]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
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
      </div>
    </section>
  );
}
