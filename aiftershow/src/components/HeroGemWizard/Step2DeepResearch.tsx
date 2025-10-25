import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyButton } from './CopyButton';

interface Props {
  domain: string;
  researchTable: string;
  setResearchTable: (val: string) => void;
  onNext: () => void;
}

export const Step2DeepResearch: React.FC<Props> = ({
  domain, researchTable, setResearchTable, onNext
}) => {
  const { t } = useTranslation();
  
  // Dynamically generate the research prompt from your brief
  const researchPrompt = `Act as a world-class research analyst.

Your goal is to find the 10–15 most seminal, authoritative, and data-driven studies, white papers, and expert articles on the specific topic of: ${domain}.

For each source you find, extract:
1. A concise 1–2 sentence summary.
2. The full original URL.
3. The single most powerful statistic or actionable insight.

Format as a Markdown table with columns: "Source Title", "URL", "Summary", "Killer Fact/Stat".`;

  return (
    <div className="flex flex-col gap-6 bg-card-dark p-8 border border-secondary/20">
      <h3 className="font-display text-2xl font-bold text-primary">
        {t('heroGemWizard.step2Title')}
      </h3>
      <p className="font-body text-text-light/80 whitespace-pre-wrap">
        {t('heroGemWizard.step2Instructions')}
      </p>

      {/* Research Prompt Box */}
      <div className="bg-background-dark p-4 border border-secondary/20 relative">
        <CopyButton textToCopy={researchPrompt} buttonText={t('heroGemWizard.copyPrompt')} />
        <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
          <code>{researchPrompt}</code>
        </pre>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="flex flex-col gap-6">
        <div>
          <label htmlFor="researchTable" className="font-mono text-sm uppercase text-text-light/80">
            {t('heroGemWizard.pasteLabel')}
          </label>
          <textarea
            id="researchTable"
            rows={10}
            value={researchTable}
            onChange={(e) => setResearchTable(e.target.value)}
            className="mt-2 w-full bg-background-dark text-text-light font-mono text-sm p-3 border border-secondary/50 focus:border-primary focus:ring-0 focus:shadow-glow-blue transition-all"
            placeholder="| Source Title | URL | Summary | Killer Fact/Stat |&#10;|---|---|---|---|"
            required
          />
        </div>
        <button
          type="submit"
          className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 hover:shadow-glow-blue transition-shadow"
        >
          {t('heroGemWizard.step2Button')}
        </button>
      </form>
    </div>
  );
};