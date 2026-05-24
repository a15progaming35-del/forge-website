import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CheckoutButton from '@/components/CheckoutButton';

export const metadata: Metadata = {
  title: "Pricing — Forge",
  description: "$11/month. Every tweak. Every game. Cancel anytime. 30-day refund. Windows 10/11.",
  openGraph: {
    title: "Pricing — Forge",
    description: "$11/month. Every tweak. Every game. Cancel anytime. 30-day refund.",
    type: "website",
    url: "https://forge.app/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Navigation />

      <header style={{ paddingTop: '140px', paddingBottom: '64px', textAlign: 'center', background: 'radial-gradient(60% 50% at 50% 0%, rgba(255,45,85,.08), transparent 70%)' }}>
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '72px', fontWeight: 400, letterSpacing: '-0.01em', margin: '0 auto 18px', maxWidth: '880px', lineHeight: 1.05 }}>
            Eleven bucks a month. <span style={{ color: 'var(--accent)' }}>That's it.</span>
          </h1>
          <p className="section-sub">
            No tiers, no upsells, no Pro/Plus/Premium dance. Every tweak, every game, every update — for the price of a fast-food meal.
          </p>
        </div>
      </header>

      <section style={{ padding: '48px 0 100px' }}>
        <div className="wrap" style={{ maxWidth: '520px' }}>
          <div style={{ padding: '48px', background: 'linear-gradient(180deg, var(--panel-2), var(--panel))', border: '1px solid rgba(255,45,85,.32)', borderRadius: '22px', boxShadow: '0 40px 100px rgba(0,0,0,.55), 0 0 80px rgba(255,45,85,.06)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', padding: '6px 14px', borderRadius: '50px', textTransform: 'uppercase' }}>
              Monthly
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, margin: '0 0 6px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--accent)' }}>Forge</h3>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 400, margin: '0 0 24px', letterSpacing: '-0.01em' }}>Everything. Always.</div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '32px', color: 'var(--text-3)', alignSelf: 'flex-start', marginTop: '8px' }}>$</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '88px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>11</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '22px', color: 'var(--text-3)', marginLeft: '2px', marginTop: '14px' }}>/mo</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--text-3)', letterSpacing: '0.1em', marginBottom: '28px', fontWeight: 500 }}>CANCEL ANYTIME · NO LOCK-IN · NO TIERS</div>

            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'All 40+ tweaks across Core, Hardware, Network, Debloat, Advanced',
                'Diagnostic scan + plain-language treatment plans',
                'Benchmark capture with per-tweak attribution',
                'Per-game tuning for Fortnite, Valorant, CS2, Apex, Warzone, Siege, Rust, FiveM',
                'Replay AI coaching (local, no API key, no upload)',
                'One-click reverts · automatic restore points',
                'Every update included · no version paywalls',
                'Cancel anytime · 30-day money-back guarantee',
                'Discord access · 4.2k members, direct dev support',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: "'Inter', sans-serif", fontSize: '14.5px', color: 'var(--text-2)', lineHeight: 1.4, fontWeight: 500 }}>
                  <span style={{ flex: '0 0 18px', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid rgba(255,45,85,.4)', marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>

            <CheckoutButton className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '18px', borderRadius: '12px', fontSize: '15.5px', boxShadow: '0 10px 30px rgba(255,45,85,.4), 0 1px 0 rgba(255,255,255,.14) inset' }} />

            <span style={{ display: 'block', textAlign: 'center', marginTop: '14px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--text-3)', letterSpacing: '0.08em', fontWeight: 500 }}>
              CANCEL ANYTIME · 30-DAY REFUND · WINDOWS 10 / 11 ONLY
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', textAlign: 'center', background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.4))' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '44px', lineHeight: 1.05, letterSpacing: '-0.01em', margin: '0 auto 56px', maxWidth: '800px', fontWeight: 400 }}>
            Why <em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>just</em> <span style={{ color: 'var(--accent)' }}>eleven bucks?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ maxWidth: '980px', margin: '0 auto', background: 'var(--border)', borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <div style={{ padding: '24px', background: 'var(--panel)', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: 'var(--text-3)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Other tweakers</div>
            </div>
            <div style={{ padding: '24px', background: 'var(--panel)', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Forge — $11/mo</div>
            </div>

            {[
              { left: '$20–$40 / month, locked tiers', right: 'One flat price. Everything in.' },
              { left: 'Features locked behind paywalls', right: 'Every tweak unlocked from day one' },
              { left: 'Annual contracts, cancellation fees', right: 'Cancel anytime, no questions' },
              { left: '"Pro" tier added every year', right: 'Every update included, always' },
              { left: 'Cloud upload of system data', right: '100% local. Nothing leaves your PC.' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ padding: '18px 24px', background: 'var(--bg-2)', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text-4)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--text-4)' }}>×</span> {row.left}
                </div>
                <div style={{ padding: '18px 24px', background: 'var(--bg-2)', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {row.right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', lineHeight: 1.05, letterSpacing: '-0.01em', margin: '0 auto 56px', maxWidth: '680px', fontWeight: 400 }}>
            <em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>Questions</em>
          </h2>

          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            {[
              {
                q: 'Is it actually safe? What if it breaks Windows?',
                a: 'Every tweak creates a System Restore point before it runs. Every change is logged and reversible from inside the app with one click. We\'ve never had a report of an irreversible break in 18 months of beta.',
              },
              {
                q: 'Will it work on my hardware?',
                a: 'Forge runs on any Windows 10 or 11 machine, x64. AMD or Intel CPU, NVIDIA or AMD GPU. We auto-detect your hardware and skip tweaks that don\'t apply.',
              },
              {
                q: 'Will I actually see the FPS gain you advertise?',
                a: '+23 fps is the average we see on a mid-range RTX 4070 + i7-13700K at 1440p in CS2 after Competition Mode. Your gain depends on how bloated your stock Windows install is and which game you play.',
              },
              {
                q: 'Is it just disabling Windows Defender?',
                a: 'No. Defender stays on by default. We have an opt-in tweak that pauses Defender realtime scanning only while a known game.exe is the foreground process — it resumes the moment you alt-tab or close the game.',
              },
              {
                q: 'Will it get me banned in [game]?',
                a: 'Forge does not touch game memory, inject DLLs, or modify game files. It edits Windows registry and services. We\'ve worked with our beta community to verify clean operation with Vanguard, Easy Anti-Cheat, BattlEye, VAC, and Ricochet.',
              },
              {
                q: 'Do you collect any data?',
                a: 'No telemetry. No analytics. No account required. The app talks to our servers only to check for updates (which you can disable). Replay analysis runs 100% locally with no network access.',
              },
            ].map((faq, i) => (
              <details key={i} style={{ background: 'var(--bg-2)', padding: 0 }}>
                <summary style={{ cursor: 'pointer', padding: '22px 26px', fontFamily: "'Inter', sans-serif", fontSize: '16.5px', fontWeight: 600, color: 'var(--text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '18px', transition: 'background 0.15s' }}>
                  {faq.q}
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', color: 'var(--accent)', fontWeight: 300 }}>+</span>
                </summary>
                <div style={{ padding: '0 26px 22px', fontFamily: "'Inter', sans-serif", fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-2)' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
