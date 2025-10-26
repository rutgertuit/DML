import React, { useState, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getScribeResponse } from '../services/aiStudioService';
import { PromptImproverHeader } from './PromptImproverHeader';

// Define the structure for a chat message
interface Message {
  role: 'user' | 'model';
  text: string;
}

// The new system prompt, as specified
const SYSTEM_PROMPT = `You are Prompt Scribe, a patient, empathetic coach who helps users craft killer prompts through friendly dialogue. Your goal: Guide them to specificity without overwhelming – think collaborator, not critic. Never execute or answer their original prompt; only refine it collaboratively.\n\nCore Rules:\n- Analyze the draft for gaps in: Audience, Goal/Objective, Tone/Style, Format/Length, Constraints (e.g., sources, ethics), Examples/Context.\n- Respond with empathy first: Acknowledge their idea positively (e.g., "Love the AI blog angle – let's make it pop!").\n- Ask exactly 3-5 targeted, open-ended questions to fill gaps. Number them for clarity. Keep it concise (under 150 words total).\n- After their reply, synthesize: Update the draft prompt, show diffs (e.g., "Added: target=beginners"), and ask 1-2 follow-ups if needed. Cap at 2 rounds.\n- End by generating the final prompt. You MUST wrap this final, complete prompt in a single, non-nested code block, starting *exactly* with \`[FINAL_PROMPT]\` and ending *exactly* with \`[/FINAL_PROMPT]\`.\n- After the \`[/FINAL_PROMPT]\` tag, you MUST add a concluding sign-off (e.g., 'Here's the refined prompt, ready to use in Gemini!' ).\n- **Crucially, after you use the \`[FINAL_PROMPT]\` tags, your turn is over. You MUST NOT ask any more follow-up questions.**\n- If they say "stop" or "finalize," output the prompt immediately.\n- Stay fun and encouraging: End responses with a micro-tip (e.g., "Pro tip: Specificity = magic!").`;

export const PromptImprover: React.FC = () => {
  const { t } = useTranslation();

  // State for the chat
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [finalPrompt, setFinalPrompt] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Refs for auto-scrolling
  const chatLogRef = useRef<HTMLDivElement>(null);
  const finalPromptRef = useRef<HTMLDivElement>(null);

  // Tweak 1: Auto-scroll chat log
  useLayoutEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages, isLoading]); // Triggers when messages or loading state changes

  // Tweak 4: Auto-scroll to final prompt box
  useLayoutEffect(() => {
    if (finalPrompt && finalPromptRef.current) {
      finalPromptRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [finalPrompt]); // Triggers when finalPrompt appears

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputValue.trim();
    if (!userInput || isLoading) return;

    setIsLoading(true);
    setInputValue('');
    setFinalPrompt(null); // Clear any old prompt
    setIsCopied(false);

    const newUserMessage: Message = { role: 'user', text: userInput };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    const apiHistory = [
      { role: 'user' as const, parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model' as const, parts: [{ text: "Got it. I'm Prompt Scribe, your friendly coach. What's your rough prompt idea?" }] },
      ...updatedMessages.map(msg => ({
        role: msg.role as 'user' | 'model',
        parts: [{ text: msg.text }],
      })),
    ];

    const aiResponseText = await getScribeResponse(apiHistory);
    let aiChatText = aiResponseText;

    // Check for our final prompt tags
    const promptMatch = aiResponseText.match(/\n?\[FINAL_PROMPT\]([\s\S]*)\[\/FINAL_PROMPT\]\n?/);

    if (promptMatch && promptMatch[1]) {
      const extractedPrompt = promptMatch[1].trim();
      setFinalPrompt(extractedPrompt);

      // The chat message should be *everything else*
      aiChatText = aiResponseText.replace(/\n?\[FINAL_PROMPT\][\s\S]*\[\/FINAL_PROMPT\]\n?/, '').trim();
    }

    const newAiMessage: Message = { role: 'model', text: aiChatText };
    setMessages(prev => [...prev, newAiMessage]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Check for 'Enter' key without 'Shift'
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line
      handleSubmit(e as React.FormEvent); // Submit form
    }
  };

  const handleCopy = () => {
    if (finalPrompt) {
      navigator.clipboard.writeText(finalPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2s
    }
  };

  return (
    <section className="py-24" id="prompt-improver">
      <h2 className="font-display text-4xl font-bold text-text-light mb-4">
        {t('promptImprover.title')}
      </h2>

      <PromptImproverHeader />

      {/* Remove intro from above, move it inside chat box below */}

      {/* New Chat-based UI */}
      <div className="bg-card-dark border border-secondary/20">
        {/* Chat Log */}
        <div
          ref={chatLogRef}
          className="flex flex-col gap-4 p-4 min-h-[250px] max-h-[400px] overflow-y-auto"
        >
          {/* Research improvement text as a system chat bubble */}
          <div className="flex justify-start">
            <div className="p-4 max-w-[80%] bg-primary/10 text-text-light/90 border border-primary/30 rounded-lg">
              <p className="font-body text-sm">
                💡 <span className="font-semibold">Pro Tip:</span> Research shows that iterative, dialogue-based refinement yields 20-50% better AI outputs compared to one-shot prompts, as it uncovers hidden assumptions and builds specificity organically.
              </p>
            </div>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-4 max-w-[80%] ${msg.role === 'user'
                  ? 'bg-secondary/20 text-text-light rounded-lg'
                  : 'bg-background-dark text-text-light/90 rounded-lg'
                  }`}
              >
                <p className="font-body whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="p-4 max-w-[80%] bg-background-dark text-text-light/90 flex items-start gap-3 rounded-lg">
                {/* Pulsating Gemini logo/icon with spinner */}
                <div className="flex-shrink-0 relative">
                  {/* Spinning ring */}
                  <svg className="w-8 h-8 animate-spin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {/* Inner pulsating icon */}
                  <svg className="w-4 h-4 text-primary animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm">
                    <span className="font-semibold text-primary">Gemini 2.5 Flash</span> is analyzing your prompt...
                  </p>
                  <p className="font-mono text-xs text-text-light/60 mt-1">
                    Finding what additional information a perfect prompt is still missing
                    <span className="inline-flex ml-1">
                      <span className="animate-bounce delay-0">.</span>
                      <span className="animate-bounce delay-100">.</span>
                      <span className="animate-bounce delay-200">.</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 p-6 border-t border-secondary/20"
        >
          <textarea
            id="prompt-input"
            rows={2}
            className="flex-1 bg-background-dark text-text-light font-mono text-sm p-4 border border-secondary/50 focus:border-primary focus:ring-0 focus:shadow-glow-blue transition-all"
            placeholder={t('promptImprover.placeholder')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 hover:shadow-glow-blue transition-shadow disabled:opacity-50 disabled:shadow-none"
            disabled={isLoading}
          >
            {isLoading ? '...' : t('promptImprover.submit')}
          </button>
        </form>
      </div>

      {/* Final Prompt Output Box */}
      {finalPrompt && (
        <div
          ref={finalPromptRef}
          className="mt-8 p-1 border border-primary/50 shadow-glow-blue"
        >
          <h3 className="font-display text-2xl font-bold text-text-light px-6 pt-6">
            Your Refined Prompt is Ready
          </h3>
          <p className="font-body text-text-light/80 mt-2 mb-4 px-6">
            Copy the prompt below and paste it into your favorite LLM to see the results.
          </p>
          <div className="bg-card-dark p-4 border border-primary/20 relative m-6 mt-0">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-2 py-1 hover:bg-secondary hover:shadow-glow-purple transition-all"
            >
              {isCopied ? 'Copied!' : t('promptImprover.copy')}
            </button>
            <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
              <code>
                {finalPrompt}
              </code>
            </pre>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 px-6 pb-6">
            <a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase bg-primary/80 text-background-dark px-4 py-2 hover:bg-primary hover:shadow-glow-blue transition-all">
              Test in Gemini
            </a>
            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase bg-white/80 text-background-dark px-4 py-2 hover:bg-white hover:shadow-glow-blue transition-all">
              Test in ChatGPT
            </a>
            <a href="https://chat.mistral.ai/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase bg-red-500/80 text-white px-4 py-2 hover:bg-red-500 hover:shadow-glow-blue transition-all">
              Test in LeChat
            </a>
            <a href="https://x.ai/grok" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase bg-blue-400/80 text-white px-4 py-2 hover:bg-blue-400 hover:shadow-glow-blue transition-all">
              Test in Grok
            </a>
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase bg-orange-500/80 text-white px-4 py-2 hover:bg-orange-500 hover:shadow-glow-blue transition-all">
              Test in Claude
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default PromptImprover;