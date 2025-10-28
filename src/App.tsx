import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import PromptImprover from './components/PromptImprover';
import HeroGemWizard from './components/HeroGemWizard/HeroGemWizard';
import NotebookLM from './components/NotebookLM';
import FlowVibe from './components/FlowVibe';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const HowItWasMade = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: t('howItWasMade.step1.step'),
      title: t('howItWasMade.step1.title'),
      problem: t('howItWasMade.step1.problem'),
      tool: t('howItWasMade.step1.tool'),
      action: t('howItWasMade.step1.action'),
      outcome: t('howItWasMade.step1.outcome'),
    },
    {
      step: t('howItWasMade.step2.step'),
      title: t('howItWasMade.step2.title'),
      problem: t('howItWasMade.step2.problem'),
      tool: t('howItWasMade.step2.tool'),
      action: t('howItWasMade.step2.action'),
      outcome: t('howItWasMade.step2.outcome'),
    },
    {
      step: t('howItWasMade.step3.step'),
      title: t('howItWasMade.step3.title'),
      problem: t('howItWasMade.step3.problem'),
      tool: t('howItWasMade.step3.tool'),
      action: t('howItWasMade.step3.action'),
      outcome: t('howItWasMade.step3.outcome'),
    },
    {
      step: t('howItWasMade.step4.step'),
      title: t('howItWasMade.step4.title'),
      problem: t('howItWasMade.step4.problem'),
      tool: t('howItWasMade.step4.tool'),
      action: t('howItWasMade.step4.action'),
      outcome: t('howItWasMade.step4.outcome'),
    },
    {
      step: t('howItWasMade.step5.step'),
      title: t('howItWasMade.step5.title'),
      problem: t('howItWasMade.step5.problem'),
      tool: t('howItWasMade.step5.tool'),
      action: t('howItWasMade.step5.action'),
      outcome: t('howItWasMade.step5.outcome'),
    },
    {
      step: t('howItWasMade.step6.step'),
      title: t('howItWasMade.step6.title'),
      problem: t('howItWasMade.step6.problem'),
      tool: t('howItWasMade.step6.tool'),
      action: t('howItWasMade.step6.action'),
      outcome: t('howItWasMade.step6.outcome'),
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t('howItWasMade.title')}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-text-secondary">
          {t('howItWasMade.intro1')}
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-text-secondary">
          {t('howItWasMade.intro2')}
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-text-secondary">
          {t('howItWasMade.intro3')}
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-text-secondary">
          {t('howItWasMade.intro4')}
        </p>
      </div>
      <div className="mt-20 space-y-16">
        {steps.map((step, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary">{step.step}</h3>
                <p className="text-xl font-semibold text-text-primary mt-1">{step.title}</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
                  <h4 className="text-lg font-bold text-accent-secondary">{t('howItWasMade.problemLabel')}</h4>
                  <p className="mt-2 text-text-secondary">{step.problem}</p>
                </div>
                <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
                  <h4 className="text-lg font-bold text-accent-secondary">{t('howItWasMade.toolLabel')}</h4>
                  <p className="mt-2 text-text-secondary">{step.tool}</p>
                </div>
                <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
                  <h4 className="text-lg font-bold text-accent-secondary">{t('howItWasMade.actionLabel')}</h4>
                  <p className="mt-2 text-text-secondary">{step.action}</p>
                </div>
                <div className="p-6 bg-background-secondary rounded-lg shadow-lg">
                  <h4 className="text-lg font-bold text-accent-secondary">{t('howItWasMade.outcomeLabel')}</h4>
                  <p className="mt-2 text-text-secondary">{step.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

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

        <HowItWasMade />

        {/* Section Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

        <Toolkit />
      </main>
      <Footer />
    </div>
  );
}

export default App;