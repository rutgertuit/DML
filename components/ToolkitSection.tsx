
import React from 'react';

interface ToolkitSectionProps {
    texts: any;
}

const ToolkitSection: React.FC<ToolkitSectionProps> = ({ texts }) => {
    return (
        <section className="py-24" id="toolkit">
            <h2 className="text-3xl font-display font-bold uppercase mb-8 text-center">{texts.toolkit.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {texts.toolkit.tools.map((tool: { name: string, desc: string }) => (
                    <div key={tool.name} className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                        <h3 className="font-display uppercase text-lg mb-2">{tool.name}</h3>
                        <p className="text-text-light/80 text-sm flex-grow">{tool.desc}</p>
                        <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">{texts.toolkit.explore}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToolkitSection;
