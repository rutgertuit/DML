# AI-ftershow

## About

**AI-ftershow** is an interactive, single-page web application that demonstrates practical AI workflows using Google's Gemini ecosystem. Built as a tactical guide for AI implementation, it showcases "Vibe Coding" techniques—fast, conversational AI development for rapid prototyping and creative exploration.

### Purpose & Audience

This repository serves as both a functional demonstration and educational resource for:
- **AI practitioners** looking to implement structured AI workflows
- **Developers** interested in building AI-powered React applications  
- **Product managers** exploring practical AI integration patterns
- **Anyone** wanting to master Vibe Coding with Google's AI tools

### Key Features

✅ **Interactive Prompt Improver** - Multi-modal AI prompt refinement (text/image/video) using Gemini 2.5 Flash API  
✅ **Hero Gem Wizard** - 4-step workflow for creating custom AI experts (Gems) with research automation  
✅ **NotebookLM Integration Guide** - Document-grounded AI workflows with multi-stakeholder perspectives  
✅ **Vibe Coding Demonstration** - Real-world example of how this site was built  
✅ **Dual Language Support** - Seamless English/Dutch localization via i18next  
✅ **Cyberpunk Design System** - Custom Tailwind theme with neon aesthetics  
✅ **Production-Ready Architecture** - TypeScript, React 19, and modern tooling  

## Current Status
* **Status:** ✅ Live and Functional
* **Last Updated:** November 3, 2025
* **Deployment:** Firebase Hosting with Cloud Functions
* **Environment:** Production with server-side API key management
* **Live URL:** https://rutger-dml.web.app
* **Security:** API key secured in Firebase Secrets Manager (not exposed to client)

## Tech Stack

* **Framework:** React 19.1.1 with TypeScript (strict mode)
* **Build Tool:** Vite 7.1.7
* **Styling:** Tailwind CSS v4.1.16 (custom cyberpunk theme)
* **Internationalization:** i18next with react-i18next (EN/NL support)
* **AI Integration:** Google Gemini 2.5 Flash API
* **Linting:** ESLint 9.36.0 with TypeScript and React plugins

## Getting Started

### Prerequisites

* Node.js 20.x or later
* npm (comes with Node.js)
* A Google Gemini API key (for AI features)

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rutgertuit/DML.git
    cd DML
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the project root:
    ```bash
    # Copy the example file
    cp .env.example .env
    
    # Add your Gemini API key
    VITE_GEMINI_API_KEY=your_api_key_here
    ```
    Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)

4.  **Start development server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173/DML/` to view the application

5.  **Build for production:**
    ```bash
    npm run build
    ```

### Other Useful Commands

* **Build for production:**
  ```bash
  npm run build
  ```

* **Lint code:**
  ```bash
  npm run lint
  ```

* **Preview production build:**
  ```bash
  npm run preview
  ```

## Core Components

### 🤖 Prompt Improver
Interactive AI-powered tool that refines prompts through guided dialogue using Gemini 2.5 Flash API. Features:
- Multi-modal support (text, image, and video prompts)
- Real-time chat interface with conversational refinement
- Automatic prompt extraction and formatting
- One-click testing across multiple LLM platforms
- Modality-specific analysis criteria

### 💎 Hero Gem Wizard  
Four-step workflow for creating custom AI experts (Gems):
1. **Select Blueprint** - Choose from 6 pre-configured expert types
2. **Design with AI** - Conversational assistant helps define your Gem's mission and documents
3. **Generate Research Prompts** - Automated creation of research document prompts
4. **Build Your Gem** - Complete system instruction with upload guide

### 📚 NotebookLM Integration
Comprehensive guide demonstrating document-grounded AI workflows:
- Multi-stakeholder output generation (CFO, CMO, CEO, CTO perspectives)
- Pain point identification and solutions
- 7 different output format examples from a single data source

### 🎬 Vibe Coding
Focused section explaining fast, conversational AI development:
- What makes Vibe Coding great (Speed, Flexibility, Creativity)
- Integrated tools showcase (Gemini, AI Studio, Google Stitch, Gemini CLI, GitHub)
- Demo video placeholder for real-world example

### 🔧 How It Was Made
Behind-the-scenes 6-step workflow showing how this site was built using Vibe Coding:
1. Blueprint (NotebookLM for research)
2. Structure (AI Studio for scaffolding)
3. Development (Gemini + Stitch for coding)
4. Integration (Gemini CLI for testing)
5. Deployment (GitHub for CI/CD)
6. Polishing (Custom Gem for Dutch communication)

### 🛠️ Google AI Toolkit
Curated collection of 6 Google AI tools with direct links:
- Gemini in Google Workspace
- NotebookLM  
- Google Stitch
- Google Vids
- Gemini Enterprise
- Gemini CLI  

## Project Structure

```
DML/
├── .github/workflows/     # GitHub Actions CI/CD
│   └── deploy.yml        # Automated deployment to GitHub Pages
├── public/               # Static assets
│   └── locales/          # Translation files
│       ├── en/translation.json  # English translations
│       └── nl/translation.json  # Dutch translations
├── src/
│   ├── components/       # React components
│   │   ├── HeroGemWizard/# 4-step wizard components
│   │   │   ├── HeroGemWizard.tsx        # Main wizard container
│   │   │   ├── BlueprintSelector.tsx    # Step 1: Choose expert type
│   │   │   ├── GemDesignAssistant.tsx   # Step 2: AI-assisted design
│   │   │   ├── SourceMaterialGenerator.tsx # Step 3: Research prompts
│   │   │   ├── FinalGemInstruction.tsx  # Step 4: Final output
│   │   │   └── CopyButton.tsx           # Reusable copy utility
│   │   ├── Header.tsx    # Navigation with language switcher
│   │   ├── HeroSection.tsx# Landing section with video background
│   │   ├── IntroSection.tsx# "From Toy to Tool" intro
│   │   ├── PromptImprover.tsx# Interactive AI chat tool
│   │   ├── PromptImproverHeader.tsx# Multi-modal prompt guide
│   │   ├── NotebookLM.tsx# Document-grounded AI guide
│   │   ├── FlowVibe.tsx  # Vibe Coding section
│   │   ├── Toolkit.tsx   # Google AI tools showcase
│   │   ├── ChatBubble.tsx# Chat message component
│   │   ├── LoadingIndicator.tsx# Loading state component
│   │   └── Footer.tsx    # Contact and disclaimer
│   ├── locales/          # (Deprecated - moved to public/)
│   ├── services/         # API integration layer
│   │   └── aiStudioService.ts# Gemini API client
│   ├── App.tsx          # Main application with section layout
│   ├── i18n.ts          # Internationalization config
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
├── dist/                # Built application (GitHub Pages)
├── .env.example         # Environment variables template
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Custom cyberpunk theme
├── vite.config.ts       # Build configuration
├── README.md           # This file
├── GEMINI.md           # AI assistant guidelines
└── PROMPT_IMPROVER_EXPLANATION.md  # Detailed component docs
```

## Contributing

When contributing to this project:
- Follow TypeScript strict mode conventions (no `any` types)
- Use Tailwind CSS utility classes with the cyberpunk theme
- Maintain i18n support by wrapping user-facing text in `t()` calls
- Centralize API calls in `src/services/`
- Follow PascalCase for components, camelCase for hooks

---

## 🤖 For AI Assistants (Gemini)

Welcome! To provide effective help, you **MUST** follow these rules:

1.  **Consult Context First:** Before generating any code, **you MUST read the `Gemini.MD` file** in this repository. It contains the definitive project stack, architecture, deployment model, and coding standards.

2.  **Adhere to Standards:** All code you generate must follow the patterns defined in `Gemini.MD`, including:
    - TypeScript strict mode with explicit typing
    - Component structure (one `.tsx` file per section)
    - Tailwind CSS cyberpunk theme (colors: `#00FFFF` cyan, `#D900FF` purple)
    - i18n integration via react-i18next
    - API calls centralized in `src/services/`
    - PascalCase components, camelCase hooks
    - Semantic HTML with accessibility considerations

3.  **Verify Before Suggesting:** Cross-reference `package.json` for exact dependency versions and `tsconfig.json` for compiler settings before making recommendations.

4.  **Preserve the User Experience:** This is a working production site. Any changes must maintain functionality, responsive design, and the cyberpunk aesthetic.

5.  **Test Your Suggestions:** Ensure any code you generate is TypeScript-safe, ESLint-compliant, and follows React 19 best practices.

**Key Files to Reference:**
- `GEMINI.md` - Complete project context and guidelines
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Custom theme configuration
- `src/services/aiStudioService.ts` - API integration pattern

---

## License

[Specify license if applicable]

## Support

For questions or issues, please open an issue in the GitHub repository.
