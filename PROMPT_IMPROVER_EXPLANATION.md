# Prompt Improver: Detailed Explanation & Functionality

## Overview

The **Prompt Improver** is an interactive, AI-powered coach that helps users craft better prompts through guided dialogue. Instead of teaching theory, it works collaboratively with users to identify gaps in their thinking—missing context, unclear objectives, format requirements—and incrementally improves their prompt through structured conversation.

**Core Philosophy:** "Specificity = Magic." By asking the right questions, users discover assumptions they didn't know they were making, leading to significantly better prompts (research shows 20-50% improvement vs. one-shot attempts).

---

## Component Architecture

### File: `PromptImprover.tsx`

The component is a **React functional component** with the following structure:

```
┌─ PromptImprover Component
├─ State Management
│  ├─ messages: Message[] (chat history)
│  ├─ inputValue: string (textarea input)
│  ├─ isLoading: boolean (API call status)
│  ├─ finalPrompt: string | null (extracted final prompt)
│  └─ isCopied: boolean (copy feedback)
├─ Refs for DOM Manipulation
│  ├─ chatLogRef (auto-scroll chat)
│  └─ finalPromptRef (auto-scroll to result)
├─ UI Sections
│  ├─ Chat Log Display
│  ├─ Input Form (textarea + submit button)
│  └─ Final Prompt Output Box
└─ Event Handlers
   ├─ handleSubmit (form submission)
   ├─ handleKeyDown (Enter key support)
   └─ handleCopy (clipboard copy)
```

---

## State Management

### Core State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `messages` | `Message[]` | Stores the conversation history (user & AI messages) |
| `inputValue` | `string` | Stores the current textarea input before submission |
| `isLoading` | `boolean` | Tracks whether an API call is in progress |
| `finalPrompt` | `string \| null` | Stores the extracted final prompt when AI completes refinement |
| `isCopied` | `boolean` | Provides visual feedback when user copies the final prompt |

### Message Interface

```typescript
interface Message {
  role: 'user' | 'model';  // Who sent the message
  text: string;             // The message content
}
```

---

## How the Prompt Improver Works: Step-by-Step Flow

### Step 1: User Enters a Rough Prompt
1. User types or pastes their raw prompt idea into the textarea
2. Presses **Enter** (or clicks "Refine My Prompt" button)
3. `handleSubmit()` is triggered

### Step 2: Build API History

The component constructs a conversation history for the Gemini API:

```
[
  { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
  { role: 'model', parts: [{ text: "Got it. I'm Prompt Scribe..." }] },
  { role: 'user', parts: [{ text: user's actual input }] },
  ...previous exchanges...
]
```

**Key Point:** The system prompt is included as the first message, establishing Prompt Scribe's personality and rules.

### Step 3: Call Gemini API

The request is sent via `getScribeResponse()` to **Gemini 2.5 Flash**:

```typescript
const apiHistory = [
  { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
  { role: 'model', parts: [{ text: "Got it. I'm Prompt Scribe..." }] },
  ...updatedMessages
];

const aiResponseText = await getScribeResponse(apiHistory);
```

The API endpoint is:
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}
```

### Step 4: Extract Final Prompt (If Present)

The system prompt instructs Gemini to wrap the final prompt in special tags:

```
[FINAL_PROMPT]
[Your complete, refined prompt goes here]
[/FINAL_PROMPT]
```

The component **parses the response** to detect these tags:

```typescript
const promptMatch = aiResponseText.match(/\n?\[FINAL_PROMPT\]([\s\S]*)\[\/FINAL_PROMPT\]\n?/);

if (promptMatch && promptMatch[1]) {
  const extractedPrompt = promptMatch[1].trim();
  setFinalPrompt(extractedPrompt);  // Extracted and stored
  
  // Remove the tags from chat display
  aiChatText = aiResponseText.replace(/\n?\[FINAL_PROMPT\][\s\S]*\[\/FINAL_PROMPT\]\n?/, '').trim();
}
```

This ensures:
- The final prompt is displayed in a special output box (not in the chat)
- The chat shows only the coaching dialogue

### Step 5: Update Chat & Auto-Scroll

1. AI response is added to the messages array as a 'model' message
2. `useLayoutEffect` hook detects the change and auto-scrolls the chat to the bottom
3. User sees the AI's coaching questions/feedback

### Step 6: User Iterates or Finalizes

- **If iterating:** User answers the AI's questions → Repeat Steps 2-5
- **If finalizing:** AI outputs `[FINAL_PROMPT]...[/FINAL_PROMPT]` → Component extracts and displays it

---

## AI Coaching System Prompt

The heart of Prompt Improver is its system prompt, which defines Prompt Scribe's behavior:

### Core Rules:

1. **Never execute the user's prompt** — only coach them to improve it
2. **Analyze for gaps** in: Audience, Goal/Objective, Tone/Style, Format/Length, Constraints, Examples/Context
3. **Ask 3-5 targeted questions** (numbered, under 150 words total) to identify gaps
4. **Stay empathetic** — start with acknowledgment ("Love your idea!")
5. **Synthesize after feedback** — show diffs of changes, ask 1-2 follow-ups
6. **Cap at 2 rounds** of refinement to avoid endless loops
7. **Output final prompt** wrapped in `[FINAL_PROMPT]...[/FINAL_PROMPT]` tags
8. **Stop after final prompt** — no more questions after the tags appear
9. **Add micro-tips** — encourage specific, fun language ("Pro tip: Specificity = magic!")

### Example Flow:

**User:** "I want a prompt about AI blog posts"

**Prompt Scribe (Round 1):**
```
Love the AI blog angle – let's make it pop! 🎯

Quick questions to sharpen this:
1. Who's reading the blog? (e.g., developers, executives, beginners?)
2. What's the blog's main goal? (e.g., teach, entertain, persuade?)
3. What tone feels right? (e.g., technical, conversational, witty?)
4. How long should each post be? (e.g., 500 words, 2000 words?)
5. Any constraints? (e.g., no jargon, must include code examples?)

Pro tip: The more specific you are upfront, the better the output!
```

**User:** "Developers, teach them about prompt engineering, technical but accessible, 1000-1500 words, include real examples"

**Prompt Scribe (Round 2):**
```
Perfect! Here's the sharpened version:

Changes made:
- Added: audience=developers, goal=educational, tone=technical-but-accessible
- Added: length=1000-1500 words, format=include real examples
- Added: implicit constraint (avoid overly academic jargon)

One more thing – should the examples be in Python, JavaScript, or multiple languages?

[FINAL_PROMPT]
You are an experienced technical writer specializing in AI and machine learning. Write a blog post for developers about prompt engineering.

Requirements:
- **Audience:** Intermediate developers (familiar with APIs, not necessarily ML experts)
- **Length:** 1000-1500 words
- **Tone:** Technical but conversational; avoid academic jargon
- **Goal:** Teach practical prompt engineering techniques they can apply immediately
- **Format:** Include 2-3 real-world code examples (provide in Python)
- **Structure:** Intro hook, 3-4 main techniques (with examples), practical tips, conclusion

Write in clear, engaging language. Use short paragraphs and numbered lists where appropriate.
[/FINAL_PROMPT]

Here's your refined prompt, ready to use! 🚀
```

---

## User Interface Components

### 1. Chat Log Container
```tsx
<div ref={chatLogRef} className="flex flex-col gap-4 p-4 min-h-[250px] max-h-[400px] overflow-y-auto">
  {/* System message (pro tip) */}
  {/* User messages (right-aligned, purple) */}
  {/* AI messages (left-aligned, dark) */}
  {/* Loading spinner (when waiting for API) */}
</div>
```

**Features:**
- Auto-scrolls to bottom when new messages arrive
- Max height with scrollbar for long conversations
- Visual distinction between user (right) and AI (left) messages
- Loading spinner with animated text during API calls

### 2. Input Form
```tsx
<form onSubmit={handleSubmit} className="flex gap-4 p-6 border-t border-secondary/20">
  <textarea
    rows={2}
    placeholder={t('promptImprover.placeholder')}
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={handleKeyDown}
    disabled={isLoading}
  />
  <button type="submit" disabled={isLoading}>
    {isLoading ? '...' : 'Refine My Prompt'}
  </button>
</form>
```

**Features:**
- Multi-line textarea for composing rough prompts
- **Enter key** submits (Shift+Enter for newline)
- **Disabled during loading** to prevent duplicate submissions
- Loading state shows "..." in button

### 3. Final Prompt Output Box
```tsx
{finalPrompt && (
  <div ref={finalPromptRef} className="mt-8 p-1 border border-primary/50">
    <h3>Your Refined Prompt is Ready</h3>
    <div className="bg-card-dark p-4">
      <button onClick={handleCopy}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <pre>{finalPrompt}</pre>
    </div>
    {/* Test in multiple LLMs buttons */}
    <a href="https://gemini.google.com/app">Test in Gemini</a>
    <a href="https://chatgpt.com/">Test in ChatGPT</a>
    <a href="https://chat.mistral.ai/">Test in LeChat</a>
    <a href="https://x.ai/grok">Test in Grok</a>
    <a href="https://claude.ai/">Test in Claude</a>
  </div>
)}
```

**Features:**
- **Only appears when final prompt is extracted**
- Auto-scrolls to this section smoothly
- One-click copy to clipboard with visual feedback ("Copied!" message)
- Quick links to test in 5 major LLM platforms
- Monospace font for prompt clarity

---

## Event Handlers

### `handleSubmit(e: React.FormEvent)`

Triggered when user submits their input:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const userInput = inputValue.trim();
  if (!userInput || isLoading) return;

  setIsLoading(true);
  setInputValue('');           // Clear textarea
  setFinalPrompt(null);        // Clear old final prompt
  setIsCopied(false);          // Reset copy feedback

  const newUserMessage: Message = { role: 'user', text: userInput };
  const updatedMessages = [...messages, newUserMessage];
  setMessages(updatedMessages);  // Add to chat history

  const apiHistory = [
    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
    { role: 'model', parts: [{ text: "Got it. I'm Prompt Scribe..." }] },
    ...updatedMessages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    })),
  ];

  const aiResponseText = await getScribeResponse(apiHistory);

  // Extract final prompt if present
  const promptMatch = aiResponseText.match(/\n?\[FINAL_PROMPT\]([\s\S]*)\[\/FINAL_PROMPT\]\n?/);
  if (promptMatch && promptMatch[1]) {
    setFinalPrompt(promptMatch[1].trim());
    aiChatText = aiResponseText.replace(/\n?\[FINAL_PROMPT\][\s\S]*\[\/FINAL_PROMPT\]\n?/, '').trim();
  }

  // Add AI response to chat
  const newAiMessage: Message = { role: 'model', text: aiChatText };
  setMessages(prev => [...prev, newAiMessage]);
  setIsLoading(false);
};
```

### `handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>)`

Allows **Enter to submit**, **Shift+Enter for newline**:

```typescript
const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleSubmit(e as React.FormEvent);
  }
  // If Shift+Enter, browser's default behavior (newline) is used
};
```

### `handleCopy()`

Copies final prompt to clipboard with feedback:

```typescript
const handleCopy = () => {
  if (finalPrompt) {
    navigator.clipboard.writeText(finalPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);  // Reset after 2s
  }
};
```

---

## Auto-Scrolling with useLayoutEffect

### Chat Log Auto-Scroll
```typescript
useLayoutEffect(() => {
  if (chatLogRef.current) {
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
  }
}, [messages, isLoading]);  // Triggers when messages or loading state changes
```

**Why useLayoutEffect?** 
- Runs *before* browser paints to avoid flickering
- Ensures chat always scrolls to the newest message immediately

### Final Prompt Auto-Scroll
```typescript
useLayoutEffect(() => {
  if (finalPrompt && finalPromptRef.current) {
    finalPromptRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}, [finalPrompt]);  // Triggers only when final prompt appears
```

**Effect:**
- When final prompt is extracted, smoothly scroll to the output box
- `block: 'start'` positions it at the top of the viewport

---

## API Integration

### Service Layer: `aiStudioService.ts`

#### `getScribeResponse(history: ApiMessage[]): Promise<string>`

Main function that communicates with Gemini API:

```typescript
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

export const getScribeResponse = async (history: ApiMessage[]): Promise<string> => {
  if (!API_KEY) throw new Error("VITE_GEMINI_API_KEY is not set.");

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: history }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`API Error ${response.status}: ${errorData.error.message}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};
```

**Key Points:**
- Uses **Gemini 2.5 Flash** for fast, cost-effective responses
- Passes full conversation history for context awareness
- Extracts text from the first candidate in the response
- Error handling for API failures

#### `callGeminiApi(prompt: string): Promise<string>`

Simpler wrapper for one-shot prompts (not currently used in Prompt Improver):

```typescript
export const callGeminiApi = async (prompt: string): Promise<string> => {
  const history: ApiMessage[] = [
    { role: 'user', parts: [{ text: prompt }] }
  ];
  return getScribeResponse(history);
};
```

---

## Data Flow Diagram

```
User Input
    ↓
handleSubmit() triggers
    ↓
Build API History [System Prompt + All Messages]
    ↓
Call getScribeResponse() → Gemini API
    ↓
Gemini returns response text
    ↓
Check for [FINAL_PROMPT]...[/FINAL_PROMPT] tags
    ├─ If found:
    │  ├─ Extract prompt → setFinalPrompt()
    │  ├─ Remove tags from chat text
    │  └─ Trigger auto-scroll to output box
    └─ If not found:
       └─ Show response as regular chat message
    ↓
Add AI message to chat history
    ↓
Update UI
    ↓
Auto-scroll chat to bottom
```

---

## Key Features & UX Enhancements

| Feature | Implementation | Benefit |
|---------|-----------------|---------|
| **Multi-turn dialogue** | Full conversation history passed to API | Gemini understands context across exchanges |
| **Auto-scroll chat** | `useLayoutEffect` on message changes | User always sees latest messages |
| **Auto-scroll to result** | `scrollIntoView()` when final prompt appears | Result is immediately visible |
| **Enter to submit** | Custom `onKeyDown` handler | Fast, natural interaction |
| **Loading feedback** | Animated spinner + text during API call | User knows something is happening |
| **Copy-to-clipboard** | `navigator.clipboard.writeText()` + visual feedback | One-click export |
| **Disabled during load** | `disabled={isLoading}` on button & textarea | Prevents duplicate submissions |
| **System prompt intro** | Initial "Got it, I'm Prompt Scribe..." message | Sets expectations & personality |
| **Pro tip banner** | System message about 20-50% improvement | Motivates dialogue-based refinement |
| **Multi-LLM test links** | 5 platform links in final prompt box | Easy experimentation |

---

## Styling & Theme Integration

The component uses **Tailwind CSS v4.1.16** with the cyberpunk theme:

- **Primary Color (Cyan):** `#00FFFF` — Main accents, active states
- **Secondary Color (Purple):** `#D900FF` — User messages, hover states
- **Background:** `bg-card-dark`, `bg-background-dark` — Dark theme
- **Text:** `text-text-light`, `text-text-light/90` — High contrast
- **Glows:** `shadow-glow-blue`, `shadow-glow-purple` — Cyberpunk feel

### Message Bubbles
- **User messages:** Purple background (`bg-secondary/20`), right-aligned
- **AI messages:** Dark background (`bg-background-dark`), left-aligned
- **System message:** Blue tint (`bg-primary/10`), system icon

---

## Performance Considerations

1. **Conversation history grows with each exchange** — For very long conversations, the payload size increases. The system prompt caps refinement at 2 rounds to avoid excessive API calls.

2. **useLayoutEffect for scrolling** — Faster than useEffect; ensures smooth scroll before paint.

3. **String parsing for final prompt** — Regex check is performed after each API response to detect the final prompt tags.

4. **Debouncing not needed** — Button is disabled during loading, naturally preventing rapid-fire submissions.

---

## Common User Workflows

### Workflow 1: Quick Refinement (2-3 exchanges)
```
User: "Create a recipe for chocolate cake"
  ↓
Scribe: "Love it! Quick q's: audience, difficulty, dietary needs?"
  ↓
User: "For beginners, easy, vegan-friendly"
  ↓
Scribe: [Generates final prompt with all details]
  ↓
User: Copies & tests in Gemini
```

### Workflow 2: Detailed Coaching (Multiple exchanges)
```
User: "Blog post on machine learning"
  ↓
Scribe: Round 1 — "Who's the audience? What's the goal?"
  ↓
User: "Developers, learn practical tips"
  ↓
Scribe: Round 2 — "What format? Code examples? Any constraints?"
  ↓
User: "1000 words, Python examples, no heavy math"
  ↓
Scribe: [Generates final prompt]
  ↓
User: Tests & iterates on results
```

---

## Summary

The **Prompt Improver** is a sophisticated coaching tool that:

1. **Guides users through dialogue** to identify and fill gaps in their thinking
2. **Leverages Gemini 2.5 Flash** for fast, intelligent coaching
3. **Automates conversation management** with multi-turn history and context preservation
4. **Extracts & displays final prompts** via special tag detection
5. **Provides friction-free UX** with auto-scrolling, keyboard shortcuts, and one-click export
6. **Enables rapid testing** with links to 5+ LLM platforms

By making prompt refinement interactive and empathetic, it increases output quality by 20-50% compared to one-shot attempts, embodying the AIftershow philosophy: **"Ask Better → Know Better → Share Better."**
