
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
    <section ref={sectionRef} id="hero-gem-wizard" className="py-12 md:py-16 overflow-hidden break-words">
      <div className="bg-card-dark rounded-xl shadow-lg border border-secondary/30 p-8 mb-8">
        <h2 className="font-display text-4xl font-bold text-primary mb-2 text-center">
          {t('heroGemWizard.title')}
        </h2>
        <p className="font-display text-xl text-text-light/70 mb-6 text-center">
          {t('heroGemWizard.subtitle')}
        </p>

        {/* Privacy Warning */}
        <div className="mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6">
          <p className="font-body text-text-light/90 leading-relaxed text-center">
            {t('heroGemWizard.privacyWarning')}
          </p>
        </div>

        {/* Try It Now Banner - RIGHT ABOVE INTERACTIVE BLUEPRINT SELECTOR */}
        <div className="mb-6 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 border-2 border-secondary rounded-lg p-6 text-center animate-pulse-slow">
          <h3 className="font-display text-2xl font-bold text-secondary mb-2">
            {t('heroGemWizard.tryItTitle')}
          </h3>
          <p className="text-text-light/80 font-body">
            {t('heroGemWizard.tryItDesc')}
          </p>
        </div>

        {/* Interactive Content Area - Wrapped in Try It Now Border */}
        <div className="border-2 border-secondary rounded-lg p-6 bg-gradient-to-br from-secondary/5 to-primary/5">
          {/* Dynamic Content Area - Blueprint Selector or Chat Interface */}
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
      </div>
    </section>
  );
};

export default HeroGemWizard;
