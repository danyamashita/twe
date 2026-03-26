const nav   = ['Soluções','Tecnologia','Cases','Sobre','Conformidade'];
const hrefs = ['#solucoes','#tecnologia','#cases','#sobre','#conformidade'];

export default function Footer() {
  return (
    <footer style={{ background: '#08080A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-container" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
          gap: '3rem', marginBottom: '3.5rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{
              fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
              fontSize: '1.375rem', color: '#E8E8EC', marginBottom: '0.5rem',
            }}>
              <span style={{ color: '#255A75' }}>TWE</span> Automação Industrial
            </div>
            <p style={{
              fontStyle: 'italic', color: 'rgba(232,232,236,0.3)',
              fontSize: '0.8rem', lineHeight: 1.55, margin: '0 0 1rem', maxWidth: '260px',
            }}>
              "Construímos o esqueleto da intralogística do futuro."
            </p>
            <p style={{ color: '#5A5A68', fontSize: '0.8rem', margin: 0 }}>São Paulo, SP — Brasil</p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5A5A68', marginBottom: '1.25rem',
            }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {nav.map((item, i) => (
                <li key={i}>
                  <a href={hrefs[i]} style={{ color: '#8A8A96', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 200ms' }}
                    onMouseEnter={e => e.target.style.color = '#E8E8EC'}
                    onMouseLeave={e => e.target.style.color = '#8A8A96'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5A5A68', marginBottom: '1.25rem',
            }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'contato@twemontagens.com.br', href: 'mailto:contato@twemontagens.com.br' },
                { label: 'LinkedIn →', href: '#' },
                { label: 'YouTube →', href: '#' },
              ].map(({ label, href }) => (
                <a key={label} href={href}
                  style={{ color: '#8A8A96', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 200ms' }}
                  onMouseEnter={e => e.target.style.color = '#E8E8EC'}
                  onMouseLeave={e => e.target.style.color = '#8A8A96'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5A5A68', marginBottom: '1.25rem',
            }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Política de Privacidade','Termos de Uso'].map(item => (
                <a key={item} href="#"
                  style={{ color: '#8A8A96', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 200ms' }}
                  onMouseEnter={e => e.target.style.color = '#E8E8EC'}
                  onMouseLeave={e => e.target.style.color = '#8A8A96'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.5rem', display: 'flex',
          flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem',
        }}>
          <p style={{ color: '#3A3A48', fontSize: '0.75rem', margin: 0 }}>
            © 2026 TWE Automação Industrial. Todos os direitos reservados.
          </p>
          <p style={{ color: '#3A3A48', fontSize: '0.75rem', margin: 0 }}>São Paulo, SP · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
