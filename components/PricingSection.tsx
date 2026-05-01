'use client';

import { CheckCircle } from 'lucide-react';

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
  return (
    <section id="pricing" className="bg-[#FAFAF7] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            One investment. Unlimited transformation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-slide-in-up">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">Price Options</h3>
              <div className="space-y-4">
                <div className="border-2 border-[#6B9E84] rounded-lg p-6 bg-[#F5F1EC]">
                  <p className="text-sm text-[#6B6B6B] mb-2">Full Payment</p>
                  <p className="text-3xl font-bold text-[#6B9E84]">$1,297</p>
                  <p className="text-xs text-[#6B6B6B] mt-2">Save 5% vs. payment plan</p>
                </div>

                <div className="border-2 border-[#E8E4DE] rounded-lg p-6">
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
                    <CheckCircle className="w-5 h-5 text-[#6B9E84] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6B6B6B]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E8E4DE] pt-8 text-center">
            <button
              onClick={onEnrollClick}
              className="px-10 py-3 bg-[#6B9E84] text-[#FAFAF7] font-semibold rounded-lg hover:bg-[#5A8D73] hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Enroll Now – Secure Your Spot
            </button>
            <p className="text-xs text-[#6B6B6B] mt-4">
              💚 Only 4 spots left in this cohort
            </p>
          </div>
        </div>

        <div className="mt-8 bg-[#F5F1EC] p-6 rounded-lg text-center animate-fade-in">
          <p className="text-sm text-[#6B6B6B]">
            <strong>Investment guarantee:</strong> If you don&apos;t see measurable improvements in anxiety, emotional balance, or well-being within 30 days, we&apos;ll refund your entire investment.
          </p>
        </div>
      </div>
    </section>
  );
}
