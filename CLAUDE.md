# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173/DML/
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
firebase deploy      # Deploy to Firebase Hosting
```

## Environment Setup

Copy `.env.example` to `.env` and add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

## Architecture Overview

**AI-ftershow** is a single-page React application demonstrating "Vibe Coding" with Google's Gemini ecosystem.

### Tech Stack
- React 19 + TypeScript (strict mode) + Vite
- Tailwind CSS v4 with cyberpunk theme
- i18next for EN/NL localization
- Firebase Hosting + Cloud Functions
- Google Gemini 2.5 Flash API

### Key Patterns

**API Layer:** All Gemini API calls are centralized in `src/services/aiStudioService.ts`. Use `getScribeResponse(history)` for conversational calls and `callGeminiApi(prompt)` for one-shot calls.

**Internationalization:** All user-facing text must use `t()` from react-i18next. Translations live in `public/locales/{en,nl}/translation.json` with nested keys (e.g., `t('heroGemWizard.title')`).

**Component Structure:** Main components in `src/components/`. The HeroGemWizard is a 4-step wizard with subcomponents in `src/components/HeroGemWizard/`.

### Design System

- **Colors:** Cyan `#00FFFF` (primary), Purple `#D900FF` (secondary), Dark backgrounds `#050505`/`#10101A`
- **Typography:** Orbitron (display), Inter (body), Roboto Mono (code)
- **Aesthetic:** Zero border-radius, neon glow effects (`shadow-glow-blue`, `shadow-glow-purple`)

### Coding Standards

- TypeScript strict mode: no `any` types, explicit interfaces required
- PascalCase for components, camelCase for hooks
- Functional components with hooks only
- One main component per file matching its filename
