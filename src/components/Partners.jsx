const partners = [
  'Águia Sistemas','Bastian Solutions','Cavanna','Compucheck',
  'Dematic','DWL','FlexLink','Tecnor',
  'Hartness','KHS','KNAPP','Krones','Viastore',
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="parceiros" style={{ background: '#F0F0F2', padding: 'clamp(4rem,8vw,8rem) 0', overflow: 'hidden' }}>
      <div className="section-container" style={{ marginBottom: '3rem' }}>
        <span className="section-badge">Parcerias Globais</span>
        <h2 style={{
          fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
          fontSize: 'clamp(1.625rem,3.25vw,2.75rem)', color: '#1C1C22',
          letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.75rem',
        }}>
          Parceiros que confiam na TWE.
        </h2>
        <p style={{ color: '#4A4A58', fontSize: '1rem', margin: 0 }}>
          Trabalhamos lado a lado com os maiores integradores e fabricantes de sistemas intralogísticos do mundo.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to right, #F0F0F2, transparent)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to left, #F0F0F2, transparent)',
          zIndex: 1, pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex', gap: '1rem',
          animation: 'marquee 36s linear infinite',
          width: 'max-content',
        }}>
          {doubled.map((name, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0.875rem 1.75rem',
              background: '#fff', borderRadius: '6px',
              border: '1px solid #D8D8DC',
              minWidth: '148px', flexShrink: 0,
              transition: 'all 280ms ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#255A75';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,90,117,0.1)';
                e.currentTarget.querySelector('span').style.color = '#255A75';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#D8D8DC';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('span').style.color = '#8A8A96';
              }}
            >
              <span style={{
                fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.8rem',
                color: '#8A8A96', transition: 'color 280ms ease', userSelect: 'none',
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { [style*="animation: marquee"] { animation: none !important; } }
      `}</style>
    </section>
  );
}
