const blocks = [
  {
    frame: '/frames/frame_0017.webp',
    tag: 'Grid — O esqueleto do sistema.',
    headline: 'Robôs falham se o grid apresentar\ndesvios milimétricos.',
    detail: 'Estrutura autoportante de alumínio que permite o empilhamento vertical das caixas sem nenhum corredor. Modular ao extremo: contorna pilares, estende-se por múltiplos andares e se adapta a prédios existentes. A precisão micrométrica na montagem desta malha é o núcleo da atuação da TWE.',
    highlight: '"Nós garantimos que isso não aconteça."',
    metric: null,
    imgLeft: true,
  },
  {
    frame: '/frames/frame_0060.webp',
    tag: 'Robôs — Velocidade ininterrupta.',
    headline: 'Redundância total: se um falhar,\no sistema continua.',
    detail: 'Veículos autônomos que trafegam sobre os trilhos no topo do grid. Içam, escavam e transportam caixas até as estações de trabalho. Controle independente garante que uma falha pontual nunca interrompe a operação.',
    highlight: null,
    metric: 'MTBF > 3.000h  |  Uptime global: 99,7%',
    imgLeft: false,
  },
  {
    frame: '/frames/frame_0080.webp',
    tag: 'Bins — Densidade máxima.',
    headline: 'Até 400% mais capacidade\nna mesma área de piso.',
    detail: 'Recipientes de polímero empilhados de forma compacta em pilhas de até 18 unidades. Subdivisíveis internamente para acomodar múltiplos SKUs. Zero espaço desperdiçado.',
    highlight: null,
    metric: '400% de ganho de capacidade',
    imgLeft: true,
  },
  {
    frame: '/frames/frame_0100.webp',
    tag: 'Estações & Cérebro — Onde máquina encontra humano.',
    headline: 'Picking até 10× mais rápido\nque o processo manual.',
    detail: 'As estações (Ports) são os pontos ergonômicos onde o produto é entregue ao operador. O Controller preditivo mantém os itens de alta rotação no topo do grid, minimizando tempo de escavação e maximizando velocidade.',
    highlight: null,
    metric: '10× mais rápido que o picking manual',
    imgLeft: false,
  },
];

function TechBlock({ block }) {
  const { frame, tag, headline, detail, highlight, metric, imgLeft } = block;

  const Img = () => (
    <div style={{
      flex: '0 0 48%', borderRadius: '12px', overflow: 'hidden',
      aspectRatio: '16/9', background: '#131318',
    }}>
      <img src={frame} alt={tag} loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.9 }} />
    </div>
  );

  const Txt = () => (
    <div style={{ flex: '0 0 calc(52% - 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
      <p style={{
        fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
        letterSpacing: '0.22em', textTransform: 'uppercase', color: '#255A75', margin: 0,
      }}>
        {tag}
      </p>
      <h3 style={{
        fontFamily: '"Inter Tight", sans-serif', fontWeight: 800,
        fontSize: 'clamp(1.375rem,2.25vw,2.125rem)', color: '#E8E8EC',
        lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0, whiteSpace: 'pre-line',
      }}>
        {headline}
      </h3>
      <p style={{ color: '#8A8A96', fontSize: '0.9375rem', lineHeight: 1.72, margin: 0 }}>
        {detail}
      </p>
      {highlight && (
        <blockquote style={{
          borderLeft: '2px solid #C49A3C', paddingLeft: '1rem', margin: 0,
          fontStyle: 'italic', color: '#8A8A96', fontSize: '0.875rem',
        }}>
          {highlight}
        </blockquote>
      )}
      {metric && (
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem',
          color: '#C49A3C', letterSpacing: '0.05em',
        }}>
          → {metric}
        </div>
      )}
    </div>
  );

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '3.5rem', alignItems: 'center',
      flexDirection: imgLeft ? 'row' : 'row-reverse',
    }}>
      <Img /><Txt />
    </div>
  );
}

export default function AutoStoreTech() {
  return (
    <section id="tecnologia" style={{
      background: '#0C0C0F',
      padding: 'clamp(5rem,10vw,10rem) 0',
    }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem,8vw,8rem)' }}>
          <span className="section-badge">Tecnologia de Referência Mundial</span>
          <h2 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.875rem,4vw,3.5rem)', color: '#E8E8EC',
            letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1.25rem',
          }}>
            AutoStore: o sistema goods-to-person<br />mais rápido e denso do mundo.
          </h2>
          <p style={{
            color: '#8A8A96', fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)',
            maxWidth: '640px', margin: '0 auto', lineHeight: 1.65,
          }}>
            Armazenamento cúbico que elimina corredores, comprime o inventário e multiplica a capacidade do seu armazém em até 4×.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem,8vw,8rem)' }}>
          {blocks.map((b, i) => <TechBlock key={i} block={b} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tecnologia [style*="flex-direction: row"],
          #tecnologia [style*="flex-direction: row-reverse"] { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
