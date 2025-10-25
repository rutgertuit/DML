import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromptImprover from './components/PromptImprover';
import HeroGem from './components/HeroGem';

function App() {
  return (
    <div className="relative w-full flex flex-col">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <PromptImprover />
        <HeroGem />
      </main>
    </div>
  );
}

export default App;