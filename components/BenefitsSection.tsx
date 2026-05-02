'use client';

import { Heart, Scale, Leaf, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const benefits = [
  {
    icon: Heart,
    title: 'Reduced Anxiety',
    description:
      'Evidence-based techniques to calm your nervous system and break the anxiety cycle.',
  },
  {
    icon: Scale,
    title: 'Emotional Balance',
    description:
      'Develop emotional awareness and respond (not react) to life&apos;s challenges with clarity.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Habits',
    description:
      'Build daily practices that stick—no willpower exhaustion, just natural integration.',
  },
  {
    icon: Sparkles,
    title: 'Deeper Well-being',
    description:
      'Experience lasting peace, purpose, and a renewed sense of joy in your life.',
  },
];

export default function BenefitsSection() {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="benefits" className="bg-[#F5F1EC] py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
            What You&apos;ll Gain
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            The 8-week program is designed to create profound, lasting changes across all areas of your mental and emotional well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-700 transform hover:translate-y-[-4px] ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F1EC] rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#5A8D73]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">
                      {benefit.title}
                     </h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
