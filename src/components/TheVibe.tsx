import React from 'react';
import { useTranslation } from 'react-i18next';

export const TheVibe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24" id="the-vibe">
            {/* Main Header */}
            <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
                {t('theVibe.title')}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-text-light/70 mb-12 text-center max-w-3xl mx-auto text-lg">
                {t('theVibe.subtitle')}
            </p>

            {/* Content Card */}
            <div className="bg-gradient-to-br from-card-dark to-background-secondary border-2 border-primary/30 rounded-xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">

                {/* Main Explanation */}
                <div className="space-y-6 text-text-light/90 leading-relaxed">
                    <p className="text-lg md:text-xl">
                        {t('theVibe.paragraph1')}
                    </p>

                    <p className="text-lg md:text-xl">
                        {t('theVibe.paragraph2')}
                    </p>

                    <p className="text-lg md:text-xl font-semibold text-primary">
                        {t('theVibe.paragraph3')}
                    </p>
                </div>

                {/* Key Points Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="font-display text-lg font-bold text-primary mb-2">
                            {t('theVibe.point1.title')}
                        </h3>
                        <p className="text-text-light/80 text-sm">
                            {t('theVibe.point1.desc')}
                        </p>
                    </div>

                    <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6">
                        <div className="text-3xl mb-3">🎭</div>
                        <h3 className="font-display text-lg font-bold text-secondary mb-2">
                            {t('theVibe.point2.title')}
                        </h3>
                        <p className="text-text-light/80 text-sm">
                            {t('theVibe.point2.desc')}
                        </p>
                    </div>

                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="font-display text-lg font-bold text-primary mb-2">
                            {t('theVibe.point3.title')}
                        </h3>
                        <p className="text-text-light/80 text-sm">
                            {t('theVibe.point3.desc')}
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-primary/20 text-center">
                    <p className="text-lg text-text-light/90 mb-4">
                        {t('theVibe.cta')}
                    </p>
                    <p className="text-sm text-text-light/60">
                        {t('theVibe.hint')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheVibe;
