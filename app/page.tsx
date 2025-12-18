import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/products/ProductCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-cream via-teal-50/30 to-amber-50/30">
        <Container size="full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
                AI Products for Entrepreneurs
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
                Build. Focus.
                <br />
                <span className="text-teal-600">Succeed.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-stone leading-relaxed mb-8 max-w-2xl">
                Purpose-built AI agents designed to help entrepreneurs stay focused,
                manage priorities, and scale their businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/products/clarilo-ai" size="lg">
                  Explore Clarilo AI
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  About Moazzam
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative slide-in">
              <div className="bg-white rounded-2xl shadow-2xl shadow-stone/20 p-6 md:p-8 border border-stone/10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">AI</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg">Clarilo AI</div>
                    <div className="text-sm text-stone">AI Executive Function Coach for ADHD Founders</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Voice-First Focus Sessions</div>
                      <div className="text-sm text-stone">Call anytime for accountability during work</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Proactive Accountability Check-Ins</div>
                      <div className="text-sm text-stone">AI calls you during sessions to keep you on track</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">SMS Nudges & Reminders</div>
                      <div className="text-sm text-stone">Text message support when you need it</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-stone/10">
                  <div className="text-sm text-stone">Launching January 2025</div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              Featured Product
            </h2>
            <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto">
              Built with AI expertise and deep understanding of entrepreneur challenges
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ProductCard
              name="Clarilo AI"
              tagline="AI Executive Function Coach for ADHD Founders"
              description="Get unstuck in <3 minutes. Diagnoses what's actually blocking you (not what you think), externalizes working memory, and maps dependencies. $500/hr executive coaching sophistication at $79/mo."
              status="early-access"
              launchDate="January 2026"
              href="/products/clarilo-ai"
              features={[
                'Voice call interface (call anytime, 24/7)',
                'Root blocker diagnosis & dependency mapping',
                'Cognitive load externalization',
                'Pattern recognition (learns your blockers)',
              ]}
            />
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-warm-white to-teal-50/20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">
                Built by an entrepreneur,
                <br />
                for entrepreneurs
              </h2>
              <p className="text-base md:text-lg text-stone leading-relaxed mb-6">
                Hi, I'm Moazzam Qureshi. As a software engineer with ADHD and years of building AI systems, I understand the unique challenges entrepreneurs face. Generic productivity tools don't work for everyone.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed mb-8">
                That's why I'm creating AI products that are purpose-built for how entrepreneurs actually work—with all the chaos, hyperfocus, and brilliant ideas that come with it.
              </p>
              <Button href="/about" variant="outline">
                Learn More About Moazzam
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-stone/10 border border-stone/10">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-teal-600 font-bold">5+</span>
                    </div>
                    <span className="font-semibold text-charcoal">Years Experience</span>
                  </div>
                  <p className="text-sm text-stone">Building AI systems and applications</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-amber-600 font-bold">AI</span>
                    </div>
                    <span className="font-semibold text-charcoal">Expertise</span>
                  </div>
                  <p className="text-sm text-stone">LangGraph, LLMs, AI agents, system architecture</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-teal-600 font-bold">🎯</span>
                    </div>
                    <span className="font-semibold text-charcoal">Mission</span>
                  </div>
                  <p className="text-sm text-stone">Making AI practical and helpful for busy entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <Container className="text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to transform your productivity?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the waitlist for Clarilo AI and be among the first to experience
            AI-powered executive coaching built for ADHD entrepreneurs.
          </p>
          <Button href="/products/clarilo-ai" variant="secondary" size="lg">
            Join Early Access
          </Button>
        </Container>
      </section>
    </>
  );
}
