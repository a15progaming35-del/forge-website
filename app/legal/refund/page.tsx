import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Refund() {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 400, lineHeight: 1.05, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
            Refund Policy
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-3)', marginBottom: '32px' }}>
            Last updated: May 24, 2026
          </p>

          <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-2)' }}>
            <div style={{ background: 'var(--accent-soft)', border: '1px solid rgba(255,45,85,.32)', borderRadius: '14px', padding: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '16px', color: 'var(--accent)', fontWeight: 500, margin: 0 }}>
                ✓ 30-day money-back guarantee. If you're not satisfied, we'll refund you — no questions asked.
              </p>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>30-Day Guarantee</h2>
            <p>If you purchase a Forge subscription and are not satisfied with the product within 30 days of your purchase, you are eligible for a full refund of your subscription fee.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol style={{ paddingLeft: '20px' }}>
              <li>Email us at refund@forge.app</li>
              <li>Include your order email and the reason for the refund request</li>
              <li>We will process your refund within 48 hours</li>
              <li>The refund will appear in your account within 3-5 business days</li>
            </ol>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>Refund Eligibility</h2>
            <p>You are eligible for a refund if:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Your request is made within 30 days of purchase</li>
              <li>You have a valid Forge subscription account</li>
              <li>You are the original purchaser of the subscription</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>Non-Refundable Items</h2>
            <p>The following are non-refundable:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Refunds requested more than 30 days after purchase</li>
              <li>Duplicate/accidental purchases (within 24 hours — automatic reversal)</li>
              <li>Subscriptions renewed after the initial 30-day period</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>Subscription Cancellation</h2>
            <p>You can cancel your Forge subscription at any time without any penalty or cancellation fee. After cancellation, you will retain access until the end of your current billing period.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>How to Cancel</h2>
            <p>To cancel your subscription:</p>
            <ol style={{ paddingLeft: '20px' }}>
              <li>Log into your account at app.forge.gg</li>
              <li>Go to "Billing" or "Subscription Settings"</li>
              <li>Click "Cancel Subscription"</li>
              <li>Confirm the cancellation</li>
            </ol>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>Failed Payments</h2>
            <p>If your payment fails, we will attempt to charge your card again. If the charge continues to fail after 3 attempts over a period of days, your subscription will be suspended. We will notify you via email about the failed payment.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>Questions?</h2>
            <p>If you have any questions about refunds or cancellations, please email us at support@forge.app. We're here to help.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
