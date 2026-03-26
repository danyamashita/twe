import { useCounterAnimation } from '../hooks/useCounterAnimation';

const metrics = [
  { target: 25,   suffix: '+',  label: 'anos de engenharia industrial',               color: '#C49A3C', decimals: 0 },
  { target: 400,  suffix: '%',  label: 'ganho de capacidade no mesmo m²',             color: '#C49A3C', decimals: 0 },
  { target: 99.9, suffix: '%',  label: 'acuracidade na separação de pedidos',         color: '#3279A3', decimals: 1 },
  { target: 1,    suffix: 'º',  label: 'instalador homologado AutoStore na Am. Latina', color: '#3279A3', decimals: 0 },
  { target: 2,    prefix: '24h→', suffix: 'h', label: 'redução no tempo de ciclo de pedido', color: '#C49A3C', decimals: 0 },
  { target: 99.7, suffix: '%',  label: 'uptime global dos sistemas instalados',       color: '#3279A3', decimals: 1 },
];

function MetricCard({ target, prefix, suffix, label, color, decimals }) {
  const [ref, value] = useCounterAnimation(target, 2200, decimals);
  return (
    <div ref={ref} style={{
      display: 'flex', flexDirection: 'column', gap: '0.5rem',
      padding: '2.25rem 1.25rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
        fontSize: 'clamp(2.25rem,4.5vw,4rem)', lineHeight: 1,
        color, letterSpacing: '-0.02em',
        textShadow: `0 0 50px ${color}40`,
      }}>
        {prefix && <span style={{ fontSize: '0.45em', opacity: 0.75, marginRight: '0.25em' }}>{prefix}</span>}
        {value.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        <span style={{ fontSize: '0.5em', marginLeft: '0.05em' }}>{suffix}</span>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#8A8A96', lineHeight: 1.45, margin: 0 }}>
        {label}
      </p>
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section id="impacto" style={{
      background: 'linear-gradient(to bottom, #0C0C0F, #101015)',
      padding: 'clamp(5rem,10vw,10rem) 0',
    }}>
      <div className="section-container">
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-badge">Resultados</span>
          <h2 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.25rem,4.5vw,4rem)', color: '#E8E8EC',
            letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0,
          }}>
            Números que<br />falam por si.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))' }}>
          {metrics.map((m, i) => <MetricCard key={i} {...m} />)}
        </div>
      </div>
    </section>
  );
}
