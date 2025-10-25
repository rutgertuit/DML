import React, { useState } from 'react';
import type { Language } from '../types';
import { NOTEBOOKLM_TABS } from '../constants';

interface NotebookLMSectionProps {
    texts: any;
    language: Language;
}

const NotebookLMSection: React.FC<NotebookLMSectionProps> = ({ texts, language }) => {
    const tabs = NOTEBOOKLM_TABS[language];
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const activeTabData = tabs.find(tab => tab.id === activeTab);

    return (
        <section className="py-24" id="notebooklm">
            <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">{texts.notebookLM.title}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <p className="mb-4">{texts.notebookLM.description}</p>
                    {language === 'en' && <p className="font-mono text-sm text-text-light/70 mb-6">NL: {TEXTS.nl.notebookLM.description}</p>}
                    <div className="aspect-video bg-card-dark border border-primary/50 p-2 mb-6 shadow-glow-blue">
                        <div className="w-full h-full bg-background-dark flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-6xl cursor-pointer">play_circle</span>
                        </div>
                    </div>
                    <a className="inline-block w-full text-center bg-primary text-background-dark font-bold uppercase py-3 px-6 hover:bg-primary/80 button-glow-blue transition-all" href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">
                        <span>{texts.notebookLM.cta}</span>
                        {language === 'en' && <span className="hidden">NL: {TEXTS.nl.notebookLM.cta}</span>}
                    </a>
                </div>
                <div>
                    <div className="border-b border-text-light/20">
                        <div className="flex space-x-1 overflow-x-auto pb-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-2 px-3 border-b-2 font-display uppercase tracking-wider transition-colors flex-shrink-0 ${activeTab === tab.id ? 'tab-active' : 'border-transparent text-text-light/70 hover:text-text-light hover:border-primary/50'}`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="bg-card-dark p-4 border border-text-light/20 font-mono text-sm h-48 overflow-y-auto">
                            {activeTabData?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Dummy constant to satisfy TS compiler within this component file
const TEXTS = {
  nl: {
    notebookLM: {
      description: "Creëer een gecentraliseerde kennisbank voor je hele team. Upload campagnebriefings, onderzoeksdocumenten en merkrichtlijnen om Gemini te baseren op jullie specifieke context, zodat elke stakeholder consistente, relevante antwoorden krijgt.",
      cta: "Probeer NotebookLM"
    }
  }
}
export default NotebookLMSection;