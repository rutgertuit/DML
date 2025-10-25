import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Step1DefineExpert } from './Step1DefineExpert';
import { Step2DeepResearch } from './Step2DeepResearch';
import { Step3BuildGem } from './Step3BuildGem';

export const HeroGemWizard: React.FC = () => {
  const { t } = useTranslation();

  // State from your spec
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState("");
  const [role, setRole] = useState("");
  const [task, setTask] = useState("");
  const [researchTable, setResearchTable] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1DefineExpert
            domain={domain}
            setDomain={setDomain}
            role={role}
            setRole={setRole}
            task={task}
            setTask={setTask}
            onNext={() => setStep(2)}
          />
        );
      case 2:
        return (
          <Step2DeepResearch
            domain={domain}
            researchTable={researchTable}
            setResearchTable={setResearchTable}
            onNext={() => setStep(3)}
          />
        );
      case 3:
        return (
          <Step3BuildGem
            domain={domain}
            role={role}
            task={task}
            researchTable={researchTable}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24" id="hero-gem">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        {t('heroGemWizard.title')}
      </h2>
      
      {/* Optional Progress Bar */}
      <div className="flex w-full h-2 bg-card-dark mb-12 border border-secondary/20">
        <div 
          className="bg-primary transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {renderStep()}
    </section>
  );
};

export default HeroGemWizard;