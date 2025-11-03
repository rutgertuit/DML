import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const NotebookLM: React.FC = () => {
  const { t } = useTranslation();
  // State to manage which tab is active. 1 = CFO
  const [activeTab, setActiveTab] = useState(1);

  // State for copy-to-clipboard feedback
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  // Handle copying prompt text to clipboard
  const handleCopyPrompt = (promptText: string, promptName: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(promptName);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  // Stakeholder prompt data
  const stakeholderPrompts = {
    cfo: "Scan all sources for financial data, projections, and risks.\n1. Generate a 3-bullet list of the biggest ROI opportunities.\n2. Generate a 3-bullet list of the biggest financial risks.\n3. For each of the 6 items, provide the *one* citation that proves it.",
    cmo: "Act as a world-class (and slightly over-caffeinated) Go-To-Market strategist.\n1. Find the 3 'killer facts' from the data that we can build a whole campaign around.\n2. What's the *story* here? Write a 50-word narrative hook.\n3. Generate 5 click-worthy headlines based on the sources.",
    ceo: "I'm walking into a board meeting. Scan everything and give me a 3-bullet summary.\n1. What's the *one* thing we absolutely must do?\n2. What's the *one* thing we must *avoid* at all costs?\n3. What's the *one* number that matters most from all this data?",
    manager: "Stop talking strategy, let's make a plan.\n1. Convert all insights into a 5-step executable work plan.\n2. Assign a 'Directly Responsible Individual' (DRI) category for each (e.g., 'Engineering', 'Marketing').\n3. Identify the 3 biggest *blockers* mentioned in the sources that I need to clear.",
    team: "Summarize what this means for someone in the daily workflow. No high-level fluff.\n1. List 3 ways our daily process will *change* based on this.\n2. Identify 2 'gotchas' or new requirements hidden in the data.\n3. Find the single most inspiring quote from a customer interview in the sources.",
    sixYearOld: "Explain the main idea in these documents like you're talking to a 6-year-old.\n1. Use a simple story or analogy (e.g., 'This is like building with LEGOs, and we found a new, super-strong piece...').\n2. Don't use any words with more than 3 syllables.",
    engineer: "Act as a principal engineer reviewing this data for flaws.\n1. Identify the 3 weakest or most poorly supported assumptions.\n2. Find any direct *contradictions* between data in different sources.\n3. List the top 5 'magic numbers' or hard-coded assumptions that need to be challenged.\n4. Provide all outputs with numbered citations."
  };

  const renderTabContent = () => {
    let promptText = '';
    let promptName = '';

    switch (activeTab) {
      case 1: // CFO
        promptText = stakeholderPrompts.cfo;
        promptName = 'cfo';
        break;
      case 2: // CMO
        promptText = stakeholderPrompts.cmo;
        promptName = 'cmo';
        break;
      case 3: // CEO
        promptText = stakeholderPrompts.ceo;
        promptName = 'ceo';
        break;
      case 4: // Manager
        promptText = stakeholderPrompts.manager;
        promptName = 'manager';
        break;
      case 5: // Team
        promptText = stakeholderPrompts.team;
        promptName = 'team';
        break;
      case 6: // 6-Year-Old Test
        promptText = stakeholderPrompts.sixYearOld;
        promptName = 'sixYearOld';
        break;
      case 7: // Skeptical Engineer
        promptText = stakeholderPrompts.engineer;
        promptName = 'engineer';
        break;
      default:
        return null;
    }

    return (
      <div className="relative">
        <button
          onClick={() => handleCopyPrompt(promptText, promptName)}
          className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-3 py-1 rounded hover:bg-secondary hover:shadow-glow-purple transition-all z-10"
        >
          {copiedPrompt === promptName ? 'Copied!' : 'Copy Prompt'}
        </button>
        <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto pt-10">
          {promptText}
        </pre>
      </div>
    );
  };

  const getTabClass = (tabIndex: number) => {
    return `font-mono text-sm uppercase py-4 px-4 md:px-6 min-h-[48px] flex items-center justify-center border-b-2 transition-all ${activeTab === tabIndex
      ? 'border-primary text-primary text-glow-blue' // Use text-glow-blue from our Tailwind v4 @theme
      : 'border-transparent text-text-light/50 hover:border-secondary/50 hover:text-text-light'
      }`;
  };

  return (
    <section className="py-12 md:py-16" id="notebooklm">
      <h2 className="font-display text-4xl font-bold text-text-light mb-6">
        {t('notebookLM.title')}
      </h2>

      {/* Privacy Warning */}
      <div className="mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6">
        <p className="font-body text-text-light/90 leading-relaxed">
          {t('notebookLM.privacyWarning')}
        </p>
      </div>

      {/* Introductory Section */}
      <div className="mb-12">
        <p className="font-body text-lg text-text-light/85 leading-relaxed mb-6">
          {t('notebookLM.intro')}
        </p>
      </div>

      {/* Interactive Stakeholder Prompt Generator */}
      <div className="mb-12">
        <h3 className="font-display text-2xl font-bold text-primary mb-4">
          {t('notebookLM.stakeholderTitle')}
        </h3>
        <p className="font-body text-text-light/80 leading-relaxed mb-6">
          {t('notebookLM.stakeholderDesc')}
        </p>

        {/* Try It Now Banner - RIGHT ABOVE THE INTERACTIVE TABS */}
        <div className="mb-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-2 border-primary rounded-lg p-6 text-center animate-pulse-slow">
          <h3 className="font-display text-2xl font-bold text-primary mb-2">
            {t('notebookLM.tryItTitle')}
          </h3>
          <p className="text-text-light/80 font-body">
            {t('notebookLM.tryItDesc')}
          </p>
        </div>

        {/* Interactive Element - Wrapped in Try It Now Border */}
        <div className="border-2 border-primary rounded-lg p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          {/* Stakeholder Tabs */}
          <div className="flex flex-wrap border-b border-secondary/20 mb-6">
            <button className={getTabClass(1)} onClick={() => setActiveTab(1)}>
              💰 For the CFO
            </button>
            <button className={getTabClass(2)} onClick={() => setActiveTab(2)}>
              📢 For the CMO
            </button>
            <button className={getTabClass(3)} onClick={() => setActiveTab(3)}>
              👔 For the CEO
            </button>
            <button className={getTabClass(4)} onClick={() => setActiveTab(4)}>
              📋 For Your Manager
            </button>
            <button className={getTabClass(5)} onClick={() => setActiveTab(5)}>
              👥 For Your Team
            </button>
            <button className={getTabClass(6)} onClick={() => setActiveTab(6)}>
              🧒 For a 6-Year-Old
            </button>
            <button className={getTabClass(7)} onClick={() => setActiveTab(7)}>
              👨‍💻 For the Engineer
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="bg-card-dark p-6 min-h-[300px] border border-t-0 border-secondary/20 rounded-b-lg">
            {renderTabContent()}
          </div>
        </div>

        {/* Video Demo Below Tabs */}
        <div className="mt-8 space-y-4">
          <div className="w-full aspect-video bg-card-dark border border-primary/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6dHmu1GALmA"
              title="NotebookLM Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://notebooklm.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 hover:shadow-glow-blue transition-shadow"
          >
            {t('notebookLM.cta')}
          </a>
        </div>
      </div>

      {/* Bonus Usecase Section */}
      <div className="mt-12 bg-card-dark/80 border border-secondary/30 rounded-lg p-8">
        <h3 className="font-display text-2xl font-bold text-secondary mb-4">{t('notebookLM.bonusTitle')}</h3>

        <p className="font-body text-text-light/80 mb-4">
          {t('notebookLM.bonusIntro')}
        </p>

        <ul className="space-y-3 text-text-light/80 font-body">
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0">🎙️</span>
            <div>
              <span className="font-bold">{t('notebookLM.bonusAudioTitle')}</span> {t('notebookLM.bonusAudioDesc')}
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary flex-shrink-0">🗣️</span>
            <div>
              <span className="font-bold">{t('notebookLM.bonusQATitle')}</span> {t('notebookLM.bonusQADesc')}
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0">🎯</span>
            <div>
              <span className="font-bold">{t('notebookLM.bonusCompareTitle')}</span> {t('notebookLM.bonusCompareDesc')}
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary flex-shrink-0">📈</span>
            <div>
              <span className="font-bold">{t('notebookLM.bonusTrendTitle')}</span> {t('notebookLM.bonusTrendDesc')}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NotebookLM;