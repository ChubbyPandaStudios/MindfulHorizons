'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

  return (
    <section className="bg-[#FAFAF7] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
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
              className="border border-[#E8E4DE] rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 bg-white hover:bg-[#F5F1EC] transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-[#1A1A2E] text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#6B9E84] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-[#F5F1EC] border-t border-[#E8E4DE] animate-slide-in-up">
                  <p className="text-[#6B6B6B] leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#6B9E84] rounded-lg p-8 text-center text-[#FAFAF7] animate-fade-in">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-4">
            Reach out to Dr. Elena&apos;s team for a personalized conversation.
          </p>
          <a
            href="mailto:hello@mindfuhorizons.com"
            className="inline-block px-6 py-2 bg-[#FAFAF7] text-[#6B9E84] font-semibold rounded-lg hover:bg-[#F5F1EC] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
