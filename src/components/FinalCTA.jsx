export default function FinalCTA() {
  return (
    <section id="cta" style={{
      background: '#0C0C0F',
      padding: 'clamp(7rem,14vw,14rem) 0',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle ambient */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(37,90,117,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
          fontSize: 'clamp(2.25rem,5.5vw,4.75rem)', color: '#E8E8EC',
          letterSpacing: '-0.035em', lineHeight: 1.05, margin: '0 0 1.5rem',
        }}>
          Pronto para transformar<br />seu armazém?
        </h2>

        <p style={{
          color: '#8A8A96', fontSize: 'clamp(1rem,1.5vw,1.1875rem)',
          maxWidth: '540px', margin: '0 auto 3rem', lineHeight: 1.7,
        }}>
          Converse com nossos especialistas em montagem crítica e descubra como a densidade cúbica pode multiplicar a capacidade da sua operação.
        </p>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'center', marginBottom: '2.5rem',
        }}>
          <a href="mailto:contato@twemontagens.com.br" className="btn-primary" style={{ fontSize: '0.9375rem' }}>
            Solicite um Estudo de Viabilidade →
          </a>
          <a href="#" className="btn-outline" style={{ fontSize: '0.9375rem' }}>
            Baixe a Análise de Payback →
          </a>
        </div>

        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.7rem', color: '#5A5A68', letterSpacing: '0.07em',
        }}>
          Ou escreva diretamente: contato@twemontagens.com.br
        </p>
      </div>
    </section>
  );
}
