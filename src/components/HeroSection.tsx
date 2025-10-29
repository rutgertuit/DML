import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative" id="hero">
      {/* Background Video */}
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
      <div className="absolute top-0 left-0 w-full h-full bg-background-dark/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 px-4 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-text-light text-glow-blue">
          {t('hero.title')}
        </h1>
        <p className="font-body text-xl md:text-2xl text-text-light/90">
          {t('hero.subtitle')}
        </p>
        <p className="font-body text-lg md:text-xl text-text-light/85 leading-relaxed">
          {t('hero.cta1')}
        </p>
        <p className="font-body text-xl md:text-2xl text-primary font-semibold">
          {t('hero.cta2')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;