import { useTranslation } from 'react-i18next';

const IntroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="intro" className="py-16">
            <div className="max-w-4xl mx-auto">
                {/* Main Title */}
                <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-primary mb-12 text-glow-blue">
                    {t('intro.title')}
                </h2>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-card-dark to-background-secondary border-2 border-primary/30 rounded-xl p-8 md:p-12 shadow-2xl">
                    {/* Paragraphs */}
                    <div className="space-y-6 text-text-light/90 leading-relaxed">
                        <p className="text-lg md:text-xl">
                            {t('intro.paragraph1.part1')}{' '}
                            <em className="text-primary font-semibold">{t('intro.paragraph1.emphasis')}</em>{' '}
                            {t('intro.paragraph1.part2')}
                        </p>

                        <p className="text-lg md:text-xl font-semibold text-text-light">
                            {t('intro.paragraph2')}
                        </p>

                        <p className="text-lg md:text-xl">
                            {t('intro.paragraph3.part1')}{' '}
                            <strong className="text-secondary font-bold">{t('intro.paragraph3.emphasis')}</strong>
                        </p>

                        <p className="text-lg md:text-xl">
                            {t('intro.paragraph4')}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 pt-6 border-t border-primary/20">
                            <p className="text-xl md:text-2xl font-bold text-center text-primary animate-pulse">
                                {t('intro.cta')} 👇
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-8 flex justify-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150"></div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
