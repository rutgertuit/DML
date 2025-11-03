
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BlueprintSelectorProps {
  onSelectBlueprint: (blueprintName: string) => void;
}

const BlueprintSelector: React.FC<BlueprintSelectorProps> = ({ onSelectBlueprint }) => {
  const { t } = useTranslation();

  const blueprints = [
    {
      title: t('heroGemWizard.blueprint1Title'),
      description: t('heroGemWizard.blueprint1Desc')
    },
    {
      title: t('heroGemWizard.blueprint2Title'),
      description: t('heroGemWizard.blueprint2Desc')
    },
    {
      title: t('heroGemWizard.blueprint3Title'),
      description: t('heroGemWizard.blueprint3Desc')
    },
    {
      title: t('heroGemWizard.blueprint4Title'),
      description: t('heroGemWizard.blueprint4Desc')
    },
    {
      title: t('heroGemWizard.blueprint5Title'),
      description: t('heroGemWizard.blueprint5Desc')
    },
    {
      title: t('heroGemWizard.blueprint6Title'),
      description: t('heroGemWizard.blueprint6Desc')
    },
    {
      title: t('heroGemWizard.blueprint7Title'),
      description: t('heroGemWizard.blueprint7Desc')
    },
    {
      title: t('heroGemWizard.blueprint8Title'),
      description: t('heroGemWizard.blueprint8Desc')
    },
    {
      title: t('heroGemWizard.blueprint9Title'),
      description: t('heroGemWizard.blueprint9Desc')
    }
  ];

  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">{t('heroGemWizard.step1Title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blueprints.map((blueprint) => (
          <button
            key={blueprint.title}
            className="bg-background-dark/80 rounded-lg p-6 border border-secondary/20 cursor-pointer hover:border-primary transition-all text-left min-h-[120px] flex flex-col justify-start"
            onClick={() => onSelectBlueprint(blueprint.title)}
          >
            <h4 className="font-display text-lg md:text-xl font-bold text-text-light mb-2">{blueprint.title}</h4>
            <p className="text-sm md:text-base text-text-light/80">{blueprint.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlueprintSelector;
