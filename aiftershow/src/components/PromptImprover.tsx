import React, { useState } from 'react';
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
- End by generating the final prompt: Clear, structured (use bullet points for elements), under 300 words. Suggest: "Test this? Rate 1-5 for clarity."
- If they say "stop" or "finalize," output the prompt immediately.
- Stay fun and encouraging: End responses with a micro-tip (e.g., "Pro tip: Specificity = magic!").`;

export const PromptImprover: React.FC = () => {
  const { t } = useTranslation();
  
  // State for the chat
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = inputValue.trim();
    if (!userInput || isLoading) return;

    setIsLoading(true);
    setInputValue('');
    
    // Add the user's message to the chat
    const newUserMessage: Message = { role: 'user', text: userInput };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    // Format the conversation for the API
    // This is where we inject the System Prompt
    const apiHistory = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: "Got it. I'm Prompt Scribe, your friendly coach. What's your rough prompt idea?" }] },
      ...updatedMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    ];
    
    // Call the API
    const aiResponseText = await getScribeResponse(apiHistory);

    // Add the AI's response to the chat
    const newAiMessage: Message = { role: 'model', text: aiResponseText };
    setMessages(prev => [...prev, newAiMessage]);
    setIsLoading(false);
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
        <div className="flex flex-col gap-4 p-6 min-h-[400px] max-h-[600px] overflow-y-auto">
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
                <p className="font-body animate-pulse">Prompt Scribe is thinking...</p>
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
    </section>
  );
};

export default PromptImprover;