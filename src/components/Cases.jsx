const cases = [
  {
    label: 'Case: E-Commerce — Maior AutoStore da América Latina',
    headline: 'De 24 horas para 2 horas.',
    context: 'Centro de distribuição de 54.000 m² com integração liderada pela Bastian Solutions. A TWE executou a montagem física do maior sistema AutoStore da América Latina.',
    metrics: [
      { value: '300',    label: 'robôs operando simultaneamente' },
      { value: '450k',   label: 'bins instalados' },
      { value: '3,6M',   label: 'itens de inventário' },
      { value: '+400%',  label: 'itens separados/hora' },
      { value: '92%',    label: 'redução no tempo de ciclo' },
    ],
    frame: '/frames/frame_0009.webp',
  },
  {
    label: 'Case: Farmacêutico — Precisão que salva vidas',
    headline: '70% menos tempo. Zero erro de dispensação.',
    context: 'Implementação de sistema robótico de dispensação em farmácia de varejo no Brasil — primeiro estudo de melhoria de qualidade publicado no país.',
    metrics: [
      { value: '-70%', label: 'tempo de recebimento de estoques' },
      { value: '-75%', label: 'separação de pedidos online' },
      { value: '-53%', label: 'faturamento e embalagem' },
      { value: 'Zero', label: 'erros de dispensação' },
    ],
    frame: '/frames/frame_0040.webp',
  },
];

export default function Cases() {
  return (
    <section id="cases" style={{ background: '#F0F0F2', padding: 'clamp(5rem,10vw,10rem) 0' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-badge">Resultados Comprovados</span>
          <h2 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.875rem,3.75vw,3.25rem)', color: '#1C1C22',
            letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.875rem',
          }}>
            Resultados que redefinem padrões.
          </h2>
          <p style={{ color: '#4A4A58', fontSize: '1.0625rem', margin: 0, maxWidth: '560px' }}>
            Projetos executados pela TWE que transformaram a operação logística dos maiores players do mercado.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cases.map((c, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: '12px', overflow: 'hidden',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)', display: 'flex', flexWrap: 'wrap',
            }}>
              <div style={{ flex: '0 0 300px', minHeight: '220px', background: '#e8e8e8' }}>
                <img src={c.frame} alt={c.label} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ flex: '1 1 300px', padding: '2.25rem' }}>
                <p style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A96', marginBottom: '0.75rem',
                }}>
                  {c.label}
                </p>
                <h3 style={{
                  fontFamily: '"Inter Tight", sans-serif', fontWeight: 800,
                  fontSize: 'clamp(1.375rem,2.25vw,2rem)', color: '#1C1C22',
                  letterSpacing: '-0.02em', margin: '0 0 0.75rem',
                }}>
                  {c.headline}
                </h3>
                <p style={{ color: '#4A4A58', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {c.context}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px,1fr))', gap: '1rem' }}>
                  {c.metrics.map((m, j) => (
                    <div key={j}>
                      <div style={{
                        fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
                        fontSize: '1.25rem', color: '#C49A3C', lineHeight: 1, marginBottom: '0.25rem',
                      }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#8A8A96', lineHeight: 1.4 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
