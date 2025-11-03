import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutAuthor: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 md:py-16" id="about-author">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h2 className="font-display text-3xl md:text-4xl font-bold text-text-light mb-8 text-center">
                    {t('aboutAuthor.title')}
                </h2>

                {/* Main Card */}
                <div className="bg-gradient-to-br from-card-dark to-background-secondary border-2 border-primary/30 rounded-xl p-8 md:p-12 shadow-2xl">
                    {/* Profile Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                        {/* Avatar/Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl md:text-5xl border-4 border-primary/30">
                                👨‍💼
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="flex-1">
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                                Rutger Tuit
                            </h3>
                            <p className="text-secondary font-semibold mb-4">
                                {t('aboutAuthor.role')}
                            </p>
                            <p className="text-text-light/90 leading-relaxed mb-4">
                                {t('aboutAuthor.bio')}
                            </p>
                        </div>
                    </div>

                    {/* Philosophy Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-background-dark/50 border border-primary/20 rounded-lg p-5">
                            <div className="text-2xl mb-3">🚫</div>
                            <h4 className="font-bold text-primary mb-2">{t('aboutAuthor.notA.title')}</h4>
                            <p className="text-sm text-text-light/80">{t('aboutAuthor.notA.desc')}</p>
                        </div>

                        <div className="bg-background-dark/50 border border-secondary/20 rounded-lg p-5">
                            <div className="text-2xl mb-3">✅</div>
                            <h4 className="font-bold text-secondary mb-2">{t('aboutAuthor.butA.title')}</h4>
                            <p className="text-sm text-text-light/80">{t('aboutAuthor.butA.desc')}</p>
                        </div>

                        <div className="bg-background-dark/50 border border-primary/20 rounded-lg p-5">
                            <div className="text-2xl mb-3">🤖</div>
                            <h4 className="font-bold text-primary mb-2">{t('aboutAuthor.aiRole.title')}</h4>
                            <p className="text-sm text-text-light/80">{t('aboutAuthor.aiRole.desc')}</p>
                        </div>
                    </div>

                    {/* Playground Note */}
                    <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">🎪</span>
                            <div>
                                <h4 className="font-bold text-secondary mb-2">{t('aboutAuthor.playground.title')}</h4>
                                <p className="text-text-light/90 leading-relaxed">
                                    {t('aboutAuthor.playground.desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-6 border-t border-primary/20">
                        <a
                            href="https://www.linkedin.com/in/rutgertuit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background-dark font-mono text-sm uppercase hover:bg-secondary hover:shadow-glow-purple transition-all rounded"
                        >
                            <span>💼</span>
                            <span>{t('aboutAuthor.linkedinCTA')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAuthor;
