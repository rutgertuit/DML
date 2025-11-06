import React from 'react';
import { useTranslation } from 'react-i18next';

const PresentationContext: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="intro" className="py-12 md:py-16 bg-gradient-to-br from-background-dark via-card-dark to-background-dark">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-text-light mb-4">
                        {t('presentationContext.title')}
                    </h2>
                    <p className="font-body text-lg text-text-light/80 max-w-3xl mx-auto">
                        {t('presentationContext.subtitle')}
                    </p>
                </div>

                {/* Context Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* What is this? */}
                    <div className="bg-background-light border border-primary/30 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-2xl">🎯</span>
                            <h3 className="font-display text-xl font-bold text-text-light">
                                {t('presentationContext.whatTitle')}
                            </h3>
                        </div>
                        <p className="text-text-light/80 leading-relaxed">
                            {t('presentationContext.whatDesc')}
                        </p>
                    </div>

                    {/* Who is this for? */}
                    <div className="bg-background-light border border-secondary/30 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-2xl">👥</span>
                            <h3 className="font-display text-xl font-bold text-text-light">
                                {t('presentationContext.whoTitle')}
                            </h3>
                        </div>
                        <p className="text-text-light/80 leading-relaxed">
                            {t('presentationContext.whoDesc')}
                        </p>
                    </div>
                </div>

                {/* Key Takeaway Banner */}
                <div className="mt-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-l-4 border-primary rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">💡</span>
                        <div>
                            <h4 className="font-display text-lg font-bold text-primary mb-2">
                                {t('presentationContext.keyTakeaway')}
                            </h4>
                            <p className="text-text-light/90 leading-relaxed">
                                {t('presentationContext.keyTakeawayDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PresentationContext;
