# AI-ftershow: Technical Documentation for AI Assistants

This document provides comprehensive technical context for AI assistants working on the AI-ftershow project.

## Project Status
* **State:** ✅ PRODUCTION (Live on GitHub Pages)
* **Last Updated:** October 27, 2025  
* **Deployment:** Automated via GitHub Actions → GitHub Pages
* **Live URL:** https://rutgertuit.github.io/DML/
* **Repository:** https://github.com/rutgertuit/DML

## Project Overview

**AI-ftershow** is a production-ready, single-page React application demonstrating practical AI workflow implementation. It serves as both a functional tool and educational resource, showcasing the evolution from "Vibe Coding" (conversational AI prototyping) to "Signal Coding" (structured, production-ready AI applications).

### Core Purpose
- **Demonstrate** practical AI implementation patterns
- **Educate** on structured AI workflow development  
- **Provide** interactive tools for AI prompt refinement
- **Showcase** Google AI ecosystem integration

## Tech Stack

### Core Framework
* **Language:** TypeScript 5.9.3 (strict mode)
* **Framework:** React 19.1.1 with TypeScript JSX
* **Build Tool:** Vite 7.1.12 with React plugin
* **Styling:** Tailwind CSS v4.1.16 + custom cyberpunk theme
* **Package Manager:** npm

### Features & Integration  
* **Internationalization:** i18next v25.6.0 + react-i18next v16.2.0
* **AI API:** Google Gemini 2.5 Flash via REST API
* **Deployment:** GitHub Actions → GitHub Pages
* **Code Quality:** ESLint 9.36.0 + TypeScript ESLint

### Production Dependencies
```json
{
  "i18next": "^25.6.0",
  "react": "^19.1.1", 
  "react-dom": "^19.1.1",
  "react-i18next": "^16.2.0"
}
```

### Development Dependencies  
```json
{
  "@vitejs/plugin-react": "^5.0.4",
  "tailwindcss": "^4.1.16",
  "typescript": "~5.9.3",
  "eslint": "^9.36.0"
}
```

## Development & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add VITE_GEMINI_API_KEY=your_key_here

# Start dev server
npm run dev
# Visit http://localhost:5173/DML/

# Build for production  
npm run build

# Preview production build
npm run preview
```

### Production Deployment
* **Platform:** GitHub Pages
* **Automation:** GitHub Actions (`.github/workflows/deploy.yml`)
* **Trigger:** Push to `main` branch
* **Build Process:** 
  1. Install dependencies
  2. Build with Vite (includes environment variables)
  3. Deploy to GitHub Pages
* **Live URL:** https://rutgertuit.github.io/DML/

### Environment Configuration
* **Required:** `VITE_GEMINI_API_KEY` - Google AI Studio API key
* **Development:** Local `.env` file
* **Production:** GitHub Secrets (`VITE_GEMINI_API_KEY`)
* **API Source:** https://makersuite.google.com/app/apikey
* **Run tests:**
    ```bash
    npm run test
    ```
* **Lint and format:**
    ```bash
    npm run lint
    ```

## Architectural Patterns & Conventions

### Component Architecture

**Main Application:** `src/App.tsx` - Root component with section layout

**Core Components:** (each in `src/components/`)

1. **Header.tsx** - Sticky navigation with language switcher (EN/NL)
2. **HeroSection.tsx** - Full-screen landing with video background  
3. **PromptImprover.tsx** - Interactive AI chat tool (Gemini 2.5 Flash integration)
4. **HeroGemWizard/** - Multi-step AI specialist builder:
   - `HeroGemWizard.tsx` - Main wizard container
   - `BlueprintSelector.tsx` - Domain selection interface
   - `SourceMaterialGenerator.tsx` - Research prompt generation
   - `GemDesignAssistant.tsx` - AI assistant configuration
   - `FinalGemInstruction.tsx` - System prompt output
   - `CopyButton.tsx` - Reusable clipboard utility
5. **NotebookLM.tsx** - Document-grounded AI workflow guide
6. **FlowVibe.tsx** - AI workflow philosophy (Vibe → Signal coding)
7. **Toolkit.tsx** - Google AI tools showcase (6 curated tools)
8. **Footer.tsx** - Contact, video placeholder, and legal disclaimer

**Supporting Components:**
- `ChatBubble.tsx` - Chat message display
- `LoadingIndicator.tsx` - Loading states
- `PromptImproverHeader.tsx` - Section introduction
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