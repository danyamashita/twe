import { useState, useCallback } from 'react';
import Preloader     from './components/Preloader';
import Header        from './components/Header';
import HeroCanvas    from './components/HeroCanvas';
import ImpactMetrics from './components/ImpactMetrics';
import Solutions     from './components/Solutions';
import AutoStoreTech from './components/AutoStoreTech';
import Cases         from './components/Cases';
import WhyTWE        from './components/WhyTWE';
import Partners      from './components/Partners';
import Compliance    from './components/Compliance';
import About         from './components/About';
import FinalCTA      from './components/FinalCTA';
import Footer        from './components/Footer';

export default function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Called by HeroCanvas once 50% of frames are cached
  const handleFramesReady = useCallback(() => {
    setProgress(100);
    // Small delay so progress bar hits 100% before fade out
    setTimeout(() => setPreloaderVisible(false), 600);
  }, []);

  return (
    <>
      <Preloader progress={progress} visible={preloaderVisible} />

      <div style={{ opacity: preloaderVisible ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Header />
        <main>
          <HeroCanvas onFramesReady={handleFramesReady} />
          <ImpactMetrics />
          <Solutions />
          <AutoStoreTech />
          <Cases />
          <WhyTWE />
          <Partners />
          <Compliance />
          <About />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
