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
        <PromptImprover />
        <HeroGemWizard />
        <NotebookLM />
        <FlowVibe />
        <Toolkit />
        <HowItWasMade />
      </main>
      <Footer />
    </div>
  );
}

export default App;