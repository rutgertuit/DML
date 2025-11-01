import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const QuickJumpMenu: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const tools = [
        { id: 'prompt-improver', icon: '🎯', labelKey: 'quickJump.promptImprover' },
        { id: 'hero-gem-wizard', icon: '💎', labelKey: 'quickJump.heroGem' },
        { id: 'notebooklm', icon: '📚', labelKey: 'quickJump.notebookLM' },
    ];

    const sections = [
        { id: 'the-vibe', icon: '✨', labelKey: 'quickJump.theVibe' },
        { id: 'vibe-coding', icon: '⚡', labelKey: 'quickJump.vibeCoding' },
        { id: 'roadmap', icon: '🗺️', labelKey: 'quickJump.roadmap' },
        { id: 'toolkit', icon: '🛠️', labelKey: 'quickJump.toolkit' },
    ];

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-40">
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:shadow-glow-blue transition-all ${isOpen ? 'rotate-45' : ''
                    }`}
                aria-label="Quick Jump Menu"
            >
                <span className="text-2xl">{isOpen ? '✕' : '🚀'}</span>
            </button>

            {/* Menu Panel */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-72 bg-background-dark border-2 border-primary/30 rounded-lg shadow-2xl overflow-hidden animate-fade-in">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 px-4 py-3">
                        <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wide">
                            {t('quickJump.title')}
                        </h3>
                    </div>

                    {/* Tools Section */}
                    <div className="p-3">
                        <p className="text-xs font-mono text-text-light/60 uppercase mb-2 px-2">
                            {t('quickJump.toolsSection')}
                        </p>
                        <div className="space-y-1">
                            {tools.map((tool) => (
                                <button
                                    key={tool.id}
                                    onClick={() => handleClick(tool.id)}
                                    className="w-full text-left px-3 py-2 rounded bg-card-dark border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{tool.icon}</span>
                                        <span className="text-sm text-text-light/80 group-hover:text-primary font-body">
                                            {t(tool.labelKey)}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-primary/20 mx-3"></div>

                    {/* Other Sections */}
                    <div className="p-3">
                        <p className="text-xs font-mono text-text-light/60 uppercase mb-2 px-2">
                            {t('quickJump.sectionsLabel')}
                        </p>
                        <div className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleClick(section.id)}
                                    className="w-full text-left px-3 py-2 rounded bg-card-dark border border-secondary/20 hover:border-secondary hover:bg-secondary/10 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{section.icon}</span>
                                        <span className="text-sm text-text-light/80 group-hover:text-secondary font-body">
                                            {t(section.labelKey)}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickJumpMenu;
