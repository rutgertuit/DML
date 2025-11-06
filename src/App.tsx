import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PresentationContext from './components/PresentationContext';
import TheVibe from './components/TheVibe';
import BeforeAfter from './components/BeforeAfter';
import ToolsSection from './components/ToolsSection';
import PromptImprover from './components/PromptImprover';
import HeroGemWizard from './components/HeroGemWizard/HeroGemWizard';
import NotebookLM from './components/NotebookLM';
import HowVibeCodingWorks from './components/HowVibeCodingWorks';
import AIRoadmap from './components/AIRoadmap';
import Toolkit from './components/Toolkit';
import AboutAuthor from './components/AboutAuthor';
import Footer from './components/Footer';
import QuickJumpMenu from './components/QuickJumpMenu';
import CookieConsent from './components/CookieConsent';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <div className="relative w-full flex flex-col">
      <Header />
      <QuickJumpMenu />
      <main className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <HeroSection />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-glow-blue"></div>
        </div>

        <PresentationContext />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-glow-purple"></div>
        </div>

        <TheVibe />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-glow-blue"></div>
        </div>

        <BeforeAfter />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-glow-purple"></div>
        </div>

        {/* The 3 Core Tools Section */}
        <ToolsSection>
          <PromptImprover />

          {/* Tool Divider - smaller spacing within tool section */}
          <div className="my-6 md:my-10 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-glow-blue"></div>
          </div>

          <HeroGemWizard />

          {/* Tool Divider - smaller spacing within tool section */}
          <div className="my-6 md:my-10 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-glow-purple"></div>
          </div>

          <NotebookLM />
        </ToolsSection>

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-glow-blue"></div>
        </div>

        <HowVibeCodingWorks />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-glow-purple"></div>
        </div>

        <AIRoadmap />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-glow-blue"></div>
        </div>

        <Toolkit />

        {/* Section Divider with enhanced visual connection */}
        <div className="my-6 md:my-10 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-glow-purple"></div>
        </div>

        <AboutAuthor />
      </main>
      <Footer />
      <CookieConsent />
      <FeedbackForm />
    </div>
  );
}

export default App;