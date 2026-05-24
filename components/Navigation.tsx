'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/[0.04]" style={{ background: 'rgba(10,10,15,0.72)' }}>
      <div className="wrap flex items-center h-16 gap-8">
        <Link href="/" className="font-black text-xl tracking-wide" style={{ letterSpacing: '0.5px' }}>
          Forge<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <div className="hidden md:flex gap-7 ml-auto text-sm font-medium text-[var(--text-2)]">
          <a href="/#features" className="hover:text-[var(--text)]">Features</a>
          <a href="/#proof" className="hover:text-[var(--text)]">Benchmarks</a>
          <a href="/#games" className="hover:text-[var(--text)]">Games</a>
          <Link href="/pricing" className={pathname === '/pricing' ? 'text-[var(--text)]' : 'hover:text-[var(--text)]'}>Pricing</Link>
          <Link href="/changelog" className={pathname === '/changelog' ? 'text-[var(--text)]' : 'hover:text-[var(--text)]'}>Changelog</Link>
        </div>

        <Link href="/pricing" className="btn btn-primary btn-lg ml-auto md:ml-2">
          Get Forge <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, opacity: 0.85 }}>→</span>
        </Link>
      </div>
    </nav>
  );
}
