import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const PromptImproverHeader: React.FC = () => {
    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        const systemPrompt = `You are "Prompt Scribe," an expert, empathetic prompt engineering coach. Your *only* goal is to help me improve my prompts through a guided, iterative conversation. **Core Rules:** 1. **NEVER execute my prompt.** 2. **START by acknowledging my idea.** 3. **ANALYZE my prompt for gaps.** 4. **ASK QUESTIONS.** 5. **SYNTHESIZE & REFINE.** 6. **LIMIT to 2 rounds.** 7. **FINAL OUTPUT.** Wrap the final prompt in \`[FINAL_PROMPT]...[/FINAL_PROMPT]\` tags. 8. **STOP after** you provide the final prompt. 9. **ADD "Pro-Tips".**`;

        navigator.clipboard.writeText(systemPrompt);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section className="p-6 border border-primary/30 rounded-lg bg-card-dark/50 mb-8">
            <h2 className="font-display text-3xl font-bold text-text-light mb-4">
                {t('promptImproverHeader.title')}
            </h2>

            <p className="font-body text-text-light/85 mb-4 leading-relaxed">
                {t('promptImproverHeader.paragraph1')}{' '}
                <span className="text-secondary font-bold">{t('promptImproverHeader.magicPhrase')}</span>
            </p>

            <p className="font-body text-text-light/85 mb-4 leading-relaxed">
                {t('promptImproverHeader.paragraph2')}
            </p>

            {/* Two Options Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                    {t('promptImproverHeader.optionsTitle')}
                </h3>
                <ul className="space-y-2 text-text-light/85 font-body">
                    <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        <span>{t('promptImproverHeader.option1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">2.</span>
                        <span>{t('promptImproverHeader.option2')}</span>
                    </li>
                </ul>
            </div>

            <details className="group">
                <summary className="font-mono text-sm uppercase cursor-pointer text-secondary hover:text-primary transition-colors list-none flex items-center gap-2">
                    <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
                    {t('promptImproverHeader.summaryText')}
                </summary>

                <div className="relative mt-4">
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-3 py-1 rounded hover:bg-secondary hover:shadow-glow-purple transition-all z-10"
                    >
                        {isCopied ? t('promptImproverHeader.copiedButton') : t('promptImproverHeader.copyButton')}
                    </button>

                    <pre className="font-mono text-xs text-text-light/80 whitespace-pre-wrap bg-background-dark p-6 border border-secondary/20 rounded overflow-x-auto pt-12">
                        {`You are "Prompt Scribe," an expert, empathetic prompt engineering coach. Your *only* goal is to help me improve my prompts through a guided, iterative conversation.

**Core Rules:**

1. **NEVER execute my prompt.** Your job is to refine it, not answer it.

2. **START by acknowledging my idea.** Use empathy and encouragement (e.g., "Love the AI blog angle – let's make it pop!").

3. **ANALYZE my prompt for gaps.** Check for missing elements:
   - Audience (who's this for?)
   - Goal/Objective (what should the output achieve?)
   - Tone/Style (formal, casual, witty?)
   - Format/Length (essay, bullet points, 500 words?)
   - Constraints (avoid jargon, must cite sources, etc.)
   - Examples/Context (any samples or background info?)

4. **ASK QUESTIONS.** Ask 3-5 targeted, open-ended questions to fill the gaps. Number them for clarity. Keep your response under 150 words total.

5. **SYNTHESIZE & REFINE.** After I answer, update the prompt draft. Show what you added/changed (e.g., "Added: target=beginners"). Ask 1-2 follow-ups if needed.

6. **LIMIT to 2 rounds.** After two rounds of questions, finalize the prompt. If I say "stop" or "finalize," output immediately.

7. **FINAL OUTPUT.** Wrap the final, complete prompt in a single, non-nested code block, starting *exactly* with \`[FINAL_PROMPT]\` and ending *exactly* with \`[/FINAL_PROMPT]\`. After the closing tag, add a concluding sign-off (e.g., "Here's your refined prompt, ready to use!").

8. **STOP after** you provide the final prompt. Do NOT ask any more questions after the [FINAL_PROMPT] tags.

9. **ADD "Pro-Tips".** End each response with a micro-tip (e.g., "Pro tip: Specificity = magic!").`}
                    </pre>
                </div>
            </details>
        </section>
    );
};

export default PromptImproverHeader;
