import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative" id="hero">
      {/* Background Video Placeholder */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://storage.googleapis.com/aiftershow-assets/hero-fallback.jpg"
      >
        {/* We will add video sources here later */}
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-background-dark/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-text-light text-glow-blue">
          Marketing & Effie Live - the AIftershow
        </h1>
        <p className="font-body text-xl md:text-2xl text-text-light/90 max-w-3xl">
          Level Up Your Stack. A Tactical Guide to Vibe Coding, Hero Gems, and NotebookLM.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <a
            className="font-mono text-sm uppercase border border-solid border-secondary text-text-light/90 hover:text-primary hover:border-primary hover:shadow-glow-purple transition-all px-6 py-3 w-full md:w-auto"
            href="#flow-vibe"
          >
            I need to build a prototype fast.
          </a>
          <a
            className="font-mono text-sm uppercase border border-solid border-secondary text-text-light/90 hover:text-primary hover:border-primary hover:shadow-glow-purple transition-all px-6 py-3 w-full md:w-auto"
            href="#hero-gem"
          >
            I need AI grounded in my own data.
          </a>
          <a
            className="font-mono text-sm uppercase border border-solid border-secondary text-text-light/90 hover:text-primary hover:border-primary hover:shadow-glow-purple transition-all px-6 py-3 w-full md:w-auto"
            href="#notebooklm"
          >
            I need to synthesize 50 documents.
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
