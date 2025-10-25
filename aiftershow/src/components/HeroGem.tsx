import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroGem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="hero-gem">
      <h2 className="font-display text-4xl font-bold text-text-light mb-4">
        {t('heroGem.title')}
      </h2>
      <p className="font-body text-lg text-text-light/80 leading-relaxed max-w-4xl mb-12">
        {t('heroGem.description')}
      </p>

      <div className="flex flex-col gap-12">
        
        {/* Step 1: Deep Research Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-1 flex flex-col items-center">
            <span className="font-display text-5xl font-bold text-primary text-glow-blue">1</span>
          </div>
          <div className="md:col-span-11 flex flex-col gap-4">
            <h3 className="font-display text-2xl font-bold text-text-light">
              {t('heroGem.step1Title')}
            </h3>
            <p className="font-body text-text-light/80">
              {t('heroGem.step1Desc')}
            </p>
            <div className="bg-card-dark p-4 border border-secondary/20 relative">
              <button className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-2 py-1 hover:bg-secondary hover:shadow-glow-purple transition-all">
                {t('promptImprover.copy')}
              </button>
              <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
                <code>
                  Act as a world-class research analyst. My goal is to build a "Hero Gem" (a specialized AI assistant) that is an expert in [YOUR DOMAIN, e.g., 'early-stage SaaS marketing'].
                  <br/><br/>
                  To do this, I need you to find the top 10-15 most critical, foundational, and recent deep research studies, white papers, and seminal articles on this topic.
                  <br/><br/>
                  For each of the [10-15] sources, you must provide:
                  <br/>
                  - A concise 2-sentence summary of the key insight.
                  <br/>
                  - The full URL/Source.
                  <br/>
                  - The 3-5 most powerful statistics or "killer facts" from the source.
                  <br/><br/>
                  Format your output as a Markdown table for easy copy-pasting. Focus only on high-authority sources from the last [NUMBER] years.
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Step 2: Hero Gem System Instruction */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-1 flex flex-col items-center">
            <span className="font-display text-5xl font-bold text-primary text-glow-blue">2</span>
          </div>
          <div className="md:col-span-11 flex flex-col gap-4">
            <h3 className="font-display text-2xl font-bold text-text-light">
              {t('heroGem.step2Title')}
            </h3>
            <p className="font-body text-text-light/80">
              {t('heroGem.step2Desc')}
            </p>
            <div className="bg-card-dark p-4 border border-secondary/20 relative">
              <button className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-2 py-1 hover:bg-secondary hover:shadow-glow-purple transition-all">
                {t('promptImprover.copy')}
              </button>
              <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
                <code>
                  [START OF SYSTEM INSTRUCTION]<br/>
                  Persona: You are [NAME OF YOUR GEM, e.g., 'SaaSMark_v1'], an elite-level strategic assistant. Your entire purpose is to help me, the CMO, make high-stakes decisions about [YOUR DOMAIN, e.g., 'SaaS marketing'].
                  <br/><br/>
                  Core Knowledge Base: Your analysis and advice are strictly grounded in the following [NUMBER] foundational research studies. You must always reference these insights when forming a recommendation.
                  <br/>
                  [Paste the Markdown Table of Research from Template 1 Here]
                  <br/><br/>
                  Core Task: When I provide you with a challenge (e.g., "We need to lower our Customer Acquisition Cost"), you will:
                  <br/>
                  1. Analyze my problem through the lens of your Core Knowledge Base.
                  <br/>
                  2. Quote the most relevant fact or insight from your knowledge base.
                  <br/>
                  3. Formulate a creative, actionable, and non-obvious strategic recommendation.
                  <br/>
                  4. Conclude by asking a clarifying follow-up question to help me refine the strategy.
                  <br/><br/>
                  Tone: Expert, concise, data-driven, and slightly formal.
                  <br/>
                  [END OF SYSTEM INSTRUCTION]
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroGem;