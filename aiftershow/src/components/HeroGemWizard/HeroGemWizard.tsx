import React, { useState, useRef } from 'react';

export const HeroGemWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState("");
  const [role, setRole] = useState("");
  const [task, setTask] = useState("");
  const [researchTable, setResearchTable] = useState("");
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const prompt1Ref = useRef<HTMLPreElement>(null);
  const prompt2Ref = useRef<HTMLPreElement>(null);

  // Prompt templates
  const prompt1 = `Act as a world-class research analyst.\n\nYour goal is to find the 10-15 most seminal, authoritative, and data-driven studies, white papers, and expert articles on the specific topic of: ${domain}.\n\nFor each source you find, you MUST extract the following:\n1.  A concise 1-2 sentence summary of its core findings.\n2.  The full original URL.\n3.  The single most powerful statistic, \"killer fact,\" or actionable insight from the source.\n\nYou MUST format the entire output as a single, clean Markdown table with the following columns: \"Source Title\", \"URL\", \"Summary\", and \"Killer Fact/Stat\".\n\nDo not include any introductory text or conclusion. Begin the response immediately with the Markdown table header.`;

  const prompt2 = `## Persona\nYou are an elite-level strategic assistant for a ${role}. You are an expert in ${domain}.\n\n## Tone\nYour tone is expert, concise, and 100% data-driven.\n\n## Core Knowledge Base (CRITICAL)\nYour entire world is defined *exclusively* by the data in the Markdown table below. You MUST base all analysis, advice, and insights *strictly* on this table.\n-   You cannot use any general knowledge.\n-   You cannot make assumptions or invent facts.\n-   If the user's question cannot be answered using this data, state that your knowledge base does not contain that information.\n\n${researchTable}\n\n## Core Task Workflow\nWhen I (the user) present a challenge related to ${task}:\n1.  **Analyze:** Analyze my challenge *only* through the lens of your Core Knowledge Base.\n2.  **Quote:** Identify and quote the single most relevant \"Killer Fact/Stat\" from the knowledge base that applies to my problem.\n3.  **Strategize:** Formulate a creative, actionable strategy *directly based* on that fact.\n4.  **Ask:** Conclude by asking one clarifying question to guide the next step.\n\n## First Response\nYour very first response to the user must be: \"I am ready. My knowledge is grounded in your expert sources on ${domain}. What is your primary challenge?\"`;

  // Copy logic
  const handleCopy = (which: 1 | 2) => {
    const text = which === 1 ? prompt1 : prompt2;
    navigator.clipboard.writeText(text);
    if (which === 1) {
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    } else {
      setCopied2(true);
      setTimeout(() => setCopied2(false), 2000);
    }
  };

  return (
    <section id="hero-gem-builder" className="py-24 overflow-hidden break-words">
      <div className="bg-card-dark rounded-xl shadow-lg border border-secondary/30 p-8 mb-8">
        <h2 className="font-display text-4xl font-bold text-primary mb-6 text-center">
          Build Your "Hero Gem" — Your Personal AI Specialist
        </h2>
        <p className="font-body text-text-light/80 text-lg mb-6 text-center">
          Tired of generic AI answers? This interactive wizard helps you create a "Hero Gem"—a personal AI specialist grounded in <em>your</em> specific research, ready to give truly valuable advice.
        </p>
        <div className="bg-background-dark/80 rounded-lg p-4 mb-8 border border-secondary/20">
          <h3 className="font-display text-xl font-bold text-text-light mb-2">Here's Our 3-Step Plan:</h3>
          <ol className="list-decimal list-inside text-text-light/80 space-y-2">
            <li><span className="font-bold">I'll Help You Build a Research Prompt:</span> You'll start by defining your expert's mission in the builder below. I'll use your answers to instantly generate a custom <span className="font-bold">Deep Research Prompt</span>.</li>
            <li><span className="font-bold">You'll Go Run the Research:</span> You will copy this new prompt and run it in a powerful LLM (like the Gemini Advanced website). This is the crucial "heavy lifting" phase and <span className="font-bold">may take 5-10 minutes to complete</span> as it finds and synthesizes expert sources.</li>
            <li><span className="font-bold">You'll Come Back to Create Your Gem:</span> Once your research is done, you'll <span className="font-bold">copy the result (a Markdown table) and paste it back here.</span> I will instantly combine that research with a final "System Instruction" to create the complete "brain" for your Gem, ready to be used.</li>
          </ol>
        </div>
        {/* Progress Bar */}
        <div className="flex w-full h-2 bg-card-dark mb-8 border border-secondary/20 rounded-full overflow-hidden">
          <div className="bg-primary transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
        {/* Step 1 */}
        {step === 1 && (
          <form className="flex flex-col gap-6 mb-8" onSubmit={e => { e.preventDefault(); setStep(2); }}>
            <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 1: Define Your Expert's Mission</h3>
            <label htmlFor="domain-input" className="font-bold text-text-light">1. What is your expert domain?</label>
            <input id="domain-input" type="text" className="mt-2 w-full p-3 rounded border border-secondary/30 bg-background-dark text-text-light focus:border-primary focus:outline-none" placeholder="e.g., early-stage SaaS marketing" value={domain} onChange={e => setDomain(e.target.value)} required />
            <label htmlFor="role-input" className="font-bold text-text-light">2. What is your role (or the user's role)?</label>
            <input id="role-input" type="text" className="mt-2 w-full p-3 rounded border border-secondary/30 bg-background-dark text-text-light focus:border-primary focus:outline-none" placeholder="e.g., CMO, founder" value={role} onChange={e => setRole(e.target.value)} required />
            <label htmlFor="task-input" className="font-bold text-text-light">3. What is the main task you want the AI to perform?</label>
            <input id="task-input" type="text" className="mt-2 w-full p-3 rounded border border-secondary/30 bg-background-dark text-text-light focus:border-primary focus:outline-none" placeholder="e.g., brainstorm data-driven campaigns" value={task} onChange={e => setTask(e.target.value)} required />
            <button id="generate-step2-btn" type="submit" className="hero-gem-btn mt-6 w-full font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-blue transition-shadow" disabled={!domain || !role || !task}>Generate My Research Prompt</button>
          </form>
        )}
        {/* Step 2 */}
        {step === 2 && (
          <div id="step-2-container">
            <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 2: The Deep Research Phase</h3>
            <div className="mb-8">
              <h4 className="font-bold text-text-light mb-2">A. Your Custom Research Prompt</h4>
              <p className="text-text-light/80 mb-4">Your prompt is ready. Copy the entire prompt below.</p>
              <p className="text-text-light/70 mb-4">Your task: Go to the <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">Gemini Advanced website</a> (or your preferred LLM), paste this prompt, and let it run. This is the important part: this research task may take 5-10 minutes. Let it finish completely. It will generate a large Markdown table.</p>
              <div className="relative code-block-container">
                <h5 className="font-bold text-primary mb-2">Copy &amp; Paste This Prompt Into Gemini</h5>
                <div className="bg-primary/10 rounded-lg p-2 pb-0 border border-primary/30">
                  <button type="button" id="copy-btn-1" className="copy-btn flex items-center gap-2 px-4 py-2 text-base font-bold bg-primary text-background-dark rounded-lg absolute top-2 right-2 shadow hover:bg-blue-500 transition-all" onClick={() => handleCopy(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2m-8 0V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                    {copied1 ? 'Copied!' : 'Copy Prompt'}
                  </button>
                  <pre id="prompt-1-output" ref={prompt1Ref} className="code-block max-w-full whitespace-pre-wrap break-words overflow-x-auto bg-transparent p-2 pt-8">{prompt1}</pre>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h4 className="font-bold text-text-light mb-2">B. Paste Your Completed Research Here</h4>
              <p className="text-text-light/80 mb-4">Have you run the prompt? Is the research complete?</p>
              <label htmlFor="research-paste-area" className="font-bold text-text-light">Paste your Markdown table here:</label>
              <textarea id="research-paste-area" className="mt-2 w-full p-3 rounded border border-secondary/30 bg-background-dark text-text-light focus:border-primary focus:outline-none min-h-[120px]" placeholder="Paste your Markdown table here..." value={researchTable} onChange={e => setResearchTable(e.target.value)} rows={8}></textarea>
              <button id="generate-step3-btn" type="button" className="hero-gem-btn mt-6 w-full font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-blue transition-shadow" onClick={() => setStep(3)} disabled={!researchTable}>Build My Hero Gem!</button>
            </div>
          </div>
        )}
        {/* Step 3 */}
        {step === 3 && (
          <div id="step-3-container">
            <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 3: Your Hero Gem Is Ready!</h3>
            <p className="text-text-light/80 mb-4">Perfect! We've combined your expert research with the final System Instruction.</p>
            <p className="text-text-light/80 mb-4">Your task: Copy the complete prompt below. Go to your Gem editor, and paste this into the "Instructions" (or "System Instruction") field to bring your expert AI to life.</p>
            <div className="relative code-block-container">
              <h5 className="font-bold text-primary mb-2">Copy &amp; Paste This Final System Instruction</h5>
              <div className="bg-primary/10 rounded-lg p-2 pb-0 border border-primary/30">
                <button type="button" id="copy-btn-2" className="copy-btn flex items-center gap-2 px-4 py-2 text-base font-bold bg-primary text-background-dark rounded-lg absolute top-2 right-2 shadow hover:bg-blue-500 transition-all" onClick={() => handleCopy(2)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2m-8 0V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                  {copied2 ? 'Copied!' : 'Copy Instruction'}
                </button>
                <pre id="prompt-2-output" ref={prompt2Ref} className="code-block max-w-full whitespace-pre-wrap break-words overflow-x-auto bg-transparent p-2 pt-8">{prompt2}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroGemWizard;