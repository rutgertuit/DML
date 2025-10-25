import React, { useState } from 'react';
import type { Language } from '../types';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    texts: any;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, texts }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '#prompt-improver', text: texts.nav.improver },
        { href: '#hero-gem', text: texts.nav.heroGem },
        { href: '#notebooklm', text: texts.nav.notebookLM },
        { href: '#flow-vibe', text: texts.nav.flowVibe },
        { href: '#toolkit', text: texts.nav.toolkit },
        { href: '#how-it-was-made', text: texts.nav.howItsMade },
    ];

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-background-dark/80 backdrop-blur-sm px-4 md:px-10 lg:px-20 py-4 border-b border-solid border-secondary/20">
            <div className="flex items-center gap-4">
                <div className="size-6 text-primary">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path></svg>
                </div>
                <h2 className="text-text-light text-xl font-display font-bold uppercase">{texts.appName}</h2>
            </div>
            <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
                {navItems.map((item) => (
                    <a key={item.href} className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href={item.href}>
                        {item.text}
                    </a>
                ))}
            </nav>
            <div className="flex items-center gap-2">
                <div className="flex gap-1 border border-primary/20 p-1">
                    <button
                        onClick={() => setLanguage('nl')}
                        className={`flex min-w-[48px] cursor-pointer items-center justify-center h-8 px-3 text-sm font-bold leading-normal tracking-widest transition-colors ${language === 'nl' ? 'bg-primary text-background-dark' : 'bg-card-dark text-text-light hover:bg-secondary/50'}`}
                    >
                        NL
                    </button>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`flex min-w-[48px] cursor-pointer items-center justify-center h-8 px-3 text-sm font-bold leading-normal tracking-widest transition-colors ${language === 'en' ? 'bg-primary text-background-dark' : 'bg-card-dark text-text-light hover:bg-secondary/50'}`}
                    >
                        EN
                    </button>
                </div>
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        className="p-2 text-text-light"
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-sm border-t border-secondary/20 md:hidden">
                    <div className="flex flex-col items-center gap-6 py-8">
                        {navItems.map((item) => (
                             <a key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-text-light text-base font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all"
                            >
                                {item.text}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;