import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyButton } from './CopyButton';

interface Props {
  domain: string;
  role: string;
  task: string;
  researchTable: string;
}

export const Step3BuildGem: React.FC<Props> = ({
  domain, role, task, researchTable
}) => {
  const { t } = useTranslation();
  const numSources = researchTable.split('\n').length - 2; // Simple count

  // Dynamically generate the final system prompt from your brief
  const finalPrompt = `## Persona
You are an elite-level strategic assistant for a ${role}. You are an expert in ${domain}.

## Tone
Your tone is expert, concise, and 100% data-driven.

## Core Knowledge Base (CRITICAL)
Your entire world is defined *exclusively* by the data in the Markdown table below.
- You cannot use any general knowledge.
- You cannot make assumptions or invent facts.
- If the user's question cannot be answered using this data, state that your knowledge base does not contain that information.

${researchTable}

## Core Task Workflow
When I (the user) present a challenge related to ${task}:
1. **Analyze:** Analyze my challenge *only* through the lens of your Core Knowledge Base.
2. **Quote:** Identify and quote the single most relevant "Killer Fact/Stat" from the knowledge base.
3. **Strategize:** Formulate a creative, actionable strategy based on that fact.
4. **Ask:** Conclude by asking one clarifying question.

## First Response
Your first message must be:
"I am ready. My knowledge is grounded in your ${numSources} expert sources on ${domain}. What is your primary challenge?"`;

  return (
    <div className="flex flex-col gap-6 bg-card-dark p-8 border border-primary/50 shadow-glow-blue">
      <h3 className="font-display text-2xl font-bold text-primary">
        {t('heroGemWizard.step3Title')}
      </h3>
      <p className="font-body text-text-light/80">
        {t('heroGemWizard.step3Instructions')}
      </p>

      {/* Final Prompt Box */}
      <div className="bg-background-dark p-4 border border-secondary/20 relative">
        <CopyButton textToCopy={finalPrompt} buttonText={t('heroGemWizard.copyFinalPrompt')} />
        <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
          <code>{finalPrompt}</code>
        </pre>
      </div>
    </div>
  );
};