
import React from 'react';

interface BlueprintSelectorProps {
  onSelectBlueprint: (blueprintName: string) => void;
}

interface Blueprint {
  title: string;
  description: string;
}

const blueprints: Blueprint[] = [
  {
    title: "Knowledge Expert",
    description: "A specialist AI that has mastered a specific topic. Upload your research, notes, or product manuals, and it will answer complex questions based *only* on that knowledge."
  },
  {
    title: "Style & Tone Guardian",
    description: "Your personal brand-voice editor. Upload your style guide, past emails, or writing examples, and it will rewrite any text to perfectly match your desired tone and messaging."
  },
  {
    title: "Creative Partner",
    description: "An AI brainstorming assistant. Feed it your creative briefs, past campaigns, or topic ideas, and it will help you generate new blog posts, ad copy, or social media updates."
  },
  {
    title: "Home & Hobby Helper",
    description: "Your personal life assistant. Upload your family's dietary needs, favorite recipes, travel plans, or gardening notes, and it will help you organize, plan, and manage your home life."
  },
  {
    title: "Technical Assistant",
    description: "A developer's sidekick. Feed it your project's API documentation, codebase, or data schemas to get quick, context-aware help with coding, debugging, or data analysis."
  },
  {
    title: "Strategic Advisor",
    description: "Your on-demand business consultant. Upload market research, competitor reports, or your business plan, and it will help you identify new opportunities, spot risks, and build strategies."
  }
];

const BlueprintSelector: React.FC<BlueprintSelectorProps> = ({ onSelectBlueprint }) => {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 1: Select a Blueprint</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blueprints.map((blueprint) => (
          <div
            key={blueprint.title}
            className="bg-background-dark/80 rounded-lg p-6 border border-secondary/20 cursor-pointer hover:border-primary transition-all"
            onClick={() => onSelectBlueprint(blueprint.title)}
          >
            <h4 className="font-display text-xl font-bold text-text-light mb-2">{blueprint.title}</h4>
            <p className="text-text-light/80">{blueprint.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlueprintSelector;
