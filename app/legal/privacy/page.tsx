import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Moazzam Qureshi AI Products. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl text-charcoal mb-4">
              Privacy Policy
            </h1>
            <p className="text-stone mb-8">
              <strong>Last Updated:</strong> December 18, 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <p className="text-stone leading-relaxed">
                  At Moazzam Qureshi, we take your privacy seriously. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use Clarilo AI and our other AI products.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  1. Information We Collect
                </h2>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-3">
                  Personal Information
                </h3>
                <p className="text-stone leading-relaxed">
                  When you create an account or use our services, we collect:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, password</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by our payment processor)</li>
                  <li><strong>Profile Information:</strong> Any information you choose to add to your profile</li>
                </ul>

                <h3 className="font-display font-semibold text-xl text-charcoal mb-3 mt-6">
                  Usage Data
                </h3>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Product Usage:</strong> Tasks, notes, and data you input into our AI tools</li>
                  <li><strong>Analytics:</strong> How you interact with our products, features used, time spent</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, device identifiers</li>
                </ul>

                <h3 className="font-display font-semibold text-xl text-charcoal mb-3 mt-6">
                  Cookies and Tracking
                </h3>
                <p className="text-stone leading-relaxed">
                  We use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-stone leading-relaxed">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Provide Services:</strong> Deliver and improve Clarilo AI and other products</li>
                  <li><strong>Process Payments:</strong> Handle billing and subscription management</li>
                  <li><strong>Personalize Experience:</strong> Tailor AI recommendations and features to your needs</li>
                  <li><strong>Communicate:</strong> Send service updates, product announcements, and support messages</li>
                  <li><strong>Improve Products:</strong> Analyze usage patterns to enhance features and user experience</li>
                  <li><strong>Marketing:</strong> Send promotional emails (you can opt-out anytime)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  3. How We Share Your Information
                </h2>
                <p className="text-stone leading-relaxed">
                  We do not sell your personal information. We share your data only with trusted third-party service providers who help us operate our business:
                </p>

                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 my-6">
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-4">
                    Third-Party Services We Use
                  </h3>
                  <ul className="space-y-3 text-stone">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span><strong>Lemon Squeezy:</strong> Payment processing and subscription management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span><strong>Vercel:</strong> Website and application hosting infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span><strong>OpenAI / Anthropic:</strong> AI model processing for product features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span><strong>Supabase:</strong> Database and authentication services</span>
                    </li>
                  </ul>
                  <p className="text-sm text-stone mt-4">
                    These providers are contractually obligated to protect your data and use it only for the purposes we specify.
                  </p>
                </div>

                <p className="text-stone leading-relaxed">
                  We may also share information:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>To comply with legal obligations or law enforcement requests</li>
                  <li>To protect our rights, safety, or property</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  4. Data Security
                </h2>
                <p className="text-stone leading-relaxed">
                  We implement industry-standard security measures to protect your data, including:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Encryption of data in transit (HTTPS/TLS)</li>
                  <li>Encryption of sensitive data at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  5. Data Retention
                </h2>
                <p className="text-stone leading-relaxed">
                  We retain your data for as long as your account is active or as needed to provide services. After you cancel your account:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Your data is retained for 90 days in case you want to reactivate</li>
                  <li>After 90 days, most data is permanently deleted</li>
                  <li>Some data may be retained longer for legal, tax, or business purposes</li>
                  <li>Anonymized usage data may be retained indefinitely for analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  6. Your Rights (GDPR & CCPA)
                </h2>
                <p className="text-stone leading-relaxed">
                  Depending on your location, you have certain rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data</li>
                  <li><strong>Export:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails</li>
                  <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Object:</strong> Object to certain data processing</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                    hello@moazzam.site
                  </a>
                  . We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  7. International Data Transfers
                </h2>
                <p className="text-stone leading-relaxed">
                  Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  8. Children's Privacy
                </h2>
                <p className="text-stone leading-relaxed">
                  Our services are not intended for users under 18 years of age. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-stone leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Posting the updated policy on this page</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notification for material changes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  10. Contact Us
                </h2>
                <p className="text-stone leading-relaxed">
                  For questions or concerns about this Privacy Policy or how we handle your data:
                </p>
                <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                  <p className="text-charcoal font-semibold">Moazzam Qureshi</p>
                  <p className="text-stone">
                    Email:{' '}
                    <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                      hello@moazzam.site
                    </a>
                  </p>
                  <p className="text-stone">
                    Website:{' '}
                    <a href="https://moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                      moazzam.site
                    </a>
                  </p>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t border-stone/20">
                <h3 className="font-display font-semibold text-xl text-charcoal mb-4">
                  Related Policies
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link
                    href="/legal/terms"
                    className="block p-4 bg-white rounded-lg border border-stone/10 hover:border-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-charcoal mb-1">Terms of Service</div>
                    <div className="text-sm text-stone">Service terms and conditions</div>
                  </Link>
                  <Link
                    href="/legal/refund"
                    className="block p-4 bg-white rounded-lg border border-stone/10 hover:border-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-charcoal mb-1">Refund Policy</div>
                    <div className="text-sm text-stone">Money-back guarantee details</div>
                  </Link>
                  <Link
                    href="/legal/cancellation"
                    className="block p-4 bg-white rounded-lg border border-stone/10 hover:border-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-charcoal mb-1">Cancellation Policy</div>
                    <div className="text-sm text-stone">How to cancel your subscription</div>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
