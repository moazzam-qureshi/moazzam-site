import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Clarilo AI - AI Executive Function Coach for ADHD Founders',
  description:
    'Get unstuck in under 3 minutes. AI executive coach that diagnoses what\'s ACTUALLY blocking you, externalizes working memory, and maps dependencies. $500/hr coaching at $79/mo. Launching January 2026.',
  keywords: [
    'AI executive function coach',
    'ADHD coach',
    'voice AI assistant',
    'executive coaching',
    'ADHD entrepreneur',
    'cognitive load',
    'dependency mapping',
    'root blocker diagnosis',
  ],
};

export default function AIFocusCompanionPage() {
  const features = [
    {
      title: 'Voice Session Interface',
      description:
        'Start a session with your dedicated AI coach anytime, 24/7. Just open the app and talk—seamless voice interaction. Sophisticated diagnostic conversations designed for ADHD brains.',
      icon: '📞',
    },
    {
      title: 'Conversational AI (Expert Coaching)',
      description:
        'AI that provides $500/hr coaching sophistication. Uses diagnostic frameworks to find root blockers, not surface symptoms. Respects your intelligence—no patronizing advice.',
      icon: '💬',
    },
    {
      title: 'Cognitive Load Externalization',
      description:
        'AI holds positioning, decisions, constraints in memory so you don\'t have to. Frees up working memory for execution. Trying to hold WHO + WHAT + WHY while working = paralysis. Let AI remember.',
      icon: '🧠',
    },
    {
      title: 'Dependency Mapping',
      description:
        'AI maps critical path through chaos. Shows what blocks what, identifies parallel work, eliminates false work. Transforms "15 equally urgent tasks" into clear sequence.',
      icon: '🗺️',
    },
    {
      title: 'Root Blocker Diagnosis',
      description:
        'Finds ACTUAL blocker, not stated blocker. "Stuck on landing page" → actually "unclear positioning." Diagnostic frameworks for common founder blockers (marketing, copywriting, prioritization).',
      icon: '🔍',
    },
    {
      title: 'Pattern Recognition',
      description:
        'Learns your actual vs stated blockers over time. After 5-10 sessions, AI spots patterns: "Last 3 times you got stuck on content, real issue was positioning." Develops meta-awareness.',
      icon: '📊',
    },
  ];

  const faqs = [
    {
      question: 'When does Clarilo AI launch?',
      answer:
        'Public launch is scheduled for January 2026. Beta access begins in December 2025 for waitlist members. Join the early access list to get notified when beta slots open.',
    },
    {
      question: 'Do I need an ADHD diagnosis to use this?',
      answer:
        "No. While designed specifically for ADHD brains, anyone who struggles with initiation paralysis, working memory overload, or knowing where to start will benefit. If traditional productivity systems don't work for you, this will.",
    },
    {
      question: 'What AI technology powers this?',
      answer:
        'We use Vapi for voice AI infrastructure, GPT-4 for natural conversation, LangGraph for the diagnostic coaching state machine, and Pinecone for RAG-based context retrieval. All running on secure, enterprise-grade infrastructure.',
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
        'At launch, Clarilo AI works standalone via in-app voice sessions. No integrations needed—just start a session when you need diagnostic coaching. Project context is stored per-project with voice memos.',
    },
    {
      question: 'Is there a free trial?',
      answer: "Yes. Free tier includes 1 hour/day of voice AI. Pro and Premium plans include a 14-day free trial, no credit card required.",
    },
    {
      question: 'How is this different from other AI assistants?',
      answer:
        'Most AI assistants are task managers or generic chatbots. Clarilo AI is an executive function coach. It diagnoses root blockers (not stated ones), externalizes working memory, and provides $500/hr coaching sophistication. Built specifically for ADHD founders who need expert coaching, not patronizing task simplification.',
    },
    {
      question: 'Will you build more products?',
      answer:
        'Yes. Clarilo AI is the first of several AI products planned for entrepreneurs. Future products will address other specific pain points in building and scaling businesses.',
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
              <span>Launching January 2026</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
              Clarilo AI
            </h1>
            <p className="text-2xl md:text-3xl font-display font-semibold text-teal-700 mb-8">
              AI Executive Function Coach for ADHD Founders
            </p>
            <p className="text-xl text-stone leading-relaxed mb-10 max-w-3xl">
              Get unstuck in under 3 minutes. Diagnoses what's actually blocking you (not what you think), externalizes working memory, and maps dependencies. $500/hr executive coaching sophistication at $79/mo.
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
                <strong>Specifically:</strong> Initiation Paralysis (know what to do but can't start), Working Memory Overload (trying to hold too much in your head simultaneously), Hidden Blockers (stuck on X but actually blocked by Y), and Dependency Blindness (15 tasks feel equally urgent, don't know where to start).
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
              How Clarilo AI Works
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 mb-12">
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Clarilo AI is your voice-first executive function coach. Start a session when you're stuck on something—the AI diagnoses what's ACTUALLY blocking you (not what you think), externalizes working memory so you don't have to hold everything in your head, and maps dependencies to show critical path through chaos.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                It's like having a $500/hr executive coach who understands ADHD. No patronizing advice, no "let's make this stupid small." Just expert-level diagnostic coaching that respects your intelligence and gets you from stuck to executing in under 3 minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: '1',
                  title: 'Create Project & Add Context',
                  description: 'Create projects in dashboard. Start a session anytime to dump voice memos about decisions, constraints, thoughts. AI transcribes, summarizes, stores per-project. No commitment to work—just capturing context.',
                },
                {
                  step: '2',
                  title: 'Unblocking Session (under 3 min)',
                  description: 'Start a session when stuck. AI runs diagnostic: brain dump → cognitive triage → dependency mapping → root blocker diagnosis → working memory externalization. Unblocked and executing in under 3 minutes.',
                },
                {
                  step: '3',
                  title: 'Pattern Recognition (Builds Over Time)',
                  description: 'After 5-10 sessions, AI recognizes your patterns. "Last 3 times you said \'stuck on marketing,\' the real blocker was unclear positioning." Develops meta-awareness of what actually blocks you.',
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
                    Basic coaching sessions
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
                    Unlimited 24/7 voice coaching sessions
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited unblocking sessions
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
            By using Clarilo AI, you agree to our{' '}
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
