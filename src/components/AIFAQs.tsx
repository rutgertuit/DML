import React from 'react';
import { useTranslation } from 'react-i18next';

export const AIFAQs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24" id="ai-faqs">
            {/* Main Header */}
            <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
                {t('aiFAQs.title')}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-text-light/70 mb-12 text-center max-w-3xl mx-auto">
                {t('aiFAQs.subtitle')}
            </p>

            {/* FAQ Grid */}
            <div className="grid gap-6 max-w-5xl mx-auto">

                {/* FAQ 1 */}
                <div className="bg-card-dark border border-primary/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">❌</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-xl font-bold text-red-400 mb-2">
                                {t('aiFAQs.faq1.myth')}
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-14">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">✅</span>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-display text-lg font-bold text-primary mb-2">
                                {t('aiFAQs.faq1.truth')}
                            </h4>
                            <p className="text-text-light/80 leading-relaxed">
                                {t('aiFAQs.faq1.explanation')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="bg-card-dark border border-secondary/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">❌</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-xl font-bold text-red-400 mb-2">
                                {t('aiFAQs.faq2.myth')}
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-14">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">✅</span>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-display text-lg font-bold text-secondary mb-2">
                                {t('aiFAQs.faq2.truth')}
                            </h4>
                            <p className="text-text-light/80 leading-relaxed">
                                {t('aiFAQs.faq2.explanation')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="bg-card-dark border border-primary/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">❌</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-xl font-bold text-red-400 mb-2">
                                {t('aiFAQs.faq3.myth')}
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-14">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">✅</span>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-display text-lg font-bold text-primary mb-2">
                                {t('aiFAQs.faq3.truth')}
                            </h4>
                            <p className="text-text-light/80 leading-relaxed">
                                {t('aiFAQs.faq3.explanation')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ 4 */}
                <div className="bg-card-dark border border-secondary/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">❌</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-xl font-bold text-red-400 mb-2">
                                {t('aiFAQs.faq4.myth')}
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-14">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">✅</span>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-display text-lg font-bold text-secondary mb-2">
                                {t('aiFAQs.faq4.truth')}
                            </h4>
                            <p className="text-text-light/80 leading-relaxed">
                                {t('aiFAQs.faq4.explanation')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ 5 */}
                <div className="bg-card-dark border border-primary/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">❌</span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-display text-xl font-bold text-red-400 mb-2">
                                {t('aiFAQs.faq5.myth')}
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-14">
                        <div className="flex-shrink-0">
                            <span className="text-3xl">✅</span>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-display text-lg font-bold text-primary mb-2">
                                {t('aiFAQs.faq5.truth')}
                            </h4>
                            <p className="text-text-light/80 leading-relaxed">
                                {t('aiFAQs.faq5.explanation')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 p-6 bg-primary/10 border border-primary/30 rounded-lg max-w-3xl mx-auto">
                <p className="text-text-light/90 text-lg mb-4">
                    {t('aiFAQs.bottomCTA')}
                </p>
                <a
                    href="#roadmap"
                    className="inline-block font-mono uppercase text-sm bg-primary text-background-dark font-bold py-2 px-6 rounded hover:shadow-glow-blue transition-shadow"
                >
                    {t('aiFAQs.bottomButton')}
                </a>
            </div>
        </section>
    );
};

export default AIFAQs;
