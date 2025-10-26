
import React, { useState } from 'react';
import BlueprintSelector from './BlueprintSelector';
import GemDesignAssistant from './GemDesignAssistant';
import SourceMaterialGenerator from './SourceMaterialGenerator';
import FinalGemInstruction from './FinalGemInstruction';

export const HeroGemWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);
  const [gemPlan, setGemPlan] = useState<{ goal: string, requiredDocuments: string[] } | null>(null);
  const [hasConfirmedFiles, setHasConfirmedFiles] = useState(false);

  const handleBlueprintSelected = (blueprintName: string) => {
    setSelectedBlueprint(blueprintName);
    setCurrentStep(2);
  };

  const handleGoBackToBlueprints = () => {
    setCurrentStep(1);
  };

  const handlePlanCreated = (plan: { goal: string, requiredDocuments: string[] }) => {
    setGemPlan(plan);
    setCurrentStep(3);
  };

  const handleFilesConfirmed = () => {
    setHasConfirmedFiles(true);
    setCurrentStep(4);
  };

  return (
    <section id="hero-gem-builder" className="py-24 overflow-hidden break-words">
      <div className="bg-card-dark rounded-xl shadow-lg border border-secondary/30 p-8 mb-8">
        <h2 className="font-display text-4xl font-bold text-primary mb-6 text-center">
          Build Your "Hero Gem" V2 — RAG Preparation Studio
        </h2>
        {currentStep === 1 && (
          <BlueprintSelector onSelectBlueprint={handleBlueprintSelected} />
        )}
        {currentStep === 2 && selectedBlueprint && (
          <GemDesignAssistant
            selectedBlueprint={selectedBlueprint}
            onPlanCreated={handlePlanCreated}
            onGoBack={handleGoBackToBlueprints}
          />
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
