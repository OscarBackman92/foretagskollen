'use client';

import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/blogg', label: 'Blogg' },
    { href: '/guide', label: 'Guide' },
    { href: '/om-oss', label: 'Om oss' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <div style={{ borderBottom: '1px solid #EDEDED', fontFamily: "'DM Sans', sans-serif" }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 28px',
        maxWidth: 960,
        margin: '0 auto',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#1A1A1A' }}>
          <span style={{ fontSize: 22 }}>✍️</span>
          <span style={{ fontWeight: 700, fontSize: 18 }}>Textverket</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: '#555', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <a href="/verktyg" style={{
            background: '#1A1A1A', color: '#fff', padding: '9px 20px',
            borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>
            Testa gratis →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          aria-label="Meny"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px', display: 'none', flexDirection: 'column', gap: 5,
          }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A1A', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A1A', borderRadius: 2, opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A1A', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{
          borderTop: '1px solid #EDEDED', padding: '16px 28px 20px',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 15, fontWeight: 500, color: '#1A1A1A', textDecoration: 'none',
              padding: '12px 0', borderBottom: '1px solid #F5F5F5',
            }}>
              {l.label}
            </a>
          ))}
          <a href="/verktyg" style={{
            marginTop: 16, display: 'block', textAlign: 'center',
            background: '#1A1A1A', color: '#fff', padding: '12px 20px',
            borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: 'none',
          }}>
            Testa gratis →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
