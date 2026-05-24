import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 400, lineHeight: 1.05, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-3)', marginBottom: '32px' }}>
            Last updated: May 24, 2026
          </p>

          <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-2)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>1. Information We Collect</h2>
            <p>We collect the minimum information necessary to operate Forge:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Email address (for account and subscription management)</li>
              <li>License key activation data (for license verification)</li>
              <li>Diagnostic scan results (stored locally on your machine only)</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>2. Data Storage</h2>
            <p>All diagnostic data, benchmark results, and system information is stored locally on your computer. Nothing leaves your PC without your explicit action. We never upload diagnostic data, replay videos, or system information to our servers.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>3. How We Use Your Information</h2>
            <p>We use your email address solely for:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>License delivery and activation</li>
              <li>Account management and password recovery</li>
              <li>Subscription billing and renewal notifications</li>
              <li>Important product updates (optional opt-in for marketing)</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>4. No Telemetry</h2>
            <p>Forge does not collect telemetry data. We do not track your behavior, monitor your gaming activity, or send usage analytics to our servers. The desktop app is completely independent and functions offline.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>5. Third-Party Services</h2>
            <p>We use Stripe for payment processing. Stripe collects billing information according to their privacy policy. We do not share any other personal data with third parties.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>6. Data Security</h2>
            <p>Your data is encrypted in transit using industry-standard SSL/TLS. Account passwords are hashed and salted. We maintain reasonable security practices to protect your information.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Access your account information at any time</li>
              <li>Delete your account and all associated data</li>
              <li>Export your data in a standard format</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>8. Changes to Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated "last updated" date.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>9. Contact</h2>
            <p>If you have questions about this privacy policy or how we handle your data, please contact us at privacy@forge.app</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
