import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="relative w-full flex flex-col">
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-background-dark/80 backdrop-blur-sm px-4 md:px-10 lg:px-20 py-4 border-b border-solid border-secondary/20">
          <div className="flex items-center gap-4">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path></svg>
            </div>
            <h2 className="text-text-light text-xl font-display font-bold uppercase">AIftershow</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            <a className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href="#prompt-improver">Improver</a>
            <a className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href="#hero-gem">Hero Gem</a>
            <a className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href="#notebooklm">NotebookLM</a>
            <a className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href="#flow-vibe">Flow &amp; Vibe Coding</a>
            <a className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href="#toolkit">Toolkit</a>
            <a className="text-text-light text-sm font-medium uppercase tracking-wider hover:text-primary hover:text-glow-blue transition-all" href="#how-it-was-made">How It's Made</a>
          </nav>
          <div className="flex gap-1 border border-primary/20 p-1">
            <button className="flex min-w-[48px] cursor-pointer items-center justify-center h-8 px-3 bg-card-dark text-text-light text-sm font-bold leading-normal tracking-widest hover:bg-secondary/50 transition-colors">NL</button>
            <button className="flex min-w-[48px] cursor-pointer items-center justify-center h-8 px-3 bg-primary text-background-dark text-sm font-bold leading-normal tracking-widest">EN</button>
          </div>
        </header>
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="h-screen flex flex-col items-center justify-center text-center relative" id="hero">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img alt="Abstract digital background" className="w-full h-full object-cover md:hidden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAgsHi_y3OsWlkm1DGD4NQoUaeaHKRLTrz0uJBakQ3ETwYSTEPKbtqQ__Ky3cXj-wSqeVqDIdomrePkjng4UUvXixMV77fysAuCfs0ZiPotjMo168hvu_plZe72bX0Y1Yq00uxwDnqdcNxxBGIavCbd1rAJtFwwEI4knbZQxxCXBy6XqxqsxsdqnrLrJWl4LZ3D6ap_8ynkD891VW6h1qekC5yQ7F230Td4eWA2iD34xsR4t67Gn1Gjb_fsj8RAqC4mFxBzPVY9d0" />
              <video autoPlay className="hidden md:block absolute top-0 left-0 w-full h-full object-cover" loop muted playsInline poster="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=2070&auto=format&fit=crop">
                <source src="https://cdn.pixabay.com/video/2022/10/24/134958-766324449_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4">
              <h1 className="text-4xl md:text-6xl font-display font-black uppercase text-glow-blue">Marketing & Effie Live - the AIftershow</h1>
              <h2 className="text-lg md:text-xl font-body max-w-3xl">Unlock advanced AI workflows with Google tools. Master prompt engineering, streamline team collaboration, and accelerate your marketing strategy.</h2>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <a className="flex flex-col items-center justify-center gap-2 p-6 border border-secondary bg-transparent hover:bg-card-dark/50 border-glow-purple transition-all w-72" href="#prompt-improver">
                  <span className="material-symbols-outlined text-secondary text-4xl">auto_awesome</span>
                  <h3 className="font-display uppercase">Improve a Prompt</h3>
                  <p className="text-sm text-text-light/80">Instantly refine your marketing copy.</p>
                </a>
                <a className="flex flex-col items-center justify-center gap-2 p-6 border border-primary bg-transparent hover:bg-card-dark/50 border-glow-blue transition-all w-72" href="#hero-gem">
                  <span className="material-symbols-outlined text-primary text-4xl">view_timeline</span>
                  <h3 className="font-display uppercase">Explore Workflows</h3>
                  <p className="text-sm text-text-light/80">Discover the Hero Gem process.</p>
                </a>
                <a className="flex flex-col items-center justify-center gap-2 p-6 border border-secondary bg-transparent hover:bg-card-dark/50 border-glow-purple transition-all w-72" href="#toolkit">
                  <span className="material-symbols-outlined text-secondary text-4xl">widgets</span>
                  <h3 className="font-display uppercase">View the Toolkit</h3>
                  <p className="text-sm text-text-light/80">See the Google tools we used.</p>
                </a>
              </div>
            </div>
          </section>
          <section className="py-24" id="prompt-improver">
            <h2 className="text-3xl font-display font-bold uppercase mb-8 text-center">The Prompt Improver</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="mb-4">Refine your marketing prompts for maximum impact. Enter your initial idea below and let our system enhance it for clarity, context, and creativity.</p>
                <div className="flex flex-col gap-4">
                  <textarea className="w-full p-4 bg-card-dark border border-secondary text-text-light font-mono focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border-glow-blue transition-shadow" placeholder="Enter your prompt here..." rows={6}></textarea>
                  <button className="w-full bg-primary text-background-dark font-bold uppercase py-3 px-6 hover:bg-primary/80 button-glow-purple transition-all">Submit</button>
                  <div className="w-full p-4 bg-card-dark border border-text-light/20 min-h-[100px]">
                    <div className="flex items-center justify-center h-full text-text-light/50">
                      <span className="material-symbols-outlined animate-spin text-primary mr-2">progress_activity</span>
                      Awaiting your prompt...
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display uppercase text-secondary mb-2">How it Works: The System Instruction</h3>
                <p className="mb-4">Below is the exact system instruction used to power this transformation. It guides the AI to act as a world-class marketing prompt engineer.</p>
                <div className="relative bg-card-dark p-4 border border-text-light/20 font-mono text-sm">
                  <button className="absolute top-2 right-2 bg-secondary text-background-dark px-2 py-1 text-xs font-bold uppercase button-glow-purple">Copy</button>
                  <pre className="whitespace-pre-wrap overflow-x-auto"><code>{`You are a world-class marketing prompt engineer. Your goal is to take a user's initial, often vague, marketing prompt and transform it into a highly effective, detailed, and context-rich prompt.
Analyze the user's input and rewrite it to include:
1.  **Role & Goal:** Define the AI's persona.
2.  **Context:** Provide necessary background.
3.  **Constraints:** Specify tone, length, format.
4.  **Examples:** Give a clear 'good vs. bad' example.`}</code></pre>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24" id="hero-gem">
            <h2 className="text-3xl font-display font-bold uppercase mb-2 text-center">The "Hero Gem" Workflow</h2>
            <p className="text-center max-w-3xl mx-auto mb-12">This 2-step process uses a deep research prompt to gather insights, followed by a system instruction to generate "Hero Gem" marketing assets.</p>
            <div className="space-y-12">
              <div className="grid md:grid-cols-[30%_70%] gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <span className="material-symbols-outlined text-primary text-5xl">manage_search</span>
                    <div>
                      <p className="font-mono text-primary">Step 1</p>
                      <h3 className="text-xl font-display uppercase">Deep Research Prompt</h3>
                    </div>
                  </div>
                  <p>This initial prompt gathers comprehensive data and insights about the target audience, competitors, and market trends, forming the foundation of our strategy.</p>
                </div>
                <div className="relative bg-card-dark p-4 border border-text-light/20 font-mono text-sm">
                  <button className="absolute top-2 right-2 bg-secondary text-background-dark px-2 py-1 text-xs font-bold uppercase button-glow-purple">Copy</button>
                  <pre className="whitespace-pre-wrap overflow-x-auto"><code>{`Act as a senior market research analyst. Your task is to compile a detailed report on the current landscape for [Product/Service] targeting [Target Audience].
Focus on:
- Key pain points of the audience.
- Top 3 competitors' messaging strategies.
- Emerging trends in [Industry].
Present the findings in a structured report.`}</code></pre>
                </div>
              </div>
              <div className="grid md:grid-cols-[30%_70%] gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <span className="material-symbols-outlined text-primary text-5xl">diamond</span>
                    <div>
                      <p className="font-mono text-primary">Step 2</p>
                      <h3 className="text-xl font-display uppercase">Hero Gem System Instruction</h3>
                    </div>
                  </div>
                  <p>Using the research from Step 1, this system instruction guides the AI to craft a core, reusable marketing message—the "Hero Gem"—that is compelling and versatile.</p>
                </div>
                <div className="relative bg-card-dark p-4 border border-text-light/20 font-mono text-sm">
                  <button className="absolute top-2 right-2 bg-secondary text-background-dark px-2 py-1 text-xs font-bold uppercase button-glow-purple">Copy</button>
                  <pre className="whitespace-pre-wrap overflow-x-auto"><code>{`You are an expert brand strategist. Using the provided research report, create a "Hero Gem" marketing asset.
The "Hero Gem" must be:
- **Concise:** Under 20 words.
- **Emotive:** Address the primary pain point.
- **Unique:** Differentiate from competitors.
Format the output as a single, powerful headline.`}</code></pre>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24" id="notebooklm">
            <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">NotebookLM for Teams</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="mb-4">Create a centralized knowledge base for your entire team. Upload campaign briefs, research documents, and brand guidelines to ground Gemini in your specific context, ensuring every stakeholder gets consistent, relevant answers.</p>
                <p className="font-mono text-sm text-text-light/70 mb-6">NL: Creëer een gecentraliseerde kennisbank voor je hele team. Upload campagnebriefings, onderzoeksdocumenten en merkrichtlijnen om Gemini te baseren op jullie specifieke context, zodat elke stakeholder consistente, relevante antwoorden krijgt.</p>
                <div className="aspect-video bg-card-dark border border-primary/50 p-2 mb-6" style={{ boxShadow: 'var(--glow-blue)' }}>
                  <div className="w-full h-full bg-background-dark flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-6xl">play_circle</span>
                  </div>
                </div>
                <a className="inline-block w-full text-center bg-primary text-background-dark font-bold uppercase py-3 px-6 hover:bg-primary/80 button-glow-blue transition-all" href="https://notebooklm.google.com" target="_blank">
                  <span>Try NotebookLM</span>
                  <span className="font-mono text-xs hidden">NL: Probeer NotebookLM</span>
                </a>
              </div>
              <div>
                <div className="border-b border-text-light/20 flex space-x-4">
                  <button className="pb-2 border-b-2 font-display uppercase tracking-wider tab-active">CFO</button>
                  <button className="pb-2 border-b-2 border-transparent font-display uppercase tracking-wider text-text-light/70 hover:text-text-light hover:border-primary/50 transition-colors">CMO</button>
                  <button className="pb-2 border-b-2 border-transparent font-display uppercase tracking-wider text-text-light/70 hover:text-text-light hover:border-primary/50 transition-colors">CEO</button>
                  <button className="pb-2 border-b-2 border-transparent font-display uppercase tracking-wider text-text-light/70 hover:text-text-light hover:border-primary/50 transition-colors">Manager</button>
                  <button className="pb-2 border-b-2 border-transparent font-display uppercase tracking-wider text-text-light/70 hover:text-text-light hover:border-primary/50 transition-colors">Team</button>
                </div>
                <div className="mt-6">
                  <div className="bg-card-dark p-4 border border-text-light/20 font-mono text-sm h-48 overflow-y-auto" readOnly>Summarize the key financial risks and projected ROI for the Q4 'CyberPulse' campaign based on the attached media plan and budget forecast.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24" id="flow-vibe">
            <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">Flow Coding vs. Vibe Coding</h2>
            <div className="relative grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-secondary [box-shadow:var(--glow-purple)] hidden md:block"></div>
              <div className="md:pr-6">
                <h3 className="text-2xl font-display uppercase"><span className="text-primary text-glow-blue">Vibe Coding</span>: The "Director"</h3>
                <p className="font-mono text-sm text-text-light/70 mb-4">NL: De "Regisseur"</p>
                <p className="mb-4">This approach is about setting a creative direction and iterating quickly. It's perfect for brainstorming, prototyping, and exploring possibilities without getting bogged down in complex structures. You guide the AI's 'vibe' to get the desired output.</p>
                <div className="bg-card-dark p-4 border border-text-light/20">
                  <h4 className="font-display uppercase text-primary">Key Tools</h4>
                  <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li><span className="font-mono">Google AI Studio:</span> A web-based IDE for rapid prompt prototyping.</li>
                    <li><span className="font-mono">Gemini CLI:</span> Command-line access for quick tests and scripting.</li>
                  </ul>
                </div>
              </div>
              <div className="md:pl-6">
                <h3 className="text-2xl font-display uppercase"><span className="text-secondary text-glow-purple">Flow Coding</span>: The "Architect"</h3>
                <p className="font-mono text-sm text-text-light/70 mb-4">NL: De "Architect"</p>
                <p className="mb-4">This method involves designing and building robust, scalable AI systems. It focuses on creating structured, multi-step agentic workflows that can perform complex tasks autonomously, ensuring reliability and predictable outcomes.</p>
                <div className="bg-card-dark p-4 border border-text-light/20">
                  <h4 className="font-display uppercase text-secondary">Key Tool</h4>
                  <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li><span className="font-mono">Agentspace (coming soon):</span> A platform for building, deploying, and managing autonomous AI agents.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24" id="toolkit">
            <h2 className="text-3xl font-display font-bold uppercase mb-8 text-center">The AI Acceleration Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                <h3 className="font-display uppercase text-lg mb-2">Google AI Studio</h3>
                <p className="text-text-light/80 text-sm flex-grow">Rapidly prototype and test prompts with the Gemini family of models. A powerful sandbox for creative AI development.</p>
                <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">Explore Tool →</a>
              </div>
              <div className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                <h3 className="font-display uppercase text-lg mb-2">NotebookLM</h3>
                <p className="text-text-light/80 text-sm flex-grow">Your personal AI research assistant. Ground models in your own documents for context-aware insights and content creation.</p>
                <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">Explore Tool →</a>
              </div>
              <div className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                <h3 className="font-display uppercase text-lg mb-2">Vertex AI</h3>
                <p className="text-text-light/80 text-sm flex-grow">Build, deploy, and scale machine learning models with a unified AI platform. From data to production, all in one place.</p>
                <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">Explore Tool →</a>
              </div>
              <div className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                <h3 className="font-display uppercase text-lg mb-2">Google Colab</h3>
                <p className="text-text-light/80 text-sm flex-grow">Write and execute Python in your browser, with zero configuration required. Free access to GPUs for demanding AI tasks.</p>
                <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">Explore Tool →</a>
              </div>
              <div className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                <h3 className="font-display uppercase text-lg mb-2">Kaggle</h3>
                <p className="text-text-light/80 text-sm flex-grow">The world’s largest data science community with powerful tools and resources to help you achieve your data science goals.</p>
                <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">Explore Tool →</a>
              </div>
              <div className="bg-card-dark p-6 border border-secondary border-glow-purple transition-all flex flex-col">
                <h3 className="font-display uppercase text-lg mb-2">Firebase Genkit</h3>
                <p className="text-text-light/80 text-sm flex-grow">An open-source TypeScript/JavaScript framework to help you build, deploy, and monitor AI-powered features.</p>
                <a className="text-primary font-mono text-sm mt-4 hover:underline" href="#">Explore Tool →</a>
              </div>
            </div>
          </section>
          <section className="py-24" id="how-it-was-made">
            <h2 className="text-3xl font-display font-bold uppercase mb-12 text-center">How This Site Was Made: The Meta-Process</h2>
            <div className="relative flex flex-col gap-12 pl-8 border-l-2 border-primary/30">
              <div className="relative">
                <div className="absolute -left-[42px] top-0 bg-primary size-5 flex items-center justify-center ring-8 ring-background-dark"></div>
                <h3 className="font-display uppercase text-xl text-primary">1. Conceptualization with Gemini</h3>
                <p className="text-text-light/80 mt-1">Used a series of prompts to define the site's theme ("Tron Legacy cyberpunk"), structure, and key components based on the conference content.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[42px] top-0 bg-primary size-5 flex items-center justify-center ring-8 ring-background-dark"></div>
                <h3 className="font-display uppercase text-xl text-primary">2. Content &amp; Prompt Generation</h3>
                <p className="text-text-light/80 mt-1">All prompt templates and explanatory text were drafted and refined using Google AI Studio to ensure clarity and effectiveness.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[42px] top-0 bg-secondary size-5 flex items-center justify-center ring-8 ring-background-dark"></div>
                <h3 className="font-display uppercase text-xl text-secondary">3. Design System &amp; Theming</h3>
                <p className="text-text-light/80 mt-1">A design prompt was created for an AI UI generator, specifying the strict color palette, typography, and component styles (sharp edges, glow effects).</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[42px] top-0 bg-primary size-5 flex items-center justify-center ring-8 ring-background-dark"></div>
                <h3 className="font-display uppercase text-xl text-primary">4. Component Assembly</h3>
                <p className="text-text-light/80 mt-1">The AI-generated HTML/Tailwind components were assembled into a single-page application structure, ensuring responsiveness and logical flow.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[42px] top-0 bg-secondary size-5 flex items-center justify-center ring-8 ring-background-dark"></div>
                <h3 className="font-display uppercase text-xl text-secondary">5. CLI Workflow for Iteration</h3>
                <p className="text-text-light/80 mt-1">A command-line interface workflow was used to rapidly iterate on the design, passing updated requirements to the AI and regenerating the code.</p>
                <div className="relative bg-card-dark p-4 border border-text-light/20 font-mono text-sm mt-4">
                  <pre className="whitespace-pre-wrap overflow-x-auto text-xs"><code><span className="text-primary">$</span> ai-designer generate --config design.json --prompt "Update footer CTA button hover to purple glow" --output index.html</code></pre>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[42px] top-0 bg-primary size-5 flex items-center justify-center ring-8 ring-background-dark"></div>
                <h3 className="font-display uppercase text-xl text-primary">6. Accessibility &amp; QA</h3>
                <p className="text-text-light/80 mt-1">Manual review and testing were conducted to ensure WCAG 2.1 AA compliance, full keyboard navigation, and consistent behavior across browsers.</p>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full bg-[#10101A] py-20">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="w-32 h-32 mb-6 bg-background-dark border-2 border-secondary rounded-full flex items-center justify-center overflow-hidden">
              <img alt="User portrait placeholder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAgsHi_y3OsWlkm1DGD4NQoUaeaHKRLTrz0uJBakQ3ETwYSTEPKbtqQ__Ky3cXj-wSqeVqDIdomrePkjng4UUvXixMV77fysAuCfs0ZiPotjMo168hvu_plZe72bX0Y1Yq00uxwDnqdcNxxBGIavCbd1rAJtFwwEI4knbZQxxCXBy6XqxqsxsdqnrLrJWl4LZ3D6ap_8ynkD891VW6h1qekC5yQ7F230Td4eWA2iD34xsR4t67Gn1Gjb_fsj8RAqC4mFxBzPVY9d0" />
            </div>
            <h2 className="text-2xl font-display font-bold uppercase mb-2">Let's connect!</h2>
            <p className="font-mono text-sm text-text-light/70 mb-8">NL: Laten we verbinden!</p>
            <a className="bg-[#00FFFF] text-black font-bold uppercase py-3 px-8 hover:shadow-glow-purple transition-shadow" href="#">
              <span>Connect on LinkedIn</span>
              <span className="hidden">NL: Verbind op LinkedIn</span>
            </a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;