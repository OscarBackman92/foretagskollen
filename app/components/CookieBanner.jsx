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
      background: 'rgba(8, 11, 26, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(125, 140, 255, 0.25)',
      boxShadow: '0 -8px 40px rgba(2, 3, 10, 0.7)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap',
      fontFamily: "'Inter', sans-serif",
      fontSize: '14px',
      color: '#C3CCE8',
      zIndex: 9999,
    }}>
      <p style={{ flex: 1, minWidth: '200px', lineHeight: '1.5' }}>
        Vi använder cookies för att analysera trafik och visa annonser. Läs mer i vår{' '}
        <Link href="/integritetspolicy" style={{ color: '#22D3EE', textDecoration: 'underline' }}>
          integritetspolicy
        </Link>
        .
      </p>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={() => accept('necessary')}
          style={{
            padding: '9px 16px',
            border: '1px solid rgba(125, 140, 255, 0.3)',
            borderRadius: '100px',
            background: 'transparent',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            cursor: 'pointer',
            color: '#C3CCE8',
          }}
        >
          Bara nödvändiga
        </button>
        <button
          onClick={() => accept('all')}
          style={{
            padding: '9px 18px',
            border: 'none',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            color: '#fff',
            boxShadow: '0 0 18px rgba(34, 211, 238, 0.3)',
          }}
        >
          Acceptera alla
        </button>
      </div>
    </div>
  );
}
