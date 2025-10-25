import React from 'react';
import { useTranslation } from 'react-i18next';

export const PromptImprover: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="prompt-improver">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        {t('promptImprover.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Column 1: App UI */}
        <div className="flex flex-col gap-6">
          <p className="font-body text-text-light/80 leading-relaxed">
            {t('promptImprover.description')}
          </p>
          
          {/* Interactive Form */}
          <form className="flex flex-col gap-4">
            <label htmlFor="prompt-input" className="sr-only">
              {t('promptImprover.placeholder')}
            </label>
            <textarea
              id="prompt-input"
              rows={6}
              className="bg-card-dark text-text-light font-mono text-sm p-4 border border-secondary/50 focus:border-primary focus:ring-0 focus:shadow-glow-blue transition-all"
              placeholder={t('promptImprover.placeholder')}
            />
            <button
              type="submit"
              className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 hover:shadow-glow-blue transition-shadow"
            >
              {t('promptImprover.submit')}
            </button>
          </form>
          
          {/* Response Area */}
          <div id="prompt-output" className="mt-4 p-4 bg-card-dark border border-secondary/20 min-h-[100px]">
            {/* AI response will be rendered here. We will add loading/error states later. */}
          </div>
        </div>

        {/* Column 2: System Instruction */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-2xl font-bold text-text-light">
            {t('promptImprover.howItWorksTitle')}
          </h3>
          <p className="font-body text-text-light/80 leading-relaxed">
            {t('promptImprover.howItWorksDesc')}
          </p>
          
          {/* Prompt Box */}
          <div className="bg-card-dark p-4 border border-secondary/20 relative">
            <button className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-2 py-1 hover:bg-secondary hover:shadow-glow-purple transition-all">
              {t('promptImprover.copy')}
            </button>
            <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
              <code>
                [START OF SYSTEM INSTRUCTION]<br/>
                Persona: You are a "Prompt Scribe," a helpful assistant whose only job is to help users improve their prompts through dialogue.<br/>
                Task: The user will provide a draft prompt. You must never answer the prompt. Instead, you must only ask 3-5 critical follow-up questions to help them clarify their intent.<br/>
                Rules:<br/>
                - Analyze the user's prompt for missing key elements (Audience, Format, Tone, Constraints, Goal).<br/>
                - Generate a list of 3-5 clarifying questions.<br/>
                - Your questions should guide them to make the prompt more specific and powerful.<br/>
                Example Interaction:<br/>
                User Prompt: "Write an email about our new software."<br/>
                Your Response: "Great start! To make this perfect, I have a few questions:<br/>
                1. Who is the audience? (e.g., existing customers, new leads, internal team?)<br/>
                2. What is the goal? (e.g., drive sales, get sign-ups, inform them of a change?)<br/>
                3. What tone should I use? (e.g., excited, formal, funny, urgent?)<br/>
                4. Are there any constraints? (e.g., must be under 100 words?)"<br/>
                [END OF SYSTEM INSTRUCTION]
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptImprover;