# AI-ftershow

## About

**AI-ftershow** is an interactive, single-page web application that demonstrates practical AI workflows using Google's AI ecosystem. Built as a tactical guide for AI implementation, it showcases "Signal Coding" techniques—moving beyond conversational AI to building reliable, production-ready AI applications.

### Purpose & Audience

This repository serves as both a functional demonstration and educational resource for:
- **AI practitioners** looking to implement structured AI workflows
- **Developers** interested in building AI-powered React applications  
- **Product managers** exploring practical AI integration patterns
- **Anyone** wanting to understand the evolution from "Vibe Coding" to "Signal Coding"

### Key Features

✅ **Interactive Prompt Improver** - Real-time AI-powered prompt refinement using Gemini 2.5 Flash API  
✅ **Hero Gem Wizard** - Multi-step workflow for creating specialized AI assistants  
✅ **NotebookLM Integration Guide** - Practical workflows for document-grounded AI  
✅ **Dual Language Support** - Seamless English/Dutch localization  
✅ **Cyberpunk Design System** - Custom Tailwind theme with neon aesthetics  
✅ **Production-Ready Architecture** - TypeScript, React 19, and modern tooling  

## Current Status
* **Status:** ✅ Live and Functional
* **Last Updated:** October 27, 2025
* **Deployment:** GitHub Pages with GitHub Actions CI/CD
* **Environment:** Production-ready with environment variable configuration

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
    Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4.  **Start development server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173/DML/` to view the application

5.  **Build for production:**
    ```bash
    npm run build
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`

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
Interactive AI-powered tool that refines prompts through guided dialogue using Gemini 2.5 Flash API. Features real-time chat interface, automatic prompt extraction, and one-click testing across multiple LLM platforms.

### 💎 Hero Gem Wizard  
Three-step workflow for creating specialized AI assistants:
1. **Define Mission** - Domain, role, and core task specification
2. **Deep Research** - Automated research prompt generation
3. **Build Your Gem** - Complete system instruction creation

### 📚 NotebookLM Integration
Comprehensive guide demonstrating document-grounded AI workflows with stakeholder-specific output generation (CFO, CMO, CEO perspectives).

### 🎯 AI Workflow Philosophy
Interactive explanation of the evolution from "Vibe Coding" (conversational prototyping) to "Signal Coding" (structured, production-ready AI applications).

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
├── src/
│   ├── components/       # React components
│   │   ├── HeroGemWizard/# Multi-step wizard components
│   │   ├── Header.tsx    # Navigation with language switcher
│   │   ├── HeroSection.tsx# Landing section with video background
│   │   ├── PromptImprover.tsx# Interactive AI chat tool
│   │   ├── NotebookLM.tsx# Document-grounded AI guide
│   │   ├── FlowVibe.tsx  # AI workflow philosophy
│   │   ├── Toolkit.tsx   # Google AI tools showcase
│   │   └── Footer.tsx    # Contact and disclaimer
│   ├── locales/          # Translation files (EN/NL)
│   ├── services/         # API integration layer
│   │   └── aiStudioService.ts# Gemini API client
│   ├── App.tsx          # Main application
│   └── i18n.ts          # Internationalization config
├── dist/                # Built application (GitHub Pages)
├── .env.example         # Environment variables template
├── index.html           # Entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Custom cyberpunk theme
├── vite.config.ts       # Build configuration
├── README.md           # This file
└── GEMINI.md           # AI assistant guidelines
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
