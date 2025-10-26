import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-card-dark py-20" id="connect">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        
        <h2 className="font-display text-4xl font-bold text-text-light">
          {t('footer.title')}
        </h2>
        
        <p className="font-body text-lg text-text-light/80 leading-relaxed max-w-2xl">
          {t('footer.description')}
        </p>
        
        {/* LinkedIn CTA */}
        <a
          href="https://www.linkedin.com/in/rutgertuit/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/80 transition-all duration-200 rounded-lg shadow-lg hover:shadow-glow-blue"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          {t('footer.cta')}
        </a>

        {/* Placeholder Video */}
        <div className="mt-8 w-full">
          <h3 className="text-2xl font-bold text-text-light mb-6">
            {t('footer.videoTitle')}
          </h3>
          <div className="aspect-video bg-background-secondary rounded-lg shadow-lg border border-secondary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-text-light/60 text-lg">
                {t('footer.videoPlaceholder')}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-secondary/20">
          <p className="text-text-light/60 text-sm leading-relaxed max-w-3xl">
            {t('footer.disclaimer')}
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;