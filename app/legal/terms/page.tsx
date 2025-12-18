import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Moazzam Qureshi AI Products including Clarilo AI.',
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl text-charcoal mb-4">
              Terms of Service
            </h1>
            <p className="text-stone mb-8">
              <strong>Last Updated:</strong> December 16, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-stone leading-relaxed">
                  By accessing or using Clarilo AI and other AI products provided by Moazzam Qureshi ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.
                </p>
                <p className="text-stone leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting to this page. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  2. Service Description
                </h2>
                <p className="text-stone leading-relaxed">
                  Moazzam Qureshi provides AI-powered productivity tools for entrepreneurs, including Clarilo AI and future AI products. Our services are subscription-based SaaS (Software as a Service) products delivered via web and mobile applications.
                </p>
                <p className="text-stone leading-relaxed">
                  We strive to maintain high availability but do not guarantee uninterrupted access. Services may be temporarily unavailable for maintenance, updates, or unforeseen issues.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  3. User Accounts
                </h2>
                <p className="text-stone leading-relaxed">
                  To use our services, you must create an account with accurate and complete information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  You must be at least 18 years old to create an account. By creating an account, you represent that you meet this age requirement.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  4. Acceptable Use
                </h2>
                <p className="text-stone leading-relaxed">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code, viruses, or malware</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the services</li>
                  <li>Use the services for any illegal or harmful purpose</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  Violation of these terms may result in immediate termination of your account without refund.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-stone leading-relaxed">
                  All content, features, and functionality of our services, including but not limited to software, text, graphics, logos, and trademarks, are owned by Moazzam Qureshi and protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-stone leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our services for your personal or business use. You may not copy, modify, distribute, sell, or lease any part of our services.
                </p>
                <p className="text-stone leading-relaxed">
                  You retain all rights to content you create using our services. By using our services, you grant us a license to process and store your content solely to provide the services.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  6. Payment Terms
                </h2>
                <p className="text-stone leading-relaxed">
                  Our services are offered on a subscription basis with monthly or annual billing cycles. By subscribing, you agree to:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless canceled</li>
                  <li><strong>Payment Methods:</strong> You must provide a valid payment method and keep it up to date</li>
                  <li><strong>Price Changes:</strong> We may change prices with 30 days' advance notice. Changes apply to subsequent billing periods</li>
                  <li><strong>Failed Payments:</strong> If payment fails, we may suspend or terminate your access until payment is received</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  All fees are in USD and non-refundable except as described in our{' '}
                  <Link href="/legal/refund" className="text-teal-600 hover:text-teal-700 underline">
                    Refund Policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  7. Cancellation & Termination
                </h2>
                <p className="text-stone leading-relaxed">
                  You may cancel your subscription at any time from your account dashboard or by contacting{' '}
                  <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700">
                    hello@moazzam.site
                  </a>
                  . See our{' '}
                  <Link href="/legal/cancellation" className="text-teal-600 hover:text-teal-700 underline">
                    Cancellation Policy
                  </Link>{' '}
                  for details.
                </p>
                <p className="text-stone leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity, or for any other reason at our sole discretion. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Your access to the services will be immediately revoked</li>
                  <li>Your data may be deleted after a retention period</li>
                  <li>No refunds will be provided for partial billing periods</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-stone leading-relaxed">
                  Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee that the services will be error-free, secure, or uninterrupted.
                </p>
                <p className="text-stone leading-relaxed">
                  To the maximum extent permitted by law, Moazzam Qureshi shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Any indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Any damages resulting from service interruptions or data loss</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  Our total liability for any claim related to the services is limited to the amount you paid us in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  9. Dispute Resolution
                </h2>
                <p className="text-stone leading-relaxed">
                  These terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
                </p>
                <p className="text-stone leading-relaxed">
                  Any disputes arising from these terms or use of our services shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  10. Contact Information
                </h2>
                <p className="text-stone leading-relaxed">
                  For questions about these Terms of Service, please contact us:
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
                    href="/legal/privacy"
                    className="block p-4 bg-white rounded-lg border border-stone/10 hover:border-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-charcoal mb-1">Privacy Policy</div>
                    <div className="text-sm text-stone">How we handle your data</div>
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
