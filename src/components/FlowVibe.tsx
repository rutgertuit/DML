import React from 'react';
import { useTranslation } from 'react-i18next';

export const FlowVibe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="vibe-coding">
      {/* Main Header */}
      <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
        {t('flowVibe.title')}
      </h2>

      {/* Subtitle */}
      <p className="font-mono text-sm text-text-light/70 mb-6 text-center">
        {t('flowVibe.subtitle')}
      </p>

      {/* Intro Paragraph */}
      <p className="font-body text-text-light/85 text-center max-w-4xl mx-auto mb-16 leading-relaxed text-lg">
        {t('flowVibe.intro')}
      </p>

      {/* Main Vibe Coding Card */}
      <div className="bg-card-dark border border-primary/20 p-8 mb-8">
        <h3 className="font-display text-2xl font-bold text-primary mb-6">
          {t('flowVibe.vibe.title')}
        </h3>

        {/* Two-column layout: Content + Video */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Left: Content */}
          <div>
            <p className="font-body text-text-light/85 mb-6 leading-relaxed">
              {t('flowVibe.vibe.description')}
            </p>

            {/* Why It Works */}
            <div className="mb-6">
              <h4 className="font-bold text-primary mb-3">{t('flowVibe.vibe.whyGreatTitle')}</h4>
              <ul className="space-y-2 text-sm text-text-light/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✨</span>
                  <span>{t('flowVibe.vibe.benefit1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">⚡</span>
                  <span>{t('flowVibe.vibe.benefit2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🎨</span>
                  <span>{t('flowVibe.vibe.benefit3')}</span>
                </li>
              </ul>
            </div>

            {/* Reality Check */}
            <div className="bg-secondary/10 border border-secondary/30 rounded p-4 text-sm text-text-light/80">
              <span className="text-secondary font-bold">⚠️ </span>
              {t('flowVibe.vibe.realityCheck')}
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="w-full aspect-video bg-background-dark border border-primary/20 flex items-center justify-center rounded">
            <div className="text-center text-text-light/50">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-sm font-mono">{t('flowVibe.vibe.videoPlaceholder')}</p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-6 pt-6 border-t border-primary/20">
          <h4 className="font-bold text-primary mb-2">{t('flowVibe.vibe.toolsTitle')}</h4>
          <p className="text-text-light/70 text-sm mb-4">{t('flowVibe.vibe.toolsIntro')}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://gemini.google.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
            >
              <span>💎</span>
              <span className="font-mono text-sm">Gemini</span>
            </a>
            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
            >
              <span>🎨</span>
              <span className="font-mono text-sm">AI Studio</span>
            </a>
            <a
              href="https://stitch.new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
            >
              <span>🧵</span>
              <span className="font-mono text-sm">Google Stitch</span>
            </a>
            <a
              href="https://github.com/google-gemini/gemini-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
            >
              <span>⌨️</span>
              <span className="font-mono text-sm">Gemini CLI</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
            >
              <span>🐙</span>
              <span className="font-mono text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowVibe;