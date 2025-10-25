import React from 'react';

interface HowItWasMadeSectionProps {
    texts: any;
}

const HowItWasMadeSection: React.FC<HowItWasMadeSectionProps> = ({ texts }) => {
    return (
        <section className="py-24" id="how-it-was-made">
            <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">{texts.howItWasMade.title}</h2>
            <div className="relative flex flex-col gap-12 pl-6 sm:pl-8 border-l-2 border-primary/30">
                {texts.howItWasMade.steps.map((step: { type: string, title: string, desc: string }, index: number) => (
                    <div key={index} className="relative">
                        <div className={`absolute -left-[34px] sm:-left-[42px] top-0 size-5 flex items-center justify-center ring-8 ring-background-dark ${step.type === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></div>
                        <h3 className={`font-display uppercase text-xl ${step.type === 'primary' ? 'text-primary' : 'text-secondary'}`}>{step.title}</h3>
                        <p className="text-text-light/80 mt-1">{step.desc}</p>
                        {step.title.includes("CLI Workflow") && (
                             <div className="relative bg-card-dark p-4 border border-text-light/20 font-mono text-sm mt-4">
                                <pre className="whitespace-pre-wrap overflow-x-auto text-xs">
                                    <code>
                                        <span className="text-primary">$</span> {texts.howItWasMade.cliCode}
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWasMadeSection;