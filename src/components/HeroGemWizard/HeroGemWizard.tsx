
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BlueprintSelector from './BlueprintSelector';
import GemDesignAssistant from './GemDesignAssistant';
import SourceMaterialGenerator from './SourceMaterialGenerator';
import FinalGemInstruction from './FinalGemInstruction';

export const HeroGemWizard: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);
  const [gemPlan, setGemPlan] = useState<{
    goal: string,
    researchDocuments: string[],
    userDocuments: string[]
  } | null>(null);
  const [hasConfirmedFiles, setHasConfirmedFiles] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  // Scroll to step 2 content when blueprint is selected
  useEffect(() => {
    if (currentStep === 2 && step2Ref.current) {
      setTimeout(() => {
        step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [currentStep]);

  const handleBlueprintSelected = (blueprintName: string) => {
    setSelectedBlueprint(blueprintName);
    setCurrentStep(2);
  };

  const handleGoBackToBlueprints = () => {
    setCurrentStep(1);
  };

  const handlePlanCreated = (plan: {
    goal: string,
    researchDocuments: string[],
    userDocuments: string[]
  }) => {
    setGemPlan(plan);
    setCurrentStep(3);
  };

  const handleFilesConfirmed = () => {
    setHasConfirmedFiles(true);
    setCurrentStep(4);
  };

  return (
    <section ref={sectionRef} id="hero-gem-wizard" className="py-24 overflow-hidden break-words">
      <div className="bg-card-dark rounded-xl shadow-lg border border-secondary/30 p-8 mb-8">
        <h2 className="font-display text-4xl font-bold text-primary mb-6 text-center">
          {t('heroGemWizard.title')}
        </h2>

        {/* Fun Explainer with Character and Speech Bubble - ALWAYS VISIBLE */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
          {/* Character Portrait Placeholder */}
          <div className="flex-shrink-0 w-32 h-40 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/50 flex items-center justify-center overflow-hidden relative">
            <div className="text-6xl">✨</div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>

          {/* Speech Bubble */}
          <div className="flex-1 relative">
            <div className="bg-background-dark border-2 border-primary/40 rounded-2xl p-6 shadow-lg relative">
              {/* Arrow pointing to character */}
              <div className="absolute -left-3 top-8 w-0 h-0 border-l-0 border-r-8 border-t-6 border-b-6 border-r-primary/40 border-t-transparent border-b-transparent"></div>

              <h3 className="font-display text-xl font-bold text-primary mb-3">{t('heroGemWizard.introTitle')}</h3>

              <div className="space-y-3 text-text-light/85 font-body">
                <p>
                  <span className="font-bold text-primary">{t('heroGemWizard.introPara1').split('.')[0]}.</span> {t('heroGemWizard.introPara1').split('.').slice(1).join('.')}
                </p>
                <p>
                  <span className="font-bold text-secondary">{t('heroGemWizard.introPara2').split('.')[0]}.</span> {t('heroGemWizard.introPara2').split('.').slice(1).join('.')}
                </p>
                <p>
                  <span className="font-bold text-primary">{t('heroGemWizard.introPara3').split('.')[0]}.</span> {t('heroGemWizard.introPara3').split('.').slice(1).join('.')}
                </p>
              </div>

              <p className="mt-4 pt-4 border-t border-primary/20 text-sm text-text-light/70 font-mono">
                {t('heroGemWizard.readyCTA')}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Content Area - Only Blueprint Selector or Chat Interface */}
        {currentStep === 1 && (
          <BlueprintSelector onSelectBlueprint={handleBlueprintSelected} />
        )}
        {currentStep === 2 && selectedBlueprint && (
          <div ref={step2Ref}>
            <GemDesignAssistant
              selectedBlueprint={selectedBlueprint}
              onPlanCreated={handlePlanCreated}
              onGoBack={handleGoBackToBlueprints}
            />
          </div>
        )}
        {currentStep === 3 && gemPlan && (
          <SourceMaterialGenerator
            gemPlan={gemPlan}
            onFilesConfirmed={handleFilesConfirmed}
          />
        )}
        {currentStep === 4 && gemPlan && hasConfirmedFiles && (
          <FinalGemInstruction
            gemPlan={gemPlan}
          />
        )}
      </div>
    </section>
  );
};

export default HeroGemWizard;
