import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TheVibe from './components/TheVibe';
import BeforeAfter from './components/BeforeAfter';
import ToolsSection from './components/ToolsSection';
import PromptImprover from './components/PromptImprover';
import HeroGemWizard from './components/HeroGemWizard/HeroGemWizard';
import NotebookLM from './components/NotebookLM';
import HowVibeCodingWorks from './components/HowVibeCodingWorks';
import AIRoadmap from './components/AIRoadmap';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';
function App() {
  return (
    <div className="relative w-full flex flex-col">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <IntroSection />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

        <TheVibe />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <BeforeAfter />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

        {/* The 3 Core Tools Section */}
        <ToolsSection>
          <PromptImprover />

          {/* Section Divider */}
          <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

          <HeroGemWizard />

          {/* Section Divider */}
          <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

          <NotebookLM />
        </ToolsSection>

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <HowVibeCodingWorks />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <AIRoadmap />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

        <Toolkit />
      </main>
      <Footer />
    </div>
  );
}

export default App;