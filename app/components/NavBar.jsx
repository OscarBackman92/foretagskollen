'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

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
          border-bottom: 1px solid rgba(125, 140, 255, 0.14);
          font-family: 'Inter', sans-serif;
          background: rgba(5, 6, 15, 0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .tv-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 28px;
          max-width: 1020px;
          margin: 0 auto;
        }
        .tv-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          color: #F4F7FF;
          font-weight: 700;
          font-size: 18px;
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
        }
        .tv-desktop-links {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .tv-nav-link {
          font-size: 14px;
          font-weight: 500;
          color: #9AA5CC;
          text-decoration: none;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }
        .tv-nav-link:hover {
          color: #F4F7FF;
          text-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
        }
        .tv-cta {
          background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
          color: #fff;
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 0 18px rgba(34, 211, 238, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .tv-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 28px rgba(34, 211, 238, 0.5);
        }
        .tv-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 26px;
          line-height: 1;
          color: #F4F7FF;
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
          background: rgba(2, 3, 10, 0.7);
          backdrop-filter: blur(4px);
        }
        .tv-overlay-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 100vw);
          background: rgba(8, 11, 26, 0.96);
          border-left: 1px solid rgba(125, 140, 255, 0.2);
          display: flex;
          flex-direction: column;
          padding: 24px 28px 40px;
          overflow-y: auto;
          animation: slideIn 0.22s ease-out;
          backdrop-filter: blur(16px);
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
          color: #F4F7FF;
          padding: 4px;
        }
        .tv-overlay-link {
          font-size: 24px;
          font-weight: 600;
          color: #E5EAFD;
          text-decoration: none;
          padding: 16px 0;
          border-bottom: 1px solid rgba(125, 140, 255, 0.12);
          font-family: 'Space Grotesk', sans-serif;
          transition: color 0.2s ease;
        }
        .tv-overlay-link:hover { color: #22D3EE; }
        .tv-overlay-cta {
          margin-top: 32px;
          display: block;
          text-align: center;
          background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
          color: #fff;
          padding: 16px 20px;
          border-radius: 100px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 0 24px rgba(34, 211, 238, 0.35);
        }
      `}</style>

      {/* Navbar bar */}
      <div className="tv-nav-wrap">
        <nav className="tv-nav">
          <Link href="/" className="tv-logo" aria-label="Textverket.se">
            <Logo size={20} />
          </Link>

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
              <Link href="/" className="tv-logo" aria-label="Textverket.se" onClick={() => setOpen(false)}>
                <Logo size={20} />
              </Link>
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
