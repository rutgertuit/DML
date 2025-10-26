
import React from 'react';

interface BlueprintSelectorProps {
  onSelectBlueprint: (blueprintName: string) => void;
}

const blueprints = [
  "Knowledge Expert",
  "Style & Tone Guardian",
  "Creative Partner",
  "Home & Hobby Helper",
  "Technical Assistant",
];

const BlueprintSelector: React.FC<BlueprintSelectorProps> = ({ onSelectBlueprint }) => {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 1: Select a Blueprint</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blueprints.map((blueprint) => (
          <div
            key={blueprint}
            className="bg-background-dark/80 rounded-lg p-6 border border-secondary/20 cursor-pointer hover:border-primary transition-all"
            onClick={() => onSelectBlueprint(blueprint)}
          >
            <h4 className="font-display text-xl font-bold text-text-light mb-2">{blueprint}</h4>
            <p className="text-text-light/80">A short description of the {blueprint}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlueprintSelector;
