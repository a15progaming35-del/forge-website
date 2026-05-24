'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <>
      <Navigation />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="wrap text-center">
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎉</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 400, lineHeight: 1.05, margin: '0 0 18px', letterSpacing: '-0.01em' }}>
            Welcome to Forge.
          </h1>
          <p style={{ fontSize: '19px', lineHeight: 1.55, color: 'var(--text-2)', maxWidth: '560px', margin: '0 auto 36px' }}>
            Your subscription is active! Check your email for your license key and download link.
          </p>

          <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '14px', padding: '32px', maxWidth: '500px', margin: '0 auto 36px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, margin: '0 0 14px' }}>Next steps:</h2>
            <ol style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.6, paddingLeft: '20px', margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>Check your email for your license key</li>
              <li style={{ marginBottom: '12px' }}>Download the Forge installer (Windows 10/11 only)</li>
              <li style={{ marginBottom: '12px' }}>Run the installer and sign in with your email</li>
              <li>Run your first diagnostic scan and apply Competition Mode</li>
            </ol>
          </div>

          <div style={{ background: 'var(--accent-soft)', border: '1px solid rgba(255,45,85,.32)', borderRadius: '14px', padding: '24px', maxWidth: '500px', margin: '0 auto 36px' }}>
            <p style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500, margin: 0 }}>
              💡 Tip: Join our Discord community (4.2k members) for support and to share your results. Link in footer.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary btn-lg">
              Back to home <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, opacity: 0.85 }}>→</span>
            </Link>
            <Link href="/#features" className="btn btn-ghost btn-lg">
              Learn more about features
            </Link>
          </div>

          {sessionId && (
            <p style={{ fontSize: '12px', color: 'var(--text-4)', marginTop: '24px', fontFamily: "'JetBrains Mono', monospace" }}>
              Session ID: {sessionId}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function Welcome() {
  return (
    <Suspense fallback={<div />}>
      <WelcomeContent />
    </Suspense>
  );
}
