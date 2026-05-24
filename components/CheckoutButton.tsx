'use client';

import { useState } from 'react';

export default function CheckoutButton({ className, style }: { className?: string; style?: any }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleCheckout = async () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: 'block',
          width: '100%',
          padding: '12px 16px',
          marginBottom: '12px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          color: 'var(--text)',
          fontSize: '14px',
          fontFamily: "'Inter', sans-serif",
        }}
        disabled={loading}
      />
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={className}
        style={{
          ...style,
          opacity: loading ? 0.7 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Start — $11/mo'} <span style={{ fontFamily: "'JetBrains Mono', monospace", marginLeft: '8px' }}>→</span>
      </button>
    </div>
  );
}
