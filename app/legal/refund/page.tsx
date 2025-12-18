import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: '30-day money-back guarantee on all subscriptions. Learn about our refund process for Clarilo AI.',
};

export default function RefundPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl text-charcoal mb-4">
              Refund Policy
            </h1>
            <p className="text-stone mb-8">
              <strong>Last Updated:</strong> December 18, 2025
            </p>

            <div className="bg-teal-50 rounded-xl p-8 border border-teal-200 mb-12">
              <h2 className="font-display font-bold text-2xl text-charcoal mb-4">
                30-Day Money-Back Guarantee
              </h2>
              <p className="text-lg text-stone leading-relaxed">
                We offer a 30-day money-back guarantee on all new subscriptions to Clarilo AI and our other AI products. If you're not satisfied, we'll refund your payment—no questions asked.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  1. General Refund Policy
                </h2>
                <p className="text-stone leading-relaxed">
                  We want you to be completely satisfied with our products. If Clarilo AI or any of our AI products don't meet your expectations, you can request a full refund within 30 days of your initial purchase.
                </p>
                <p className="text-stone leading-relaxed">
                  This policy applies to:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>First-time subscriptions (monthly or annual)</li>
                  <li>All pricing tiers (Early Access, Standard, Annual)</li>
                  <li>Both new customers and those upgrading from a free trial</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  2. Refund Eligibility
                </h2>
                <p className="text-stone leading-relaxed">
                  To be eligible for a refund:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Time Window:</strong> Request must be made within 30 days of your initial purchase</li>
                  <li><strong>First Purchase Only:</strong> 30-day guarantee applies to your first subscription payment only</li>
                  <li><strong>Good Faith Use:</strong> Account must not have violated our Terms of Service</li>
                </ul>
                <p className="text-stone leading-relaxed mt-4">
                  Refunds will <strong>not</strong> be provided if:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>More than 30 days have passed since your initial purchase</li>
                  <li>You violated our Terms of Service or Acceptable Use Policy</li>
                  <li>You engaged in fraudulent activity or chargebacks</li>
                  <li>You've already received a refund for a previous subscription</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  3. How to Request a Refund
                </h2>
                <p className="text-stone leading-relaxed mb-4">
                  Requesting a refund is simple:
                </p>
                <div className="bg-white rounded-xl p-6 border border-stone/10">
                  <ol className="space-y-4 text-stone">
                    <li className="flex items-start">
                      <span className="font-display font-bold text-teal-600 text-lg mr-3">1.</span>
                      <div>
                        <strong>Email us</strong> at{' '}
                        <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                          hello@moazzam.site
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-display font-bold text-teal-600 text-lg mr-3">2.</span>
                      <div>
                        <strong>Include</strong> your account email address and order number (if available)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-display font-bold text-teal-600 text-lg mr-3">3.</span>
                      <div>
                        <strong>Subject line:</strong> "Refund Request"
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-display font-bold text-teal-600 text-lg mr-3">4.</span>
                      <div>
                        We'll process your refund within <strong>5-7 business days</strong>
                      </div>
                    </li>
                  </ol>
                </div>
                <p className="text-stone leading-relaxed mt-6">
                  You'll receive a confirmation email once your refund is processed. Refunds are issued to the original payment method.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  4. Partial Refunds (Annual Subscriptions)
                </h2>
                <p className="text-stone leading-relaxed">
                  For annual subscriptions, we offer pro-rated refunds based on unused time:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Within 30 days:</strong> Full refund (100%)</li>
                  <li><strong>After 30 days:</strong> Pro-rated refund for the unused portion of your subscription</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  <strong>Example:</strong> If you paid $399 for an annual subscription and cancel after 6 months, you'll receive a refund of approximately $200 (for the remaining 6 months).
                </p>
                <p className="text-stone leading-relaxed">
                  Monthly subscriptions are not eligible for pro-rated refunds after the 30-day guarantee period.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  5. Non-Refundable Items
                </h2>
                <p className="text-stone leading-relaxed">
                  The following are non-refundable:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>Setup fees or one-time charges (if applicable)</li>
                  <li>Custom development work (if applicable to future enterprise plans)</li>
                  <li>Third-party service fees</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  6. Refund Processing Time
                </h2>
                <p className="text-stone leading-relaxed">
                  Once approved, refunds are processed within <strong>5-7 business days</strong>. The refund will be issued to your original payment method.
                </p>
                <p className="text-stone leading-relaxed">
                  Please note: It may take an additional 3-5 business days for the refund to appear in your account, depending on your bank or credit card provider.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  7. Disputes and Chargebacks
                </h2>
                <p className="text-stone leading-relaxed">
                  Before filing a chargeback with your bank, please contact us at{' '}
                  <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                    hello@moazzam.site
                  </a>
                  . We're committed to resolving any issues fairly and quickly.
                </p>
                <p className="text-stone leading-relaxed">
                  Filing a chargeback without contacting us first may result in immediate account suspension and loss of access to our services.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  8. Contact Us
                </h2>
                <p className="text-stone leading-relaxed">
                  For refund requests or questions about this policy:
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
                    href="/legal/privacy"
                    className="block p-4 bg-white rounded-lg border border-stone/10 hover:border-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-charcoal mb-1">Privacy Policy</div>
                    <div className="text-sm text-stone">How we handle your data</div>
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
