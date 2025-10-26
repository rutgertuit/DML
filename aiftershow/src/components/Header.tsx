import React from 'react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-background-dark/80 backdrop-blur-sm px-4 md:px-10 lg:px-20 py-4 border-b border-solid border-secondary/20">
      <a className="font-display text-2xl font-bold text-text-light text-glow-blue" href="#hero">
        AIftershow
      </a>
      <nav className="hidden md:flex items-center gap-6">
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#prompt-improver">
          {t('header.improvePrompt')}
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#hero-gem-wizard">
          {t('header.heroGem')}
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#notebooklm">
          {t('header.notebookLM')}
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#vibe-to-signal">
          {t('header.newPowers')}
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#toolkit">
          {t('header.toolkit')}
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`font-mono text-sm font-bold ${i18n.language === 'en' ? 'text-primary text-glow-blue' : 'text-text-light/80 hover:text-primary'}`}
        >
          EN
        </button>
        <span className="font-mono text-sm text-text-light/50">|</span>
        <button
          onClick={() => changeLanguage('nl')}
          className={`font-mono text-sm font-medium ${i18n.language === 'nl' ? 'text-primary text-glow-blue' : 'text-text-light/80 hover:text-primary'}`}
        >
          NL
        </button>
      </div>
    </header>
  );
};

export default Header;