import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// We will import the other components here as we create them

function App() {
  return (
    <div className="relative w-full flex flex-col">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        {/* We will add the other components here */}
      </main>
      {/* We will add the Footer here */}
    </div>
  );
}

export default App;
