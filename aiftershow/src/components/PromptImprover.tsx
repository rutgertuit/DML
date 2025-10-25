import React, { useState, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getScribeResponse } from '../services/aiStudioService';

// Define the structure for a chat message
interface Message {
  role: 'user' | 'model';
  text: string;
}

// The new system prompt, as specified
const SYSTEM_PROMPT = `You are Prompt Scribe, a patient, empathetic coach who helps users craft killer prompts through friendly dialogue. Your goal: Guide them to specificity without overwhelming – think collaborator, not critic. Never execute or answer their original prompt; only refine it collaboratively.

Core Rules:
- Analyze the draft for gaps in: Audience, Goal/Objective, Tone/Style, Format/Length, Constraints (e.g., sources, ethics), Examples/Context.
- Respond with empathy first: Acknowledge their idea positively (e.g., "Love the AI blog angle – let's make it pop!").
- Ask exactly 3-5 targeted, open-ended questions to fill gaps. Number them for clarity. Keep it concise (under 150 words total).
- After their reply, synthesize: Update the draft prompt, show diffs (e.g., "Added: target=beginners"), and ask 1-2 follow-ups if needed. Cap at 2 rounds.
- End by generating the final prompt. You MUST wrap this final, complete prompt in a single, non-nested code block, starting *exactly* with 
[FINAL_PROMPT]
 and ending *exactly* with 
[/FINAL_PROMPT]
. 
- After the `[/FINAL_PROMPT]` tag, you MUST add a concluding sign-off (e.g., 'Here's the refined prompt, ready to use in Gemini!').
- **Crucially, after you use the `[FINAL_PROMPT]` tags, your turn is over. You MUST NOT ask any more follow-up questions.**
- If they say "stop" or "finalize," output the prompt immediately.
- Stay fun and encouraging: End responses with a micro-tip (e.g., "Pro tip: Specificity = magic!")`;

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
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: "Got it. I'm Prompt Scribe, your friendly coach. What's your rough prompt idea?" }] },
      ...updatedMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    ];
    
    const aiResponseText = await getScribeResponse(apiHistory);
    let aiChatText = aiResponseText;

    // Check for our final prompt tags
    const promptMatch = aiResponseText.match(/\n\[FINAL_PROMPT\]([\s\S]*)\[\/FINAL_PROMPT\]\n/);
    
    if (promptMatch && promptMatch[1]) {
      const extractedPrompt = promptMatch[1].trim();
      setFinalPrompt(extractedPrompt);
      
      // The chat message should be *everything else*
      aiChatText = aiResponseText.replace(/\n\[FINAL_PROMPT\][\s\S]*\[\/FINAL_PROMPT\]\n/, '').trim();
    }

    const newAiMessage: Message = { role: 'model', text: aiChatText };
    setMessages(prev => [...prev, newAiMessage]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Check for 'Enter' key without 'Shift'
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line
      handleSubmit(e as any); // Submit form
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
      <p className="font-body text-text-light/80 leading-relaxed max-w-4xl mb-12">
        {t('promptImprover.intro')}
      </p>
      
      {/* New Chat-based UI */}
      <div className="bg-card-dark border border-secondary/20">
        
        {/* Chat Log */}
        <div
          ref={chatLogRef}
          className="flex flex-col gap-4 p-6 min-h-[400px] max-h-[600px] overflow-y-auto"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-4 max-w-lg ${
                  msg.role === 'user' 
                    ? 'bg-secondary/20 text-text-light' 
                    : 'bg-background-dark text-text-light/90'
                }`}
              >
                <p className="font-body whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="p-4 max-w-lg bg-background-dark text-text-light/90">
                <p className="font-mono animate-pulse">Gemini 2.5 Flash Scribe Helper...</p>
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
            Your Refined Prompt
          </h3>
          <p className="font-body text-text-light/80 mt-2 mb-4 px-6">
            Ready to use! Copy this and paste it into Gemini or your preferred LLM.
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
        </div>
      )}
    </section>
  );
};

export default PromptImprover;