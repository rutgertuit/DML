import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative" id="hero">
      {/* Background Video - Only on desktop */}
      {!isMobile && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="https://storage.googleapis.com/aiftershow-assets/hero-fallback.jpg"
        >
          <source src="https://storage.googleapis.com/heineken-hub-video-assets/A_seamlessly_looped_202510262233_wjnxf.mp4" type="video/mp4" />
        </video>
      )}
      {/* Background Image - Only on mobile */}
      {isMobile && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(https://storage.googleapis.com/aiftershow-assets/hero-fallback.jpg)' }}
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-background-dark/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-text-light text-glow-blue">
          {t('hero.title')}
        </h1>
        <p className="font-body text-xl md:text-2xl text-text-light/90 max-w-3xl">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 mt-8 w-full md:w-auto">
          <a
            className="font-mono text-sm uppercase border border-solid border-secondary text-text-light/90 hover:text-primary hover:border-primary hover:shadow-glow-purple transition-all px-6 py-4 min-h-[48px] flex items-center justify-center w-full md:w-auto"
            href="#prompt-improver"
          >
            {t('hero.cta1')}
          </a>
          <a
            className="font-mono text-sm uppercase border border-solid border-secondary text-text-light/90 hover:text-primary hover:border-primary hover:shadow-glow-purple transition-all px-6 py-4 min-h-[48px] flex items-center justify-center w-full md:w-auto"
            href="#hero-gem"
          >
            {t('hero.cta2')}
          </a>
          <a
            className="font-mono text-sm uppercase border border-solid border-secondary text-text-light/90 hover:text-primary hover:border-primary hover:shadow-glow-purple transition-all px-6 py-4 min-h-[48px] flex items-center justify-center w-full md:w-auto"
            href="#notebooklm"
          >
            {t('hero.cta3')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;