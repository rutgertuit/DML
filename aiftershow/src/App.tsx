import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromptImprover from './components/PromptImprover';
import HeroGemWizard from './components/HeroGemWizard/HeroGemWizard';
import NotebookLM from './components/NotebookLM';
import FlowVibe from './components/FlowVibe';
import Toolkit from './components/Toolkit';
import HowItWasMade from './components/HowItWasMade';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full flex flex-col">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <PromptImprover />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

        <HeroGemWizard />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <NotebookLM />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

        <FlowVibe />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <Toolkit />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

        <HowItWasMade />
      </main>
      <Footer />
    </div>
  );
}

export default App;