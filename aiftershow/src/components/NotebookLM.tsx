import React, { useState } from 'react';

export const NotebookLM: React.FC = () => {
  // State to manage which tab is active. 1 = CFO
  const [activeTab, setActiveTab] = useState(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1: // CFO
        return (
          <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
            "You are a 'Finance Translator'. Using all sourced documents, generate a one-page executive summary for a CFO. Focus *only* on ROI, cost-saving implications, and potential revenue models. List the top 5 financial risks and opportunities as bullet points."
          </pre>
        );
      case 2: // CMO
        return (
          <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
            "You are a 'GTM Strategist'. Using all sourced documents, generate a slide deck outline for a CMO. Focus *only* on go-to-market strategy, target audience segmentation, key messaging, and competitive differentiators. Extract 3 'killer facts' for the pitch."
          </pre>
        );
      case 3: // CEO
        return (
          <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
            "You are a 'Strategic Advisor'. Using all sourced documents, provide a 3-bullet-point summary of the 'Big Picture'. What is the one major strategic decision we need to make based on this data? What is the single biggest threat on the horizon?"
          </pre>
        );
      case 4: // Manager
        return (
          <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
            "You are a 'Project Lead'. Using all sourced documents, draft a project plan. Identify the top 3 priorities, the required resources, and a potential timeline. List 5 key action items for the team this week."
          </pre>
        );
      case 5: // Team
        return (
          <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
            "You are a 'Team Synthesizer'. Using all sourced documents, create a 5-bullet-point summary of the key takeaways *everyone* on the team needs to know. What are the most relevant data points for our daily work? (e.g., customer feedback, technical issues, etc.)"
          </pre>
        );
      default:
        return null;
    }
  };

  const getTabClass = (tabIndex: number) => {
    return `font-mono text-sm uppercase py-3 px-4 border-b-2 transition-all ${
      activeTab === tabIndex
        ? 'border-primary text-primary text-glow-blue' // Use text-glow-blue from our Tailwind v4 @theme
        : 'border-transparent text-text-light/50 hover:border-secondary/50 hover:text-text-light'
    }`;
  };

  return (
    <section className="py-24" id="notebooklm">
      <h2 className="font-display text-4xl font-bold text-text-light mb-12">
        NotebookLM: Content First, Formatting Later.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Column 1: Workflow & Demo */}
        <div className="flex flex-col gap-6">
          <p className="font-body text-text-light/80 leading-relaxed">
            NotebookLM revolutionizes collaboration by shifting the focus. Stop worrying upfront about how the CFO wants data formatted versus the CEO. Focus on structure and input. Dump everything—transcripts, PDFs, decks, links—into a Notebook. NotebookLM becomes the central brain. You can then rapidly iterate and generate the exact presentation format needed for any stakeholder instantly.
          </p>
          
          {/* Video Placeholder */}
          <div className="w-full aspect-video bg-card-dark border border-primary/20 flex items-center justify-center">
            <span className="font-mono text-text-light/50">[Video Placeholder]</span>
          </div>
          
          <a
            href="[https://notebooklm.google.com](https://notebooklm.google.com)"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 text-center hover:shadow-glow-blue transition-shadow"
          >
            Try NotebookLM
          </a>
        </div>

        {/* Column 2: Stakeholder Prompts (Tabs) */}
        <div className="flex flex-col">
          <div className="flex flex-wrap border-b border-secondary/20 -mt-3">
            <button className={getTabClass(1)} onClick={() => setActiveTab(1)}>
              For the CFO
            </button>
            <button className={getTabClass(2)} onClick={() => setActiveTab(2)}>
              For the CMO
            </button>
            <button className={getTabClass(3)} onClick={() => setActiveTab(3)}>
              For the CEO
            </button>
            <button className={getTabClass(4)} onClick={() => setActiveTab(4)}>
              For your Manager
            </button>
            <button className={getTabClass(5)} onClick={() => setActiveTab(5)}>
              For your Team
            </button>
          </div>
          
          {/* Tab Content Area */}
          <div className="bg-card-dark p-6 min-h-[300px] border border-t-0 border-secondary/20">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotebookLM;