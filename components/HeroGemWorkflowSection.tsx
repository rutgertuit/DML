
import React from 'react';
import { HERO_GEM_PROMPTS } from '../constants';
import CodeBlock from './CodeBlock';

interface HeroGemWorkflowSectionProps {
    texts: any;
}

const HeroGemWorkflowSection: React.FC<HeroGemWorkflowSectionProps> = ({ texts }) => {
    return (
        <section className="py-24" id="hero-gem">
            <h2 className="text-3xl font-display font-bold uppercase mb-2 text-center">{texts.heroGem.title}</h2>
            <p className="text-center max-w-3xl mx-auto mb-12">{texts.heroGem.description}</p>
            <div className="space-y-12">
                <div className="grid md:grid-cols-[30%_70%] gap-8 items-start">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <span className="material-symbols-outlined text-primary text-5xl">manage_search</span>
                            <div>
                                <p className="font-mono text-primary">{texts.heroGem.step1.label}</p>
                                <h3 className="text-xl font-display uppercase">{texts.heroGem.step1.title}</h3>
                            </div>
                        </div>
                        <p>{texts.heroGem.step1.description}</p>
                    </div>
                    <CodeBlock code={HERO_GEM_PROMPTS.step1} copyText={texts.copy} copiedText={texts.copied} />
                </div>
                <div className="grid md:grid-cols-[30%_70%] gap-8 items-start">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                            <span className="material-symbols-outlined text-primary text-5xl">diamond</span>
                            <div>
                                <p className="font-mono text-primary">{texts.heroGem.step2.label}</p>
                                <h3 className="text-xl font-display uppercase">{texts.heroGem.step2.title}</h3>
                            </div>
                        </div>
                        <p>{texts.heroGem.step2.description}</p>
                    </div>
                    <CodeBlock code={HERO_GEM_PROMPTS.step2} copyText={texts.copy} copiedText={texts.copied} />
                </div>
            </div>
        </section>
    );
};

export default HeroGemWorkflowSection;
