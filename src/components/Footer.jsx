const nav   = ['Soluções','Tecnologia','Cases','Sobre','Conformidade'];
const hrefs = ['#solucoes','#tecnologia','#cases','#sobre','#conformidade'];

const linkStyle = {
  color: '#6A6A78', textDecoration: 'none',
  fontSize: '0.875rem', transition: 'color 200ms',
};
const onEnter = e => e.target.style.color = '#E8E8EC';
const onLeave = e => e.target.style.color = '#6A6A78';

const ColTitle = ({ children }) => (
  <p style={{
    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#3A3A50', margin: '0 0 1.25rem',
  }}>{children}</p>
);

export default function Footer() {
  return (
    <footer style={{ background: '#08080A' }}>

      {/* ── Brand strip ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-container" style={{ padding: '3.5rem 1.5rem', textAlign: 'center' }}>
          <div style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.5rem,3vw,2.25rem)', letterSpacing: '-0.03em',
            color: '#E8E8EC', marginBottom: '0.75rem',
          }}>
            <span style={{ color: '#255A75' }}>TWE</span> Automação Industrial
          </div>
          <p style={{
            fontStyle: 'italic', color: 'rgba(232,232,236,0.25)',
            fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 0.5rem',
          }}>
            "Construímos o esqueleto da intralogística do futuro."
          </p>
          <p style={{ color: '#3A3A50', fontSize: '0.8rem', margin: 0 }}>
            São Paulo, SP — Brasil
          </p>
        </div>
      </div>

      {/* ── Links grid ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-container footer-links-grid">

          {/* Navegação */}
          <div>
            <ColTitle>Navegação</ColTitle>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {nav.map((item, i) => (
                <li key={i}>
                  <a href={hrefs[i]} style={linkStyle}
                    onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <ColTitle>Contato</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href="mailto:contato@twemontagens.com.br"
                style={{ ...linkStyle, wordBreak: 'break-all' }}
                onMouseEnter={onEnter} onMouseLeave={onLeave}>
                contato@twemontagens.com.br
              </a>
              <a href="https://www.linkedin.com/company/twe-automacao-industrial"
                target="_blank" rel="noopener"
                style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                LinkedIn →
              </a>
              <a href="https://www.youtube.com/watch?v=xy3YCcUzQMY"
                target="_blank" rel="noopener"
                style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                YouTube →
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <ColTitle>Legal</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {['Política de Privacidade', 'Termos de Uso'].map(item => (
                <a key={item} href="#" style={linkStyle}
                  onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Copyright ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-container" style={{
          padding: '1.25rem 1.5rem',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', gap: '0.5rem',
        }}>
          <p style={{ color: '#2A2A38', fontSize: '0.75rem', margin: 0 }}>
            © 2026 TWE Automação Industrial. Todos os direitos reservados.
          </p>
          <p style={{ color: '#2A2A38', fontSize: '0.75rem', margin: 0 }}>
            São Paulo, SP · Brasil
          </p>
        </div>
      </div>

      <style>{`
        .footer-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3rem;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          /* Legal goes full-width on 3rd row */
          .footer-links-grid > div:last-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
