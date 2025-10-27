
import React, { useState, useEffect, useRef } from 'react';
import { getScribeResponse, callGeminiApi } from '../../services/aiStudioService';
import ChatBubble from '../ChatBubble';
import LoadingIndicator from '../LoadingIndicator';

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
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const finalizeButtonRef = useRef<HTMLButtonElement>(null);

  // System prompt for the Gem Design Assistant
  const SYSTEM_PROMPT = `
You are a helpful and *proactive* "Gem Design Assistant".
Your job is to have a conversation with the user to help them design their custom AI.
The user's chosen blueprint is: "${selectedBlueprint}". All your follow-up questions and document suggestions MUST be tailored to this context.

CRITICAL: When suggesting documents, you must distinguish between two types:

**RESEARCH DOCUMENTS** (publicly available information that can be researched):
- Industry best practices, market trends, academic research
- Public company information, case studies, published methodologies
- Programming languages, frameworks, technical standards
- Historical data, scientific principles, established theories

**PERSONAL DOCUMENTS** (user must create/provide themselves):
- Personal preferences, internal processes, private data
- Company-specific workflows, internal policies, proprietary methods  
- Personal writing samples, individual communication styles
- Private project details, confidential strategies, personal experiences

Your workflow is two-part:
1.  **REFINE GOAL:** First, ask 1-3 clarifying questions to help the user define a *specific, actionable goal*.
2.  **SUGGEST DOCUMENTS:** As *soon* as you have a clear goal, you MUST *proactively suggest* a list of 2-4 specific source documents.
    -   **ONLY suggest RESEARCH DOCUMENTS** (publicly available information)
    -   Explain *why* each document is needed
    -   Frame this as an expert recommendation
    -   Ask the user for *confirmation* or *modifications*

-   DO NOT ask the user "what documents do you think you need?". You are the expert.
-   DO NOT suggest documents that require private/personal information from the user.
-   DO NOT output "FINAL PLAN" or JSON. Just chat and make suggestions.

**Example of the correct flow:**
User: "I want a coding assistant for React development."
AI: "Perfect! Based on that goal, I recommend researching these 3 areas for your Gem:
    1.  **'React_Best_Practices.md'**: Current React patterns, hooks best practices, and performance optimization techniques.
    2.  **'Modern_JavaScript_Standards.md'**: ES6+ features, TypeScript integration, and current JavaScript ecosystem trends.
    3.  **'React_Ecosystem_Tools.md'**: Popular libraries, testing frameworks, and build tools used in React development.

These will give your Gem a solid foundation in current React development practices. Does this research focus look good to you?"
`;

  useEffect(() => {
    const fetchKickoffMessage = async () => {
      // Don't re-fetch if chat already started
      if (!selectedBlueprint || messages.length > 0) return;

      setIsLoading(true);
      setError(null);

      // Define the meta-prompt to get the first question
      const KICKOFF_PROMPT = `
You are a helpful "Gem Design Assistant".
The user has just selected the blueprint: "${selectedBlueprint}".
Your *only* job is to generate the *perfect, single, engaging kick-off message* to start the conversation.

- This message MUST be a *question*.
- This question MUST be *specific* to the selected blueprint.
- DO NOT be generic.
- Your *entire output* is just this single message. No preamble.

Example for "Knowledge Expert":
"Great, a Knowledge Expert! To get started, what complex subject or set of documents do you want your Gem to master?"

Example for "Style & Tone Guardian":
"Excellent choice! To begin, can you describe the specific voice or brand tone you want your Gem to protect and enforce?"

Example for "Strategic Advisor":
"A Strategic Advisor it is. What is the high-level business goal or challenge you'd like your Gem to help you analyze?"
`;

      try {
        // Call the API to get the first message
        const firstAiMessage = await callGeminiApi(KICKOFF_PROMPT);

        // Set the first message in state
        setMessages([{ sender: 'ai', content: firstAiMessage }]);

      } catch (e) {
        console.error("Failed to fetch kickoff message:", e);
        setError("Failed to start the chat. Please try again.");
        // Fallback message
        setMessages([{ sender: 'ai', content: "Hello! I'm here to help you design your Gem. What's the main goal for this AI assistant?" }]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchKickoffMessage();
  }, [selectedBlueprint, messages.length]);

  // Auto-scroll to bottom when messages change or loading state changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Scroll finalize button into view when conversation is substantive (4+ messages)
  useEffect(() => {
    if (messages.length >= 4 && !isLoading && finalizeButtonRef.current) {
      setTimeout(() => {
        finalizeButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 300);
    }
  }, [messages.length, isLoading]);

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

The final plan must be optimized for a "${selectedBlueprint}" Gem.

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

      <div ref={chatContainerRef} className="chat-history bg-background-dark/80 rounded-lg p-4 border border-secondary/20 h-[600px] overflow-y-auto mb-4 flex flex-col space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble key={index} sender={msg.sender} content={msg.content} />
        ))}
        {isLoading && <LoadingIndicator />}
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
          ref={finalizeButtonRef}
          onClick={handleFinalizePlan}
          disabled={isLoading || messages.length < 2}
          className="hero-gem-btn w-full font-mono uppercase text-lg bg-secondary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-purple transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Finalizing Plan...' : 'Finalize Gem Plan & Continue'}
        </button>

        {/* Branding */}
        <p className="text-xs text-text-light/50 text-center mt-3">
          Powered by Gemini 2.5 Flash ✨
        </p>
      </div>
    </div>
  );
};

export default GemDesignAssistant;
