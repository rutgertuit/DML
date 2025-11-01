# AI-ftershow: Technical Documentation for AI Assistants

This document provides comprehensive technical context for AI assistants working on the AI-ftershow project.

## Project Status
* **State:** ✅ PRODUCTION (Live on GitHub Pages)
* **Last Updated:** November 1, 2025  
* **Deployment:** Automated via GitHub Actions → GitHub Pages
* **Live URL:** https://rutgertuit.github.io/DML/
* **Repository:** https://github.com/rutgertuit/DML

## Project Overview

**AI-ftershow** is a production-ready, single-page React application demonstrating practical AI workflow implementation using Google's Gemini ecosystem. It serves as both a functional tool and educational resource, showcasing "Vibe Coding"—fast, conversational AI development for rapid prototyping and creative exploration.

### Core Purpose
- **Demonstrate** practical Vibe Coding implementation patterns
- **Educate** on rapid AI-powered prototyping workflows  
- **Provide** interactive tools for multi-modal AI prompt refinement
- **Showcase** Google AI ecosystem integration (Gemini, AI Studio, Stitch, CLI)
- **Guide** users in creating custom AI experts (Gems) with automated research

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
  1. Install dependencies (`npm ci`)
  2. Build with Vite (injects `VITE_GEMINI_API_KEY` from GitHub Secrets)
  3. Deploy to GitHub Pages
* **Live URL:** https://rutgertuit.github.io/DML/

### Environment Configuration
* **Required:** `VITE_GEMINI_API_KEY` - Google AI Studio API key
* **Development:** Local `.env` file (not committed to git)
* **Production:** GitHub Secrets → `VITE_GEMINI_API_KEY`
* **API Key Source:** https://aistudio.google.com/apikey
* **Security:** API key exposed in `.env.example` has been revoked and replaced

## Architectural Patterns & Conventions

### Component Architecture

**Main Application:** `src/App.tsx` - Root component with section layout

**Core Components:** (each in `src/components/`)

1. **Header.tsx** - Sticky navigation with language switcher (EN/NL), links to all sections
2. **HeroSection.tsx** - Full-screen landing with video background, 3 CTA buttons to sections
3. **IntroSection.tsx** - "From Toy to Tool" introduction explaining the site's purpose
4. **PromptImprover.tsx** - Interactive AI chat tool with Gemini 2.5 Flash integration
5. **PromptImproverHeader.tsx** - Multi-modal prompt engineering guide (text/image/video support)
6. **HeroGemWizard/** - 4-step AI expert builder:
   - `HeroGemWizard.tsx` - Main wizard container with step management
   - `BlueprintSelector.tsx` - Step 1: Choose from 6 expert blueprints
   - `GemDesignAssistant.tsx` - Step 2: AI-assisted conversational design
   - `SourceMaterialGenerator.tsx` - Step 3: Automated research prompt generation
   - `FinalGemInstruction.tsx` - Step 4: Complete system instruction output with upload guide
   - `CopyButton.tsx` - Reusable clipboard utility component
7. **NotebookLM.tsx** - Document-grounded AI workflow guide with multi-stakeholder examples
8. **FlowVibe.tsx** - Vibe Coding section with benefits, tools showcase, and video placeholder
9. **Toolkit.tsx** - Google AI tools showcase (6 curated tools with direct links)
10. **Footer.tsx** - LinkedIn CTA and legal disclaimer

**Supporting Components:**
- `ChatBubble.tsx` - Chat message display for AI conversations
- `LoadingIndicator.tsx` - Loading states for API calls

**Inline Components in App.tsx:**
- `HowItWasMade` - 6-step workflow showing how this site was built

### State Management
* Simple React state management using `useState` and `useRef` hooks
* i18n language state managed via react-i18next context
* No global state management library (Redux/Zustand) needed for current scope

### API Communication
* **Service Layer:** All API calls centralized in `src/services/aiStudioService.ts`
* **API Endpoint:** Google Gemini 2.5 Flash (`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`)
* **Authentication:** API key passed as URL parameter from `VITE_GEMINI_API_KEY`
* **Error Handling:** Try-catch blocks with user-friendly error messages
* **Key Functions:**
  - `getScribeResponse(history)` - Conversational API calls with message history
  - `callGeminiApi(prompt)` - One-shot API calls for single prompts

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
* **Translation Structure:** Nested objects with dot notation (e.g., `t('heroGemWizard.title')`)
* **Key Sections:** 
  - `header` - Navigation labels
  - `hero` - Landing section
  - `intro` - Introduction section
  - `promptImproverHeader` - Multi-modal guide
  - `promptImprover` - Chat tool
  - `heroGemWizard` - 4-step wizard with blueprints
  - `notebookLM` - NotebookLM guide
  - `flowVibe` - Vibe Coding section
  - `howItWasMade` - 6-step workflow
  - `toolkit` - Tools showcase
  - `footer` - Footer content

## Project Goals & Roadmap

### Completed Features ✅
* ✅ Core i18n (EN/NL) language switching functionality
* ✅ Interactive "Prompt Improver" with multi-modal support (text/image/video prompts)
* ✅ 4-step "Hero Gem Wizard" for creating custom AI experts
* ✅ Automated research prompt generation with improved meta-prompts
* ✅ Responsive, cyberpunk-themed design system
* ✅ All major site sections (8 sections total)
* ✅ Copy-to-clipboard functionality with visual feedback
* ✅ Dynamic prompt generation based on conversational AI design
* ✅ Chat-based UI for prompt refinement
* ✅ ESLint configuration with React hooks and TypeScript rules
* ✅ Vibe Coding section with tools showcase
* ✅ "How It Was Made" 6-step workflow
* ✅ Secure environment variable handling (GitHub Secrets)
* ✅ Multi-stakeholder NotebookLM examples (CFO/CMO/CEO/CTO)

### Current Focus 🔄
* Video content for "How It Was Made" demo
* Performance optimization and accessibility audit
* Enhanced error handling and loading states

### Future Goals 🎯
* Add analytics tracking for user interactions
* Implement lazy loading for sections
* Add unit tests for critical components
* Enhance mobile navigation experience
* Create video tutorials for each tool
* Add more Gem blueprints based on user feedback

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
│       ├── en/translation.json    # English translations
│       └── nl/translation.json    # Dutch translations
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── PromptImprover.tsx
│   │   ├── PromptImproverHeader.tsx
│   │   ├── HeroGemWizard/
│   │   │   ├── HeroGemWizard.tsx
│   │   │   ├── BlueprintSelector.tsx
│   │   │   ├── GemDesignAssistant.tsx
│   │   │   ├── SourceMaterialGenerator.tsx
│   │   │   ├── FinalGemInstruction.tsx
│   │   │   └── CopyButton.tsx
│   │   ├── NotebookLM.tsx
│   │   ├── FlowVibe.tsx
│   │   ├── Toolkit.tsx
│   │   ├── ChatBubble.tsx
│   │   ├── LoadingIndicator.tsx
│   │   └── Footer.tsx
│   ├── services/
│   │   └── aiStudioService.ts
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── i18n.ts
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── eslint.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── package.json
├── .env.example
├── README.md
├── GEMINI.md (this file)
└── PROMPT_IMPROVER_EXPLANATION.md
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
- [ ] Multi-modal prompt support works (text/image/video detection)
- [ ] Gemini API responses are properly formatted
- [ ] Hero Gem Wizard 4-step progression works smoothly
- [ ] Blueprint selection navigates to design assistant
- [ ] Research prompt generation creates clean prompts (no meta-commentary)
- [ ] Copy-to-clipboard buttons provide visual feedback
- [ ] All sections render on desktop and mobile
- [ ] Custom Tailwind theme applied consistently
- [ ] No console errors in development mode
- [ ] Hero section CTAs link to correct sections (#prompt-improver, #hero-gem, #notebooklm)
- [ ] Header navigation links work for all sections
- [ ] Video placeholder displays correctly in FlowVibe section
- [ ] Tool links in FlowVibe open in new tabs