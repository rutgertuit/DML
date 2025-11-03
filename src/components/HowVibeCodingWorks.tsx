import React from 'react';
import { useTranslation } from 'react-i18next';

export const HowVibeCodingWorks: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 md:py-16" id="vibe-coding">
            {/* Main Header */}
            <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
                {t('vibeCoding.title')}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-text-light/70 mb-12 text-center max-w-3xl mx-auto text-lg">
                {t('vibeCoding.subtitle')}
            </p>

            {/* Intro */}
            <p className="font-body text-text-light/85 text-center max-w-4xl mx-auto mb-16 leading-relaxed text-lg">
                {t('vibeCoding.intro')}
            </p>

            {/* Main Content Card */}
            <div className="bg-card-dark border border-primary/20 p-8 mb-12">

                {/* What is Vibe Coding */}
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    {t('vibeCoding.whatIsTitle')}
                </h3>

                {/* Two-column layout: Content + Video */}
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                    {/* Left: Content */}
                    <div>
                        <p className="font-body text-text-light/85 mb-6 leading-relaxed">
                            {t('vibeCoding.description')}
                        </p>

                        {/* Why It Works */}
                        <div className="mb-6">
                            <h4 className="font-bold text-primary mb-3">{t('vibeCoding.whyTitle')}</h4>
                            <ul className="space-y-2 text-sm text-text-light/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">✨</span>
                                    <span>{t('vibeCoding.benefit1')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">⚡</span>
                                    <span>{t('vibeCoding.benefit2')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">🎨</span>
                                    <span>{t('vibeCoding.benefit3')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Reality Check */}
                        <div className="bg-secondary/10 border border-secondary/30 rounded p-4 text-sm text-text-light/80">
                            <span className="text-secondary font-bold">⚠️ </span>
                            {t('vibeCoding.realityCheck')}
                        </div>
                    </div>

                    {/* Right: Video */}
                    <div className="w-full aspect-video bg-background-dark border border-primary/20 rounded overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TF1E0v4l7-8"
                            title={t('vibeCoding.videoDescription')}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mt-8 pt-6 border-t border-primary/20">
                    <h4 className="font-bold text-primary mb-2">{t('vibeCoding.toolsTitle')}</h4>
                    <p className="text-text-light/70 text-sm mb-4">{t('vibeCoding.toolsIntro')}</p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://gemini.google.com/app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                        >
                            <span>💎</span>
                            <span className="font-mono text-sm">Gemini</span>
                        </a>
                        <a
                            href="https://aistudio.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                        >
                            <span>🎨</span>
                            <span className="font-mono text-sm">AI Studio</span>
                        </a>
                        <a
                            href="https://stitch.withgoogle.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                        >
                            <span>🧵</span>
                            <span className="font-mono text-sm">Google Stitch</span>
                        </a>
                        <a
                            href="https://gemini-cli.xyz/docs/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                        >
                            <span>⌨️</span>
                            <span className="font-mono text-sm">Gemini CLI</span>
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                        >
                            <span>🐙</span>
                            <span className="font-mono text-sm">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Real Example: How This Site Was Built */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/30 rounded-lg p-8">
                <h3 className="font-display text-2xl font-bold text-secondary mb-4 text-center">
                    {t('vibeCoding.exampleTitle')}
                </h3>
                <p className="text-text-light/80 text-center mb-8 max-w-3xl mx-auto">
                    {t('vibeCoding.exampleIntro')}
                </p>

                {/* Step Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-card-dark border border-primary/20 rounded-lg p-6">
                        <div className="text-2xl mb-3">1️⃣</div>
                        <h4 className="font-bold text-primary mb-2">{t('vibeCoding.example.step1.title')}</h4>
                        <p className="text-sm text-text-light/70">{t('vibeCoding.example.step1.desc')}</p>
                    </div>

                    <div className="bg-card-dark border border-secondary/20 rounded-lg p-6">
                        <div className="text-2xl mb-3">2️⃣</div>
                        <h4 className="font-bold text-secondary mb-2">{t('vibeCoding.example.step2.title')}</h4>
                        <p className="text-sm text-text-light/70">{t('vibeCoding.example.step2.desc')}</p>
                    </div>

                    <div className="bg-card-dark border border-primary/20 rounded-lg p-6">
                        <div className="text-2xl mb-3">3️⃣</div>
                        <h4 className="font-bold text-primary mb-2">{t('vibeCoding.example.step3.title')}</h4>
                        <p className="text-sm text-text-light/70">{t('vibeCoding.example.step3.desc')}</p>
                    </div>

                    <div className="bg-card-dark border border-secondary/20 rounded-lg p-6">
                        <div className="text-2xl mb-3">4️⃣</div>
                        <h4 className="font-bold text-secondary mb-2">{t('vibeCoding.example.step4.title')}</h4>
                        <p className="text-sm text-text-light/70">{t('vibeCoding.example.step4.desc')}</p>
                    </div>

                    <div className="bg-card-dark border border-primary/20 rounded-lg p-6">
                        <div className="text-2xl mb-3">5️⃣</div>
                        <h4 className="font-bold text-primary mb-2">{t('vibeCoding.example.step5.title')}</h4>
                        <p className="text-sm text-text-light/70">{t('vibeCoding.example.step5.desc')}</p>
                    </div>

                    <div className="bg-card-dark border border-secondary/20 rounded-lg p-6">
                        <div className="text-2xl mb-3">6️⃣</div>
                        <h4 className="font-bold text-secondary mb-2">{t('vibeCoding.example.step6.title')}</h4>
                        <p className="text-sm text-text-light/70">{t('vibeCoding.example.step6.desc')}</p>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-8 text-center">
                    <p className="text-text-light/70 text-sm">
                        {t('vibeCoding.exampleNote')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowVibeCodingWorks;
