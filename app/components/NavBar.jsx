'use client';

import { useState, useEffect } from 'react';

const links = [
  { href: '/blogg', label: 'Blogg' },
  { href: '/guide', label: 'Guide' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <style>{`
        .tv-nav-wrap {
          border-bottom: 1px solid #EDEDED;
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          position: relative;
          z-index: 100;
        }
        .tv-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 28px;
          max-width: 960px;
          margin: 0 auto;
        }
        .tv-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #1A1A1A;
          font-weight: 700;
          font-size: 18px;
        }
        .tv-desktop-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .tv-nav-link {
          font-size: 14px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
        }
        .tv-nav-link:hover { color: #1A1A1A; }
        .tv-cta {
          background: #1A1A1A;
          color: #fff;
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }
        .tv-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 26px;
          line-height: 1;
          color: #1A1A1A;
        }
        @media (max-width: 768px) {
          .tv-desktop-links { display: none; }
          .tv-hamburger { display: block; }
        }

        /* Overlay */
        .tv-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
        }
        .tv-overlay-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }
        .tv-overlay-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 100vw);
          background: #fff;
          display: flex;
          flex-direction: column;
          padding: 24px 28px 40px;
          overflow-y: auto;
          animation: slideIn 0.22s ease-out;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .tv-overlay-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
        }
        .tv-close {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 32px;
          line-height: 1;
          color: #1A1A1A;
          padding: 4px;
        }
        .tv-overlay-link {
          font-size: 24px;
          font-weight: 600;
          color: #1A1A1A;
          text-decoration: none;
          padding: 16px 0;
          border-bottom: 1px solid #F0F0F0;
          font-family: 'DM Sans', sans-serif;
        }
        .tv-overlay-link:hover { color: #555; }
        .tv-overlay-cta {
          margin-top: 32px;
          display: block;
          text-align: center;
          background: #1A1A1A;
          color: #fff;
          padding: 16px 20px;
          border-radius: 100px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {/* Navbar bar */}
      <div className="tv-nav-wrap">
        <nav className="tv-nav">
          <a href="/" className="tv-logo">
            <span style={{ fontSize: 22 }}>✍️</span>
            Textverket
          </a>

          <div className="tv-desktop-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="tv-nav-link">{l.label}</a>
            ))}
            <a href="/verktyg" className="tv-cta">Testa gratis →</a>
          </div>

          <button
            className="tv-hamburger"
            onClick={() => setOpen(true)}
            aria-label="Öppna meny"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="tv-overlay" role="dialog" aria-modal="true" aria-label="Meny">
          <div className="tv-overlay-backdrop" onClick={() => setOpen(false)} />
          <div className="tv-overlay-panel">
            <div className="tv-overlay-top">
              <a href="/" className="tv-logo" onClick={() => setOpen(false)}>
                <span style={{ fontSize: 22 }}>✍️</span>
                Textverket
              </a>
              <button
                className="tv-close"
                onClick={() => setOpen(false)}
                aria-label="Stäng meny"
              >
                ×
              </button>
            </div>

            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="tv-overlay-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}

            <a href="/verktyg" className="tv-overlay-cta" onClick={() => setOpen(false)}>
              Testa gratis →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
