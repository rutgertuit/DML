# Gemini Interaction Guide

This document provides instructions and guidelines for interacting with the Gemini agent in this project.

## Project Status
* **State:** LIVE (Production / Working)
* **Last Verified:** October 26, 2025
* **Deployment:** Development build running locally via Vite dev server
* **Branch:** Gem-Builder-first-deploy

## Project Overview

This is a single-page, responsive, dual-language (EN/NL) mini-site for "Marketing & Effie Live" attendees. It's a high-tech "cyberpunk" themed tactical guide for implementing AI workflows using Google tools (Gemini, NotebookLM, AI Studio).

## Tech Stack

* **Language:** TypeScript (strict mode enabled)
* **Framework:** React 19.1.1
* **Styling:** Tailwind CSS v4.1.16 (with custom cyberpunk theme)
* **Build Tool:** Vite 7.1.7
* **Package Manager:** npm
* **Internationalization:** i18next (v25.6.0) with react-i18next (v16.2.0)
* **API Integration:** Google Gemini 2.5 Flash via REST API
* **Linting:** ESLint 9.36.0 with TypeScript ESLint and React Hooks plugins

### Key Dependencies
* **Production:**
  - react & react-dom: ^19.1.1
  - i18next: ^25.6.0
  - i18next-http-backend: ^3.0.2
  - react-i18next: ^16.2.0
* **Development:**
  - typescript: ~5.9.3
  - @vitejs/plugin-react: ^5.0.4
  - tailwindcss: ^4.1.16
  - eslint ecosystem (typescript-eslint, react-hooks, react-refresh plugins)

## Getting Started & Key Commands

* **Install Dependencies:**
    ```bash
    npm install
    ```
* **Run the development server:**
    ```bash
    npm run dev
    ```
* **Build for production:**
    ```bash
    npm run build
    ```
* **Run tests:**
    ```bash
    npm run test
    ```
* **Lint and format:**
    ```bash
    npm run lint
    ```

## Architectural Patterns & Conventions

### Component Structure
* **Main Components:** `src/components` contains one `.tsx` file per major site section:
  - `Header.tsx` - Navigation and language switcher
  - `HeroSection.tsx` - Landing/intro section
  - `PromptImprover.tsx` - Interactive chat-based prompt refinement tool (integrated with Gemini API)
  - `HeroGemWizard/` - Multi-step wizard for creating AI specialists:
    - `HeroGemWizard.tsx` - Main wizard container
    - `Step1DefineExpert.tsx` - Expert definition form
    - `Step2DeepResearch.tsx` - Research prompt generation
    - `Step3BuildGem.tsx` - Final system instruction builder
    - `CopyButton.tsx` - Reusable copy-to-clipboard component
  - `NotebookLM.tsx` - NotebookLM workflow guide with stakeholder prompts
  - `FlowVibe.tsx` - Flow/Vibe section
  - `Toolkit.tsx` - Tools overview
  - `HowItWasMade.tsx` - Behind-the-scenes section
  - `Footer.tsx` - Site footer

### State Management
* Simple React state management using `useState` and `useRef` hooks
* i18n language state managed via react-i18next context
* No global state management library (Redux/Zustand) needed for current scope

### API Communication
* **Service Layer:** All API calls centralized in `src/services/aiStudioService.ts`
* **API Endpoint:** Google Gemini 2.5 Flash (`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`)
* **Authentication:** API key stored in environment variable `VITE_GEMINI_API_KEY`
* **Error Handling:** Try-catch blocks with user-friendly error messages

### Naming Conventions
* **Components:** PascalCase (e.g., `HeroGemWizard`, `PromptImprover`)
* **Hooks:** camelCase with `use` prefix (e.g., `useTranslation`, `useState`)
* **Files:** Match component names (e.g., `HeroGemWizard.tsx`)
* **CSS Classes:** Tailwind utility classes with custom cyberpunk theme

### TypeScript Standards
* **Strict Mode Enabled:** All code strongly typed
* **No `any` types:** Explicit interfaces and type definitions required
* **Interface Definitions:** Used for API messages, component props
* **Compiler Options:**
  - Target: ES2022
  - Module: ESNext
  - JSX: react-jsx
  - Strict: true
  - noUnusedLocals: true
  - noUnusedParameters: true

### Styling & Design System
* **Theme Colors:**
  - Primary (Cyan): `#00FFFF`
  - Secondary (Purple): `#D900FF`
  - Background: `#050505` and `#10101A`
  - Text: `#FFFFFF`
* **Typography:**
  - Display: Orbitron (cyberpunk headers)
  - Body: Inter (readable content)
  - Mono: Roboto Mono (code blocks)
* **Effects:**
  - Custom glow shadows (blue and purple)
  - Zero border-radius (sharp, technical aesthetic)
  - Responsive breakpoints for mobile-first design

### Internationalization (i18n)
* **Languages:** English (EN) and Dutch (NL)
* **Translation Files:** JSON format in `/public/locales/{lng}/translation.json`
* **Backend:** i18next-http-backend loads translations dynamically
* **Default Language:** English
* **Fallback:** English for missing translations

## Project Goals & Roadmap

### Completed Features ✅
* ✅ Core i18n (EN/NL) language switching functionality
* ✅ Interactive "Prompt Improver" component with Gemini 2.5 Flash API integration
* ✅ Multi-step "Hero Gem Wizard" for creating custom AI specialists
* ✅ Responsive, cyberpunk-themed design system
* ✅ All major site sections (Header, Hero, PromptImprover, HeroGemWizard, NotebookLM, FlowVibe, Toolkit, HowItWasMade, Footer)
* ✅ Copy-to-clipboard functionality for generated prompts
* ✅ Dynamic prompt generation based on user inputs
* ✅ Chat-based UI for prompt refinement
* ✅ ESLint configuration with React hooks and TypeScript rules

### Current Focus 🔄
* Final polish on HeroGemWizard UI/UX
* Testing prompt generation accuracy
* Validation of all translation keys

### Future Goals 🎯
* Deploy the site to Google Cloud (Cloud Run or Firebase Hosting)
* Ensure full WCAG 2.1 AA accessibility compliance
* Add analytics tracking for user interactions
* Performance optimization (lazy loading, code splitting)
* Add unit tests for critical components
* Implement error boundaries for robust error handling

## Development Workflow

### Code Quality Standards
* **Linting:** ESLint with strict TypeScript and React rules enforced
* **Formatting:** Automated via ESLint
* **Type Safety:** TypeScript strict mode with no implicit any
* **Component Patterns:** Functional components with hooks
* **Error Handling:** Try-catch blocks with user-friendly messages
* **Accessibility:** Semantic HTML, ARIA labels where needed

### Environment Variables
* `VITE_GEMINI_API_KEY` - Required for Gemini API integration (stored in `.env` file, not committed to git)

### File Structure
```
aiftershow/
├── public/
│   └── locales/
│       ├── en/translation.json
│       └── nl/translation.json
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PromptImprover.tsx
│   │   ├── HeroGemWizard/
│   │   │   ├── HeroGemWizard.tsx
│   │   │   ├── Step1DefineExpert.tsx
│   │   │   ├── Step2DeepResearch.tsx
│   │   │   ├── Step3BuildGem.tsx
│   │   │   └── CopyButton.tsx
│   │   ├── NotebookLM.tsx
│   │   ├── FlowVibe.tsx
│   │   ├── Toolkit.tsx
│   │   ├── HowItWasMade.tsx
│   │   └── Footer.tsx
│   ├── services/
│   │   └── aiStudioService.ts
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── i18n.ts
│   └── index.css
├── eslint.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── package.json
└── GEMINI.md (this file)
```

## AI Assistant Guidelines

When working with this codebase:
1. **Always use TypeScript** with explicit types - no `any` types
2. **Follow the existing component structure** - one main component per section
3. **Use Tailwind CSS classes** - leverage the cyberpunk theme colors and effects
4. **Maintain i18n support** - wrap user-facing text in `t()` calls
5. **Centralize API calls** - all API logic goes in `src/services/`
6. **Test responsive design** - ensure mobile-first approach
7. **Preserve accessibility** - use semantic HTML and ARIA attributes
8. **Follow naming conventions** - PascalCase components, camelCase hooks
9. **Keep components focused** - single responsibility principle
10. **Document complex logic** - add comments for non-obvious code

## Testing the Application

### Manual Testing Checklist
- [ ] Language switching works (EN ↔ NL)
- [ ] Prompt Improver chat interaction flows correctly
- [ ] Gemini API responses are properly formatted
- [ ] Hero Gem Wizard steps progress smoothly
- [ ] Copy-to-clipboard buttons provide feedback
- [ ] All sections render on desktop and mobile
- [ ] Custom Tailwind theme applied consistently
- [ ] No console errors in development mode