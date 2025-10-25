
import React, { useState } from 'react';
import type { Language } from './types';
import { TEXTS } from './constants';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromptImproverSection from './components/PromptImproverSection';
import HeroGemWorkflowSection from './components/HeroGemWorkflowSection';
import NotebookLMSection from './components/NotebookLMSection';
import FlowVibeCodingSection from './components/FlowVibeCodingSection';
import ToolkitSection from './components/ToolkitSection';
import HowItWasMadeSection from './components/HowItWasMadeSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('en');
    const texts = TEXTS[language];

    return (
        <div className="relative w-full flex flex-col">
            <Header language={language} setLanguage={setLanguage} texts={texts} />
            <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection texts={texts} />
                <PromptImproverSection texts={texts} />
                <HeroGemWorkflowSection texts={texts} />
                <NotebookLMSection language={language} texts={texts} />
                <FlowVibeCodingSection texts={texts} />
                <ToolkitSection texts={texts} />
                <HowItWasMadeSection texts={texts} />
            </main>
            <Footer texts={texts} />
        </div>
    );
};

export default App;
