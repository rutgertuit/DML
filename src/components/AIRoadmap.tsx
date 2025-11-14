import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { generateICSFile, generateRoadmapEvents } from '../utils/calendarExport';

export const AIRoadmap: React.FC = () => {
    const { t } = useTranslation();
    const [activePlan, setActivePlan] = useState<'beginner' | 'advanced' | 'builder'>('beginner');
    const [activeWeek, setActiveWeek] = useState<number>(1);

    const handleExportCalendar = () => {
        // Get all translation data for the roadmap
        const roadmapData = {
            beginner: {
                week1: {
                    title: t('roadmap.beginner.week1.title'),
                    goal: t('roadmap.beginner.week1.goal'),
                    task1: {
                        title: t('roadmap.beginner.week1.task1.title'),
                        desc: t('roadmap.beginner.week1.task1.desc'),
                        link: t('roadmap.beginner.week1.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.beginner.week1.task2.title'),
                        desc: t('roadmap.beginner.week1.task2.desc'),
                        link: t('roadmap.beginner.week1.task2.link'),
                    },
                    task3: {
                        title: t('roadmap.beginner.week1.task3.title'),
                        desc: t('roadmap.beginner.week1.task3.desc'),
                    },
                },
                week2: {
                    title: t('roadmap.beginner.week2.title'),
                    goal: t('roadmap.beginner.week2.goal'),
                    task1: {
                        title: t('roadmap.beginner.week2.task1.title'),
                        desc: t('roadmap.beginner.week2.task1.desc'),
                        link: t('roadmap.beginner.week2.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.beginner.week2.task2.title'),
                        desc: t('roadmap.beginner.week2.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.beginner.week2.task3.title'),
                        desc: t('roadmap.beginner.week2.task3.desc'),
                    },
                },
                week3: {
                    title: t('roadmap.beginner.week3.title'),
                    goal: t('roadmap.beginner.week3.goal'),
                    task1: {
                        title: t('roadmap.beginner.week3.task1.title'),
                        desc: t('roadmap.beginner.week3.task1.desc'),
                        link: t('roadmap.beginner.week3.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.beginner.week3.task2.title'),
                        desc: t('roadmap.beginner.week3.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.beginner.week3.task3.title'),
                        desc: t('roadmap.beginner.week3.task3.desc'),
                    },
                },
                week4: {
                    title: t('roadmap.beginner.week4.title'),
                    goal: t('roadmap.beginner.week4.goal'),
                    task1: {
                        title: t('roadmap.beginner.week4.task1.title'),
                        desc: t('roadmap.beginner.week4.task1.desc'),
                        link: t('roadmap.beginner.week4.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.beginner.week4.task2.title'),
                        desc: t('roadmap.beginner.week4.task2.desc'),
                        link: undefined,
                    },
                    task3: {
                        title: t('roadmap.beginner.week4.task3.title'),
                        desc: t('roadmap.beginner.week4.task3.desc'),
                        link: undefined,
                    },
                },
            },
            advanced: {
                week1: {
                    title: t('roadmap.advanced.week1.title'),
                    goal: t('roadmap.advanced.week1.goal'),
                    task1: {
                        title: t('roadmap.advanced.week1.task1.title'),
                        desc: t('roadmap.advanced.week1.task1.desc'),
                        link: t('roadmap.advanced.week1.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.advanced.week1.task2.title'),
                        desc: t('roadmap.advanced.week1.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.advanced.week1.task3.title'),
                        desc: t('roadmap.advanced.week1.task3.desc'),
                    },
                },
                week2: {
                    title: t('roadmap.advanced.week2.title'),
                    goal: t('roadmap.advanced.week2.goal'),
                    task1: {
                        title: t('roadmap.advanced.week2.task1.title'),
                        desc: t('roadmap.advanced.week2.task1.desc'),
                        link: t('roadmap.advanced.week2.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.advanced.week2.task2.title'),
                        desc: t('roadmap.advanced.week2.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.advanced.week2.task3.title'),
                        desc: t('roadmap.advanced.week2.task3.desc'),
                    },
                },
                week3: {
                    title: t('roadmap.advanced.week3.title'),
                    goal: t('roadmap.advanced.week3.goal'),
                    task1: {
                        title: t('roadmap.advanced.week3.task1.title'),
                        desc: t('roadmap.advanced.week3.task1.desc'),
                        link: t('roadmap.advanced.week3.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.advanced.week3.task2.title'),
                        desc: t('roadmap.advanced.week3.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.advanced.week3.task3.title'),
                        desc: t('roadmap.advanced.week3.task3.desc'),
                    },
                },
                week4: {
                    title: t('roadmap.advanced.week4.title'),
                    goal: t('roadmap.advanced.week4.goal'),
                    task1: {
                        title: t('roadmap.advanced.week4.task1.title'),
                        desc: t('roadmap.advanced.week4.task1.desc'),
                        link: t('roadmap.advanced.week4.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.advanced.week4.task2.title'),
                        desc: t('roadmap.advanced.week4.task2.desc'),
                        link: undefined,
                    },
                    task3: {
                        title: t('roadmap.advanced.week4.task3.title'),
                        desc: t('roadmap.advanced.week4.task3.desc'),
                        link: undefined,
                    },
                },
            },
            builder: {
                week1: {
                    title: t('roadmap.builder.week1.title'),
                    goal: t('roadmap.builder.week1.goal'),
                    task1: {
                        title: t('roadmap.builder.week1.task1.title'),
                        desc: t('roadmap.builder.week1.task1.desc'),
                        link: t('roadmap.builder.week1.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.builder.week1.task2.title'),
                        desc: t('roadmap.builder.week1.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.builder.week1.task3.title'),
                        desc: t('roadmap.builder.week1.task3.desc'),
                    },
                },
                week2: {
                    title: t('roadmap.builder.week2.title'),
                    goal: t('roadmap.builder.week2.goal'),
                    task1: {
                        title: t('roadmap.builder.week2.task1.title'),
                        desc: t('roadmap.builder.week2.task1.desc'),
                        link: t('roadmap.builder.week2.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.builder.week2.task2.title'),
                        desc: t('roadmap.builder.week2.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.builder.week2.task3.title'),
                        desc: t('roadmap.builder.week2.task3.desc'),
                    },
                },
                week3: {
                    title: t('roadmap.builder.week3.title'),
                    goal: t('roadmap.builder.week3.goal'),
                    task1: {
                        title: t('roadmap.builder.week3.task1.title'),
                        desc: t('roadmap.builder.week3.task1.desc'),
                        link: t('roadmap.builder.week3.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.builder.week3.task2.title'),
                        desc: t('roadmap.builder.week3.task2.desc'),
                    },
                    task3: {
                        title: t('roadmap.builder.week3.task3.title'),
                        desc: t('roadmap.builder.week3.task3.desc'),
                    },
                },
                week4: {
                    title: t('roadmap.builder.week4.title'),
                    goal: t('roadmap.builder.week4.goal'),
                    task1: {
                        title: t('roadmap.builder.week4.task1.title'),
                        desc: t('roadmap.builder.week4.task1.desc'),
                        link: t('roadmap.builder.week4.task1.link'),
                    },
                    task2: {
                        title: t('roadmap.builder.week4.task2.title'),
                        desc: t('roadmap.builder.week4.task2.desc'),
                        link: undefined,
                    },
                    task3: {
                        title: t('roadmap.builder.week4.task3.title'),
                        desc: t('roadmap.builder.week4.task3.desc'),
                        link: undefined,
                    },
                },
            },
        };

        const events = generateRoadmapEvents(activePlan, roadmapData);
        const filename = `ai-roadmap-${activePlan}-${new Date().toISOString().split('T')[0]}.ics`;
        generateICSFile(events, filename);
    };

    return (
        <section className="py-12 md:py-16" id="roadmap">
            {/* Main Header */}
            <h2 className="text-3xl font-display font-bold uppercase mb-4 text-center text-text-light">
                {t('roadmap.title')}
            </h2>

            {/* Subtitle */}
            <p className="font-body text-text-light/70 mb-6 text-center max-w-3xl mx-auto">
                {t('roadmap.subtitle')}
            </p>

            {/* Intro */}
            <p className="font-body text-text-light/85 mb-6 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                {t('roadmap.intro')}
            </p>

            {/* Privacy Reminder */}
            <div className="mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4 max-w-3xl mx-auto">
                <p className="font-body text-sm text-text-light/90 text-center">
                    {t('roadmap.privacyReminder')}
                </p>
            </div>

            {/* Plan Selector */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 max-w-6xl mx-auto">
                <button
                    onClick={() => { setActivePlan('beginner'); setActiveWeek(1); }}
                    className={`flex-1 p-6 rounded-lg border-2 transition-all ${activePlan === 'beginner'
                        ? 'bg-primary/20 border-primary shadow-glow-blue'
                        : 'bg-card-dark border-primary/30 hover:border-primary'
                        }`}
                >
                    <div className="text-3xl mb-2">🌱</div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">
                        {t('roadmap.planBeginner')}
                    </h3>
                    <p className="text-text-light/70 text-sm">
                        {t('roadmap.planBeginnerDesc')}
                    </p>
                </button>

                <button
                    onClick={() => { setActivePlan('advanced'); setActiveWeek(1); }}
                    className={`flex-1 p-6 rounded-lg border-2 transition-all ${activePlan === 'advanced'
                        ? 'bg-secondary/20 border-secondary shadow-glow-purple'
                        : 'bg-card-dark border-secondary/30 hover:border-secondary'
                        }`}
                >
                    <div className="text-3xl mb-2">🚀</div>
                    <h3 className="font-display text-xl font-bold text-secondary mb-2">
                        {t('roadmap.planAdvanced')}
                    </h3>
                    <p className="text-text-light/70 text-sm">
                        {t('roadmap.planAdvancedDesc')}
                    </p>
                </button>

                <button
                    onClick={() => { setActivePlan('builder'); setActiveWeek(1); }}
                    className={`flex-1 p-6 rounded-lg border-2 transition-all ${activePlan === 'builder'
                        ? 'bg-primary/20 border-primary shadow-glow-blue'
                        : 'bg-card-dark border-primary/30 hover:border-primary'
                        }`}
                >
                    <div className="text-3xl mb-2">🏗️</div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">
                        {t('roadmap.planBuilder')}
                    </h3>
                    <p className="text-text-light/70 text-sm">
                        {t('roadmap.planBuilderDesc')}
                    </p>
                </button>
            </div>

            {/* Calendar Export Button */}
            <div className="flex justify-center mb-12">
                <button
                    onClick={handleExportCalendar}
                    className={`px-8 py-4 rounded-lg border-2 transition-all font-display font-bold ${(activePlan === 'beginner' || activePlan === 'builder')
                        ? 'bg-primary/10 border-primary text-primary hover:bg-primary/20 hover:shadow-glow-blue'
                        : 'bg-secondary/10 border-secondary text-secondary hover:bg-secondary/20 hover:shadow-glow-purple'
                        }`}
                >
                    {t('roadmap.exportCalendar')} 📅
                </button>
            </div>
            <p className="text-center text-text-light/60 text-sm mb-12 max-w-2xl mx-auto">
                {t('roadmap.exportCalendarDesc')}
            </p>

            {/* Week Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[1, 2, 3, 4].map((week) => (
                    <button
                        key={week}
                        onClick={() => setActiveWeek(week)}
                        className={`px-6 py-3 font-display font-bold rounded transition-all ${activeWeek === week
                            ? (activePlan === 'beginner' || activePlan === 'builder')
                                ? 'bg-primary text-background-dark shadow-glow-blue'
                                : 'bg-secondary text-background-dark shadow-glow-purple'
                            : `bg-card-dark border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/30 hover:border-primary hover:text-primary' : 'border-secondary/30 hover:border-secondary hover:text-secondary'} text-text-light/70`
                            }`}
                    >
                        {t(`roadmap.${activePlan}.week${week}.tab`)}
                    </button>
                ))}
            </div>

            {/* Week Content */}
            <div className="max-w-4xl mx-auto">

                {/* Week 1 */}
                {activeWeek === 1 && (
                    <div className="animate-fade-in">
                        <div className={`bg-gradient-to-r ${(activePlan === 'beginner' || activePlan === 'builder') ? 'from-primary/20 to-secondary/20 border-primary/30' : 'from-secondary/20 to-primary/20 border-secondary/30'} border rounded-lg p-8 mb-6`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{t(`roadmap.${activePlan}.week1.icon`)}</span>
                                <div>
                                    <h3 className={`font-display text-2xl font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'}`}>
                                        {t(`roadmap.${activePlan}.week1.title`)}
                                    </h3>
                                    <p className="text-text-light/70 text-sm">{t(`roadmap.${activePlan}.week1.timeframe`)}</p>
                                </div>
                            </div>

                            <p className="text-text-light/80 mb-6 text-lg">
                                <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'}`}>{t('roadmap.goalLabel')}</span> {t(`roadmap.${activePlan}.week1.goal`)}
                            </p>

                            <div className="space-y-4">
                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} mb-2`}>{t(`roadmap.${activePlan}.week1.task1.title`)}</h4>
                                    <p className="text-text-light/80 text-sm mb-2">{t(`roadmap.${activePlan}.week1.task1.desc`)}</p>
                                    <a href="#prompt-improver" className={`${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} text-sm hover:underline`}>
                                        → {t(`roadmap.${activePlan}.week1.task1.link`)}
                                    </a>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} mb-2`}>{t(`roadmap.${activePlan}.week1.task2.title`)}</h4>
                                    <p className="text-text-light/80 text-sm mb-2">{t(`roadmap.${activePlan}.week1.task2.desc`)}</p>
                                    <a href="#before-after" className={`${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} text-sm hover:underline`}>
                                        → {t(`roadmap.${activePlan}.week1.task2.link`)}
                                    </a>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} mb-2`}>{t(`roadmap.${activePlan}.week1.task3.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week1.task3.desc`)}</p>
                                </div>
                            </div>

                            <div className={`mt-6 pt-6 border-t ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'}`}>
                                <p className="text-text-light/90 text-sm">
                                    <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'}`}>✅ {t('roadmap.successLabel')}</span> {t(`roadmap.${activePlan}.week1.success`)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Week 2 */}
                {activeWeek === 2 && (
                    <div className="animate-fade-in">
                        <div className={`bg-gradient-to-r ${(activePlan === 'beginner' || activePlan === 'builder') ? 'from-secondary/20 to-primary/20 border-secondary/30' : 'from-primary/20 to-secondary/20 border-primary/30'} border rounded-lg p-8 mb-6`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{t(`roadmap.${activePlan}.week2.icon`)}</span>
                                <div>
                                    <h3 className={`font-display text-2xl font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'}`}>
                                        {t(`roadmap.${activePlan}.week2.title`)}
                                    </h3>
                                    <p className="text-text-light/70 text-sm">{t(`roadmap.${activePlan}.week2.timeframe`)}</p>
                                </div>
                            </div>

                            <p className="text-text-light/80 mb-6 text-lg">
                                <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'}`}>{t('roadmap.goalLabel')}</span> {t(`roadmap.${activePlan}.week2.goal`)}
                            </p>

                            <div className="space-y-4">
                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} mb-2`}>{t(`roadmap.${activePlan}.week2.task1.title`)}</h4>
                                    <p className="text-text-light/80 text-sm mb-2">{t(`roadmap.${activePlan}.week2.task1.desc`)}</p>
                                    <a href="#prompt-improver" className={`${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} text-sm hover:underline`}>
                                        → {t(`roadmap.${activePlan}.week2.task1.link`)}
                                    </a>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} mb-2`}>{t(`roadmap.${activePlan}.week2.task2.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week2.task2.desc`)}</p>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} mb-2`}>{t(`roadmap.${activePlan}.week2.task3.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week2.task3.desc`)}</p>
                                </div>
                            </div>

                            <div className={`mt-6 pt-6 border-t ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'}`}>
                                <p className="text-text-light/90 text-sm">
                                    <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'}`}>✅ {t('roadmap.successLabel')}</span> {t(`roadmap.${activePlan}.week2.success`)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Week 3 */}
                {activeWeek === 3 && (
                    <div className="animate-fade-in">
                        <div className={`bg-gradient-to-r ${(activePlan === 'beginner' || activePlan === 'builder') ? 'from-primary/20 to-secondary/20 border-primary/30' : 'from-secondary/20 to-primary/20 border-secondary/30'} border rounded-lg p-8 mb-6`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{t(`roadmap.${activePlan}.week3.icon`)}</span>
                                <div>
                                    <h3 className={`font-display text-2xl font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'}`}>
                                        {t(`roadmap.${activePlan}.week3.title`)}
                                    </h3>
                                    <p className="text-text-light/70 text-sm">{t(`roadmap.${activePlan}.week3.timeframe`)}</p>
                                </div>
                            </div>

                            <p className="text-text-light/80 mb-6 text-lg">
                                <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'}`}>{t('roadmap.goalLabel')}</span> {t(`roadmap.${activePlan}.week3.goal`)}
                            </p>

                            <div className="space-y-4">
                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} mb-2`}>{t(`roadmap.${activePlan}.week3.task1.title`)}</h4>
                                    <p className="text-text-light/80 text-sm mb-2">{t(`roadmap.${activePlan}.week3.task1.desc`)}</p>
                                    <a href="#hero-gem" className={`${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} text-sm hover:underline`}>
                                        → {t(`roadmap.${activePlan}.week3.task1.link`)}
                                    </a>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} mb-2`}>{t(`roadmap.${activePlan}.week3.task2.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week3.task2.desc`)}</p>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'} mb-2`}>{t(`roadmap.${activePlan}.week3.task3.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week3.task3.desc`)}</p>
                                </div>
                            </div>

                            <div className={`mt-6 pt-6 border-t ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-primary/20' : 'border-secondary/20'}`}>
                                <p className="text-text-light/90 text-sm">
                                    <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-primary' : 'text-secondary'}`}>✅ {t('roadmap.successLabel')}</span> {t(`roadmap.${activePlan}.week3.success`)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Week 4 */}
                {activeWeek === 4 && (
                    <div className="animate-fade-in">
                        <div className={`bg-gradient-to-r ${(activePlan === 'beginner' || activePlan === 'builder') ? 'from-secondary/20 to-primary/20 border-secondary/30' : 'from-primary/20 to-secondary/20 border-primary/30'} border rounded-lg p-8 mb-6`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{t(`roadmap.${activePlan}.week4.icon`)}</span>
                                <div>
                                    <h3 className={`font-display text-2xl font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'}`}>
                                        {t(`roadmap.${activePlan}.week4.title`)}
                                    </h3>
                                    <p className="text-text-light/70 text-sm">{t(`roadmap.${activePlan}.week4.timeframe`)}</p>
                                </div>
                            </div>

                            <p className="text-text-light/80 mb-6 text-lg">
                                <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'}`}>{t('roadmap.goalLabel')}</span> {t(`roadmap.${activePlan}.week4.goal`)}
                            </p>

                            <div className="space-y-4">
                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} mb-2`}>{t(`roadmap.${activePlan}.week4.task1.title`)}</h4>
                                    <p className="text-text-light/80 text-sm mb-2">{t(`roadmap.${activePlan}.week4.task1.desc`)}</p>
                                    <a href={(activePlan === 'beginner' || activePlan === 'builder') ? '#notebooklm' : '#vibe-coding'} className={`${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} text-sm hover:underline`}>
                                        → {t(`roadmap.${activePlan}.week4.task1.link`)}
                                    </a>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} mb-2`}>{t(`roadmap.${activePlan}.week4.task2.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week4.task2.desc`)}</p>
                                </div>

                                <div className={`bg-background-dark/50 border ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'} rounded p-4`}>
                                    <h4 className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'} mb-2`}>{t(`roadmap.${activePlan}.week4.task3.title`)}</h4>
                                    <p className="text-text-light/80 text-sm">{t(`roadmap.${activePlan}.week4.task3.desc`)}</p>
                                </div>
                            </div>

                            <div className={`mt-6 pt-6 border-t ${(activePlan === 'beginner' || activePlan === 'builder') ? 'border-secondary/20' : 'border-primary/20'}`}>
                                <p className="text-text-light/90 text-sm">
                                    <span className={`font-bold ${(activePlan === 'beginner' || activePlan === 'builder') ? 'text-secondary' : 'text-primary'}`}>✅ {t('roadmap.successLabel')}</span> {t(`roadmap.${activePlan}.week4.success`)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Bottom Encouragement */}
            <div className="text-center mt-12 max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6">
                    <p className="text-text-light/90 text-lg font-bold mb-2">
                        {t('roadmap.encouragement')}
                    </p>
                    <p className="text-text-light/70 text-sm">
                        {t('roadmap.reminder')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AIRoadmap;
