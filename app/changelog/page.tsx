import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Changelog — Forge",
  description: "Every release. Every tweak. Every fix.",
  openGraph: {
    title: "Changelog — Forge",
    description: "Track every update to Forge. From v1.0 to the latest release.",
    type: "website",
    url: "https://forge.app/changelog",
  },
};

export default function Changelog() {
  return (
    <>
      <Navigation />

      <header style={{ paddingTop: '140px', paddingBottom: '56px', textAlign: 'center', background: 'radial-gradient(60% 50% at 50% 0%, rgba(255,45,85,.08), transparent 70%)' }}>
        <div className="wrap">
          <div className="eyebrow">Changelog</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '72px', fontWeight: 400, letterSpacing: '-0.01em', margin: '0 auto 18px', maxWidth: '880px', lineHeight: 1.05 }}>
            Every <em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>release</em>, every change.
          </h1>
          <p className="section-sub">
            Forge ships small and often. Every tweak we add, every bug we squash, every game we add support for — logged here.
          </p>

          <form
            style={{ maxWidth: '560px', margin: '32px auto 0', padding: '14px 18px', background: 'var(--panel-2)', border: '1px solid var(--border)', borderRadius: '50px', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--text-3)', letterSpacing: '0.05em' }}
          >
            <span style={{ color: 'var(--accent)' }}>📬</span>
            <input type="email" placeholder="you@email.com — get release notes monthly" required style={{ background: 'transparent', border: 'none', outline: 'none', flex: 1, minWidth: 0, padding: '6px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500 }} />
            <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '50px', fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
              Subscribe
            </button>
          </form>
        </div>
      </header>

      <section style={{ padding: '64px 0 120px', position: 'relative' }}>
        <div className="wrap">
          <div style={{ position: 'relative', paddingLeft: '48px' }}>
            <div
              style={{
                position: 'absolute',
                left: '11px',
                top: '8px',
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent), var(--border) 12%, var(--border) 100%)',
              }}
            />

            {/* v2.1 - Latest */}
            <Release
              version="v2.1"
              date="MAY 24, 2026"
              tags={['Latest', 'Major']}
              title="Diagnostic + Benchmark."
              subtitle="Forge can finally prove it works."
              latest
              added={9}
              changed={5}
              fixed={8}
              features={[
                { label: 'New tab', title: 'Diagnostic', desc: 'Plain-language scan of your system\'s health. 3 issues today, 0 next week — Forge keeps watch.' },
                { label: 'New tab', title: 'Benchmark', desc: 'PresentMon-backed before/after captures with per-tweak FPS attribution. Receipts, basically.' },
              ]}
            />

            {/* v2.0 */}
            <Release version="v2.0" date="APRIL 3, 2026" tags={['Major']} title="The redesign." subtitle="EXM-inspired, top to bottom." added={6} changed={4} />

            {/* v1.8 */}
            <Release version="v1.8" date="FEB 18, 2026" tags={['Minor']} title="Network & the great Debloat overhaul." added={4} fixed={3} />

            {/* v1.7 */}
            <Release version="v1.7" date="JAN 12, 2026" tags={['Minor']} title="Games come into focus." added={3} />

            {/* v1.6 */}
            <Release version="v1.6" date="DEC 4, 2025" tags={['Minor']} title="Hardware tab. C-states, IRQ, MSI mode." added={5} />

            {/* v1.5 */}
            <Release version="v1.5" date="OCT 22, 2025" tags={['Minor']} title="The first 40 tweaks." added={12} />

            {/* v1.0 */}
            <Release version="v1.0" date="JULY 9, 2025" tags={['Initial release']} title="Hello, world." desc="First public release. WPF dark UI, 12 core tweaks, Fixes panel for Windows repair operations, Competition Mode preset, restore-point safety on every action." />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Release({
  version,
  date,
  tags,
  title,
  subtitle,
  desc,
  latest,
  added,
  changed,
  fixed,
  features,
}: {
  version: string;
  date: string;
  tags: string[];
  title: string;
  subtitle?: string;
  desc?: string;
  latest?: boolean;
  added?: number;
  changed?: number;
  fixed?: number;
  features?: Array<{ label: string; title: string; desc: string }>;
}) {
  return (
    <article style={{ position: 'relative', paddingBottom: '64px' }}>
      <div
        style={{
          position: 'absolute',
          left: '-43px',
          top: '8px',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: latest ? 'var(--accent)' : 'var(--bg)',
          border: `2px solid ${latest ? 'var(--accent)' : 'var(--border-2)'}`,
          boxShadow: latest
            ? '0 0 0 4px var(--bg), 0 0 24px rgba(255,45,85,.55)'
            : '0 0 0 4px var(--bg)',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '32px', fontWeight: 700, letterSpacing: '-0.01em' }}>
          {version}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'var(--text-3)', letterSpacing: '0.08em', fontWeight: 500 }}>
          {date}
        </div>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10.5px',
              padding: '4px 9px',
              borderRadius: '5px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              background: tag === 'Latest' ? 'var(--accent)' : 'var(--panel-2)',
              color: tag === 'Latest' ? '#fff' : 'var(--text-2)',
              border: tag === 'Latest' ? 'none' : '1px solid var(--border-2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', lineHeight: 1.15, margin: '0 0 18px', letterSpacing: '-0.005em', fontWeight: 400 }}>
        {title} {subtitle && <em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>{subtitle}</em>}
      </h2>

      {desc && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15.5px', lineHeight: 1.55, color: 'var(--text-2)', margin: 0 }}>{desc}</p>}

      {features && (
        <div style={{ margin: '18px 0 24px', padding: '24px', background: 'linear-gradient(180deg, var(--panel-2), var(--panel))', border: '1px solid rgba(255,45,85,.32)', borderRadius: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ padding: '16px', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 600 }}>
                {f.label}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>
                {f.title}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      )}

      {(added || changed || fixed) && (
        <div>
          {added && (
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '11.5px', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                Added
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', padding: '2px 7px', borderRadius: '4px', background: 'rgba(62,224,143,.12)', color: 'var(--good)', fontWeight: 700 }}>
                  +{added}
                </span>
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {Array(added)
                  .fill(0)
                  .map((_, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '15px',
                        color: 'var(--text-2)',
                        paddingLeft: '18px',
                        position: 'relative',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '9px',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--text-4)',
                        }}
                      />
                      Feature {i + 1}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
