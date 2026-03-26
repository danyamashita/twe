const norms = [
  {
    code: 'NR-10',
    title: 'Segurança em Instalações Elétricas',
    text: 'Projeto, blindagem contra arcos elétricos e energização de sistemas com centenas de portas de controle, estações de carregamento e quadros lógicos de força. Mitigação completa de riscos de interrupção e sinistros.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#E8E8EC" strokeWidth="1.4" aria-hidden="true">
        <path d="M13 1L1 7v12l12 6 12-6V7L13 1z"/>
        <path d="M13 9l-3 5.5h6l-3 5.5"/>
      </svg>
    ),
  },
  {
    code: 'NR-12',
    title: 'Segurança em Máquinas e Equipamentos',
    text: 'Montagem de enclausuramentos perimetrais (safety fencings), sistemas de intertravamento, atuadores de parada de emergência e dispositivos óticos. Isolamento total entre zona robótica e operadores.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#E8E8EC" strokeWidth="1.4" aria-hidden="true">
        <path d="M13 1L1 7v12l12 6 12-6V7L13 1z"/>
        <circle cx="13" cy="13" r="3.5"/>
        <path d="M13 7.5v2M13 16.5v2M7.5 13h2M16.5 13h2"/>
      </svg>
    ),
  },
  {
    code: 'NR-35',
    title: 'Trabalho em Altura',
    text: 'Montagem de grids que alcançam patamares elevados do pé-direito fabril. Equipe com capacitação certificada e protocolos de resgate para trabalhos em altitude. Excelência em gestão de riscos operacionais.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#E8E8EC" strokeWidth="1.4" aria-hidden="true">
        <path d="M13 1L1 7v12l12 6 12-6V7L13 1z"/>
        <path d="M13 6v9M9.5 11l3.5 4 3.5-4"/>
      </svg>
    ),
  },
  {
    code: 'AutoStore',
    title: 'Homologação Proprietária',
    text: 'Tolerâncias geométricas estritas validadas pela matriz norueguesa. Alinhamento com boas práticas ISO 9001. A garantia de que o coração da automação será montado livre de falhas.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#E8E8EC" strokeWidth="1.4" aria-hidden="true">
        <path d="M13 1L1 7v12l12 6 12-6V7L13 1z"/>
        <path d="M9 13l3 3 5-6"/>
      </svg>
    ),
  },
];

export default function Compliance() {
  return (
    <section id="conformidade" style={{ background: '#0C0C0F', padding: 'clamp(5rem,10vw,10rem) 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem,6vw,6rem)' }}>
          <span className="section-badge">Segurança & Compliance</span>
          <h2 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.875rem,3.75vw,3.25rem)', color: '#E8E8EC',
            letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1.25rem',
          }}>
            Conformidade que elimina risco.
          </h2>
          <p style={{
            color: '#8A8A96', fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Para um gestor que autoriza uma obra milionária dentro do seu galpão, a certeza de conformidade regulatória é critério eliminatório.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
          gap: '1px', background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px', overflow: 'hidden',
        }}>
          {norms.map((norm, i) => (
            <div key={i} className="glass-card" style={{
              padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
              transition: 'background 280ms ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
            >
              <div style={{
                width: '48px', height: '48px',
                background: 'rgba(37,90,117,0.2)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {norm.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
                  fontSize: '0.875rem', color: '#C49A3C', marginBottom: '0.25rem',
                }}>
                  {norm.code}
                </div>
                <h3 style={{
                  fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
                  fontSize: '1.0625rem', color: '#E8E8EC', margin: 0,
                }}>
                  {norm.title}
                </h3>
              </div>
              <p style={{ color: '#8A8A96', fontSize: '0.875rem', lineHeight: 1.72, margin: 0 }}>
                {norm.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
