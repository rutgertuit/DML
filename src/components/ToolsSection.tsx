import React from 'react';
import { useTranslation } from 'react-i18next';

interface ToolsSectionProps {
    children: React.ReactNode;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ children }) => {
    const { t } = useTranslation();

    return (
        <section className="py-16" id="tools">
            {/* Tools Header */}
            <div className="text-center mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-xl p-8 md:p-12">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                    {t('promptImprover.toolsHeader.title')}
                </h2>
                <p className="text-text-light/80 text-lg mb-8 max-w-3xl mx-auto">
                    {t('promptImprover.toolsHeader.subtitle')}
                </p>

                {/* 3 Tool Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <a
                        href="#prompt-improver"
                        className="bg-card-dark border border-primary/30 rounded-lg p-6 hover:border-primary hover:shadow-glow-blue transition-all"
                    >
                        <div className="text-3xl mb-3">1️⃣</div>
                        <h3 className="font-display text-lg font-bold text-primary mb-2">
                            {t('promptImprover.toolsHeader.tool1')}
                        </h3>
                        <p className="text-text-light/70 text-sm">
                            {t('promptImprover.toolsHeader.tool1desc')}
                        </p>
                    </a>

                    <a
                        href="#hero-gem"
                        className="bg-card-dark border border-secondary/30 rounded-lg p-6 hover:border-secondary hover:shadow-glow-purple transition-all"
                    >
                        <div className="text-3xl mb-3">2️⃣</div>
                        <h3 className="font-display text-lg font-bold text-secondary mb-2">
                            {t('promptImprover.toolsHeader.tool2')}
                        </h3>
                        <p className="text-text-light/70 text-sm">
                            {t('promptImprover.toolsHeader.tool2desc')}
                        </p>
                    </a>

                    <a
                        href="#notebooklm"
                        className="bg-card-dark border border-primary/30 rounded-lg p-6 hover:border-primary hover:shadow-glow-blue transition-all"
                    >
                        <div className="text-3xl mb-3">3️⃣</div>
                        <h3 className="font-display text-lg font-bold text-primary mb-2">
                            {t('promptImprover.toolsHeader.tool3')}
                        </h3>
                        <p className="text-text-light/70 text-sm">
                            {t('promptImprover.toolsHeader.tool3desc')}
                        </p>
                    </a>
                </div>
            </div>

            {/* Tool Content */}
            {children}

            {/* Tools Section End Marker */}
            <div className="mt-16 text-center">
                <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-8 py-4">
                    <p className="text-primary font-bold text-lg">
                        ✓ {t('promptImprover.toolsHeader.endMessage')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
