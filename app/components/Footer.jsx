export default function Footer({ dark = false }) {
  if (dark) {
    return (
      <div style={{
        textAlign: 'center', padding: '32px 28px', color: '#BBB',
        fontSize: 13, background: '#0A0A0A',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        © 2026 Textverket · Gratis AI-verktyg för svenska småföretag ·{' '}
        {[
          { href: '/om-oss', label: 'Om oss' },
          { href: '/kontakt', label: 'Kontakt' },
          { href: '/guide', label: 'Guide' },
          { href: '/integritetspolicy', label: 'Integritetspolicy' },
          { href: '/blogg', label: 'Blogg' },
        ].map((l, i, arr) => (
          <span key={l.href}>
            <a href={l.href} style={{ color: '#BBB', textDecoration: 'underline' }}>{l.label}</a>
            {i < arr.length - 1 && ' · '}
          </span>
        ))}
      </div>
    );
  }

  return (
    <footer style={{
      textAlign: 'center', padding: '28px', color: '#9CA3AF',
      fontSize: 13, borderTop: '1px solid #EDEDED',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      © 2026 Textverket · Gratis AI-verktyg för svenska företag ·{' '}
      {[
        { href: '/om-oss', label: 'Om oss' },
        { href: '/kontakt', label: 'Kontakt' },
        { href: '/guide', label: 'Guide' },
        { href: '/integritetspolicy', label: 'Integritetspolicy' },
        { href: '/blogg', label: 'Blogg' },
      ].map((l, i, arr) => (
        <span key={l.href}>
          <a href={l.href} style={{ color: '#9CA3AF', textDecoration: 'underline' }}>{l.label}</a>
          {i < arr.length - 1 && ' · '}
        </span>
      ))}
    </footer>
  );
}
