import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-2)', padding: '56px 0' }}>
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-12 mb-12">
          <div>
            <div className="font-black text-xl tracking-wide mb-3">
              Forge<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.55', color: 'var(--text-3)', maxWidth: '280px' }}>
              Performance, audited. Made for players who count milliseconds.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '14px', fontWeight: 700 }}>
              Product
            </h4>
            <div className="flex flex-col gap-2">
              <a href="/#features" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Features</a>
              <a href="/#proof" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Benchmarks</a>
              <a href="/#games" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Games</a>
              <Link href="/pricing" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Pricing</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '14px', fontWeight: 700 }}>
              Resources
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/changelog" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Changelog</Link>
              <a href="#" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Documentation</a>
              <a href="#" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">System requirements</a>
              <a href="mailto:support@forge.app" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Support</a>
              <Link href="/legal/terms" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Terms</Link>
              <Link href="/legal/privacy" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Privacy</Link>
              <Link href="/legal/refund" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Refund Policy</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '14px', fontWeight: 700 }}>
              Community
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Discord · 4.2k members</a>
              <a href="#" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">Twitter / X</a>
              <a href="#" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">YouTube</a>
              <a href="#" style={{ fontSize: '14px', color: 'var(--text-3)' }} className="hover:text-[var(--text-2)]">GitHub</a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
          <span style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-4)', letterSpacing: '0.08em', fontWeight: 500 }}>
            © 2026 FORGE · ALL RIGHTS RESERVED
          </span>
          <span style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-4)', letterSpacing: '0.08em', fontWeight: 500 }}>
            v2.1 · LAST UPDATED MAY 24
          </span>
        </div>
      </div>
    </footer>
  );
}
