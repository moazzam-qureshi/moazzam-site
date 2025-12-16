import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AI Focus Companion - Your 24/7 AI Accountability Partner',
  description:
    'Voice-first AI focus buddy for ADHD entrepreneurs. Call anytime for accountability during work sessions. Proactive check-ins, gentle redirection, no judgment. Launching January 2025.',
  keywords: [
    'ADHD accountability',
    'AI focus buddy',
    'voice AI assistant',
    'entrepreneur accountability',
    'ADHD entrepreneur',
    'focus sessions',
  ],
};

export default function AIFocusCompanionPage() {
  const features = [
    {
      title: 'Voice Call Interface',
      description:
        'Call your dedicated AI focus buddy anytime, 24/7. Just pick up the phone and talk—no app required. Natural, supportive conversation designed for ADHD brains.',
      icon: '📞',
    },
    {
      title: 'Conversational AI (ADHD-Tuned)',
      description:
        'AI that understands executive dysfunction, task paralysis, and hyperfocus patterns. Gentle, judgment-free support that works with your brain, not against it.',
      icon: '💬',
    },
    {
      title: 'Proactive Check-Ins',
      description:
        'AI calls you at scheduled intervals during work sessions (default 30 min). Stay accountable without feeling micromanaged. Adjust, pivot, or celebrate progress together.',
      icon: '⏰',
    },
    {
      title: 'SMS Nudges',
      description:
        'Text message reminders and check-ins as a gentle fallback. Get nudged when you need it, not when you don\'t. Simple, non-intrusive accountability.',
      icon: '📱',
    },
    {
      title: 'Focus Session Tracking',
      description:
        'Every work session is logged and retrievable. See your patterns, celebrate wins, and understand when you\'re most productive. Data without overwhelm.',
      icon: '🎯',
    },
    {
      title: 'Simple Dashboard',
      description:
        'View your phone number, session history, and settings. No complex interfaces—just the essentials to stay connected to your AI focus buddy.',
      icon: '📊',
    },
  ];

  const faqs = [
    {
      question: 'When does AI Focus Companion launch?',
      answer:
        'Public launch is scheduled for January 2025. Beta access begins in December 2024 for waitlist members. Join the early access list to get notified when beta slots open.',
    },
    {
      question: 'Do I need an ADHD diagnosis to use this?',
      answer:
        "No. While designed specifically for ADHD brains, anyone who struggles with focus, prioritization, or task management will benefit. If traditional productivity systems don't work for you, this might.",
    },
    {
      question: 'What AI technology powers this?',
      answer:
        'We use Vapi for voice AI infrastructure, GPT-4 for natural conversation, and LangGraph to manage the 7-state focus session flow. All running on secure, enterprise-grade infrastructure.',
    },
    {
      question: 'How is my data used?',
      answer:
        'Your data is used solely to provide and improve your experience. We never sell data or train public models on your information. See our Privacy Policy for full details on data handling and security.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: (
        <span>
          Yes. Cancel anytime from your account dashboard. You'll keep access through your current billing period. See our{' '}
          <Link href="/legal/cancellation" className="text-teal-600 hover:text-teal-700 underline">
            Cancellation Policy
          </Link>{' '}
          for details.
        </span>
      ),
    },
    {
      question: 'Do you offer refunds?',
      answer: (
        <span>
          Yes. 30-day money-back guarantee on all new subscriptions. See our{' '}
          <Link href="/legal/refund" className="text-teal-600 hover:text-teal-700 underline">
            Refund Policy
          </Link>{' '}
          for details.
        </span>
      ),
    },
    {
      question: 'What integrations are available?',
      answer:
        'At launch, AI Focus Companion works standalone via phone calls and SMS. No integrations needed—just call when you need accountability. Future integrations may include calendar sync based on user feedback.',
    },
    {
      question: 'Is there a free trial?',
      answer: "Yes. Free tier includes 1 hour/day of voice AI. Pro and Premium plans include a 14-day free trial, no credit card required.",
    },
    {
      question: 'How is this different from other AI assistants?',
      answer:
        'Most AI assistants are general-purpose and built for neurotypical users. AI Focus Companion is specifically designed for ADHD brains—it understands executive dysfunction, task paralysis, and hyperfocus patterns. It adapts to how you work, not the other way around.',
    },
    {
      question: 'Will you build more products?',
      answer:
        'Yes. AI Focus Companion is the first of several AI products planned for entrepreneurs. Future products will address other specific pain points in building and scaling businesses.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50/40 via-cream to-amber-50/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              <span>🚀</span>
              <span>Launching January 2025</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
              AI Focus Companion
            </h1>
            <p className="text-2xl md:text-3xl font-display font-semibold text-teal-700 mb-8">
              Your 24/7 AI Focus Buddy for ADHD Founders
            </p>
            <p className="text-xl text-stone leading-relaxed mb-10 max-w-3xl">
              Call anytime to stay accountable and on track. Your voice-first AI companion for work sessions—no judgment, just support. Built specifically for solo ADHD entrepreneurs who need accountability without the pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#waitlist" size="lg">
                Join Early Access
              </Button>
              <Button href="#features" variant="outline" size="lg">
                See Features
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">
              The Problem We Solve
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Founders with ADHD face unique challenges that traditional productivity tools weren't built to handle. Task-switching chaos. Executive dysfunction. Hyperfocus that derails priorities. The constant battle between a million brilliant ideas and actually shipping something.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Most AI assistants are built for neurotypical brains—clean interfaces, rigid workflows, and linear thinking. They assume you can just "follow the system" and everything will work out.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                But ADHD brains don't work that way. And that's not a bug—it's a feature. The same brain that struggles with mundane tasks is also capable of incredible creativity, hyperfocus, and breakthrough thinking.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                You don't need another rigid productivity system. You need a tool that works with how your brain actually functions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-warm-white to-teal-50/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">
              How AI Focus Companion Works
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 mb-12">
              <p className="text-base md:text-lg text-stone leading-relaxed">
                AI Focus Companion is your voice-first accountability partner. Call your dedicated number whenever you're ready to work, tell the AI what you're tackling, and it keeps you on track with proactive check-ins during your session.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                It's like having a personal accountability buddy who actually gets how ADHD works. No judgment, no micromanaging, no anxiety-inducing pressure. Just intelligent support via phone calls and SMS that helps you stay focused on what matters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: '1',
                  title: 'Call Your AI Focus Buddy',
                  description: 'Dial your dedicated number. Tell the AI what you\'re working on and how long you plan to work. Quick 2-minute setup, then you\'re ready.',
                },
                {
                  step: '2',
                  title: 'Work in Focus',
                  description: 'Hang up and dive into your work. AI is on standby, tracking your session. No interruptions unless you need them—just pure focus time.',
                },
                {
                  step: '3',
                  title: 'Get Checked In',
                  description: 'AI calls you at scheduled intervals (every 30 min by default). On track? Great, keep going. Derailed? No judgment—pivot or get back on track together.',
                },
                {
                  step: '4',
                  title: 'Celebrate & Reflect',
                  description: 'End your session by calling back. AI celebrates your accomplishment and logs your session. Brief reflection helps you improve next time.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-6 border border-stone/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-stone">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Target Customer Section */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Who This Is For
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Solo Founders',
                  description: 'Building your first SaaS or product without a team to keep you accountable.',
                  icon: '👤',
                },
                {
                  title: 'ADHD Entrepreneurs',
                  description: "Diagnosed or self-identified—if traditional productivity tools don't work for you.",
                  icon: '🧠',
                },
                {
                  title: 'Busy Builders',
                  description: 'Juggling multiple roles without a team, needing to focus on shipping instead of admin.',
                  icon: '🛠️',
                },
              ].map((persona) => (
                <div key={persona.title} className="bg-white rounded-xl p-6 border border-stone/10 text-center">
                  <div className="text-4xl mb-4">{persona.icon}</div>
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-stone">{persona.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-warm-white to-amber-50/20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-4">
                Features Built for ADHD Brains
              </h2>
              <p className="text-xl text-stone">
                Every feature exists to solve a specific ADHD productivity challenge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-stone/10 hover:shadow-lg hover:shadow-stone/10 transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-charcoal mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-stone leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Pricing
            </h2>
            <p className="text-lg md:text-xl text-stone mb-12">
              Simple, transparent pricing. Cancel anytime.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-stone/10">
                <div className="text-sm font-semibold text-stone mb-2">FREE</div>
                <div className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-2">
                  $0
                  <span className="text-base md:text-lg font-normal text-stone">/month</span>
                </div>
                <div className="text-sm text-stone mb-6">Perfect for students & trial users</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    1 hour of voice AI per day
                  </li>
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    SMS nudges
                  </li>
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Basic session history
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 md:p-8 text-white relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="text-sm font-semibold mb-2">PRO</div>
                <div className="font-display font-bold text-3xl md:text-4xl mb-2">
                  $49
                  <span className="text-base md:text-lg font-normal opacity-90">/month</span>
                </div>
                <div className="text-sm opacity-90 mb-6">For solo founders</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited 24/7 voice AI
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Proactive check-in calls
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Full session history
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    14-day free trial
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-stone/10">
                <div className="text-sm font-semibold text-teal-600 mb-2">PREMIUM</div>
                <div className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-2">
                  $79
                  <span className="text-base md:text-lg font-normal text-stone">/month</span>
                </div>
                <div className="text-sm text-stone mb-6">For established founders</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Weekly AI strategy call (15 min)
                  </li>
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Burnout monitoring & alerts
                  </li>
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced analytics & insights
                  </li>
                  <li className="flex items-center text-sm text-stone">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support + direct access
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200 max-w-2xl mx-auto">
              <p className="text-sm text-stone">
                <strong>Money-Back Guarantee:</strong> 30-day full refund if you're not satisfied. No questions asked. See our{' '}
                <Link href="/legal/refund" className="text-teal-600 hover:text-teal-700 underline">
                  Refund Policy
                </Link>{' '}
                for details.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-warm-white to-teal-50/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-stone/10">
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-3">
                    {faq.question}
                  </h3>
                  <div className="text-stone leading-relaxed">{faq.answer}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-6 bg-teal-50 rounded-xl border border-teal-200">
              <p className="text-stone">
                <strong>Have more questions?</strong> Email me at{' '}
                <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                  hello@moazzam.site
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <Container className="text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Join the Waitlist
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be among the first to experience AI-powered productivity built specifically for ADHD entrepreneurs. Early access members get lifetime founder pricing.
          </p>
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur rounded-xl p-8">
            <p className="text-white/90 mb-4">
              Currently accepting early access applications. Join the waitlist to be notified when spots open.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="w-full">
              Contact for Early Access
            </Button>
            <p className="text-sm text-white/70 mt-4">
              Limited to 100 early access members
            </p>
          </div>
        </Container>
      </section>

      {/* Legal Links */}
      <section className="py-12 bg-cream">
        <Container className="text-center">
          <p className="text-sm text-stone mb-4">
            By using AI Focus Companion, you agree to our{' '}
            <Link href="/legal/terms" className="text-teal-600 hover:text-teal-700 underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/legal/privacy" className="text-teal-600 hover:text-teal-700 underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-sm text-stone">
            Questions about billing, refunds, or cancellations? See our{' '}
            <Link href="/legal/refund" className="text-teal-600 hover:text-teal-700 underline">
              Refund Policy
            </Link>{' '}
            and{' '}
            <Link href="/legal/cancellation" className="text-teal-600 hover:text-teal-700 underline">
              Cancellation Policy
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
