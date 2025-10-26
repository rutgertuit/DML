import React from 'react';
import { useTranslation } from 'react-i18next';

export const FlowVibe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="vibe-to-signal">
      {/* Main Header */}
      <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
        {t('flowVibe.title')}
      </h2>

      {/* NL Sub-Header */}
      <p className="font-mono text-sm text-text-light/70 mb-12 text-center">
        {t('flowVibe.subtitle')}
      </p>

      {/* Intro Paragraph */}
      <p className="font-body text-text-light/85 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
        {t('flowVibe.intro')}
      </p>

      {/* Card 1: Vibe Coding */}
      <div className="bg-card-dark border border-primary/20 p-8 mb-8">
        <h3 className="font-display text-2xl font-bold text-primary mb-4">
          {t('flowVibe.vibe.title')}
        </h3>

        {/* Two-column layout: Content + Video */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Left: Content */}
          <div>
            <p className="font-body text-text-light/85 mb-6 leading-relaxed">
              {t('flowVibe.vibe.description')}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-primary mb-1">{t('flowVibe.vibe.workflow').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.vibe.workflow')}</p>
              </div>
              <div>
                <p className="font-bold text-primary mb-1">{t('flowVibe.vibe.goal').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.vibe.goal')}</p>
              </div>
              <div>
                <p className="font-bold text-primary mb-1">{t('flowVibe.vibe.risk').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.vibe.risk')}</p>
              </div>
              <div>
                <p className="font-bold text-primary mb-1">{t('flowVibe.vibe.tools').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.vibe.tools')}</p>
              </div>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="w-full aspect-video bg-background-dark border border-primary/20 flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">🎬</div>
            <span className="font-mono text-text-light/50 text-center px-4 text-sm">
              {t('flowVibe.vibe.videoPlaceholder')}
            </span>
          </div>
        </div>

        {/* Footer - Live Example */}
        <div className="mt-6 border-t border-primary/20 pt-4">
          <p className="font-body text-text-light/85 text-sm">
            <span className="font-bold">{t('flowVibe.liveExample')}</span> {t('flowVibe.vibe.example')}{' '}
            <a
              href="#prompt-improver"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              {t('flowVibe.vibe.exampleLink')}
            </a>
            {' '}{t('flowVibe.vibe.exampleText')}
          </p>
          <p className="font-mono text-xs text-text-light/60 mt-1">
            {t('flowVibe.vibe.exampleNL')}
          </p>
        </div>
      </div>

      {/* Card 2: The "Flow Coding" Confusion */}
      <div className="bg-card-dark border border-text-light/20 p-8 mb-8">
        <h3 className="font-display text-2xl font-bold text-text-light mb-4">
          {t('flowVibe.flow.title')}
        </h3>

        {/* Two-column layout: Content + Video */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Left: Content */}
          <div>
            <p className="font-body text-text-light/85 mb-6 leading-relaxed">
              {t('flowVibe.flow.description')}
            </p>
            <p className="font-display uppercase text-secondary">
              {t('flowVibe.flow.conclusion')}
            </p>
          </div>

          {/* Right: Video Placeholder */}
          <div className="w-full aspect-video bg-background-dark border border-text-light/20 flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">❓</div>
            <span className="font-mono text-text-light/50 text-center px-4 text-sm">
              {t('flowVibe.flow.videoPlaceholder')}
            </span>
          </div>
        </div>
      </div>

      {/* Card 3: Signal Coding */}
      <div
        className="bg-card-dark border border-secondary/20 p-8"
        style={{ boxShadow: 'var(--glow-purple)' }}
      >
        <h3 className="font-display text-2xl font-bold text-secondary mb-4">
          {t('flowVibe.signal.title')}
        </h3>

        {/* Two-column layout: Content + Video */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Left: Content */}
          <div>
            <p className="font-body text-text-light/85 mb-6 leading-relaxed">
              {t('flowVibe.signal.description')}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div>
                <p className="font-bold text-secondary mb-1">{t('flowVibe.signal.workflow').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.signal.workflow')}</p>
              </div>
              <div>
                <p className="font-bold text-secondary mb-1">{t('flowVibe.signal.goal').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.signal.goal')}</p>
              </div>
              <div>
                <p className="font-bold text-secondary mb-1">{t('flowVibe.signal.power').split(':')[0]}:</p>
                <p className="text-text-light/80">{t('flowVibe.signal.power')}</p>
              </div>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="w-full aspect-video bg-background-dark border border-secondary/20 flex flex-col items-center justify-center">
            <div className="text-5xl mb-4">📐</div>
            <span className="font-mono text-text-light/50 text-center px-4 text-sm">
              {t('flowVibe.signal.videoPlaceholder')}
            </span>
          </div>
        </div>

        {/* Footer - Live Example */}
        <div className="mt-6 border-t border-secondary/20 pt-4">
          <p className="font-body text-text-light/85 text-sm">
            <span className="font-bold">{t('flowVibe.liveExample')}</span> {t('flowVibe.signal.example')}{' '}
            <a
              href="#hero-gem"
              className="text-secondary hover:text-secondary/80 underline transition-colors"
            >
              {t('flowVibe.signal.exampleLink')}
            </a>
            {' '}{t('flowVibe.signal.exampleText')}
          </p>
          <p className="font-mono text-xs text-text-light/60 mt-1">
            {t('flowVibe.signal.exampleNL')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowVibe;