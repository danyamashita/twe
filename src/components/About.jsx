const timeline = [
  { year: '2000',  event: 'Fundação da TWE como empresa familiar' },
  { year: '2008',  event: 'Início da especialização em automação industrial' },
  { year: '2015+', event: 'Primeiras instalações de sistemas intralogísticos de grande porte' },
  { year: 'Hoje',  event: '1º instalador homologado AutoStore na América Latina · 51–200 colaboradores · São Paulo, SP' },
];

export default function About() {
  return (
    <section id="sobre" style={{ background: '#F0F0F2', padding: 'clamp(5rem,10vw,10rem) 0' }}>
      <div className="section-container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
          gap: 'clamp(3rem,6vw,6rem)', alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <span className="section-badge">Quem somos</span>
            <h2 style={{
              fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
              fontSize: 'clamp(1.875rem,3.75vw,3.25rem)', color: '#1C1C22',
              letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 2rem',
            }}>
              25 anos transformando indústrias pelo mundo.
            </h2>
            <p style={{ color: '#4A4A58', fontSize: '1rem', lineHeight: 1.78, marginBottom: '1.25rem' }}>
              A TWE nasceu como um negócio familiar e se transformou numa empresa robusta, especializada em montagem e instalações industriais diferenciadas. Desde 2008, focamos na instalação de sistemas automatizados e movimentação de materiais com tecnologias de ponta.
            </p>
            <p style={{ color: '#4A4A58', fontSize: '1rem', lineHeight: 1.78, margin: 0 }}>
              Preservamos os valores de origem: diálogo, amizade e compromisso com o bem-estar entre colaboradores, clientes e fornecedores. Investimos recursos significativos para aprimorar a experiência dos nossos clientes, assegurando entregas de projetos com alta qualidade e pontualidade.
            </p>
          </div>

          {/* Right */}
          <div>
            <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
              <div style={{
                position: 'absolute', left: '5px', top: '8px', bottom: '8px', width: '1px',
                background: 'linear-gradient(to bottom, #255A75, #C49A3C)',
              }} />
              {timeline.map((item, i) => (
                <div key={i} style={{
                  position: 'relative',
                  paddingBottom: i < timeline.length - 1 ? '2.25rem' : '0',
                }}>
                  <div style={{
                    position: 'absolute', left: '-1.75rem', top: '6px',
                    width: '11px', height: '11px', borderRadius: '50%',
                    background: i === timeline.length - 1 ? '#C49A3C' : '#255A75',
                    border: '2px solid #F0F0F2',
                  }} />
                  <div style={{
                    fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
                    fontSize: '0.75rem', color: '#255A75', marginBottom: '0.25rem', letterSpacing: '0.05em',
                  }}>
                    {item.year}
                  </div>
                  <p style={{ color: '#1C1C22', fontSize: '0.9375rem', lineHeight: 1.55, margin: 0 }}>
                    {item.event}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
              <img src="/frames/frame_0011.webp" alt="Equipe TWE em montagem industrial"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
