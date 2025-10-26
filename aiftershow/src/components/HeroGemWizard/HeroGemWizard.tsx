
import React, { useState, useRef, useEffect } from 'react';
import BlueprintSelector from './BlueprintSelector';
import GemDesignAssistant from './GemDesignAssistant';
import SourceMaterialGenerator from './SourceMaterialGenerator';
import FinalGemInstruction from './FinalGemInstruction';

export const HeroGemWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);
  const [gemPlan, setGemPlan] = useState<{ goal: string, requiredDocuments: string[] } | null>(null);
  const [hasConfirmedFiles, setHasConfirmedFiles] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll to section when step changes to prevent page jumping
  useEffect(() => {
    if (sectionRef.current && currentStep > 1) {
      // Small delay to ensure content has rendered
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  const handlePlanCreated = (plan: { goal: string, requiredDocuments: string[] }) => {
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
          Build Your "Hero Gem" V2 — RAG Preparation Studio
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

              <h3 className="font-display text-xl font-bold text-primary mb-3">Meet Your Personal AI Specialist</h3>

              <div className="space-y-3 text-text-light/85 font-body">
                <p>
                  <span className="font-bold text-primary">Stop repeating yourself.</span> Your Gem remembers its job, personality, and your rules every time. No more re-explaining—just ask and get answers that fit <em>you</em>.
                </p>
                <p>
                  <span className="font-bold text-secondary">Get expert results.</span> A generic AI knows a little about everything. Your Gem is a specialist using <em>your</em> files and knowledge to give truly expert advice.
                </p>
                <p>
                  <span className="font-bold text-primary">Make AI practical.</span> Plan campaigns, draft emails in your style, organize projects—with an AI that actually understands <em>your</em> world.
                </p>
              </div>

              <p className="mt-4 pt-4 border-t border-primary/20 text-sm text-text-light/70 font-mono">
                Ready? Pick a blueprint below and let's build! 👇
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Content Area - Only Blueprint Selector or Chat Interface */}
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
