import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { frames, FRAME_COUNT } from '../data/frames';

gsap.registerPlugin(ScrollTrigger);

const TEXT_BLOCKS = [
  {
    // progressIn=-1 → opacity=1 desde progress=0 (visível ao carregar)
    progressIn: -1, progressPeak: 0, progressOut: 0.28,
    side: 'left',
    headline: 'Construímos o esqueleto\nda intralogística do futuro.',
    sub: 'Primeiro instalador homologado AutoStore na América Latina.',
  },
  {
    progressIn: 0.34, progressPeak: 0.42, progressOut: 0.58,
    side: 'right',
    headline: 'Precisão milimétrica.\nEscala continental.',
    sub: '+25 anos de engenharia industrial em projetos que redefinem a produtividade de armazéns no Brasil e no mundo.',
  },
  {
    progressIn: 0.64, progressPeak: 0.72, progressOut: 0.91,
    side: 'center',
    headline: 'Onde cada milímetro importa.',
    sub: 'Da montagem do grid de alumínio à energização dos robôs — nós entregamos a infraestrutura que faz a automação funcionar.',
  },
];

// Outer wrapper: posicionamento absoluto fixo — NUNCA animado
const outerStyle = (side) => ({
  position: 'absolute',
  zIndex: 10,
  pointerEvents: 'none',
  ...(side === 'left'   ? { left: 'clamp(1.5rem,8vw,7rem)', top: '50%' } : {}),
  ...(side === 'right'  ? { right: 'clamp(1.5rem,8vw,7rem)', top: '50%' } : {}),
  ...(side === 'center' ? { left: '50%', bottom: '8rem' } : {}),
});

// Inner wrapper: recebe transform de centralização + offset de animação
// Para left/right: translateY(calc(-50% + ${delta}px))
// Para center:     translateX(-50%) translateY(${delta}px)
const innerInitialTransform = (side, isFirst) => {
  const delta = isFirst ? 0 : 24; // bloco 0 começa em posição final
  if (side === 'center') return `translateX(-50%) translateY(${delta}px)`;
  return `translateY(calc(-50% + ${delta}px))`;
};

export default function HeroCanvas({ onFramesReady }) {
  const containerRef  = useRef(null);
  const canvasRef     = useRef(null);
  const innerRefs     = useRef([]); // anima só o inner div
  const imagesRef     = useRef(new Array(FRAME_COUNT).fill(null));
  const currentFrame  = useRef(0);
  const rafPending    = useRef(false);
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const drawFrame = (idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = imagesRef.current[idx];
    if (!img) return;
    const ctx = canvas.getContext('2d');
    const cW = canvas.width, cH = canvas.height;
    const iW = img.naturalWidth || img.width;
    const iH = img.naturalHeight || img.height;
    if (!iW || !iH) return;
    const scale = Math.max(cW / iW, cH / iH);
    const dW = iW * scale, dH = iH * scale;
    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, (cW - dW) / 2, (cH - dH) / 2, dW, dH);
  };

  const scheduleDrawFrame = (idx) => {
    if (rafPending.current) return;
    rafPending.current = true;
    requestAnimationFrame(() => { drawFrame(idx); rafPending.current = false; });
  };

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrame.current);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const images = imagesRef.current;
    let loadedCount = 0;
    const PRELOAD_TARGET = Math.ceil(FRAME_COUNT * 0.5);

    const loadImage = (idx) => new Promise((resolve) => {
      if (images[idx]) { resolve(); return; }
      const img = new Image();
      img.onload  = () => { images[idx] = img; loadedCount++; if (loadedCount === PRELOAD_TARGET) onFramesReady?.(); resolve(); };
      img.onerror = resolve;
      img.src = frames[idx];
    });

    const priority = Array.from({ length: PRELOAD_TARGET }, (_, i) => i);
    const lazy     = Array.from({ length: FRAME_COUNT - PRELOAD_TARGET }, (_, i) => PRELOAD_TARGET + i);

    loadImage(0).then(() => drawFrame(0));

    const batchLoad = async (indices) => {
      const BATCH = 8;
      for (let i = 0; i < indices.length; i += BATCH)
        await Promise.all(indices.slice(i, i + BATCH).map(loadImage));
    };

    batchLoad(priority).then(() => {
      if ('requestIdleCallback' in window) requestIdleCallback(() => batchLoad(lazy), { timeout: 3000 });
      else setTimeout(() => batchLoad(lazy), 1000);
    });

    if (reducedMotion.current) { onFramesReady?.(); return; }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top', end: 'bottom bottom',
        scrub: true, anticipatePin: 1,
        onUpdate(self) {
          const p = self.progress;

          // --- Canvas frame ---
          const idx = Math.min(Math.floor(p * (FRAME_COUNT - 1)), FRAME_COUNT - 1);
          if (idx !== currentFrame.current) {
            currentFrame.current = idx;
            if (images[idx]) scheduleDrawFrame(idx);
            else {
              for (let off = 1; off < 15; off++) {
                const prev = idx - off;
                if (prev >= 0 && images[prev]) { scheduleDrawFrame(prev); break; }
              }
            }
          }

          // --- Text block animations ---
          innerRefs.current.forEach((el, i) => {
            if (!el) return;
            const { progressIn, progressPeak, progressOut, side } = TEXT_BLOCKS[i];

            let opacity = 0;
            let delta   = 24; // deslocamento vertical em px (0 = posição final)

            if (p >= progressIn && p <= progressOut) {
              const fi = Math.min(1, (p - progressIn)  / Math.max(0.001, progressPeak - progressIn));
              const fo = Math.min(1, (progressOut - p)  / Math.max(0.001, progressOut - progressPeak));
              opacity = Math.min(fi, fo);
              delta   = (1 - opacity) * 20;
            }

            el.style.opacity = opacity;

            // Preserva o transform de centralização + adiciona delta de animação
            if (side === 'center') {
              el.style.transform = `translateX(-50%) translateY(${delta}px)`;
            } else {
              el.style.transform = `translateY(calc(-50% + ${delta}px))`;
            }
          });
        },
      });
    });

    return () => { ctx.revert(); window.removeEventListener('resize', resizeCanvas); };
  }, []);

  if (reducedMotion.current) {
    return (
      <section style={{ height: '100vh', position: 'relative', background: '#0C0C0F' }}>
        <img src={frames[60]} alt="TWE — instalação AutoStore"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: '"Inter Tight", sans-serif', fontWeight: 900,
            fontSize: 'clamp(2rem,5vw,4.5rem)', color: '#E8E8EC', lineHeight: 1.1, marginBottom: '1.5rem',
          }}>
            Construímos o esqueleto<br />da intralogística do futuro.
          </h1>
          <p style={{ color: 'rgba(232,232,236,0.65)', fontSize: '1.125rem', maxWidth: '600px' }}>
            Primeiro instalador homologado AutoStore na América Latina.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} style={{ height: '600vh', position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', width: '100%',
        overflow: 'hidden', background: '#0C0C0F',
      }}>
        <canvas ref={canvasRef}
          aria-label="Animação scroll-driven da montagem AutoStore pela TWE"
          style={{ position: 'absolute', inset: 0, display: 'block' }}
        />

        {/* Vignette para leitura */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(12,12,15,0.6) 100%)',
          pointerEvents: 'none',
        }} />

        {/* 3 blocos de texto: outer = posição fixa, inner = animação */}
        {TEXT_BLOCKS.map((block, i) => (
          <div key={i} style={outerStyle(block.side)}>
            <div
              ref={el => innerRefs.current[i] = el}
              style={{
                // Block 0 começa visível; demais ocultos
                opacity:   i === 0 ? 1 : 0,
                transform: innerInitialTransform(block.side, i === 0),
                willChange: 'opacity, transform',
                // Backdrop semitransparente para legibilidade em qualquer frame
                background: 'rgba(12,12,15,0.52)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: '10px',
                padding: '1.75rem 2rem',
                maxWidth: block.side === 'center' ? '640px' : '480px',
                ...(block.side === 'right' ? { textAlign: 'right' } : {}),
                ...(block.side === 'center' ? { textAlign: 'center' } : {}),
                // Borda sutil no lado da ancoragem
                ...(block.side === 'left'  ? { borderLeft:  '2px solid rgba(37,90,117,0.6)' } : {}),
                ...(block.side === 'right' ? { borderRight: '2px solid rgba(37,90,117,0.6)' } : {}),
                ...(block.side === 'center'? { borderBottom:'2px solid rgba(196,154,60,0.5)' } : {}),
              }}
            >
              <h1 style={{
                fontFamily: '"Inter Tight", "Helvetica Neue", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.5rem,3.5vw,3rem)',
                color: '#E8E8EC',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                marginBottom: '0.875rem',
                whiteSpace: 'pre-line',
              }}>
                {block.headline}
              </h1>
              <p style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(0.8rem,1.25vw,0.9375rem)',
                color: 'rgba(232,232,236,0.7)',
                lineHeight: 1.65,
                margin: 0,
              }}>
                {block.sub}
              </p>
            </div>
          </div>
        ))}

        {/* Gradiente para próxima seção */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
          background: 'linear-gradient(to bottom, transparent, #0C0C0F)',
          pointerEvents: 'none',
        }} />
      </div>
    </section>
  );
}
