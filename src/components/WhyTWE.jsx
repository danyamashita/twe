const differentials = [
  {
    n: '01',
    title: 'Homologação que ninguém mais tem.',
    text: 'Primeira empresa sul-americana a receber a homologação técnica da AutoStore para execução de montagem altamente padronizada. Passamos pelo funil de auditorias técnicas e treinamentos da matriz norueguesa.',
  },
  {
    n: '02',
    title: '25+ anos sem falhar.',
    text: 'Empresa com origem familiar que se transformou em referência de engenharia industrial. Através do diálogo e do compromisso, nunca deixamos de entregar um projeto. Nossa cultura de excelência é validada pela confiança dos maiores integradores do planeta.',
  },
  {
    n: '03',
    title: 'Da fundação à energização.',
    text: 'Não somos apenas montadores de estruturas. Somos engenheiros civis, eletricistas industriais e especialistas em automação. Entregamos o projeto completo: montagem mecânica do grid, instalação elétrica dos painéis, cabeamento e comissionamento.',
  },
  {
    n: '04',
    title: 'Conformidade como pilar, não como anexo.',
    text: 'NR-10, NR-12, NR-35 — conformidade total com as normas regulamentadoras mais exigentes do Brasil. Para nós, segurança não é checklist: é a razão pela qual somos escolhidos por empresas que não toleram riscos.',
  },
];

export default function WhyTWE() {
  return (
    <section id="por-que-twe" style={{
      background: 'linear-gradient(to bottom, #101015, #141418)',
      padding: 'clamp(5rem,10vw,10rem) 0',
    }}>
      <div className="section-container">
        <div style={{ marginBottom: 'clamp(3rem,6vw,6rem)' }}>
          <span className="section-badge">Diferenciais</span>
          <h2 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.875rem,3.75vw,3.25rem)', color: '#E8E8EC',
            letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 0.875rem',
          }}>
            Por que a TWE.
          </h2>
          <p style={{ color: '#8A8A96', fontSize: '1.0625rem', maxWidth: '520px', margin: 0, lineHeight: 1.65 }}>
            O elo indispensável entre os integradores globais e a operação intralogística de vanguarda no Brasil.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {differentials.map((d, i) => (
            <div key={i} style={{
              display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)',
              padding: '2.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)',
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
                fontSize: 'clamp(1.625rem,3vw,2.5rem)', color: '#C49A3C',
                lineHeight: 1, flexShrink: 0, opacity: 0.85, minWidth: '2.5rem',
              }}>
                {d.n}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: '"Inter Tight", sans-serif', fontWeight: 700,
                  fontSize: 'clamp(1.125rem,1.75vw,1.5rem)', color: '#E8E8EC',
                  margin: '0 0 0.75rem', letterSpacing: '-0.015em',
                }}>
                  {d.title}
                </h3>
                <p style={{ color: '#8A8A96', fontSize: '0.9375rem', lineHeight: 1.72, margin: 0, maxWidth: '680px' }}>
                  {d.text}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
        </div>
      </div>
    </section>
  );
}
