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
    return `font-mono text-sm uppercase py-3 px-4 border-b-2 transition-all ${activeTab === tabIndex
      ? 'border-primary text-primary text-glow-blue' // Use text-glow-blue from our Tailwind v4 @theme
      : 'border-transparent text-text-light/50 hover:border-secondary/50 hover:text-text-light'
      }`;
  };

  return (
    <section className="py-24" id="notebooklm">
      <h2 className="font-display text-4xl font-bold text-text-light mb-6">
        NotebookLM: End Stakeholder Paralysis
      </h2>

      {/* New Introductory Section */}
      <div className="mb-12 space-y-6">
        <p className="font-body text-lg text-text-light/85 leading-relaxed">
          Is your organization paralyzed by endless requests for "the data in a different format"? You have one source of truth—market research, customer interviews, competitive analysis, internal data—but stakeholders keep asking for it reshaped: a one-pager for the CEO, a deck for the CMO, an action plan for the manager, a summary for the team.
        </p>

        {/* The Central Brain Section */}
        <div className="bg-card-dark/80 border border-secondary/30 rounded-lg p-8">
          <h3 className="font-display text-2xl font-bold text-primary mb-4">The Central Brain for Your Knowledge</h3>

          <p className="font-body text-text-light/80 mb-6">
            NotebookLM transforms how organizations handle collaboration by introducing a radical idea: <span className="text-primary font-bold">centralize your knowledge, then generate outputs on demand.</span> Instead of reformatting the same data five times, you maintain one intelligent notebook and ask it to serve each stakeholder's unique perspective.
          </p>

          {/* 3-Step Workflow */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">1</div>
              <div>
                <h4 className="font-bold text-text-light mb-1">Input: Dump Everything</h4>
                <p className="text-sm text-text-light/70">Transcripts, PDFs, decks, links, spreadsheets—every data source goes into one Notebook. Stop organizing upfront.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center font-bold text-secondary">2</div>
              <div>
                <h4 className="font-bold text-text-light mb-1">Synthesis: NotebookLM Understands</h4>
                <p className="text-sm text-text-light/70">NotebookLM ingests all sources and becomes your knowledge base—aware of relationships, contradictions, and insights across everything.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">3</div>
              <div>
                <h4 className="font-bold text-text-light mb-1">Generation: Output on Demand</h4>
                <p className="text-sm text-text-light/70">Ask it to generate a CFO brief, a CMO deck, or an action plan—each stakeholder gets the exact format they need, instantly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wall Street Journal Quote */}
        <blockquote className="border-l-4 border-primary/50 pl-6 py-4 bg-primary/5 rounded-r-lg">
          <p className="font-body text-text-light/90 italic mb-2">
            "The bottleneck isn't data anymore. It's how fast you can turn data into *actionable* decisions for different audiences. NotebookLM solves that by letting teams collaborate on one source and generate infinite perspectives."
          </p>
          <p className="text-sm text-text-light/60 font-mono">— Concept aligned with industry best practices</p>
        </blockquote>
      </div>

      {/* Workflow Visualization Section */}
      <div className="mb-12">
        <h3 className="font-display text-2xl font-bold text-primary mb-6">The Workflow Visualized: From Rework to Results</h3>

        <svg className="w-full max-w-4xl mx-auto" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
          {/* Define gradients */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00FFFF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#00FFFF', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#D900FF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#D900FF', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>

          {/* Input Stage */}
          <g>
            <rect x="20" y="50" width="180" height="200" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="2" rx="8" />
            <text x="110" y="85" textAnchor="middle" fill="#00FFFF" fontSize="18" fontWeight="bold">Input</text>
            <text x="110" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="12" dy="0">📄 PDFs</text>
            <text x="110" y="150" textAnchor="middle" fill="#FFFFFF" fontSize="12" dy="0">🎤 Transcripts</text>
            <text x="110" y="170" textAnchor="middle" fill="#FFFFFF" fontSize="12" dy="0">🔗 Links</text>
            <text x="110" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="12" dy="0">📊 Data</text>
            <text x="110" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="12" dy="0">+more</text>
          </g>

          {/* Arrow 1 */}
          <g>
            <line x1="200" y1="150" x2="290" y2="150" stroke="#00FFFF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="245" y="140" textAnchor="middle" fill="#00FFFF" fontSize="11">One Notebook</text>
          </g>

          {/* Central Brain */}
          <g>
            <circle cx="380" cy="150" r="70" fill="url(#grad2)" stroke="#D900FF" strokeWidth="3" />
            <text x="380" y="140" textAnchor="middle" fill="#D900FF" fontSize="14" fontWeight="bold">Central</text>
            <text x="380" y="160" textAnchor="middle" fill="#D900FF" fontSize="14" fontWeight="bold">Brain</text>
            <text x="380" y="180" textAnchor="middle" fill="#FFFFFF" fontSize="11">NotebookLM</text>
          </g>

          {/* Arrow 2 */}
          <g>
            <line x1="450" y1="150" x2="540" y2="150" stroke="#D900FF" strokeWidth="2" />
            <text x="495" y="140" textAnchor="middle" fill="#D900FF" fontSize="11">Generates</text>
          </g>

          {/* Output Stages */}
          <g>
            {/* CFO */}
            <rect x="580" y="30" width="100" height="45" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="1.5" rx="4" />
            <text x="630" y="48" textAnchor="middle" fill="#00FFFF" fontSize="12" fontWeight="bold">CFO Brief</text>
            <text x="630" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="10">💰 ROI</text>

            {/* CMO */}
            <rect x="700" y="30" width="100" height="45" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="1.5" rx="4" />
            <text x="750" y="48" textAnchor="middle" fill="#00FFFF" fontSize="12" fontWeight="bold">CMO Deck</text>
            <text x="750" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="10">📊 GTM</text>

            {/* CEO */}
            <rect x="820" y="30" width="100" height="45" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="1.5" rx="4" />
            <text x="870" y="48" textAnchor="middle" fill="#00FFFF" fontSize="12" fontWeight="bold">CEO Brief</text>
            <text x="870" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="10">🎯 Strategy</text>

            {/* Manager */}
            <rect x="580" y="130" width="100" height="45" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="1.5" rx="4" />
            <text x="630" y="148" textAnchor="middle" fill="#00FFFF" fontSize="12" fontWeight="bold">Mgr Plan</text>
            <text x="630" y="163" textAnchor="middle" fill="#FFFFFF" fontSize="10">📋 Tasks</text>

            {/* Team */}
            <rect x="700" y="130" width="100" height="45" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="1.5" rx="4" />
            <text x="750" y="148" textAnchor="middle" fill="#00FFFF" fontSize="12" fontWeight="bold">Team Brief</text>
            <text x="750" y="163" textAnchor="middle" fill="#FFFFFF" fontSize="10">👥 Actions</text>

            {/* Custom */}
            <rect x="820" y="130" width="100" height="45" fill="url(#grad1)" stroke="#00FFFF" strokeWidth="1.5" rx="4" />
            <text x="870" y="148" textAnchor="middle" fill="#00FFFF" fontSize="12" fontWeight="bold">Custom...</text>
            <text x="870" y="163" textAnchor="middle" fill="#FFFFFF" fontSize="10">♾️ Endless</text>
          </g>

          {/* Connecting lines from brain to outputs */}
          <g stroke="#D900FF" strokeWidth="1" strokeDasharray="4" opacity="0.5">
            <line x1="415" y1="105" x2="600" y2="60" />
            <line x1="430" y1="90" x2="720" y2="60" />
            <line x1="440" y1="85" x2="840" y2="60" />
            <line x1="415" y1="195" x2="600" y2="165" />
            <line x1="430" y1="210" x2="720" y2="165" />
            <line x1="440" y1="215" x2="840" y2="165" />
          </g>

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#00FFFF" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Trust Factor Section */}
      <div className="mb-12 bg-background-dark/80 border border-primary/20 rounded-lg p-8">
        <h3 className="font-display text-2xl font-bold text-primary mb-4">The Trust Factor: Why Executives Rely on It</h3>

        <p className="font-body text-text-light/80 leading-relaxed">
          A critical differentiator for high-stakes decision-making is trust. NotebookLM solves this by ensuring every generated insight is <span className="text-primary font-bold">grounded in source material</span>. When your CFO asks, "Where does the ROI projection come from?", NotebookLM cites the exact document. When your CEO questions a strategic recommendation, you can point to the research it's based on. This source-grounding eliminates the "black box" problem and transforms NotebookLM from a convenience tool into a credible strategic advisor.
        </p>
      </div>

      {/* Two-Column Layout Section */}
      <div className="mb-12">
        <h3 className="font-display text-2xl font-bold text-primary mb-6">Try It: The Stakeholder Perspective Generator</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Workflow & Demo */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-text-light/80 leading-relaxed">
              {t('notebookLM.description')}
            </p>

            {/* Video Placeholder with Recommendation */}
            <div className="w-full aspect-video bg-card-dark border border-primary/20 flex flex-col items-center justify-center">
              <div className="text-5xl mb-4">🎬</div>
              <span className="font-mono text-text-light/50 text-center px-4 text-sm">[Video Placeholder/Recommendation]: A short (60-90 second) video here is crucial—demonstrate dumping 5 different sources into one Notebook, then ask NotebookLM to "generate a one-page CFO brief." Show the result. This is the "proof moment."</span>
            </div>

            <a
              href="https://notebooklm.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 text-center hover:shadow-glow-blue transition-shadow"
            >
              {t('notebookLM.cta')}
            </a>
          </div>

          {/* Column 2: Stakeholder Prompts (Tabs) */}
          <div className="flex flex-col">
            <h4 className="font-display text-xl font-bold text-secondary mb-4">Seven Windows into Your Data</h4>

            <div className="flex flex-wrap border-b border-secondary/20 -mt-3">
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
            <div className="bg-card-dark p-6 min-h-[300px] border border-t-0 border-secondary/20">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Usecase Section */}
      <div className="mt-12 bg-card-dark/80 border border-secondary/30 rounded-lg p-8">
        <h3 className="font-display text-2xl font-bold text-secondary mb-4">Bonus Usecase: The 'Studio' Features</h3>

        <p className="font-body text-text-light/80 mb-4">
          Beyond text summaries, NotebookLM includes "studio" features that take your knowledge base even further:
        </p>

        <ul className="space-y-3 text-text-light/80 font-body">
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0">🎙️</span>
            <div>
              <span className="font-bold">Audio Overviews:</span> Transform your notebook into a podcast-style deep dive—perfect for CEOs and executives who consume information while traveling.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary flex-shrink-0">🗣️</span>
            <div>
              <span className="font-bold">Interactive Q&A:</span> Ask follow-up questions and get instant answers grounded in your source material—no hallucinations, only citations.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-primary flex-shrink-0">🎯</span>
            <div>
              <span className="font-bold">Comparative Analysis:</span> Ask NotebookLM to compare your product vs. competitor—it pulls from your uploaded competitive research.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary flex-shrink-0">📈</span>
            <div>
              <span className="font-bold">Trend Detection:</span> NotebookLM identifies patterns across all sources you wouldn't see alone—"Here are the 3 strongest unmet customer needs."
            </div>
          </li>
        </ul>
      </div>

      {/* Conclusion Section */}
      <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-8">
        <h3 className="font-display text-2xl font-bold text-primary mb-4">The AIftershow Philosophy</h3>

        <p className="font-body text-text-light/80 mb-4">
          The AIftershow teaches three principles for the AI era:
        </p>

        <ol className="space-y-3 text-text-light/80 font-body list-decimal list-inside">
          <li>
            <span className="font-bold text-primary">Prompt Improver:</span> Teach yourself to ask better questions. Refining your prompt is refining your thinking.
          </li>
          <li>
            <span className="font-bold text-secondary">Hero Gem Builder:</span> Create AI specialists grounded in <em>your</em> knowledge. Generic AI knows everything; specialized AI knows what matters to <em>you</em>.
          </li>
          <li>
            <span className="font-bold text-primary">NotebookLM:</span> Stop reformatting. One knowledge base, infinite stakeholder perspectives. The real bottleneck isn't the AI—it's how you organize information so it can serve everyone.
          </li>
        </ol>

        <p className="font-body text-text-light/80 mt-6">
          Together, these three tools solve the complete workflow: <span className="text-primary font-bold">Ask Better → Know Better → Share Better.</span>
        </p>
      </div>
    </section>
  );
};

export default NotebookLM;