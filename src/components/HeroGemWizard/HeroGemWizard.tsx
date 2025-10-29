
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
        <h2 className="font-display text-4xl font-bold text-primary mb-2 text-center">
          {t('heroGemWizard.title')}
        </h2>
        <p className="font-body text-lg text-text-light/80 mb-8 text-center max-w-3xl mx-auto">
          {t('heroGemWizard.subtitle')}
        </p>
        <p className="font-body text-base text-text-light/70 mb-6 text-center">
          {t('heroGemWizard.introPara1')}
        </p>

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
