import React from 'react';

// Data for the 6 timeline steps
const timelineSteps = [
  {
    title: 'Research & Strategy',
    tools: 'Gemini Advanced',
    action: 'Used the Deep Research Prompt (Template 1).',
  },
  {
    title: 'Design Prompting',
    tools: 'Gemini',
    action: 'Built the detailed design prompt for Stitch (the one this site is based on).',
  },
  {
    title: 'Visual Design (The "Look")',
    tools: 'Google Stitch',
    action: 'Generated the initial front-end HTML & CSS.',
  },
  {
    title: 'Vibe Coding (The "Brains")',
    tools: 'Google AI Studio',
    action: 'Built and tested the "Prompt Improver" app logic.',
  },
  {
    title: 'Integration and CLI (The "Glue")',
    tools: 'Gemini CLI, VS Code, GitHub',
    action: 'Assembled Stitch’s design and AI Studio code into this React app. The CLI allows for rapid testing, integration, and deployment automation.',
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
    title: 'Deployment & Distribution',
    tools: 'GitHub, Google Cloud Run',
    action: 'Managed version control and deployed the live site.',
  },
];

export const HowItWasMade: React.FC = () => {
  return (
    <section className="py-24" id="how-it-was-made">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        The Meta Workflow: How We Built This Site
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
              <strong>Tools:</strong> {step.tools}
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