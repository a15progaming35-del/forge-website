import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 400, lineHeight: 1.05, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-3)', marginBottom: '32px' }}>
            Last updated: May 24, 2026
          </p>

          <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-2)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>1. Agreement to Terms</h2>
            <p>By accessing and using Forge, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>2. License Grant</h2>
            <p>Forge grants you a non-exclusive, non-transferable license to use the software on Windows 10 or Windows 11 systems. This license is personal to you and may not be shared, transferred, or sublicensed.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>3. Subscription Terms</h2>
            <p>Your subscription to Forge is billed monthly at $11 USD. Your subscription will continue until you cancel it. You may cancel your subscription at any time through your account settings.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>4. Refund Policy</h2>
            <p>We offer a 30-day money-back guarantee. If you are not satisfied with Forge within 30 days of purchase, you may request a full refund.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>5. Disclaimer of Warranties</h2>
            <p>Forge is provided "as is" without warranty of any kind, either express or implied. We do not warrant that the software will be uninterrupted or error-free, or that defects will be corrected.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>6. Limitation of Liability</h2>
            <p>In no event shall Forge be liable for any damages arising out of or in connection with your use of the software, including but not limited to direct, indirect, incidental, special, consequential, or punitive damages.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>7. User Conduct</h2>
            <p>You agree not to use Forge for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction, including but not limited to copyright laws.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>8. Termination</h2>
            <p>We may terminate your access to Forge at any time if we determine you are in violation of these terms. Upon termination, you must cease use of the software immediately.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective upon posting to the website. Your continued use of the service following the posting of revised terms means you accept and agree to the changes.</p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '12px', color: 'var(--text)' }}>10. Contact</h2>
            <p>If you have questions about these terms, please contact us at support@forge.app</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
