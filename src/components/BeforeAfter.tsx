import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BeforeAfter: React.FC = () => {
    const { t } = useTranslation();
    const [activeExample, setActiveExample] = useState(1);

    const examples = [
        { id: 1, key: 'example1', color: 'primary' },
        { id: 2, key: 'example2', color: 'secondary' },
        { id: 3, key: 'example3', color: 'primary' },
        { id: 4, key: 'example4', color: 'secondary' },
        { id: 5, key: 'example5', color: 'primary' }
    ];

    const activeEx = examples.find(ex => ex.id === activeExample)!;

    return (
        <section className="py-12 md:py-16" id="before-after">
            {/* Main Header */}
            <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
                {t('beforeAfter.title')}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-text-light/70 mb-6 text-center max-w-3xl mx-auto">
                {t('beforeAfter.subtitle')}
            </p>

            {/* Intro Bridge */}
            <p className="font-body text-text-light/85 mb-8 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                {t('beforeAfter.intro')}
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {examples.map(ex => (
                    <button
                        key={ex.id}
                        onClick={() => setActiveExample(ex.id)}
                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                            activeExample === ex.id
                                ? ex.color === 'primary'
                                    ? 'bg-primary text-background-dark shadow-glow-blue'
                                    : 'bg-secondary text-background-dark shadow-glow-pink'
                                : 'bg-background-light/50 text-text-light/60 hover:bg-background-light hover:text-text-light'
                        }`}
                    >
                        {t(`beforeAfter.${ex.key}.title`)}
                    </button>
                ))}
            </div>

            {/* Active Example Display */}
            <div className={`mb-12 bg-card-dark border ${activeEx.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'} rounded-lg overflow-hidden`}>
                <div className={`${activeEx.color === 'primary' ? 'bg-primary/10 border-b border-primary/20' : 'bg-secondary/10 border-b border-secondary/20'} p-4`}>
                    <h3 className={`font-display text-xl font-bold ${activeEx.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        {t(`beforeAfter.${activeEx.key}.title`)}
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Bad Example */}
                    <div className={`p-6 ${activeEx.color === 'primary' ? 'border-r border-primary/20' : 'border-r border-secondary/20'}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🔴</span>
                            <h4 className="font-bold text-red-400 uppercase text-sm">{t('beforeAfter.badLabel')}</h4>
                        </div>

                        <div className="bg-background-dark/50 border border-red-500/30 rounded p-4 mb-4">
                            <p className="font-mono text-sm text-text-light/80 mb-2">{t('beforeAfter.promptLabel')}</p>
                            <p className="text-text-light/60 italic">"{t(`beforeAfter.${activeEx.key}.badPrompt`)}"</p>
                        </div>

                        <div className="bg-red-900/10 border border-red-500/30 rounded p-4">
                            <p className="font-mono text-sm text-red-400 mb-2">{t('beforeAfter.outputLabel')}</p>
                            <p className="text-text-light/70 text-sm leading-relaxed whitespace-pre-wrap">
                                {t(`beforeAfter.${activeEx.key}.badOutput`)}
                            </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-sm text-text-light/60">{t(`beforeAfter.${activeEx.key}.badWhy`)}</p>
                        </div>
                    </div>

                    {/* Good Example */}
                    <div className={`p-6 ${activeEx.color === 'primary' ? 'bg-primary/5' : 'bg-secondary/5'}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🟢</span>
                            <h4 className={`font-bold ${activeEx.color === 'primary' ? 'text-primary' : 'text-secondary'} uppercase text-sm`}>{t('beforeAfter.goodLabel')}</h4>
                        </div>

                        <div className={`bg-background-dark/50 border ${activeEx.color === 'primary' ? 'border-primary/30' : 'border-secondary/30'} rounded p-4 mb-4`}>
                            <p className="font-mono text-sm text-text-light/80 mb-2">{t('beforeAfter.promptLabel')}</p>
                            <p className="text-text-light/90 text-sm leading-relaxed">
                                "{t(`beforeAfter.${activeEx.key}.goodPrompt`)}"
                            </p>
                        </div>

                        <div className={`${activeEx.color === 'primary' ? 'bg-primary/10 border border-primary/30' : 'bg-secondary/10 border border-secondary/30'} rounded p-4`}>
                            <p className={`font-mono text-sm ${activeEx.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-2`}>{t('beforeAfter.outputLabel')}</p>
                            <p className="text-text-light/90 text-sm leading-relaxed whitespace-pre-wrap">
                                {t(`beforeAfter.${activeEx.key}.goodOutput`)}
                            </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                            <span className={`${activeEx.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>✅</span>
                            <p className="text-sm text-text-light/80">{t(`beforeAfter.${activeEx.key}.goodWhy`)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <p className="text-text-light/80 mb-6">{t('beforeAfter.cta')}</p>
                <a
                    href="#prompt-improver"
                    className="inline-block font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-8 rounded hover:shadow-glow-blue transition-shadow"
                >
                    {t('beforeAfter.ctaButton')}
                </a>
            </div>
        </section>
    );
};

export default BeforeAfter;
