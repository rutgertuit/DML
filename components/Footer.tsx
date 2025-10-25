
import React from 'react';

interface FooterProps {
    texts: any;
}

const Footer: React.FC<FooterProps> = ({ texts }) => {
    return (
        <footer className="w-full bg-card-dark py-20">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <div className="w-32 h-32 mb-6 bg-background-dark border-2 border-secondary rounded-full flex items-center justify-center overflow-hidden">
                    <img alt="User portrait placeholder" className="w-full h-full object-cover" src="https://picsum.photos/seed/avatar/200/200" />
                </div>
                <h2 className="text-2xl font-display font-bold uppercase mb-2">{texts.footer.title}</h2>
                <p className="font-mono text-sm text-text-light/70 mb-8">NL: Laten we verbinden!</p>
                <a className="bg-primary text-black font-bold uppercase py-3 px-8 hover:shadow-glow-purple transition-shadow" href="#">
                    <span>{texts.footer.cta}</span>
                    <span className="hidden">NL: Verbind op LinkedIn</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
