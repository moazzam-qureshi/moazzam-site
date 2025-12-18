import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'Cancel your subscription anytime. Learn how to cancel Clarilo AI and what happens to your data.',
};

export default function CancellationPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl text-charcoal mb-4">
              Cancellation Policy
            </h1>
            <p className="text-stone mb-8">
              <strong>Last Updated:</strong> December 18, 2025
            </p>

            <div className="bg-teal-50 rounded-xl p-8 border border-teal-200 mb-12">
              <h2 className="font-display font-bold text-2xl text-charcoal mb-4">
                Cancel Anytime, No Questions Asked
              </h2>
              <p className="text-lg text-stone leading-relaxed">
                You can cancel your Clarilo AI subscription at any time from your account dashboard or by emailing us. No contracts, no penalties, no hassle.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  1. How to Cancel Your Subscription
                </h2>
                <p className="text-stone leading-relaxed mb-6">
                  Canceling your subscription is easy. You have two options:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 border border-stone/10">
                    <h3 className="font-display font-semibold text-xl text-charcoal mb-4">
                      Option 1: Self-Service
                    </h3>
                    <ol className="space-y-3 text-stone">
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">1.</span>
                        <span>Log into your account</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">2.</span>
                        <span>Go to Settings → Billing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">3.</span>
                        <span>Click "Cancel Subscription"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">4.</span>
                        <span>Confirm cancellation</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-stone/10">
                    <h3 className="font-display font-semibold text-xl text-charcoal mb-4">
                      Option 2: Email Us
                    </h3>
                    <ol className="space-y-3 text-stone">
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">1.</span>
                        <span>
                          Email{' '}
                          <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700">
                            hello@moazzam.site
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">2.</span>
                        <span>Subject: "Cancel Subscription"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">3.</span>
                        <span>Include your account email</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-teal-600 mr-2">4.</span>
                        <span>We'll process within 24 hours</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <p className="text-stone leading-relaxed">
                  You'll receive a confirmation email once your cancellation is processed.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  2. When Does Cancellation Take Effect?
                </h2>
                <p className="text-stone leading-relaxed">
                  Your cancellation takes effect at the <strong>end of your current billing period</strong>. This means:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li>You'll retain full access to Clarilo AI until your current billing period ends</li>
                  <li>You won't be charged for any future billing periods</li>
                  <li>Your subscription will not automatically renew</li>
                </ul>
                <p className="text-stone leading-relaxed mt-4">
                  <strong>Example:</strong> If you cancel on January 15th and your billing renews on January 25th, you'll have access until January 25th. No charge will occur on January 25th.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  3. What Happens to Your Data After Cancellation?
                </h2>
                <p className="text-stone leading-relaxed mb-4">
                  When you cancel your subscription:
                </p>
                <div className="bg-white rounded-xl p-6 border border-stone/10">
                  <ul className="space-y-4 text-stone">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong>During Current Billing Period:</strong> Full access to all features and your data
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                      <div>
                        <strong>90-Day Retention:</strong> Your data is retained for 90 days after cancellation in case you want to reactivate
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <div>
                        <strong>After 90 Days:</strong> Your data is permanently deleted from our systems
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="text-stone leading-relaxed mt-6">
                  Want to export your data before it's deleted? Email us at{' '}
                  <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                    hello@moazzam.site
                  </a>{' '}
                  and we'll send you a data export.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  4. Billing After Cancellation
                </h2>
                <p className="text-stone leading-relaxed">
                  After you cancel:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>No future charges:</strong> Your payment method will not be charged again</li>
                  <li><strong>Current period non-refundable:</strong> Your current billing period is non-refundable (unless within 30-day money-back guarantee window)</li>
                  <li><strong>Verify cancellation:</strong> Check your email for cancellation confirmation</li>
                </ul>
                <p className="text-stone leading-relaxed mt-4">
                  If you're within the 30-day money-back guarantee period, see our{' '}
                  <Link href="/legal/refund" className="text-teal-600 hover:text-teal-700 underline">
                    Refund Policy
                  </Link>{' '}
                  for information on getting a refund.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  5. Reactivating Your Subscription
                </h2>
                <p className="text-stone leading-relaxed">
                  Changed your mind? You can reactivate your subscription anytime:
                </p>
                <ul className="list-disc pl-6 text-stone space-y-2">
                  <li><strong>Within 90 days:</strong> Log back in and reactivate from your dashboard. Your data will be fully restored.</li>
                  <li><strong>After 90 days:</strong> You can still reactivate, but you'll start with a fresh account (data is permanently deleted after 90 days).</li>
                </ul>
                <p className="text-stone leading-relaxed">
                  Reactivation starts a new billing period immediately, and you'll be charged for the selected plan.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  6. Account Deletion vs. Cancellation
                </h2>
                <p className="text-stone leading-relaxed mb-4">
                  There's a difference between canceling your subscription and deleting your account:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                    <h3 className="font-display font-semibold text-lg text-charcoal mb-3">
                      Cancel Subscription
                    </h3>
                    <ul className="text-sm text-stone space-y-2">
                      <li>✓ Stops future billing</li>
                      <li>✓ Retains your account and data for 90 days</li>
                      <li>✓ Easy to reactivate</li>
                      <li>✓ Recommended if you might return</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="font-display font-semibold text-lg text-charcoal mb-3">
                      Delete Account
                    </h3>
                    <ul className="text-sm text-stone space-y-2">
                      <li>✓ Stops future billing</li>
                      <li>✓ Immediately deletes all your data</li>
                      <li>✗ Cannot be undone</li>
                      <li>✓ Choose if you want complete removal</li>
                    </ul>
                  </div>
                </div>
                <p className="text-stone leading-relaxed mt-6">
                  To permanently delete your account, email us at{' '}
                  <a href="mailto:hello@moazzam.site" className="text-teal-600 hover:text-teal-700 font-medium">
                    hello@moazzam.site
                  </a>{' '}
                  with "Delete Account" in the subject line.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                  7. Need Help or Have Questions?
                </h2>
                <p className="text-stone leading-relaxed">
                  If you're considering canceling because of an issue with our product, please reach out first! We're committed to making Clarilo AI work for you.
                </p>
                <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                  <p className="text-charcoal font-semibold mb-2">Contact Us</p>
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
                  <p className="text-sm text-stone mt-3">
                    We respond within 24 hours and are here to help resolve any issues.
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
                    href="/legal/refund"
                    className="block p-4 bg-white rounded-lg border border-stone/10 hover:border-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-charcoal mb-1">Refund Policy</div>
                    <div className="text-sm text-stone">30-day money-back guarantee</div>
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
