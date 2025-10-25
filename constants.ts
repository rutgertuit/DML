
import { Language } from './types';

export const TEXTS: Record<Language, any> = {
  en: {
    appName: "AIftershow",
    nav: {
      improver: "Improver",
      heroGem: "Hero Gem",
      notebookLM: "NotebookLM",
      flowVibe: "Flow & Vibe Coding",
      toolkit: "Toolkit",
      howItsMade: "How It's Made",
    },
    hero: {
      title: "Marketing & Effie Live - the AIftershow",
      subtitle: "Unlock advanced AI workflows with Google tools. Master prompt engineering, streamline team collaboration, and accelerate your marketing strategy.",
      cta: {
        improve: "Improve a Prompt",
        improveDesc: "Instantly refine your marketing copy.",
        explore: "Explore Workflows",
        exploreDesc: "Discover the Hero Gem process.",
        toolkit: "View the Toolkit",
        toolkitDesc: "See the Google tools we used.",
      },
    },
    promptImprover: {
      title: "The Prompt Improver",
      description: "Refine your marketing prompts for maximum impact. Enter your initial idea below and let our system enhance it for clarity, context, and creativity.",
      placeholder: "Enter your prompt here...",
      submit: "Submit",
      awaiting: "Awaiting your prompt...",
      howItWorks: "How it Works: The System Instruction",
      howItWorksDesc: "Below is the exact system instruction used to power this transformation. It guides the AI to act as a world-class marketing prompt engineer.",
    },
    heroGem: {
      title: "The \"Hero Gem\" Workflow",
      description: "This 2-step process uses a deep research prompt to gather insights, followed by a system instruction to generate \"Hero Gem\" marketing assets.",
      step1: {
        label: "Step 1",
        title: "Deep Research Prompt",
        description: "This initial prompt gathers comprehensive data and insights about the target audience, competitors, and market trends, forming the foundation of our strategy.",
      },
      step2: {
        label: "Step 2",
        title: "Hero Gem System Instruction",
        description: "Using the research from Step 1, this system instruction guides the AI to craft a core, reusable marketing message—the \"Hero Gem\"—that is compelling and versatile.",
      },
    },
    notebookLM: {
      title: "NotebookLM for Teams",
      description: "Create a centralized knowledge base for your entire team. Upload campaign briefs, research documents, and brand guidelines to ground Gemini in your specific context, ensuring every stakeholder gets consistent, relevant answers.",
      cta: "Try NotebookLM",
    },
    flowVibe: {
      title: "Flow Coding vs. Vibe Coding",
      vibe: {
        title: "Vibe Coding: The \"Director\"",
        description: "This approach is about setting a creative direction and iterating quickly. It's perfect for brainstorming, prototyping, and exploring possibilities without getting bogged down in complex structures. You guide the AI's 'vibe' to get the desired output.",
        keyTools: "Key Tools",
        tools: [
          { name: "Google AI Studio:", desc: "A web-based IDE for rapid prompt prototyping." },
          { name: "Gemini CLI:", desc: "Command-line access for quick tests and scripting." },
        ],
      },
      flow: {
        title: "Flow Coding: The \"Architect\"",
        description: "This method involves designing and building robust, scalable AI systems. It focuses on creating structured, multi-step agentic workflows that can perform complex tasks autonomously, ensuring reliability and predictable outcomes.",
        keyTool: "Key Tool",
        tools: [
          { name: "Agentspace (coming soon):", desc: "A platform for building, deploying, and managing autonomous AI agents." },
        ],
      },
    },
    toolkit: {
      title: "The AI Acceleration Toolkit",
      explore: "Explore Tool →",
      tools: [
        { name: "Google AI Studio", desc: "Rapidly prototype and test prompts with the Gemini family of models. A powerful sandbox for creative AI development." },
        { name: "NotebookLM", desc: "Your personal AI research assistant. Ground models in your own documents for context-aware insights and content creation." },
        { name: "Vertex AI", desc: "Build, deploy, and scale machine learning models with a unified AI platform. From data to production, all in one place." },
        { name: "Google Colab", desc: "Write and execute Python in your browser, with zero configuration required. Free access to GPUs for demanding AI tasks." },
        { name: "Kaggle", desc: "The world’s largest data science community with powerful tools and resources to help you achieve your data science goals." },
        { name: "Firebase Genkit", desc: "An open-source TypeScript/JavaScript framework to help you build, deploy, and monitor AI-powered features." },
      ],
    },
    howItWasMade: {
      title: "How This Site Was Made: The Meta-Process",
      steps: [
        { type: "primary", title: "1. Conceptualization with Gemini", desc: "Used a series of prompts to define the site's theme (\"Tron Legacy cyberpunk\"), structure, and key components based on the conference content." },
        { type: "primary", title: "2. Content & Prompt Generation", desc: "All prompt templates and explanatory text were drafted and refined using Google AI Studio to ensure clarity and effectiveness." },
        { type: "secondary", title: "3. Design System & Theming", desc: "A design prompt was created for an AI UI generator, specifying the strict color palette, typography, and component styles (sharp edges, glow effects)." },
        { type: "primary", title: "4. Component Assembly", desc: "The AI-generated HTML/Tailwind components were assembled into a single-page application structure, ensuring responsiveness and logical flow." },
        { type: "secondary", title: "5. CLI Workflow for Iteration", desc: "A command-line interface workflow was used to rapidly iterate on the design, passing updated requirements to the AI and regenerating the code." },
        { type: "primary", title: "6. Accessibility & QA", desc: "Manual review and testing were conducted to ensure WCAG 2.1 AA compliance, full keyboard navigation, and consistent behavior across browsers." },
      ],
      cliCode: `$ ai-designer generate --config design.json --prompt "Update footer CTA button hover to purple glow" --output index.html`,
    },
    footer: {
      title: "Let's connect!",
      cta: "Connect on LinkedIn",
    },
    copy: "Copy",
    copied: "Copied!",
  },
  nl: {
    appName: "AIftershow",
    nav: {
        improver: "Verbeteraar",
        heroGem: "Hero Gem",
        notebookLM: "NotebookLM",
        flowVibe: "Flow & Vibe Coding",
        toolkit: "Toolkit",
        howItsMade: "Hoe het gemaakt is",
    },
    hero: {
      title: "Marketing & Effie Live - de AIftershow",
      subtitle: "Ontgrendel geavanceerde AI-workflows met Google-tools. Beheers prompt engineering, stroomlijn teamsamenwerking en versnel je marketingstrategie.",
      cta: {
        improve: "Verbeter een Prompt",
        improveDesc: "Verfijn direct je marketingteksten.",
        explore: "Verken Workflows",
        exploreDesc: "Ontdek het Hero Gem-proces.",
        toolkit: "Bekijk de Toolkit",
        toolkitDesc: "Zie de Google-tools die we hebben gebruikt.",
      },
    },
    promptImprover: {
      title: "De Prompt Verbeteraar",
      description: "Verfijn je marketingprompts voor maximale impact. Voer hieronder je eerste idee in en laat ons systeem het verbeteren voor helderheid, context en creativiteit.",
      placeholder: "Voer hier je prompt in...",
      submit: "Verstuur",
      awaiting: "Wachten op je prompt...",
      howItWorks: "Hoe het werkt: De Systeeminstructie",
      howItWorksDesc: "Hieronder staat de exacte systeeminstructie die deze transformatie aandrijft. Het begeleidt de AI om op te treden als een marketing prompt engineer van wereldklasse.",
    },
    heroGem: {
      title: "De \"Hero Gem\" Workflow",
      description: "Dit 2-stappenproces maakt gebruik van een diepgaande onderzoeksprompt om inzichten te verzamelen, gevolgd door een systeeminstructie om \"Hero Gem\" marketingmateriaal te genereren.",
      step1: {
        label: "Stap 1",
        title: "Diepgaande Onderzoeksprompt",
        description: "Deze eerste prompt verzamelt uitgebreide gegevens en inzichten over de doelgroep, concurrenten en markttrends, en vormt zo de basis van onze strategie.",
      },
      step2: {
        label: "Stap 2",
        title: "Hero Gem Systeeminstructie",
        description: "Met behulp van het onderzoek uit Stap 1 begeleidt deze systeeminstructie de AI bij het creëren van een kernachtige, herbruikbare marketingboodschap - de \"Hero Gem\" - die overtuigend en veelzijdig is.",
      },
    },
    notebookLM: {
      title: "NotebookLM voor Teams",
      description: "Creëer een gecentraliseerde kennisbank voor je hele team. Upload campagnebriefings, onderzoeksdocumenten en merkrichtlijnen om Gemini te baseren op jullie specifieke context, zodat elke stakeholder consistente, relevante antwoorden krijgt.",
      cta: "Probeer NotebookLM",
    },
    flowVibe: {
      title: "Flow Coding vs. Vibe Coding",
      vibe: {
        title: "Vibe Coding: De \"Regisseur\"",
        description: "Deze aanpak gaat over het bepalen van een creatieve richting en snel itereren. Het is perfect voor brainstormen, prototypen en het verkennen van mogelijkheden zonder vast te lopen in complexe structuren. Jij stuurt de 'vibe' van de AI om het gewenste resultaat te krijgen.",
        keyTools: "Belangrijkste Tools",
        tools: [
          { name: "Google AI Studio:", desc: "Een webgebaseerde IDE voor snelle prompt-prototyping." },
          { name: "Gemini CLI:", desc: "Command-line toegang voor snelle tests en scripting." },
        ],
      },
      flow: {
        title: "Flow Coding: De \"Architect\"",
        description: "Deze methode omvat het ontwerpen en bouwen van robuuste, schaalbare AI-systemen. Het richt zich op het creëren van gestructureerde, meerstaps agentische workflows die complexe taken autonoom kunnen uitvoeren, wat zorgt voor betrouwbaarheid en voorspelbare resultaten.",
        keyTool: "Belangrijkste Tool",
        tools: [
          { name: "Agentspace (binnenkort beschikbaar):", desc: "Een platform voor het bouwen, implementeren en beheren van autonome AI-agenten." },
        ],
      },
    },
    toolkit: {
      title: "De AI Acceleratie Toolkit",
      explore: "Verken Tool →",
      tools: [
        { name: "Google AI Studio", desc: "Prototype en test snel prompts met de Gemini-modellenfamilie. Een krachtige sandbox voor creatieve AI-ontwikkeling." },
        { name: "NotebookLM", desc: "Jouw persoonlijke AI-onderzoeksassistent. Baseer modellen op je eigen documenten voor contextbewuste inzichten en contentcreatie." },
        { name: "Vertex AI", desc: "Bouw, implementeer en schaal machine learning-modellen met een uniform AI-platform. Van data tot productie, alles op één plek." },
        { name: "Google Colab", desc: "Schrijf en voer Python uit in je browser, zonder configuratie. Gratis toegang tot GPU's voor veeleisende AI-taken." },
        { name: "Kaggle", desc: "'s Werelds grootste data science-community met krachtige tools en middelen om je te helpen je data science-doelen te bereiken." },
        { name: "Firebase Genkit", desc: "Een open-source TypeScript/JavaScript-framework om je te helpen bij het bouwen, implementeren en monitoren van AI-aangedreven functies." },
      ],
    },
    howItWasMade: {
      title: "Hoe Deze Site Gemaakt Is: Het Meta-Proces",
      steps: [
        { type: "primary", title: "1. Conceptualisatie met Gemini", desc: "Een reeks prompts gebruikt om het thema van de site (\"Tron Legacy cyberpunk\"), de structuur en de belangrijkste componenten te definiëren op basis van de conferentie-inhoud." },
        { type: "primary", title: "2. Content & Prompt Generatie", desc: "Alle prompt-sjablonen en verklarende teksten zijn opgesteld en verfijnd met Google AI Studio om duidelijkheid en effectiviteit te garanderen." },
        { type: "secondary", title: "3. Design System & Theming", desc: "Er is een ontwerpprompt gemaakt voor een AI UI-generator, waarbij het strikte kleurenpalet, de typografie en componentstijlen (scherpe randen, gloedeffecten) zijn gespecificeerd." },
        { type: "primary", title: "4. Component Assemblage", desc: "De door AI gegenereerde HTML/Tailwind-componenten zijn samengevoegd tot een single-page applicatiestructuur, wat zorgt voor responsiviteit en een logische flow." },
        { type: "secondary", title: "5. CLI Workflow voor Iteratie", desc: "Een command-line interface workflow werd gebruikt om snel te itereren op het ontwerp, waarbij bijgewerkte vereisten aan de AI werden doorgegeven en de code opnieuw werd gegenereerd." },
        { type: "primary", title: "6. Toegankelijkheid & QA", desc: "Handmatige beoordeling en tests werden uitgevoerd om te zorgen voor WCAG 2.1 AA-conformiteit, volledige toetsenbordnavigatie en consistent gedrag in alle browsers." },
      ],
      cliCode: `$ ai-designer generate --config design.json --prompt "Update footer CTA button hover to purple glow" --output index.html`,
    },
    footer: {
      title: "Laten we verbinden!",
      cta: "Verbind op LinkedIn",
    },
    copy: "Kopieer",
    copied: "Gekopieerd!",
  },
};

export const PROMPT_IMPROVER_SYSTEM_INSTRUCTION = `You are a world-class marketing prompt engineer. Your goal is to take a user's initial, often vague, marketing prompt and transform it into a highly effective, detailed, and context-rich prompt.
Analyze the user's input and rewrite it to include:
1.  **Role & Goal:** Define the AI's persona.
2.  **Context:** Provide necessary background.
3.  **Constraints:** Specify tone, length, format.
4.  **Examples:** Give a clear 'good vs. bad' example.`;

export const HERO_GEM_PROMPTS = {
    step1: `Act as a senior market research analyst. Your task is to compile a detailed report on the current landscape for [Product/Service] targeting [Target Audience].
Focus on:
- Key pain points of the audience.
- Top 3 competitors' messaging strategies.
- Emerging trends in [Industry].
Present the findings in a structured report.`,
    step2: `You are an expert brand strategist. Using the provided research report, create a "Hero Gem" marketing asset.
The "Hero Gem" must be:
- **Concise:** Under 20 words.
- **Emotive:** Address the primary pain point.
- **Unique:** Differentiate from competitors.
Format the output as a single, powerful headline.`
};

export const NOTEBOOKLM_TABS: Record<Language, {id: string, label: string, content: string}[]> = {
    en: [
        { id: 'cfo', label: 'CFO', content: "Summarize the key financial risks and projected ROI for the Q4 'CyberPulse' campaign based on the attached media plan and budget forecast." },
        { id: 'cmo', label: 'CMO', content: "Generate three distinct marketing angles for the 'CyberPulse' campaign, tailored for Instagram, LinkedIn, and TikTok, using the attached brand voice guidelines." },
        { id: 'ceo', label: 'CEO', content: "Provide a high-level executive summary of the 'CyberPulse' campaign's alignment with our quarterly business objectives and its potential market impact." },
        { id: 'manager', label: 'Manager', content: "Create a list of key performance indicators (KPIs) to track the success of the 'CyberPulse' campaign and assign responsible team members for each metric based on the attached project plan." },
        { id: 'team', label: 'Team', content: "Draft a brief for the creative team for the 'CyberPulse' campaign, including key messages, target audience personas, and visual inspiration from the attached mood board." },
    ],
    nl: [
        { id: 'cfo', label: 'CFO', content: "Vat de belangrijkste financiële risico's en de verwachte ROI voor de Q4 'CyberPulse'-campagne samen, gebaseerd op het bijgevoegde mediaplan en budgetprognose." },
        { id: 'cmo', label: 'CMO', content: "Genereer drie verschillende marketinginvalshoeken voor de 'CyberPulse'-campagne, op maat gemaakt voor Instagram, LinkedIn en TikTok, met behulp van de bijgevoegde richtlijnen voor merkstem." },
        { id: 'ceo', label: 'CEO', content: "Geef een executive summary op hoog niveau van de afstemming van de 'CyberPulse'-campagne op onze kwartaaldoelstellingen en de potentiële marktimpact ervan." },
        { id: 'manager', label: 'Manager', content: "Maak een lijst van key performance indicators (KPI's) om het succes van de 'CyberPulse'-campagne te volgen en wijs verantwoordelijke teamleden toe voor elke metriek op basis van het bijgevoegde projectplan." },
        { id: 'team', label: 'Team', content: "Stel een briefing op voor het creatieve team voor de 'CyberPulse'-campagne, inclusief kernboodschappen, doelgroeppersona's en visuele inspiratie van het bijgevoegde moodboard." },
    ]
};
