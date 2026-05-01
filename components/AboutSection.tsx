export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FAFAF7] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 text-balance">
                Meet Dr. Elena Voss
              </h2>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                As a first-generation Latina-American psychologist and wellness coach, Dr. Elena brings 15+ years of experience helping professionals break free from anxiety and build sustainable emotional resilience.
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-[#6B9E84] pl-6">
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

            <div className="pt-4">
              <p className="text-sm text-[#6B6B6B] italic">
                "You don&apos;t need to do this alone. I&apos;m here to guide you every step of the way."
              </p>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="grid gap-6 animate-slide-in-up">
            <div className="bg-[#F5F1EC] p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-[#1A1A2E] mb-2">Credentials</h4>
              <ul className="space-y-2 text-[#6B6B6B]">
                <li>• Ph.D. in Clinical Psychology, UC Berkeley</li>
                <li>• Certified Mindfulness-Based Cognitive Therapist</li>
                <li>• Board-certified Wellness Coach</li>
                <li>• Published researcher in anxiety & resilience</li>
              </ul>
            </div>

            <div className="bg-[#F5F1EC] p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-[#1A1A2E] mb-2">Specialization</h4>
              <ul className="space-y-2 text-[#6B6B6B]">
                <li>• Anxiety and panic disorder</li>
                <li>• Burnout and stress management</li>
                <li>• Emotional intelligence development</li>
                <li>• Sustainable habit formation</li>
              </ul>
            </div>

            <div className="bg-[#F5F1EC] p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-[#1A1A2E] mb-2">By the Numbers</h4>
              <ul className="space-y-2 text-[#6B6B6B]">
                <li>• 3,000+ clients coached</li>
                <li>• 92% report sustained improvements</li>
                <li>• 50+ speaking engagements annually</li>
                <li>• 10+ years of specialized training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
