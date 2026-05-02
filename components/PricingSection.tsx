'use client';

import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface PricingSectionProps {
  onEnrollClick: () => void;
}

const features = [
  '8 weeks of expert coaching (1 weekly group session + 2 one-on-ones)',
  'Personalized anxiety-relief toolkit',
  'Daily mindfulness & habit-building exercises',
  'Private community for accountability & support',
  'Lifetime access to recorded sessions & materials',
  'Email support between sessions',
  'Post-program 30-day check-in',
  '30-day money-back guarantee',
];

export default function PricingSection({ onEnrollClick }: PricingSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="pricing" className="bg-[#FAFAF7] py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            One investment. Unlimited transformation.
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-300 relative border border-[#5A8D73]/20 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Inner Glow Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,158,132,0.05),transparent_70%)] pointer-events-none rounded-2xl" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">Price Options</h3>
              <div className="space-y-4">
                <div className="border-2 border-[#5A8D73] rounded-lg p-6 bg-[#F5F1EC] relative overflow-hidden ring-4 ring-[#5A8D73]/10">
                  <div className="absolute top-0 right-0 bg-[#5A8D73] text-[#FAFAF7] text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                    Recommended
                  </div>
                  <p className="text-sm text-[#6B6B6B] mb-2">Full Payment</p>
                  <p className="text-3xl font-bold text-[#5A8D73]">$1,297</p>
                  <p className="text-xs text-[#6B6B6B] mt-2">Save 5% vs. payment plan</p>
                </div>

                <div className="border-2 border-[#E8E4DE] rounded-lg p-6 hover:border-[#5A8D73]/50 transition-colors">
                  <p className="text-sm text-[#6B6B6B] mb-2">Payment Plan</p>
                  <p className="text-3xl font-bold text-[#1A1A2E]">4 × $349</p>
                  <p className="text-xs text-[#6B6B6B] mt-2">Flexible monthly payments</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#5A8D73] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6B6B6B]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E8E4DE] pt-8 text-center relative z-10">
            <button
              onClick={onEnrollClick}
              className="px-10 py-3 bg-[#5A8D73] text-[#FAFAF7] font-semibold rounded-lg hover:bg-[#4A7D63] hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block shimmer-sweep ripple-effect shadow-md"
            >
              Enroll Now – Secure Your Spot
            </button>
            <p className="text-xs text-[#6B6B6B] mt-4">
              💚 Only 4 spots left in this cohort
            </p>
          </div>
        </div>

        <div className={`mt-8 bg-[#F5F1EC] p-6 rounded-lg text-center transition-all duration-1000 delay-500 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm text-[#6B6B6B]">
            <strong>Investment guarantee:</strong> If you don&apos;t see measurable improvements in anxiety, emotional balance, or well-being within 30 days, we&apos;ll refund your entire investment.
          </p>
        </div>
      </div>
    </section>
  );
}
