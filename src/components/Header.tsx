import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-sm border-b border-solid border-secondary/20">
      {/* Main header bar */}
      <div className="flex items-center justify-between whitespace-nowrap px-4 md:px-10 lg:px-20 py-4">
        <a className="font-display text-2xl font-bold text-text-light text-glow-blue" href="#hero">
          AI-ftershow
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#the-vibe">
            {t('header.theVibe')}
          </a>
          <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#prompt-improver">
            {t('header.tools')}
          </a>
          <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#vibe-coding">
            {t('header.deepDive')}
          </a>
          <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#roadmap">
            {t('header.roadmap')}
          </a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Language Switcher - Improved touch targets */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLanguage('en')}
              className={`font-mono text-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center ${i18n.language === 'en' ? 'text-primary text-glow-blue' : 'text-text-light/80 hover:text-primary'}`}
            >
              EN
            </button>
            <span className="font-mono text-sm text-text-light/50">|</span>
            <button
              onClick={() => changeLanguage('nl')}
              className={`font-mono text-sm font-medium min-w-[44px] min-h-[44px] flex items-center justify-center ${i18n.language === 'nl' ? 'text-primary text-glow-blue' : 'text-text-light/80 hover:text-primary'}`}
            >
              NL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-text-light hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-card-dark border-t border-secondary/20 animate-fade-in">
          <div className="flex flex-col py-4">
            <a
              className="font-body text-base font-medium uppercase text-text-light/80 hover:text-primary hover:bg-primary/10 transition-colors px-6 py-4 border-l-2 border-transparent hover:border-primary"
              href="#the-vibe"
              onClick={handleNavClick}
            >
              {t('header.theVibe')}
            </a>
            <a
              className="font-body text-base font-medium uppercase text-text-light/80 hover:text-primary hover:bg-primary/10 transition-colors px-6 py-4 border-l-2 border-transparent hover:border-primary"
              href="#prompt-improver"
              onClick={handleNavClick}
            >
              {t('header.tools')}
            </a>
            <a
              className="font-body text-base font-medium uppercase text-text-light/80 hover:text-primary hover:bg-primary/10 transition-colors px-6 py-4 border-l-2 border-transparent hover:border-primary"
              href="#vibe-coding"
              onClick={handleNavClick}
            >
              {t('header.deepDive')}
            </a>
            <a
              className="font-body text-base font-medium uppercase text-text-light/80 hover:text-primary hover:bg-primary/10 transition-colors px-6 py-4 border-l-2 border-transparent hover:border-primary"
              href="#roadmap"
              onClick={handleNavClick}
            >
              {t('header.roadmap')}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;