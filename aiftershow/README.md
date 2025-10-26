# AIFtershow

A single-page, responsive, dual-language (EN/NL) mini-site for "Marketing & Effie Live" attendees. This high-tech "cyberpunk" themed tactical guide provides interactive workflows for implementing AI tools using Google's ecosystem (Gemini, NotebookLM, AI Studio).

## Current Status
* **This site is live and working properly.**
* **Last Verified:** October 26, 2025
* **Branch:** Gem-Builder-first-deploy
* **Deployment:** Development build running locally

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
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd DML/aiftershow
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the project root and add your Gemini API key:
    ```
    VITE_GEMINI_API_KEY=your_api_key_here
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

## Project Features

✅ **Prompt Improver** - Interactive chat-based tool for refining AI prompts with Gemini 2.5 Flash  
✅ **Hero Gem Wizard** - Multi-step wizard for creating custom AI specialists grounded in research  
✅ **NotebookLM Guide** - Workflow guide with stakeholder-specific prompts  
✅ **Dual Language Support** - Seamless switching between English and Dutch  
✅ **Cyberpunk Theme** - Custom design system with neon glows and sharp aesthetics  
✅ **Responsive Design** - Mobile-first approach for all screen sizes  

## Project Structure

```
aiftershow/
├── public/
│   └── locales/           # Translation files (EN/NL)
├── src/
│   ├── components/        # React components (one per section)
│   ├── services/          # API integration layer
│   ├── App.tsx           # Main application component
│   └── i18n.ts           # Internationalization setup
├── eslint.config.js      # ESLint configuration
├── tailwind.config.js    # Tailwind CSS theme
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── GEMINI.md             # AI assistant context & guidelines
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
