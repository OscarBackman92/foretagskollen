'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true);
    }
  }, []);

  function accept(value) {
    localStorage.setItem('cookie-consent', value);
    const state = value === 'all' ? 'granted' : 'denied';
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      boxShadow: '0 -2px 12px rgba(0,0,0,0.08)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '14px',
      color: '#111',
      zIndex: 9999,
    }}>
      <p style={{ flex: 1, minWidth: '200px', lineHeight: '1.5' }}>
        Vi använder cookies för att analysera trafik och visa annonser. Läs mer i vår{' '}
        <Link href="/integritetspolicy" style={{ color: '#111', textDecoration: 'underline' }}>
          integritetspolicy
        </Link>
        .
      </p>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={() => accept('necessary')}
          style={{
            padding: '8px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            background: '#fff',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            cursor: 'pointer',
            color: '#111',
          }}
        >
          Bara nödvändiga
        </button>
        <button
          onClick={() => accept('all')}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: '#111',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          Acceptera alla
        </button>
      </div>
    </div>
  );
}
