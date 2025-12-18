import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Moazzam Qureshi for questions about AI products, billing, support, or partnerships.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50/30 via-cream to-warm-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              Contact
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-stone leading-relaxed">
              Have questions about our products, billing, support, or want to discuss partnerships? I'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Email Card - PROMINENT */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 md:p-12 text-center text-white mb-12 shadow-2xl shadow-teal-600/20">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-90"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">Email Me</h2>
                <p className="text-white/90 text-base md:text-lg">
                  Primary contact for all inquiries
                </p>
              </div>
              <a
                href="mailto:hello@moazzam.site"
                className="inline-block px-6 py-3 md:px-10 md:py-5 bg-white text-teal-700 font-display font-bold text-lg md:text-2xl rounded-xl hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg break-all"
              >
                hello@moazzam.site
              </a>
              <p className="mt-4 md:mt-6 text-white/80 text-sm">
                Click to send email
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-stone/10">
                <h3 className="font-display font-semibold text-lg text-charcoal mb-3">
                  Response Time
                </h3>
                <p className="text-stone">
                  I typically respond within <strong>24-48 hours</strong> during business days.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone/10">
                <h3 className="font-display font-semibold text-lg text-charcoal mb-3">
                  Business Name
                </h3>
                <p className="text-stone">
                  <strong>Moazzam Qureshi</strong>
                </p>
              </div>
            </div>

            {/* What to Contact About */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-stone/10">
              <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal mb-6">
                What can I help with?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Product Questions',
                    description: 'Learn more about Clarilo AI or other AI products',
                  },
                  {
                    title: 'Billing & Subscriptions',
                    description: 'Questions about pricing, payments, or account management',
                  },
                  {
                    title: 'Technical Support',
                    description: 'Need help with product features or troubleshooting',
                  },
                  {
                    title: 'Partnerships',
                    description: 'Interested in collaborating or exploring business opportunities',
                  },
                  {
                    title: 'Feedback & Suggestions',
                    description: 'Share your ideas or feature requests',
                  },
                  {
                    title: 'General Inquiries',
                    description: "Anything else you'd like to discuss",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3 pb-4 border-b border-stone/10 last:border-0">
                    <svg
                      className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-charcoal">{item.title}</div>
                      <div className="text-sm text-stone">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-sm text-stone">
                <strong>Important:</strong> For billing or account-related issues, please include your email address and any relevant order numbers in your message.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
