import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-background-dark/80 backdrop-blur-sm px-4 md:px-10 lg:px-20 py-4 border-b border-solid border-secondary/20">
      <a className="font-display text-2xl font-bold text-text-light text-glow-blue" href="#hero">
        AIftershow
      </a>
      <nav className="hidden md:flex items-center gap-6">
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#prompt-improver">
          Improve My Prompts
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#hero-gem">
          Build an Expert AI
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#notebooklm">
          Team Collaboration
        </a>
        <a className="font-body text-sm font-medium uppercase text-text-light/80 hover:text-primary hover:text-glow-blue transition-colors" href="#toolkit">
          The Toolkit
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="font-mono text-sm font-bold text-primary text-glow-blue">
          EN
        </button>
        <span className="font-mono text-sm text-text-light/50">|</span>
        <button className="font-mono text-sm font-medium text-text-light/80 hover:text-primary">
          NL
        </button>
      </div>
    </header>
  );
};

export default Header;