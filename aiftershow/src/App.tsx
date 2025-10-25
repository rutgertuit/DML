import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromptImprover from './components/PromptImprover';
import HeroGem from './components/HeroGem';
import NotebookLM from './components/NotebookLM';
import FlowVibe from './components/FlowVibe';
import Toolkit from './components/Toolkit';

function App() {
  return (
    <div className="relative w-full flex flex-col">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <PromptImprover />
        <HeroGem />
        <NotebookLM />
        <FlowVibe />
        <Toolkit />
      </main>
    </div>
  );
}

export default App;