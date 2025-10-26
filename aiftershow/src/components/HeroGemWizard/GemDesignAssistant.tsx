
import React, { useState, useEffect } from 'react';
import { getScribeResponse } from '../../services/aiStudioService';

interface GemDesignAssistantProps {
  selectedBlueprint: string;
  onPlanCreated: (plan: { goal: string, requiredDocuments: string[] }) => void;
  onGoBack: () => void;
}

const GemDesignAssistant: React.FC<GemDesignAssistantProps> = ({ selectedBlueprint, onPlanCreated, onGoBack }) => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai', content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // System prompt for the Gem Design Assistant
  const SYSTEM_PROMPT = `
You are a helpful and *proactive* "Gem Design Assistant".
Your job is to have a conversation with the user to help them design their custom AI.
The user's selected blueprint is: "${selectedBlueprint}".

Your workflow is two-part:
1.  **REFINE GOAL:** First, ask 1-3 clarifying questions to help the user define a *specific, actionable goal*. (You did this well in the last chat, ending with "prevent defensiveness...").
2.  **SUGGEST DOCUMENTS:** As *soon* as you have a clear goal, you MUST *proactively suggest* a list of 2-4 specific source documents the user should create.
    -   Explain *why* each document is needed.
    -   Frame this as an expert recommendation.
    -   Ask the user for *confirmation* or *modifications*.

-   DO NOT ask the user "what documents do you think you need?". You are the expert.
-   DO NOT output "FINAL PLAN" or JSON. Just chat and make suggestions.

**Example of the new, good flow:**
User: "I want to prevent defensiveness."
AI: "Great! We have a clear goal. Based on that, I recommend you create these 3 source documents for your Gem:
    1.  **'Swedish_Communication_Norms.txt'**: A document with research on Swedish business etiquette, focusing on directness, humility, and consensus.
    2.  **'Dutch_vs_Swedish_Styles.txt'**: A simple file with examples of Dutch directness vs. preferred Swedish phrasing.
    3.  **'Approved_Humor_Examples.md'**: A list of 'safe' jokes or humorous styles that align with Swedish 'lagom' (just enough) culture.

Does this list look like a good starting point for you?"
`;

  useEffect(() => {
    const initChat = async () => {
      try {
        // Build initial conversation with system prompt
        const apiHistory = [
          { role: 'user' as const, parts: [{ text: SYSTEM_PROMPT }] },
          { role: 'model' as const, parts: [{ text: "Got it. I'm your Gem Design Assistant." }] },
          { role: 'user' as const, parts: [{ text: "Start a debate to help me define my Gem's goal and the source documents it will need." }] }
        ];

        const response = await getScribeResponse(apiHistory);
        setMessages([{ sender: 'ai', content: response }]);
      } catch (error) {
        console.error("Failed to initialize chat:", error);
        setMessages([{ sender: 'ai', content: "Hello! I'm here to help you design your Gem. What's the main goal for this AI assistant?" }]);
      }
    };
    initChat();
  }, [selectedBlueprint, SYSTEM_PROMPT]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: { sender: 'user' | 'ai', content: string }[] = [...messages, { sender: 'user', content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Build full conversation history for the API
      const apiHistory = [
        { role: 'user' as const, parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model' as const, parts: [{ text: "Got it. I'm your Gem Design Assistant." }] },
        ...newMessages.map(msg => ({
          role: msg.sender === 'user' ? 'user' as const : 'model' as const,
          parts: [{ text: msg.content }]
        }))
      ];

      const response = await getScribeResponse(apiHistory);
      setMessages([...newMessages, { sender: 'ai', content: response }]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      setMessages([...newMessages, { sender: 'ai', content: "I'm having trouble responding. Could you try rephrasing that?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalizePlan = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Build the full conversation history
      const apiHistory = [
        { role: 'user' as const, parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model' as const, parts: [{ text: "Got it. I'm your Gem Design Assistant." }] },
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' as const : 'model' as const,
          parts: [{ text: msg.content }]
        })),
        {
          role: 'user' as const,
          parts: [{
            text: `You are a "Plan Summarizer". Parse the attached conversation.

Find the *refined goal* the user and AI agreed on, and the *last list of source documents* the AI suggested and the user agreed to.

Your *entire response* MUST be *only* a minified JSON object based on this final plan.
DO NOT use placeholders. Use the *actual* goal and document names from the chat.

Example format:
{ "goal": "Rewrite communications to prevent Swedish readers from becoming defensive.", "requiredDocuments": ["Swedish_Communication_Norms.txt", "Dutch_vs_Swedish_Styles.txt", "Approved_Humor_Examples.md"] }

Do not add *any* conversational text or markdown formatting around this JSON.` }]
        }
      ];

      const jsonStringResponse = await getScribeResponse(apiHistory);

      // Try to parse the JSON response
      const parsedPlan = JSON.parse(jsonStringResponse.trim());
      onPlanCreated(parsedPlan);

    } catch (e) {
      console.error("Failed to finalize plan:", e);
      setError("The AI failed to create a plan. Please try again or manually summarize your Gem's goal and needed files.");
      setMessages([...messages, {
        sender: 'ai',
        content: 'I had trouble finalizing the plan. Could you summarize: (1) your Gem\'s goal and (2) the 1-5 source files you need?'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 2: Design Your Gem with an AI Assistant</h3>

      {/* Header with Go Back button and Blueprint display */}
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-secondary/30">
        <button
          onClick={onGoBack}
          className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-text-light hover:bg-secondary/40 transition-colors rounded border border-secondary/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Change Blueprint
        </button>
        <div className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded font-mono text-sm font-bold">
          Designing Gem: {selectedBlueprint}
        </div>
      </div>

      <div className="chat-history bg-background-dark/80 rounded-lg p-4 border border-secondary/20 h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender} mb-3`}>
            <p><strong>{msg.sender === 'user' ? "You" : "AI"}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>

      <div className="chat-input flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow p-3 rounded border border-secondary/30 bg-background-dark text-text-light focus:border-primary focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="hero-gem-btn font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-blue transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Finalize Plan Button */}
      <div className="finalize-section border-t border-primary/20 pt-4">
        <p className="text-text-light/70 text-sm mb-3">
          Once you've discussed your Gem's goals and needed documents with the AI, click below to finalize your plan and move to the next step.
        </p>
        <button
          onClick={handleFinalizePlan}
          disabled={isLoading || messages.length < 2}
          className="hero-gem-btn w-full font-mono uppercase text-lg bg-secondary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-purple transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Finalizing Plan...' : 'Finalize Gem Plan & Continue'}
        </button>
      </div>
    </div>
  );
};

export default GemDesignAssistant;
