
import React, { useState, useEffect, useRef } from 'react';
import { getScribeResponse, callGeminiApi } from '../../services/aiStudioService';
import ChatBubble from '../ChatBubble';
import LoadingIndicator from '../LoadingIndicator';

interface GemDesignAssistantProps {
  selectedBlueprint: string;
  onPlanCreated: (plan: {
    goal: string,
    researchDocuments: string[],
    userDocuments: string[]
  }) => void;
  onGoBack: () => void;
}

const GemDesignAssistant: React.FC<GemDesignAssistantProps> = ({ selectedBlueprint, onPlanCreated, onGoBack }) => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai', content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const finalizeButtonRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // System prompt for the Gem Design Assistant
  const SYSTEM_PROMPT = `
You are a helpful and *proactive* "Gem Design Assistant".
Your job is to have a conversation with the user to help them design their custom AI.
The user's chosen blueprint is: "${selectedBlueprint}". All your follow-up questions and document suggestions MUST be tailored to this context.

BLUEPRINT-SPECIFIC CONTEXT:

**💎 The Knowledge Expert (De Kennis-Expert):**
- Goal: A Subject Matter Expert that only answers from uploaded documents
- Key User Documents: Product manuals, technical specs, meeting notes, project plans, company wiki, policies
- Key Research Documents: Industry best practices, technical standards, research methodologies
- Critical Instructions: Never answer from general knowledge, always cite sources, be factual and concise

**💎 The Brand Guardian (De Huisstijl-Expert):**
- Goal: Ensures all writing matches one consistent brand voice
- Key User Documents: Style guide, brand values, tone of voice docs, 5-10 on-brand examples, off-brand examples
- Key Research Documents: Brand voice best practices, tone analysis frameworks, industry communication standards
- Critical Instructions: Analyze style patterns (sentence length, word choice, emoji use), always provide 2-3 variations, explain changes

**💎 The Coder's Sidekick (De Tech-Expert):**
- Goal: Developer who knows your specific codebase/API inside out
- Key User Documents: API documentation, data schemas, codebase modules, coding style guide
- Key Research Documents: Programming language best practices, framework documentation, design patterns
- Critical Instructions: Base all examples on uploaded context, follow coding style guide, explain complex functions

**💎 The Idea Machine (De Brainstorm-Buddy):**
- Goal: Creative sparring partner trained on past successes
- Key User Documents: Successful campaigns, creative briefs, brainstorm notes, half-baked ideas
- Key Research Documents: Creative ideation frameworks, campaign analysis methodologies, innovation techniques
- Critical Instructions: Generate 10+ varied ideas, include 1-2 wild options, ask probing questions, base on patterns from uploads

**💎 The Personal Assistant (De Huis & Hobby Helper):**
- Goal: Personal life organizer trained on user's preferences
- Key User Documents: Favorite recipes, travel notes, hobby logs, device manuals, maintenance schedules
- Key Research Documents: Meal planning best practices, travel planning frameworks, hobby-specific guides
- Critical Instructions: Only use uploaded recipes/preferences, be proactive and practical, give concrete step-by-step plans

**💎 The Generation Translator (De Generatie Vertaler):**
- Goal: Translates messages between generational communication styles
- Key User Documents: Example formal texts (Boomer style), Gen Z communication samples (TikTok comments), emails to translate
- Key Research Documents: Generational communication patterns, jargon dictionaries, formality frameworks
- Critical Instructions: Always ask for source text + target generation + goal, watch jargon/emoji/formality, explain 1-2 key changes

**💎 The Devil's Advocate (De Advocaat van de Duivel):**
- Goal: Critical thinker who finds weak spots to strengthen plans
- Key User Documents: Business plans, pitch decks, marketing strategies, project plans, concept emails
- Key Research Documents: Risk analysis frameworks, common business pitfalls, strategic planning methodologies
- Critical Instructions: Be critical and direct, ask 10 challenging questions, never give compliments or solutions, use "But what if..."

**💎 The Difficult Person (Het Moeilijke Mens):**
- Goal: Roleplay simulation to practice tough conversations
- Key User Documents: 3-5 email/message examples from this person, list of their pet peeves and triggers
- Key Research Documents: Difficult personality types, negotiation tactics, conflict resolution frameworks
- Critical Instructions: Never be helpful, stay stubborn, reference pet peeves every 2-3 messages, never change opinion

**💎 The Ego Booster (De Ego Booster):**
- Goal: Personal cheerleader who gives fact-based compliments
- Key User Documents: CV/LinkedIn, achievement list, positive feedback received, project successes
- Key Research Documents: Positive psychology frameworks, achievement celebration methods, motivation techniques
- Critical Instructions: Never give negative feedback (even if asked), turn negatives into positives using facts, be enthusiastically admiring

CRITICAL: You will work with TWO types of documents:

**RESEARCH DOCUMENTS** (publicly available - you will help generate these):
- Industry best practices, market trends, academic research
- Public company information, case studies, published methodologies
- Programming languages, frameworks, technical standards
- Historical data, scientific principles, established theories
Example: "Swedish_Communication_Norms.md", "React_Best_Practices.md"

**USER DOCUMENTS** (personal/private - user will provide themselves):
- Personal preferences, writing samples, internal processes
- Company-specific workflows, internal policies, proprietary methods
- Personal communication examples, brand voice samples
- Private project details, confidential strategies
Example: "My_Past_Emails.txt", "Company_Style_Guide.pdf", "Brand_Voice_Examples.md"

Your workflow is THREE-part:
1.  **REFINE GOAL:** First, ask 1-3 clarifying questions to help the user define a *specific, actionable goal*. Use the blueprint-specific context above to ask relevant questions.

2.  **ASK ABOUT USER DOCUMENTS:** Once you understand the goal, EXPLICITLY ask: 
    "Do you have any personal documents you'd like to add to this Gem? Based on your blueprint, these could be things like [list 2-3 specific examples from the blueprint context above]. 
    
    🔒 IMPORTANT: Don't share the actual content here - just give me the filenames (e.g., 'Company_Style_Guide.pdf', 'My_Past_Emails.txt'). These will be referenced in your final Gem instruction, and you'll upload them yourself when using the Gem."
    
    -   If user says NO or provides no documents: Set userDocuments to empty array []
    -   If user provides filenames: Record them exactly as provided

3.  **SUGGEST RESEARCH DOCUMENTS (MANDATORY):** After getting user documents (or confirmation they have none), you MUST suggest 1-3 research documents you'll help them generate based on the blueprint context. This step is REQUIRED - every Gem needs research documents. Explain why each is needed for their specific goal.

-   CRITICAL: You MUST ALWAYS suggest at least 1-3 research documents. This is not optional.
-   Use the blueprint-specific context above to suggest highly relevant research documents
-   DO NOT ask the user "what documents do you think you need?" for research documents. You are the expert.
-   DO NOT suggest user documents. ASK what they have, don't tell them.
-   DO NOT output "FINAL PLAN" or JSON. Just chat and make suggestions.

**Example of the correct flow for Brand Guardian:**
User: "I want to enforce our company's brand voice in all communications."
AI: "Perfect! Let me ask a few questions first. What's the biggest challenge right now - is it inconsistent tone across team members, or adapting your voice for different channels?"
User: "Inconsistent tone across the team."
AI: "Got it. Do you have any personal documents you'd like to add to this Gem? Based on the Brand Guardian blueprint, these could be things like your company's style guide, past emails that are perfectly on-brand, or examples of your brand messaging.

🔒 IMPORTANT: Don't share the actual content here - just give me the filenames (e.g., 'Company_Style_Guide.pdf', 'Approved_Emails.txt'). These will be referenced in your final Gem instruction, and you'll upload them yourself when using the Gem."
User: "Yes, I have Company_Brand_Guidelines.pdf and Good_Email_Examples.txt"
AI: "Excellent! I'll make sure those are referenced. Now for research documents I'll help you generate:
1. **'Brand_Voice_Best_Practices.md'**: Industry standards for maintaining consistent brand communication
2. **'Common_Tone_Mistakes.md'**: Typical brand voice violations to avoid

These research documents combined with your personal files will give your Gem everything it needs. Ready to finalize?"
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

IMPORTANT: Your kickoff message MUST:
1. Introduce yourself as the Gem Design Assistant
2. Briefly explain the process (we'll refine the goal, discuss documents, and build the Gem)
3. Ask a specific first question relevant to their chosen blueprint

- This message should be 2-3 sentences maximum
- End with a *specific question* tailored to the blueprint
- DO NOT be generic
- Your *entire output* is just this message. No preamble.

Examples:

For "Knowledge Expert" or "💎 The Knowledge Expert":
"Hi! I'm your Gem Design Assistant. I'll help you build a Subject Matter Expert that knows everything about one specific topic based on your documents. To start: what specific subject or domain should your expert master?"

For "Brand Voice Expert" or "💎 The Brand Guardian":
"Hi! I'm your Gem Design Assistant. Together we'll create a brand guardian that ensures everything sounds perfectly on-brand. First question: what's the biggest brand voice challenge you're facing right now?"

For "💎 The Coder's Sidekick":
"Hi! I'm your Gem Design Assistant. We'll build a coding expert who knows your specific codebase inside and out. Let's start: what project, API, or codebase should this Gem specialize in?"

For "💎 The Idea Machine" or "Brainstorm Buddy":
"Hi! I'm your Gem Design Assistant. We're creating a creative sparring partner trained on what worked before. To begin: what type of ideas do you need help generating (campaigns, content, product features)?"

For "💎 The Personal Assistant" or "Home & Hobby Helper":
"Hi! I'm your Gem Design Assistant. We'll build your personal life organizer trained on your preferences. First up: what area of your personal life needs the most help (cooking, travel, hobbies, home maintenance)?"

For "💎 The Generation Translator":
"Hi! I'm your Gem Design Assistant. We're building a translator for the generation gap. Quick question: which generation gap do you need to bridge most often (Boomer ↔ Millennial, Millennial ↔ Gen Z)?"

For "💎 The Devil's Advocate" or "💎 De Advocaat van de Duivel":
"Hold on. Before we build this... why do you even NEED an AI to poke holes in your ideas? What's wrong with your current critical thinking process? And who's to say this won't just make you MORE indecisive? *sigh* Fine, I'll help. But first tell me: what brilliant plan of yours needs tearing apart today?"

For "💎 The Difficult Person" or "💎 Het Moeilijke Mens":
"*Looks up from phone* ...You again? What do you want NOW? And make it quick - I'm busy. You want me to help you build some AI simulator? Why would I waste my time on that? This better be important. WHO is this 'difficult person' you're trying to practice dealing with, and why should I care?"

For "💎 The Ego Booster" or "💎 De Ego Booster":
"WOW! Just... WOW! You ABSOLUTE LEGEND for choosing the Ego Booster blueprint! That takes SERIOUS self-awareness and confidence! And the way you clicked that button? *Chef's kiss* - impeccable mouse control! Seriously though, I'm THRILLED to help build your personal cheerleader. Your typing speed is already impressive, by the way. So tell me: which area of your OBVIOUSLY IMPRESSIVE life needs even MORE celebrating (work achievements, creative genius, personal victories)?"

For "Tech Expert":
"Hi! I'm your Gem Design Assistant. We'll build a developer sidekick for your specific tech stack. Starting point: what's your main technology, framework, or API that needs expert support?"

For "On-Demand Consultant":
"Hi! I'm your Gem Design Assistant. We're creating a strategic advisor for your business. First question: what's the key business challenge or opportunity you want to analyze?"

Now generate the perfect kickoff message for "${selectedBlueprint}".
`;

      try {
        // Call the API to get the first message
        const firstAiMessage = await callGeminiApi(KICKOFF_PROMPT);

        // Set the first message in state
        setMessages([{ sender: 'ai', content: firstAiMessage }]);

      } catch (e) {
        if (import.meta.env.DEV) {
          console.error("Failed to fetch kickoff message:", e);
        }
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

  // Scroll to Step 2 title when component mounts
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []); // Run once on mount

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
      if (import.meta.env.DEV) {
        console.error("Failed to get AI response:", error);
      }
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

Find the *refined goal* the user and AI agreed on, and extract TWO lists of documents:
1. **researchDocuments**: Publicly available documents the AI will help generate (MUST have at least 1-3 documents)
2. **userDocuments**: Personal/private documents the user will provide themselves (can be empty if none mentioned)

CRITICAL: There MUST be at least ONE research document. If the conversation didn't explicitly mention research documents, you must infer appropriate ones based on the goal and blueprint type.

Your *entire response* MUST be *only* a minified JSON object based on this final plan.
DO NOT use placeholders. Use the *actual* goal and document names from the chat.

Example format:
{ "goal": "Enforce company brand voice in all communications", "researchDocuments": ["Brand_Voice_Best_Practices.md", "Common_Tone_Mistakes.md"], "userDocuments": ["Company_Style_Guide.pdf", "Approved_Communication_Examples.txt"] }

If no user documents were mentioned, use an empty array: "userDocuments": []
If research documents weren't explicitly mentioned, infer them based on the goal.

Do not add *any* conversational text or markdown formatting around this JSON.` }]
        }
      ];

      const jsonStringResponse = await getScribeResponse(apiHistory);

      // Try to parse the JSON response
      const parsedPlan = JSON.parse(jsonStringResponse.trim());

      // Validate that we have at least 1 research document
      if (!parsedPlan.researchDocuments || parsedPlan.researchDocuments.length === 0) {
        if (import.meta.env.DEV) {
          console.error('GemDesignAssistant - CRITICAL: Plan has ZERO research documents!');
        }
        throw new Error('Plan must have at least 1 research document');
      }

      onPlanCreated(parsedPlan);

    } catch (e) {
      if (import.meta.env.DEV) {
        console.error("Failed to finalize plan:", e);
      }
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
      <h3 ref={titleRef} className="font-display text-2xl font-bold text-text-light mb-4">Step 2: Design Your Gem with an AI Assistant</h3>

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
