import { useEffect, useRef } from 'react';

export default function Preloader({ progress, visible }) {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) barRef.current.style.width = `${progress}%`;
  }, [progress]);

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#0C0C0F',
      zIndex: 9999,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '2rem',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'all' : 'none',
      transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1)',
    }}>
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: '"Inter Tight", "Helvetica Neue", sans-serif',
          fontWeight: 900, fontSize: '1.875rem',
          letterSpacing: '-0.03em', color: '#E8E8EC',
        }}>
          <span style={{ color: '#255A75' }}>TWE</span>
        </div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.6rem', letterSpacing: '0.28em',
          color: '#5A5A68', marginTop: '0.3rem', textTransform: 'uppercase',
        }}>
          Automação Industrial
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: '180px', height: '1px', background: 'rgba(255,255,255,0.07)' }}>
        <div ref={barRef} style={{
          height: '100%', background: '#C49A3C',
          width: '0%', transition: 'width 0.3s ease',
        }} />
      </div>

      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.65rem', color: '#5A5A68', letterSpacing: '0.1em',
      }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
}
