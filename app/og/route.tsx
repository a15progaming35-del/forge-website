import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0A0A0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#EDEBE4',
          backgroundImage: 'radial-gradient(60% 50% at 50% 0%, rgba(255,45,85,.10), transparent 60%)',
        }}
      >
        <div style={{ fontSize: '80px', marginBottom: '20px', fontWeight: 'bold' }}>
          <span style={{ color: '#FF2D55' }}>Forge</span>
        </div>
        <div style={{ fontSize: '48px', color: '#9E99A8', textAlign: 'center', maxWidth: '800px' }}>
          Less Windows. More winning.
        </div>
        <div style={{ fontSize: '32px', color: '#6A6675', marginTop: '40px' }}>
          +23 fps. $11/month. Cancel anytime.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
