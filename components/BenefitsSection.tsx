'use client';

import { Heart, Scale, Leaf, Sparkles } from 'lucide-react';

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
  return (
    <section id="benefits" className="bg-[#F5F1EC] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
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
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-4px] animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5F1EC] rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#6B9E84]" />
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
