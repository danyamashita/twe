const cards = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#255A75" strokeWidth="1.5">
        <rect x="3" y="3" width="10" height="10" rx="1.5"/>
        <rect x="17" y="3" width="10" height="10" rx="1.5"/>
        <rect x="3" y="17" width="10" height="10" rx="1.5"/>
        <rect x="17" y="17" width="10" height="10" rx="1.5"/>
      </svg>
    ),
    title: 'Sistemas Intralogísticos',
    desc: 'Montagem e instalação de sistemas automatizados de armazenagem e movimentação de materiais. Somos o braço executante que ergue a infraestrutura física dos maiores projetos AutoStore, transportadores e sistemas AS/RS da América Latina.',
    badge: 'Primeiro instalador homologado AutoStore na região.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#255A75" strokeWidth="1.5">
        <circle cx="15" cy="15" r="6"/>
        <path d="M15 2v4M15 24v4M2 15h4M24 15h4M5.6 5.6l2.8 2.8M21.6 21.6l2.8 2.8M5.6 24.4l2.8-2.8M21.6 8.4l2.8-2.8"/>
      </svg>
    ),
    title: 'Sistemas de Manufatura',
    desc: 'Montagem de linhas de produção, sistemas de transporte industrial contínuo e integração eletromecânica para plantas fabris. Da fundação à energização, entregamos a infraestrutura que mantém a manufatura em movimento.',
    badge: 'Projetos em setores automotivo, FMCG e farmacêutico.',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#255A75" strokeWidth="1.5">
        <path d="M15 3L3 9v12l12 6 12-6V9L15 3z"/>
        <path d="M15 3v18M3 9l12 6M27 9l-12 6"/>
      </svg>
    ),
    title: 'Serviços Elétricos',
    desc: 'Montagem de painéis elétricos, quadros de força, infraestrutura de cabeamento estruturado e energização de sistemas automatizados. Conformidade total com NR-10 e padrões internacionais de segurança.',
    badge: 'Conformidade NR-10 e protocolos de segurança elétrica.',
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" style={{
      background: '#F0F0F2',
      padding: 'clamp(5rem,10vw,10rem) 0',
    }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-badge">Soluções</span>
          <h2 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.875rem,3.75vw,3.25rem)', color: '#1C1C22',
            letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.875rem',
          }}>
            Engenharia de precisão<br />para a indústria que não pode parar.
          </h2>
          <p style={{ color: '#4A4A58', fontSize: '1.0625rem', margin: 0 }}>
            Três pilares de atuação que conectam o projeto à operação.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.25rem',
        }}>
          {cards.map((card, i) => (
            <div key={i} style={{
              background: '#fff',
              borderTop: '2px solid #255A75',
              borderRadius: '0 0 12px 12px',
              padding: '2rem',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'transform 300ms ease, box-shadow 300ms ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.09)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>{card.icon}</div>
              <h3 style={{
                fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
                fontSize: '1.25rem', color: '#1C1C22', marginBottom: '0.75rem',
              }}>
                {card.title}
              </h3>
              <p style={{ color: '#4A4A58', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {card.desc}
              </p>
              <p style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem',
                color: '#255A75', margin: 0, letterSpacing: '0.02em',
              }}>
                → {card.badge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
