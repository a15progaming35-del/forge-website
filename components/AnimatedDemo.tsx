'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedDemo() {
  const fpsValRef = useRef<HTMLDivElement>(null);
  const fpsMsRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const screenRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [fps, setFps] = useState(142);

  useEffect(() => {
    let frameId: number;
    let startTime = performance.now();

    const frame = (now: number) => {
      const t = ((now - startTime) / 1000) % 12;

      // Scene picker
      let scene: 'diagnostic' | 'apply' | 'benchmark';
      if (t < 4) scene = 'diagnostic';
      else if (t < 8) scene = 'apply';
      else scene = 'benchmark';

      // Update screens
      Object.entries(screenRefs.current).forEach(([key, el]) => {
        if (el) {
          if (key === scene) {
            el.classList.add('on');
          } else {
            el.classList.remove('on');
          }
        }
      });

      // Update nav items
      const tabsByScene = { diagnostic: 'diagnostic', apply: 'apply', benchmark: 'benchmark' };
      Object.entries(navItemRefs.current).forEach(([key, el]) => {
        if (el) {
          if (key === tabsByScene[scene]) {
            el.classList.add('on');
          } else {
            el.classList.remove('on');
          }
        }
      });

      // FPS counter behavior
      let fpsVal: number, ms: string, color: string;
      if (t < 4) {
        const jitter = Math.sin(t * 22) * 4 + Math.sin(t * 41) * 2;
        const dip = t > 2.6 && t < 2.9 ? -20 : 0;
        fpsVal = Math.round(142 + jitter + dip);
        ms = (1000 / fpsVal).toFixed(1);
        color = '#FF466A';
      } else if (t < 8) {
        const local = (t - 4) / 4;
        const eased = 1 - Math.pow(1 - local, 2.5);
        fpsVal = Math.round(142 + (237 - 142) * eased);
        ms = (1000 / fpsVal).toFixed(1);
        if (local < 0.4) color = '#FF466A';
        else if (local < 0.7) color = '#F0B445';
        else color = '#3EE08F';
      } else {
        const jitter = Math.sin(t * 14) * 1.5;
        fpsVal = Math.round(237 + jitter);
        ms = (1000 / fpsVal).toFixed(1);
        color = '#3EE08F';
      }

      setFps(fpsVal);
      if (fpsValRef.current) {
        fpsValRef.current.textContent = fpsVal.toString();
        fpsValRef.current.style.color = color;
      }
      if (fpsMsRef.current) {
        fpsMsRef.current.textContent = ms + 'ms';
      }

      // Viewport shake during dips
      if (gameRef.current) {
        if (t < 4 && t > 2.6 && t < 2.95) {
          const x = (Math.random() - 0.5) * 2.6;
          const y = (Math.random() - 0.5) * 2.6;
          gameRef.current.style.transform = `translate(${x}px, ${y}px)`;
        } else {
          gameRef.current.style.transform = '';
        }
      }

      frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="mt-18" style={{ marginTop: '72px', margin: '72px auto 0' }}>
      <div
        style={{
          position: 'relative',
          width: 'min(1180px, calc(100vw - 64px))',
          margin: '0 auto',
          aspectRatio: '16/9',
          borderRadius: '18px',
          background: '#06060B',
          border: '1px solid var(--border)',
          boxShadow: '0 60px 120px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.02) inset',
          overflow: 'hidden',
        }}
        aria-label="Animated demo of Forge applying tweaks"
      >
        {/* Monitor bezel glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(80% 60% at 50% 0%, rgba(255,45,85,.08), transparent 70%)',
          }}
        />

        {/* Game viewport */}
        <div
          ref={gameRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(45% 35% at 50% 55%, #1f1a18, #0d0a09 70%), linear-gradient(180deg, #1c1612 0%, #0a0807 100%)',
          }}
        >
          {/* Sun glow */}
          <div
            style={{
              position: 'absolute',
              left: '62%',
              top: '32%',
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,210,170,.55), transparent 70%)',
              filter: 'blur(8px)',
            }}
          />

          {/* Horizon */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '46%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,180,120,.18), transparent)',
            }}
          />
        </div>

        {/* HUD Overlays */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Crosshair */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '26px',
              height: '26px',
              margin: '-13px 0 0 -13px',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,.5)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '-4px',
                bottom: '-4px',
                width: '1px',
                marginLeft: '-0.5px',
                background: 'rgba(255,255,255,.7)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '-4px',
                right: '-4px',
                height: '1px',
                marginTop: '-0.5px',
                background: 'rgba(255,255,255,.7)',
              }}
            />
          </div>

          {/* HP Bar */}
          <div
            style={{
              position: 'absolute',
              left: '32px',
              bottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff',
              textShadow: '0 1px 4px rgba(0,0,0,.7)',
            }}
          >
            <span>HP</span>
            <div style={{ width: '140px', height: '6px', background: 'rgba(0,0,0,.45)', border: '1px solid rgba(255,255,255,.18)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ display: 'block', height: '100%', width: '78%', background: 'linear-gradient(90deg, #3EE08F, #62FFB0)' }} />
            </div>
          </div>

          {/* Ammo */}
          <div
            style={{
              position: 'absolute',
              right: '32px',
              bottom: '32px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '28px',
              fontWeight: 700,
              color: '#fff',
              textShadow: '0 1px 4px rgba(0,0,0,.7)',
              letterSpacing: '0.04em',
            }}
          >
            28<small style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)', marginLeft: '4px', fontWeight: 500 }}>/120</small>
          </div>

          {/* FPS */}
          <div
            style={{
              position: 'absolute',
              right: '32px',
              top: '32px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '64px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: '#fff',
              textShadow: '0 2px 8px rgba(0,0,0,.7)',
            }}
          >
            <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255,255,255,.5)', letterSpacing: '0.35em', textAlign: 'right', marginBottom: '6px', fontWeight: 500 }}>FPS</span>
            <span ref={fpsValRef}>142</span>
            <span ref={fpsMsRef} style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,.55)', marginTop: '6px', textAlign: 'right', letterSpacing: '0.06em', fontWeight: 500 }}>7.0ms</span>
          </div>
        </div>

        {/* Forge App Card */}
        <div
          style={{
            position: 'absolute',
            left: '6%',
            top: '6%',
            width: '44%',
            background: 'linear-gradient(180deg, #12121A, #0E0E16)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            boxShadow: '0 30px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03) inset',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Titlebar */}
          <div style={{ height: '30px', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '14px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2A2A36' }} />
              ))}
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 500, color: 'var(--text-3)', letterSpacing: '0.08em' }}>FORGE</span>
            <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 500, color: 'var(--text-4)', letterSpacing: '0.08em' }}>v2.1</span>
          </div>

          {/* Body */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', minHeight: '280px', flex: 1 }}>
            {/* Sidebar */}
            <div style={{ padding: '14px 10px', borderRight: '1px solid var(--border)', background: '#08080F' }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 800, margin: '0 0 8px', letterSpacing: '0.5px' }}>
                FORGE<small style={{ display: 'block', fontWeight: 500, fontSize: '8.5px', color: 'var(--text-3)', letterSpacing: '0.2em', marginTop: '3px', textTransform: 'uppercase' }}>TWEAKS</small>
              </h3>
              {['diagnostic', 'apply', 'benchmark'].map((item) => (
                <div
                  key={item}
                  ref={(el) => { navItemRefs.current[item] = el; }}
                  style={{
                    padding: '5px 8px',
                    borderRadius: '5px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--text-3)',
                    marginBottom: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    position: 'relative',
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 0 }}>
              {/* Diagnostic Screen */}
              <div ref={(el) => (screenRefs.current['diagnostic'] = el)} className="on" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, margin: 0, letterSpacing: '-0.1px' }}>Diagnostic</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '10.5px', color: 'var(--text-3)', margin: 0, lineHeight: 1.4 }}>3 issues found · scan 8.2s</p>
                <div style={{ background: '#0E0E16', border: '1px solid var(--border)', borderRadius: '6px', padding: '8px', display: 'flex', gap: '8px', fontSize: '10px', fontWeight: 500 }}>
                  <div style={{ borderLeft: '3px solid #FF2D55', paddingLeft: '6px' }}>
                    <b style={{ display: 'block', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>14 background services</b>
                    <small style={{ display: 'block', color: 'var(--text-3)', fontWeight: 400, fontSize: '9px' }}>OneDrive, Xbox, Cortana, +11</small>
                  </div>
                </div>
              </div>

              {/* Apply Screen */}
              <div ref={(el) => (screenRefs.current['apply'] = el)} style={{ display: 'none', flexDirection: 'column', gap: '8px' }}>
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, margin: 0, letterSpacing: '-0.1px' }}>Apply · Competition Mode</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '10.5px', color: 'var(--text-3)', margin: 0, lineHeight: 1.4 }}>40 tweaks · ~38s · reversible</p>
                <div style={{ height: '6px', background: '#1A1A24', borderRadius: '3px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'block', height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--accent-2))', width: '0%', animation: 'fill 4s ease-out forwards' }} />
                </div>
              </div>

              {/* Benchmark Screen */}
              <div ref={(el) => (screenRefs.current['benchmark'] = el)} style={{ display: 'none', flexDirection: 'column', gap: '8px' }}>
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, margin: 0, letterSpacing: '-0.1px' }}>Benchmark · Run #018</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '10.5px', color: 'var(--text-3)', margin: 0, lineHeight: 1.4 }}>+23 fps · variance σ 2.1 → 0.4</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  <div style={{ background: '#0E0E16', border: '1px solid var(--border)', borderRadius: '6px', padding: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>AVG FPS</div>
                    <div style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', color: 'var(--text)' }}>237</div>
                  </div>
                  <div style={{ background: 'var(--accent-soft)', border: '1px solid rgba(255,45,85,.32)', borderRadius: '6px', padding: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>SCORE</div>
                    <div style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px', color: 'var(--accent)' }}>87<small style={{ fontSize: '10px' }}>/100</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fill {
          to { width: 100%; }
        }
        .screen.on {
          display: flex !important;
          animation: fade-in 0.4s ease;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: none; }
        }
        .nav-item.on {
          background: #1A1A24;
          color: var(--text);
        }
        .nav-item.on::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 6px;
          width: 1.5px;
          background: var(--accent);
          border-radius: 1px;
        }
      `}</style>
    </div>
  );
}
