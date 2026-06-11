const LINKS = [
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/guide', label: 'Guide' },
  { href: '/blogg', label: 'Blogg' },
  { href: '/integritetspolicy', label: 'Integritetspolicy' },
  { href: '/anvandarvillkor', label: 'Användarvillkor' },
];

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 28px 36px',
      color: '#7E88B5',
      fontSize: 13,
      borderTop: '1px solid rgba(125, 140, 255, 0.14)',
      background: 'rgba(5, 6, 15, 0.7)',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 16,
        fontWeight: 700,
        color: '#E5EAFD',
        marginBottom: 14,
        letterSpacing: '-0.02em',
      }}>
        ✍️ Textverket
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px 22px',
        marginBottom: 18,
      }}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} style={{ color: '#9AA5CC', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: 1,
        color: '#5A648F',
      }}>
        © 2026 TEXTVERKET · GRATIS AI-VERKTYG FÖR SVENSKA SMÅFÖRETAG
      </div>
    </footer>
  );
}
