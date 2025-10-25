# Gemini Interaction Guide

This document provides instructions and guidelines for interacting with the Gemini agent in this project.

## Project Overview

This is a single-page, responsive, dual-language (EN/NL) mini-site for "Marketing & Effie Live" attendees. It's a high-tech "cyberpunk" themed tactical guide for implementing AI workflows using Google tools (Gemini, NotebookLM, AI Studio).

## Tech Stack

* **Language:** TypeScript
* **Framework:** React
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Package Manager:** npm

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

* **Component Structure:** `src/components` contains one `.tsx` file per major site section.
* **State Management:** Start with simple React state (`useState`). We will add React Context for i18n language state.
* **API Communication:** All API calls (like to AI Studio) will be centralized in `src/services/api.ts`.
* **Naming Conventions:** Components are `PascalCase`. Hooks are `camelCase` (e.g., `useLanguage`).
* **Typing:** All new code must be strongly typed with TypeScript. Avoid `any`.

## Project Goals & Roadmap

* **Current Focus:** Implementing the core i18n (EN/NL) language switching functionality and wiring up the interactive "Prompt Improver" component (Section 2) to a Google AI Studio backend API.
* **Future Goals:** Deploy the site to Google Cloud (Cloud Run), ensuring it is fully responsive and accessible (WCAG 2.1 AA).