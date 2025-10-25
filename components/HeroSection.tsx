import React from 'react';

interface HeroSectionProps {
    texts: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ texts }) => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center relative" id="hero">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img alt="Abstract digital background" className="w-full h-full object-cover md:hidden" src="https://picsum.photos/seed/mobilehero/800/1200" />
                <video autoPlay className="hidden md:block absolute top-0 left-0 w-full h-full object-cover" loop muted playsInline poster="https://picsum.photos/seed/videohero/1920/1080">
                    <source src="https://cdn.pixabay.com/video/2022/10/24/134958-766324449_large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase text-glow-blue">{texts.hero.title}</h1>
                <h2 className="text-lg md:text-xl font-body max-w-3xl">{texts.hero.subtitle}</h2>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                    <a className="flex flex-col items-center justify-center gap-2 p-6 border border-secondary bg-transparent hover:bg-card-dark/50 border-glow-purple transition-all w-full sm:w-72" href="#prompt-improver">
                        <span className="material-symbols-outlined text-secondary text-4xl">auto_awesome</span>
                        <h3 className="font-display uppercase">{texts.hero.cta.improve}</h3>
                        <p className="text-sm text-text-light/80">{texts.hero.cta.improveDesc}</p>
                    </a>
                    <a className="flex flex-col items-center justify-center gap-2 p-6 border border-primary bg-transparent hover:bg-card-dark/50 border-glow-blue transition-all w-full sm:w-72" href="#hero-gem">
                        <span className="material-symbols-outlined text-primary text-4xl">view_timeline</span>
                        <h3 className="font-display uppercase">{texts.hero.cta.explore}</h3>
                        <p className="text-sm text-text-light/80">{texts.hero.cta.exploreDesc}</p>
                    </a>
                    <a className="flex flex-col items-center justify-center gap-2 p-6 border border-secondary bg-transparent hover:bg-card-dark/50 border-glow-purple transition-all w-full sm:w-72" href="#toolkit">
                        <span className="material-symbols-outlined text-secondary text-4xl">widgets</span>
                        <h3 className="font-display uppercase">{texts.hero.cta.toolkit}</h3>
                        <p className="text-sm text-text-light/80">{texts.hero.cta.toolkitDesc}</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;