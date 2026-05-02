'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { BlobWatermark } from '@/components/ui/blob-watermark';

const faqItems = [
  {
    question: 'Is this program right for me?',
    answer:
      'If you struggle with anxiety, stress, or feel disconnected from your emotional well-being, this program is designed for you. It works best for people ready to invest in themselves and committed to change.',
  },
  {
    question: 'What if I don\'t see results in 30 days?',
    answer:
      'We stand behind the program completely. If you don\'t notice measurable improvements in your anxiety, emotional clarity, or overall well-being within 30 days, we\'ll refund your full investment—no questions asked.',
  },
  {
    question: 'How much time does this require weekly?',
    answer:
      'Plan for about 5-7 hours per week: 1 hour group session, 30 minutes for one-on-ones, and 30-45 minutes daily for exercises and reflections. Most people say it\'s the best investment of their time.',
  },
  {
    question: 'Can I do this if I\'m already in therapy?',
    answer:
      'Absolutely. This program complements therapy beautifully. Dr. Elena works collaboratively with your therapist (if you share information) to create a cohesive healing journey.',
  },
  {
    question: 'What if I can\'t make all the live sessions?',
    answer:
      'All sessions are recorded. You\'ll have lifetime access to all materials, so you can catch up on your own schedule. That said, the group dynamic and live interaction are powerful parts of the experience.',
  },
  {
    question: 'Is this program confidential?',
    answer:
      'Yes. Your privacy is sacred. All conversations are confidential, and our private community is encrypted and secure. You control what you share.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-[#FAFAF7] py-16 md:py-20 overflow-hidden relative" ref={ref}>
      {/* Background Watermark */}
      <BlobWatermark className="absolute top-1/2 -right-32 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] rotate-90" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border border-[#E8E4DE] rounded-lg overflow-hidden transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 bg-white hover:bg-[#F5F1EC] transition-colors flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-[#1A1A2E] text-left group-hover:text-[#5A8D73] transition-colors">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#5A8D73] flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div 
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 py-4 bg-[#F5F1EC] border-t border-[#E8E4DE]">
                    <p className="text-[#6B6B6B] leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 bg-[#5A8D73] rounded-lg p-8 text-center text-[#FAFAF7] transition-all duration-1000 delay-700 ${
          isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-4">
            Reach out to Dr. Elena&apos;s team for a personalized conversation.
          </p>
          <a
            href="mailto:hello@mindfuhorizons.com"
            className="inline-block px-6 py-2 bg-[#FAFAF7] text-[#5A8D73] font-semibold rounded-lg hover:bg-[#F5F1EC] hover:text-[#4A7D63] transition-colors shimmer-sweep ripple-effect shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
