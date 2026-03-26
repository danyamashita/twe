import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Soluções',     href: '#solucoes' },
  { label: 'Tecnologia',   href: '#tecnologia' },
  { label: 'Cases',        href: '#cases' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Conformidade', href: '#conformidade' },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [ctaVisible,  setCtaVisible]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setCtaVisible(y > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: '64px', display: 'flex', alignItems: 'center', padding: '0 2.5rem',
        transition: 'background 350ms ease, border-bottom 350ms ease',
        background: scrolled ? 'rgba(12,12,15,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}>
        {/* Logo */}
        <a href="#" aria-label="TWE — página inicial" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: '1.25rem', letterSpacing: '-0.025em', color: '#E8E8EC',
          }}>
            <span style={{ color: '#255A75' }}>TWE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" style={{
          display: 'flex', gap: '2.25rem', margin: '0 auto',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} style={{
              fontSize: '0.8125rem', fontWeight: 500,
              color: 'rgba(232,232,236,0.6)', textDecoration: 'none',
              transition: 'color 200ms ease', letterSpacing: '0.01em',
            }}
              onMouseEnter={e => e.target.style.color = '#E8E8EC'}
              onMouseLeave={e => e.target.style.color = 'rgba(232,232,236,0.6)'}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#cta" className="btn-primary" style={{
          padding: '0.5rem 1.25rem', fontSize: '0.8rem',
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? 'translateX(0)' : 'translateX(8px)',
          transition: 'opacity 400ms ease, transform 400ms ease, background 300ms ease',
          pointerEvents: ctaVisible ? 'auto' : 'none',
          flexShrink: 0, whiteSpace: 'nowrap',
        }}>
          Fale com Especialistas →
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen(v => !v)}
          className="mobile-hamburger"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#E8E8EC' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <><line x1="17" y1="5" x2="5" y2="17"/><line x1="5" y1="5" x2="17" y2="17"/></>
              : <><line x1="2" y1="5.5" x2="20" y2="5.5"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="2" y1="16.5" x2="20" y2="16.5"/></>
            }
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: '#0C0C0F',
          zIndex: 999, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: '"Inter Tight", sans-serif', fontSize: '2rem',
              fontWeight: 700, color: '#E8E8EC', textDecoration: 'none',
            }}>{label}</a>
          ))}
          <a href="#cta" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Fale com Especialistas →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-hamburger { display: block !important; }
          header nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
