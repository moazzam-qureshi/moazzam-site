import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Moazzam Qureshi',
  description: 'Learn about Moazzam Qureshi - software engineer, AI specialist, and entrepreneur building purpose-built AI products for fellow entrepreneurs.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50/30 via-cream to-warm-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              About
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-charcoal mb-8">
              Building AI products that
              <br />
              <span className="text-teal-600">actually help</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-cream">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Bio Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  Hi, I'm Moazzam Qureshi
                </h2>
                <p className="text-lg text-stone leading-relaxed">
                  I'm a software engineer with 5+ years of experience building AI systems and applications. Over the years, I've worked with cutting-edge AI technologies—LangGraph, LLMs, AI agents, and system architecture—to solve real business problems.
                </p>
                <p className="text-lg text-stone leading-relaxed">
                  But here's the thing: I also have ADHD. And that's given me a unique perspective on productivity tools and AI assistants.
                </p>
                <p className="text-lg text-stone leading-relaxed">
                  Most productivity software is built for neurotypical brains. Clean interfaces, rigid structures, linear workflows—they all sound great in theory. But for entrepreneurs like me who deal with hyperfocus, task paralysis, and a constant stream of brilliant (and not-so-brilliant) ideas, those tools often create more friction than they solve.
                </p>
                <p className="text-lg text-stone leading-relaxed">
                  That's why I'm building AI products differently. I'm creating tools that work with how entrepreneurs actually think and work—not how productivity gurus think we should work.
                </p>
              </div>

              <div className="pt-8">
                <h3 className="font-display font-bold text-2xl text-charcoal mb-4">
                  What I'm building
                </h3>
                <p className="text-lg text-stone leading-relaxed mb-6">
                  Starting with <strong>Clarilo AI</strong>, I'm developing a suite of AI-powered tools designed specifically for entrepreneurs who struggle with traditional productivity systems. Each product is built from real experience, not theory.
                </p>
              </div>

              <div className="pt-8">
                <h3 className="font-display font-bold text-2xl text-charcoal mb-4">
                  My approach
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Built for real challenges',
                      description:
                        "I don't build features I think entrepreneurs might need—I build solutions to problems I've personally struggled with.",
                    },
                    {
                      title: 'AI that understands context',
                      description:
                        'My AI products use advanced models and agent frameworks to actually understand how you work, not just automate rigid workflows.',
                    },
                    {
                      title: 'ADHD-friendly design',
                      description:
                        'Clean interfaces, gentle accountability, and systems that adapt to your energy levels—not the other way around.',
                    },
                    {
                      title: 'No bloat, no "nice-to-haves"',
                      description:
                        "Every feature exists to solve a specific problem. If it doesn't add clear value, it doesn't ship.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-semibold text-charcoal">{item.title}</div>
                        <div className="text-stone">{item.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Expertise Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg shadow-stone/10 border border-stone/10">
                <h3 className="font-display font-semibold text-lg text-charcoal mb-4">
                  Expertise
                </h3>
                <div className="space-y-3">
                  {[
                    'LangGraph & AI Agent Frameworks',
                    'LLM Integration (GPT-4, Claude)',
                    'System Architecture',
                    'Python & FastAPI',
                    'RAG Systems',
                    'AI Product Development',
                  ].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-sm text-stone">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white">
                <h3 className="font-display font-semibold text-lg mb-4">By the numbers</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Years of experience</div>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-3xl font-bold">AI</div>
                    <div className="text-sm opacity-90">Specialized in AI systems</div>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-3xl font-bold">1</div>
                    <div className="text-sm opacity-90">Mission: Help entrepreneurs succeed</div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                  Let's connect
                </h3>
                <p className="text-sm text-stone mb-4">
                  Have questions or want to discuss your productivity challenges?
                </p>
                <Button href="/contact" variant="secondary" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-warm-white to-teal-50/20">
        <Container className="text-center">
          <h2 className="font-display font-bold text-4xl text-charcoal mb-4">
            Want to work together?
          </h2>
          <p className="text-xl text-stone mb-8 max-w-2xl mx-auto">
            I'm always open to discussing AI projects, entrepreneur challenges, or potential collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Contact Me
            </Button>
            <Button href="/products" variant="outline" size="lg">
              View Products
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
