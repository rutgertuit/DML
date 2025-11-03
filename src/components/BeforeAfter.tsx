import React from 'react';
import { useTranslation } from 'react-i18next';

export const BeforeAfter: React.FC = () => {
    const { t } = useTranslation();

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
            <p className="font-body text-text-light/85 mb-12 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                {t('beforeAfter.intro')}
            </p>

            {/* Example 1: Social Media Post */}
            <div className="mb-12 bg-card-dark border border-primary/20 rounded-lg overflow-hidden">
                <div className="bg-primary/10 border-b border-primary/20 p-4">
                    <h3 className="font-display text-xl font-bold text-primary">
                        {t('beforeAfter.example1.title')}
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Bad Example */}
                    <div className="p-6 border-r border-primary/20">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🔴</span>
                            <h4 className="font-bold text-red-400 uppercase text-sm">{t('beforeAfter.badLabel')}</h4>
                        </div>

                        <div className="bg-background-dark/50 border border-red-500/30 rounded p-4 mb-4">
                            <p className="font-mono text-sm text-text-light/80 mb-2">{t('beforeAfter.promptLabel')}</p>
                            <p className="text-text-light/60 italic">"{t('beforeAfter.example1.badPrompt')}"</p>
                        </div>

                        <div className="bg-red-900/10 border border-red-500/30 rounded p-4">
                            <p className="font-mono text-sm text-red-400 mb-2">{t('beforeAfter.outputLabel')}</p>
                            <p className="text-text-light/70 text-sm leading-relaxed">
                                {t('beforeAfter.example1.badOutput')}
                            </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-sm text-text-light/60">{t('beforeAfter.example1.badWhy')}</p>
                        </div>
                    </div>

                    {/* Good Example */}
                    <div className="p-6 bg-primary/5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🟢</span>
                            <h4 className="font-bold text-primary uppercase text-sm">{t('beforeAfter.goodLabel')}</h4>
                        </div>

                        <div className="bg-background-dark/50 border border-primary/30 rounded p-4 mb-4">
                            <p className="font-mono text-sm text-text-light/80 mb-2">{t('beforeAfter.promptLabel')}</p>
                            <p className="text-text-light/90 text-sm leading-relaxed">
                                "{t('beforeAfter.example1.goodPrompt')}"
                            </p>
                        </div>

                        <div className="bg-primary/10 border border-primary/30 rounded p-4">
                            <p className="font-mono text-sm text-primary mb-2">{t('beforeAfter.outputLabel')}</p>
                            <p className="text-text-light/90 text-sm leading-relaxed">
                                {t('beforeAfter.example1.goodOutput')}
                            </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                            <span className="text-primary">✅</span>
                            <p className="text-sm text-text-light/80">{t('beforeAfter.example1.goodWhy')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Example 2: Email Rewrite */}
            <div className="mb-12 bg-card-dark border border-secondary/20 rounded-lg overflow-hidden">
                <div className="bg-secondary/10 border-b border-secondary/20 p-4">
                    <h3 className="font-display text-xl font-bold text-secondary">
                        {t('beforeAfter.example2.title')}
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Bad Example */}
                    <div className="p-6 border-r border-secondary/20">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🔴</span>
                            <h4 className="font-bold text-red-400 uppercase text-sm">{t('beforeAfter.badLabel')}</h4>
                        </div>

                        <div className="bg-background-dark/50 border border-red-500/30 rounded p-4 mb-4">
                            <p className="font-mono text-sm text-text-light/80 mb-2">{t('beforeAfter.promptLabel')}</p>
                            <p className="text-text-light/60 italic">"{t('beforeAfter.example2.badPrompt')}"</p>
                        </div>

                        <div className="bg-red-900/10 border border-red-500/30 rounded p-4">
                            <p className="font-mono text-sm text-red-400 mb-2">{t('beforeAfter.outputLabel')}</p>
                            <p className="text-text-light/70 text-sm leading-relaxed">
                                {t('beforeAfter.example2.badOutput')}
                            </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                            <span className="text-red-400">❌</span>
                            <p className="text-sm text-text-light/60">{t('beforeAfter.example2.badWhy')}</p>
                        </div>
                    </div>

                    {/* Good Example */}
                    <div className="p-6 bg-secondary/5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🟢</span>
                            <h4 className="font-bold text-secondary uppercase text-sm">{t('beforeAfter.goodLabel')}</h4>
                        </div>

                        <div className="bg-background-dark/50 border border-secondary/30 rounded p-4 mb-4">
                            <p className="font-mono text-sm text-text-light/80 mb-2">{t('beforeAfter.promptLabel')}</p>
                            <p className="text-text-light/90 text-sm leading-relaxed">
                                "{t('beforeAfter.example2.goodPrompt')}"
                            </p>
                        </div>

                        <div className="bg-secondary/10 border border-secondary/30 rounded p-4">
                            <p className="font-mono text-sm text-secondary mb-2">{t('beforeAfter.outputLabel')}</p>
                            <p className="text-text-light/90 text-sm leading-relaxed">
                                {t('beforeAfter.example2.goodOutput')}
                            </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                            <span className="text-secondary">✅</span>
                            <p className="text-sm text-text-light/80">{t('beforeAfter.example2.goodWhy')}</p>
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
