import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card-dark py-20" id="connect">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        
        <h2 className="font-display text-4xl font-bold text-text-light">
          Join the AIftershow Community
        </h2>
        
        <p className="font-body text-lg text-text-light/80 leading-relaxed">
          Ready to take AI workflows to the next level? Join our community for exclusive templates, tutorials, and live Q&A with AI experts.
        </p>
        
        <a
          href="[https://aiftershow.com/join](https://aiftershow.com/join)"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 hover:shadow-glow-purple transition-shadow"
        >
          Join Now
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;