import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/products/ProductCard';

export const metadata: Metadata = {
  title: 'AI Products',
  description: 'Explore our suite of AI-powered tools designed specifically for entrepreneurs. Purpose-built solutions for focus, productivity, and growth.',
};

export default function ProductsPage() {
  const products = [
    {
      name: 'Clarilo AI',
      tagline: 'AI Executive Function Coach for ADHD Founders',
      description:
        'Get unstuck in under 3 minutes. Diagnoses what\'s actually blocking you (not what you think), externalizes working memory, and maps dependencies. $500/hr executive coaching sophistication at $79/mo.',
      status: 'early-access' as const,
      launchDate: 'January 2026',
      href: '/products/clarilo-ai',
      features: [
        'Voice session interface (start sessions anytime, 24/7)',
        'Root blocker diagnosis & dependency mapping',
        'Cognitive load externalization',
        'Pattern recognition (learns your blockers)',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50/30 via-cream to-amber-50/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              Our Products
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              AI Tools for
              <br />
              <span className="text-teal-600">Entrepreneurs</span>
            </h1>
            <p className="text-lg md:text-xl text-stone leading-relaxed">
              Purpose-built AI agents designed to solve real entrepreneur challenges. No generic tools, no bloat—just focused solutions that work.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cream">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}

            {/* Coming Soon Placeholders */}
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white/50 rounded-xl border-2 border-dashed border-stone/20 p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <div className="w-16 h-16 bg-stone/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-stone/40"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-stone/60 mb-2">
                  More Coming Soon
                </h3>
                <p className="text-sm text-stone/50">
                  We're building additional AI products based on entrepreneur feedback and real needs.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <Container className="text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Have a product idea?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            I'm always looking to build solutions that help entrepreneurs succeed. Share your challenges and needs.
          </p>
          <a
            href="mailto:hello@moazzam.site"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Get in Touch
          </a>
        </Container>
      </section>
    </>
  );
}
