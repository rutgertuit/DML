
import React from 'react';

interface FlowVibeCodingSectionProps {
    texts: any;
}

const FlowVibeCodingSection: React.FC<FlowVibeCodingSectionProps> = ({ texts }) => {
    return (
        <section className="py-24" id="flow-vibe">
            <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">{texts.flowVibe.title}</h2>
            <div className="relative grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-secondary shadow-glow-purple hidden md:block"></div>
                <div className="md:pr-6">
                    <h3 className="text-2xl font-display uppercase"><span className="text-primary text-glow-blue">{texts.flowVibe.vibe.title}</span></h3>
                    <p className="font-mono text-sm text-text-light/70 mb-4">NL: De "Regisseur"</p>
                    <p className="mb-4">{texts.flowVibe.vibe.description}</p>
                    <div className="bg-card-dark p-4 border border-text-light/20">
                        <h4 className="font-display uppercase text-primary">{texts.flowVibe.vibe.keyTools}</h4>
                        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                            {texts.flowVibe.vibe.tools.map((tool: { name: string, desc: string }) => (
                                <li key={tool.name}><span className="font-mono">{tool.name}</span> {tool.desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:pl-6">
                    <h3 className="text-2xl font-display uppercase"><span className="text-secondary text-glow-purple">{texts.flowVibe.flow.title}</span></h3>
                    <p className="font-mono text-sm text-text-light/70 mb-4">NL: De "Architect"</p>
                    <p className="mb-4">{texts.flowVibe.flow.description}</p>
                    <div className="bg-card-dark p-4 border border-text-light/20">
                        <h4 className="font-display uppercase text-secondary">{texts.flowVibe.flow.keyTool}</h4>
                        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                             {texts.flowVibe.flow.tools.map((tool: { name: string, desc: string }) => (
                                <li key={tool.name}><span className="font-mono">{tool.name}</span> {tool.desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowVibeCodingSection;
