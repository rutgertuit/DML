import React from 'react';
import { useTranslation } from 'react-i18next';

export const HowItWasMade: React.FC = () => {
  const { t } = useTranslation();

  const timelineSteps = [
    {
      title: t('howItWasMade.step1Title'),
      tools: t('howItWasMade.step1Tools'),
      action: t('howItWasMade.step1Action'),
    },
    {
      title: t('howItWasMade.step2Title'),
      tools: t('howItWasMade.step2Tools'),
      action: t('howItWasMade.step2Action'),
    },
    {
      title: t('howItWasMade.step3Title'),
      tools: t('howItWasMade.step3Tools'),
      action: t('howItWasMade.step3Action'),
    },
    {
      title: t('howItWasMade.step4Title'),
      tools: t('howItWasMade.step4Tools'),
      action: t('howItWasMade.step4Action'),
    },
    {
      title: t('howItWasMade.step5Title'),
      tools: t('howItWasMade.step5Tools'),
      action: t('howItWasMade.step5Action'),
      code: `
# 1. Install the tool
npm install -g @google/gemini-cli

# 2. Configure API access
gemini config set apiKey YOUR_API_KEY

# 3. Test the AI logic (Vibe Coding) locally
gemini invoke --prompt "[Template 3]" --input "Write an email"

# 4. Example deployment command (conceptual)
gemini deploy --source ./site --destination gcp-cloud-run
    `.trim(),
    },
    {
      title: t('howItWasMade.step6Title'),
      tools: t('howItWasMade.step6Tools'),
      action: t('howItWasMade.step6Action'),
    },
  ];

  return (
    <section className="py-24" id="how-it-was-made">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        {t('howItWasMade.title')}
      </h2>
      
      {/* The main container for the timeline. The border-l creates the vertical line. */}
      <div className="relative flex flex-col gap-12 border-l-2 border-secondary/30 ml-3">
        
        {timelineSteps.map((step, index) => (
          <div key={index} className="relative pl-10 md:pl-12">
            
            {/* The "dot" on the timeline. Positioned -left-3 (12px) to center on the 2px border.
                ring-8 creates the "pop-out" effect against the line.
            */}
            <div className="absolute -left-3 top-1 size-5 bg-primary rounded-full ring-8 ring-background-dark" />
            
            <h3 className="font-display text-2xl font-bold text-primary">
              {index + 1}. {step.title}
            </h3>
            <p className="font-body text-text-light/80 mt-2">
              {step.tools}
            </p>
            <p className="font-body text-text-light/80 mt-2">
              {step.action}
            </p>
            
            {/* Conditionally render the code block for Step 5 */}
            {step.code && (
              <div className="bg-card-dark p-4 border border-secondary/20 mt-4">
                <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
                  <code>
                    {step.code}
                  </code>
                </pre>
              </div>
            )}
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default HowItWasMade;