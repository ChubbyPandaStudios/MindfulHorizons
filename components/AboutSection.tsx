'use client';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { BlobWatermark } from '@/components/ui/blob-watermark';

export default function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="bg-[#FAFAF7] py-16 md:py-20 overflow-hidden relative" ref={ref}>
      {/* Background Watermarks */}
      <BlobWatermark className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.03] rotate-12" />
      <BlobWatermark className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-[0.02] -rotate-45" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Left: Content */}
          <div className="space-y-6">
            <div className={`transition-all duration-700 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
                Meet Dr. Elena Voss
              </h2>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                As a first-generation Latina-American psychologist and wellness coach, Dr. Elena brings 15+ years of experience helping professionals break free from anxiety and build sustainable emotional resilience.
              </p>
            </div>

            <div className={`space-y-4 border-l-4 border-[#5A8D73] pl-6 transition-all duration-700 delay-500 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div>
                <h3 className="font-semibold text-[#1A1A2E]">Her Approach</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Blending evidence-based cognitive-behavioral techniques with mindfulness and cultural sensitivity, Dr. Elena creates a safe, judgement-free space where real transformation happens.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1A2E]">Why This Program?</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  The 8-week duration is intentional—it&apos;s long enough to create lasting habits but short enough to maintain momentum and stay motivated.
                </p>
              </div>
            </div>

            <div className={`pt-4 transition-all duration-700 delay-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <p className="text-sm text-[#6B6B6B] italic">
                "You don&apos;t need to do this alone. I&apos;m here to guide you every step of the way."
              </p>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="grid gap-6">
            {[
              {
                title: 'Credentials',
                items: [
                  'Ph.D. in Clinical Psychology, UC Berkeley',
                  'Certified Mindfulness-Based Cognitive Therapist',
                  'Board-certified Wellness Coach',
                  'Published researcher in anxiety & resilience',
                ],
              },
              {
                title: 'Specialization',
                items: [
                  'Anxiety and panic disorder',
                  'Burnout and stress management',
                  'Emotional intelligence development',
                  'Sustainable habit formation',
                ],
              },
              {
                title: 'By the Numbers',
                items: [
                  '3,000+ clients coached',
                  '92% report sustained improvements',
                  '50+ speaking engagements annually',
                  '10+ years of specialized training',
                ],
              },
            ].map((box, idx) => (
              <div 
                key={idx} 
                className={`bg-[#F5F1EC] p-6 rounded-lg shadow-sm transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 200 + 400}ms` }}
              >
                <h4 className="text-lg font-semibold text-[#1A1A2E] mb-2">{box.title}</h4>
                <ul className="space-y-2 text-[#6B6B6B]">
                  {box.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
