import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedDemo from '@/components/AnimatedDemo';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />

      <header className="pt-40 pb-24" style={{ background: 'radial-gradient(60% 50% at 50% 0%, rgba(255,45,85,.10), transparent 60%), radial-gradient(60% 40% at 100% 30%, rgba(255,45,85,.06), transparent 60%)' }}>
        <div className="wrap text-center">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '88px', fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.02, maxWidth: '980px', margin: '0 auto 18px' }}>
            Less Windows. <br /><em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>More</em> <span style={{ color: 'var(--accent)' }}>winning.</span>
          </h1>
          <p style={{ fontSize: '19px', lineHeight: 1.55, color: 'var(--text-2)', maxWidth: '580px', margin: '0 auto 36px' }}>
            Forge tunes your PC for competitive games in one click. Measured. Reversible. Built for players who count milliseconds.
          </p>
          <div className="flex gap-3 justify-center items-center flex-wrap">
            <a href="/pricing" className="btn btn-primary btn-lg">
              Get Forge — $11/mo <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, opacity: 0.85 }}>→</span>
            </a>
            <span style={{ fontSize: '14px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)', letterSpacing: '0.5px', fontWeight: 500 }}>
              Monthly. <b>Cancel anytime.</b>
            </span>
          </div>
        </div>

        <AnimatedDemo />
      </header>

      <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, transparent, rgba(255,45,85,.025) 50%, transparent)', textAlign: 'center' }}>
        <div className="wrap">
          <div className="eyebrow">The Problem</div>
          <h2 className="section-h">Your PC is doing <span style={{ color: 'var(--accent)' }}>fourteen jobs</span> <em>you didn't ask for.</em></h2>
          <p className="section-sub">Stock Windows runs background services, telemetry pings, queue-deep GPU calls, and DWM compositor overhead before your game gets a single CPU slice.</p>

          <div className="flex flex-wrap justify-center gap-4 mt-14 max-w-4xl mx-auto">
            {['OneDrive', 'Xbox Game Bar', 'Cortana', 'Phone Link', 'Microsoft Teams', 'Mixed Reality Portal', 'News', 'Weather', 'Tips', 'OneNote', 'Solitaire', 'Get Help', 'Maps', '3D Viewer'].map((item, i) => (
              <span key={i} style={{ fontSize: '16px', color: i < 5 ? 'var(--text-2)' : 'var(--text-3)', padding: '6px 14px', border: '1px solid var(--border)', borderRadius: '50px', background: 'var(--panel)', fontWeight: 500 }}>
                {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16 max-w-3xl mx-auto">
            <Counter num={14} label="Background services" />
            <Counter num={603} label="RAM, idling" suffix="MB" />
            <Counter num={18} label="Telemetry endpoints" />
          </div>
        </div>
      </section>

      <section id="proof" style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="wrap">
          <div className="eyebrow">Measured. Real.</div>
          <h2 className="section-h"><span style={{ color: 'var(--accent)' }}>+23 fps.</span> <em>And the dips are gone.</em></h2>
          <p className="section-sub">Every Forge run captures real frame-time data via PresentMon. No placebo. Variance collapsed from σ=2.1 to σ=0.4.</p>

          <div className="mt-14 p-8 rounded-3xl border" style={{ background: 'linear-gradient(180deg, var(--panel-2), var(--panel))', borderColor: 'var(--border)' }}>
            <div className="flex justify-between items-center mb-5 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              <span>FRAME-TIME · CS2 · 1440P · 60S</span>
              <div className="flex gap-5">
                <span><i style={{ display: 'inline-block', width: '18px', height: '2px', background: '#4A4654', borderRadius: '1px', verticalAlign: 'middle', marginRight: '8px' }}></i>Run #017 stock</span>
                <span><i style={{ display: 'inline-block', width: '18px', height: '2px', background: 'var(--accent)', borderRadius: '1px', verticalAlign: 'middle', marginRight: '8px' }}></i>Run #018 with Forge</span>
              </div>
            </div>
            <svg viewBox="0 0 1080 240" style={{ width: '100%', height: 'auto' }}>
              <g stroke="var(--border)" strokeWidth="1">
                <line x1="0" y1="40" x2="1080" y2="40" />
                <line x1="0" y1="100" x2="1080" y2="100" />
                <line x1="0" y1="160" x2="1080" y2="160" />
                <line x1="0" y1="220" x2="1080" y2="220" />
              </g>
              <path d="M40,80 L100,90 L160,55 L220,110 L280,40 L340,125 L400,75 L460,90 L520,30 L580,140 L640,70 L700,90 L760,55 L820,120 L880,40 L940,90 L1000,65 L1060,105" fill="none" stroke="#4A4654" strokeWidth="1.8" />
              <path d="M40,182 L100,184 L160,178 L220,186 L280,180 L340,184 L400,180 L460,184 L520,176 L580,186 L640,180 L700,184 L760,178 L820,186 L880,180 L940,184 L1000,180 L1060,184" fill="none" stroke="var(--accent)" strokeWidth="2.2" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <StatCard label="Avg FPS" value="237" unit="fps" delta="↑ 23" was="was 214" />
            <StatCard label="P99 Frame-time" value="4.1" unit="ms" delta="↓ 1.2ms" was="was 5.3" />
            <StatCard label="Input → Draw" value="18.4" unit="ms" delta="↓ 6.1ms" was="was 24.5" />
            <StatCard label="Forge Score" value="87" unit="/100" delta="↑ 15" was="was 72" warm={true} />
          </div>
        </div>
      </section>

      <section id="features" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="eyebrow">The App</div>
            <h2 className="section-h">Every tweak. <em>Plain language.</em></h2>
            <p className="section-sub">Forge is a complete PC tuning surface — from one-click presets to deep registry control. Nothing hidden, nothing guessed.</p>
          </div>

          <div className="flex flex-col gap-20">
            <FeatureRow tag="01 · Diagnostic" title="A scan, in plain language." desc="Open Forge and it tells you, in normal sentences, what's wrong with your machine. Severity, treatment, time to fix. No more reading forum posts." img="/screens/03-diagnostic.png" bullets={['8.2-second full system scan', 'Issues ranked by impact on FPS & latency', 'One-click "Treat" per finding', 'Auto-rescan every 7 days']} />
            <FeatureRow tag="02 · Benchmark" title="Prove it." subtitle="Or it didn't happen." desc="Run a benchmark before, run one after. See the delta on a real chart. Per-tweak attribution shows you which changes actually moved the number." img="/screens/04-benchmark.png" flip bullets={['Real PresentMon frame-time capture', 'Compare any two runs side-by-side', 'Per-tweak FPS contribution table', 'Screenshot-ready share card']} />
            <FeatureRow tag="03 · 40 Tweaks" title="One toggle." subtitle="One registry write." desc="Forty curated tweaks across Core, Hardware, Network, Debloat, and Advanced. Each one labeled with risk, impact, and a clear explanation of what it actually does." img="/screens/05-general.png" bullets={['Timer Resolution, IRQ Affinity, HPET, MMCSS', 'D3D Render-Ahead, MSI mode, GPU scheduling', 'TCP stack, DNS-over-HTTPS, NIC tuning', 'Every change reversible · restore point first']} />
            <FeatureRow tag="04 · Per-Game" title="Tuning, per title." desc="Forge auto-detects your library — Fortnite, Valorant, CS2, Apex, Warzone, Siege, Rust, FiveM — and applies the right stack the moment you launch." img="/screens/10-games.png" flip bullets={['Per-game GameUserSettings.ini patches', 'Launch arg injection for Epic / Steam', 'Auto-boost on game.exe detection', 'Reverts on exit']} />
            <FeatureRow tag="05 · Replay AI" title="Coaching, on tap." desc="Drop a clip. Forge AI watches it once, slowly, and tells you what it noticed. Heuristic frame analysis — no API key, no upload, no internet required." img="/screens/11-replay.png" bullets={['Aim · movement · positioning · game sense', 'Game-specific coaching patterns', '100% local · private · free', 'Works on .mp4 / .mkv / .replay / .rofl']} />
            <FeatureRow tag="06 · Debloat" title="Strip Windows." subtitle="Keep yourself." desc="Surgical removal of UWP apps, background services, scheduled tasks, and telemetry endpoints. Every removal logged, every removal reversible." img="/screens/07-debloat.png" flip bullets={['14+ UWP apps removed by default', 'Disables OneDrive auto-launch', 'Stops Xbox DVR + capture services', 'Restores anything you didn\'t mean to kill']} />
          </div>
        </div>
      </section>

      <section id="games" style={{ padding: '88px 0', background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.4))' }}>
        <div className="wrap text-center">
          <div className="eyebrow">Supported Titles</div>
          <h2 className="section-h">Tuned for the games <em>you actually play.</em></h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 max-w-3xl mx-auto">
            {['FORTNITE', 'VALORANT', 'CS2', 'WARZONE', 'APEX', 'RUST', 'SIEGE', 'FIVEM'].map((game) => (
              <div key={game} className="p-6 rounded-lg border hover:translate-y-[-12px] transition-transform" style={{ background: 'linear-gradient(180deg, var(--panel-2), var(--panel))', borderColor: 'var(--border)' }}>
                <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.08em' }}>{game}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>
            + Forge daemon for any .exe · auto-detect via Steam, Epic, Battle.net, Riot
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', textAlign: 'center', background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,45,85,.10), transparent 70%)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '72px', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.01em', marginBottom: '18px' }}>
            Stop <em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>fighting</em> <span style={{ color: 'var(--accent)' }}>your machine.</span>
          </h2>
          <p style={{ fontSize: '19px', lineHeight: 1.55, color: 'var(--text-2)', marginBottom: '36px' }}>
            One purchase. One install. Every game, faster.
          </p>
          <a href="/pricing" className="btn btn-primary btn-lg">
            Get Forge — $11/mo <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, opacity: 0.85 }}>→</span>
          </a>
          <div style={{ fontSize: '14px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)', marginTop: '24px', letterSpacing: '0.05em', fontWeight: 500 }}>
            $11/MO · WINDOWS 10/11 · CANCEL ANYTIME · 30-DAY REFUND
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Counter({ num, label, suffix }: { num: number; label: string; suffix?: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '96px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text)' }}>
        {num}
        {suffix && <span style={{ fontSize: '0.4em', color: 'var(--text-3)', fontWeight: 500, letterSpacing: 0, marginLeft: '6px' }}>{suffix}</span>}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--text-3)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '14px', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

function StatCard({ label, value, unit, delta, was, warm }: any) {
  return (
    <div className="p-6 rounded-2xl border" style={{ background: warm ? 'linear-gradient(180deg, rgba(255,45,85,.08), rgba(255,45,85,.02))' : 'var(--panel)', borderColor: warm ? 'rgba(255,45,85,.28)' : 'var(--border)' }}>
      <div style={{ fontSize: '11px', fontWeight: 600, color: warm ? 'var(--accent)' : 'var(--text-3)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '8px', lineHeight: 1, color: warm ? 'var(--accent)' : 'var(--text)' }}>
        {value}<small style={{ fontSize: '18px', color: 'var(--text-3)', marginLeft: '4px', fontWeight: 500 }}>{unit}</small>
      </div>
      <div style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: warm ? 'var(--accent)' : 'var(--good)', marginTop: '10px', fontWeight: 600 }}>{delta}</div>
      <div style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)', fontWeight: 500 }}>{was}</div>
    </div>
  );
}

function FeatureRow({ tag, title, subtitle, desc, img, bullets, flip }: any) {
  const textCol = (
    <div>
      <div className="eyebrow" style={{ marginBottom: '14px' }}>{tag}</div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 400, lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.01em' }}>
        {title} {subtitle && <em style={{ fontStyle: 'italic', color: 'var(--text-2)' }}>{subtitle}</em>}
      </h3>
      <p style={{ fontSize: '16.5px', lineHeight: 1.55, color: 'var(--text-2)', marginBottom: '18px', maxWidth: '480px' }}>
        {desc}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {bullets.map((bullet: string, i: number) => (
          <li key={i} style={{ fontSize: '14px', color: 'var(--text-2)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}></span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  const imgCol = (
    <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', background: '#0A0A10', border: '1px solid var(--border)', boxShadow: '0 30px 80px rgba(0,0,0,.45)' }}>
      <Image src={img} alt="Feature" width={600} height={400} style={{ display: 'block', width: '100%', height: 'auto' }} priority />
    </div>
  );

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${flip ? 'md:flex-row-reverse' : ''}`}>
      {flip ? (
        <>
          {imgCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imgCol}
        </>
      )}
    </div>
  );
}

