
import React, { useState, useEffect, useRef } from 'react';
import { callGeminiApi } from '../../services/aiStudioService';

interface SourceMaterialGeneratorProps {
  gemPlan: { goal: string, requiredDocuments: string[] };
  onFilesConfirmed: () => void;
}

const SourceMaterialGenerator: React.FC<SourceMaterialGeneratorProps> = ({ gemPlan, onFilesConfirmed }) => {
  const [sourcePrompts, setSourcePrompts] = useState<{ name: string, prompt: string }[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [hasCopiedCurrent, setHasCopiedCurrent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentlyGenerating, setCurrentlyGenerating] = useState<string | null>(null);
  const [completedDocuments, setCompletedDocuments] = useState<string[]>([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const completionButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fetchSourcePrompts = async () => {
      if (!gemPlan || !gemPlan.requiredDocuments) return;

      setIsLoading(true);
      setError(null);
      setCompletedDocuments([]);
      const generatedPrompts: { name: string, prompt: string }[] = [];

      try {
        for (const documentName of gemPlan.requiredDocuments) {
          // Set currently generating document
          setCurrentlyGenerating(documentName);

          // THIS IS THE META-PROMPT TEMPLATE
          const metaPrompt = `You are an expert "AI Research Assistant" helping a user create research-based source files for a new AI Gem.
The user's high-level goal is: "${gemPlan.goal}".
The user needs to research and compile publicly available information for a document named: "${documentName}".

IMPORTANT: This document should contain PUBLICLY AVAILABLE, RESEARCHABLE information only. DO NOT ask for personal, private, or user-specific information.

Your task is to generate a detailed, copy-and-paste-ready research prompt for the user to run in an LLM (like Gemini Advanced). This prompt should guide the AI to research and compile publicly available information.

- DO NOT ask for personal information, private documents, or user-specific data
- DO focus on publicly available information, best practices, established methods, and industry standards
- Your entire output *is* the research prompt for the user
- Start with "To create your research document '${documentName}', use this prompt:"

Example Output:
"To create your research document 'React_Best_Practices.md', use this prompt:
'Please research and compile current React development best practices. Include: 1) Modern React patterns and hooks usage, 2) Performance optimization techniques, 3) Common anti-patterns to avoid, 4) Industry-standard file organization, 5) Popular testing approaches. Format as a comprehensive guide with examples and explanations.'"`;

          // THIS IS THE FIX: AWAIT THE *RESULT* OF THE API CALL
          const apiResult = await callGeminiApi(metaPrompt);
          generatedPrompts.push({ name: documentName, prompt: apiResult });

          // Mark this document as completed
          setCompletedDocuments(prev => [...prev, documentName]);
        }

        setSourcePrompts(generatedPrompts);
        setCurrentlyGenerating(null);

      } catch (e) {
        console.error("Failed to fetch source prompts:", e);
        setError("The AI failed to generate prompts. Please go back and try again.");
        setCurrentlyGenerating(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSourcePrompts();
  }, [gemPlan]);

  const handleCopy = (prompt: string, documentName: string) => {
    navigator.clipboard.writeText(prompt);
    setCopied(documentName);
    setHasCopiedCurrent(true);
    setTimeout(() => setCopied(null), 2000);
  };

  // Reset hasCopiedCurrent when moving to a new prompt
  useEffect(() => {
    setHasCopiedCurrent(false);
  }, [currentPromptIndex]);

  // Mark a prompt as confirmed by user (they've created the document in Gemini)
  const handlePromptCompleted = (documentName: string) => {
    setCompletedDocuments(prev => [...new Set([...prev, documentName])]);
  };

  // Check if current prompt is completed
  const currentPromptName = sourcePrompts[currentPromptIndex]?.name;
  const isCurrentPromptCompleted = completedDocuments.includes(currentPromptName);

  // Scroll to completion button when page loads or when user needs to take action
  useEffect(() => {
    if (sourcePrompts.length > 0 && !isLoading && completionButtonRef.current) {
      // Small delay to ensure layout is complete
      setTimeout(() => {
        completionButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [currentPromptIndex, sourcePrompts.length, isLoading]);

  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 3: Generate Source Material Prompts</h3>

      {isLoading ? (
        <div className="flex flex-col py-8">
          <div className="mb-6 text-center">
            <div className="mb-4 text-4xl">📚</div>
            <p className="font-body text-text-light/80 text-lg font-bold">Generating Source Material Prompts</p>
            <p className="font-body text-text-light/60 text-sm mt-2">Creating custom prompts for each document...</p>
          </div>

          {/* Document-by-document progress */}
          <div className="space-y-3 max-w-2xl mx-auto w-full">
            {gemPlan.requiredDocuments.map((doc) => {
              const isCompleted = completedDocuments.includes(doc);
              const isGenerating = currentlyGenerating === doc;

              return (
                <div
                  key={doc}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${isCompleted
                    ? 'bg-primary/10 border-primary/30'
                    : isGenerating
                      ? 'bg-secondary/10 border-secondary/30 animate-pulse'
                      : 'bg-background-dark/50 border-secondary/20'
                    }`}
                >
                  {/* Status Icon */}
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {isCompleted ? (
                      <span className="text-primary text-2xl">✓</span>
                    ) : isGenerating ? (
                      <div className="w-6 h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span className="text-text-light/30 text-xl">○</span>
                    )}
                  </div>

                  {/* Document Name */}
                  <div className="flex-grow">
                    <p className={`font-mono text-sm ${isCompleted ? 'text-primary font-bold' : isGenerating ? 'text-secondary font-bold' : 'text-text-light/60'
                      }`}>
                      {doc}
                    </p>
                    {isGenerating && (
                      <p className="text-xs text-secondary/80 mt-1">Generating prompt...</p>
                    )}
                    {isCompleted && (
                      <p className="text-xs text-primary/80 mt-1">Complete!</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-12 bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="font-body text-red-400 text-lg font-bold mb-2">{error}</p>
          <p className="font-body text-text-light/60 text-sm">Please try going back and refining your Gem plan.</p>
        </div>
      ) : sourcePrompts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-text-light/80">No prompts generated.</p>
        </div>
      ) : (
        <>
          {/* Single Prompt View */}
          <div className="mb-8 space-y-6">
            {/* Progress Indicator */}
            <div className="bg-card-dark/50 border border-secondary/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-mono text-text-light/70">Document {currentPromptIndex + 1} of {sourcePrompts.length}</p>
                <p className="text-sm font-mono text-secondary">{Math.round(((currentPromptIndex + 1) / sourcePrompts.length) * 100)}% Progress</p>
              </div>
              <div className="w-full bg-background-dark/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentPromptIndex + 1) / sourcePrompts.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Current Prompt Card */}
            <div className="border border-primary/30 rounded-lg overflow-hidden">
              {/* Header Section with Next Steps */}
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-primary mb-2">
                      📄 {sourcePrompts[currentPromptIndex]?.name}
                    </h4>
                    <p className="text-sm text-text-light/80">
                      Copy the prompt below, then open Gemini to generate your research document.
                    </p>
                  </div>
                </div>

                {/* Action Buttons - Copy and Open Gemini side by side */}
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <p className="text-sm font-bold text-text-light mb-3">Quick Actions:</p>
                  <div className="flex gap-3">
                    {/* Copy Button - Highlighted first, grey after copied */}
                    <button
                      onClick={() => handleCopy(sourcePrompts[currentPromptIndex]?.prompt || '', sourcePrompts[currentPromptIndex]?.name || '')}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-bold rounded-lg transition-all ${!hasCopiedCurrent
                          ? 'bg-primary text-background-dark hover:shadow-glow-blue shadow-md animate-pulse'
                          : 'bg-secondary/20 text-text-light/70 border border-secondary/30'
                        }`}
                    >
                      <span>{copied === sourcePrompts[currentPromptIndex]?.name ? '✓' : '📋'}</span>
                      <span>{copied === sourcePrompts[currentPromptIndex]?.name ? 'Copied!' : 'Copy Prompt'}</span>
                    </button>

                    {/* Open Gemini Button - Grey first, highlighted after copy */}
                    <a
                      href="https://gemini.google.com/app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-bold rounded-lg transition-all ${hasCopiedCurrent
                          ? 'bg-secondary text-background-dark hover:shadow-glow-purple shadow-md'
                          : 'bg-secondary/20 text-text-light/50 border border-secondary/30 cursor-not-allowed'
                        }`}
                      onClick={(e) => {
                        if (!hasCopiedCurrent) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <span>🚀</span>
                      <span>Open Gemini</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Next Steps Instructions */}
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <p className="text-sm font-bold text-text-light mb-3">Next Steps:</p>
                  <ol className="text-sm text-text-light/80 space-y-2 list-decimal list-inside">
                    <li>Click "Copy Prompt" above to copy the research prompt</li>
                    <li>Click "Open Gemini" to open Gemini in a new tab</li>
                    <li>Paste the prompt into Gemini's chat and let it generate the content</li>
                    <li>Save the generated content as <span className="font-mono text-primary font-bold">{sourcePrompts[currentPromptIndex]?.name}</span></li>
                    <li>Return here and click "I've Created This Document" below to continue</li>
                  </ol>
                </div>
              </div>

              {/* Prompt Content Section */}
              <div className="bg-card-dark p-6">
                <p className="text-xs text-text-light/50 font-mono mb-3 uppercase">Prompt Template</p>
                <div className="bg-background-dark rounded-lg border border-secondary/20 p-4">
                  <pre className="font-mono text-sm text-text-light/90 whitespace-pre-wrap overflow-x-auto">
                    {sourcePrompts[currentPromptIndex]?.prompt}
                  </pre>
                </div>
              </div>
            </div>

            {/* Navigation and Completion Section */}
            <div className="bg-card-dark/80 border border-secondary/30 rounded-lg p-6 space-y-4">
              <div className="flex gap-3">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPromptIndex(Math.max(0, currentPromptIndex - 1))}
                  disabled={currentPromptIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-text-light border border-secondary/30 rounded-lg hover:bg-secondary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>←</span>
                  <span>Previous</span>
                </button>

                {/* Mark as Completed Button */}
                <button
                  ref={completionButtonRef}
                  onClick={() => {
                    handlePromptCompleted(sourcePrompts[currentPromptIndex]?.name || '');
                    if (currentPromptIndex < sourcePrompts.length - 1) {
                      setCurrentPromptIndex(currentPromptIndex + 1);
                    }
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-lg transition-all ${isCurrentPromptCompleted
                    ? 'bg-primary text-background-dark hover:shadow-glow-blue'
                    : 'bg-primary/30 text-text-light border border-primary/30 hover:bg-primary/50 animate-pulse shadow-lg'
                    }`}
                >
                  <span>{isCurrentPromptCompleted ? '✓' : '📝'}</span>
                  <span>
                    {isCurrentPromptCompleted
                      ? (currentPromptIndex < sourcePrompts.length - 1 ? 'Move to Next' : 'All Documents Created!')
                      : 'I\'ve Created This Document'}
                  </span>
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPromptIndex(Math.min(sourcePrompts.length - 1, currentPromptIndex + 1))}
                  disabled={currentPromptIndex === sourcePrompts.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-text-light border border-secondary/30 rounded-lg hover:bg-secondary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </div>

              {/* Status Messages */}
              <div className="text-sm text-text-light/70 text-center">
                <p>{completedDocuments.length} of {sourcePrompts.length} documents created</p>
              </div>

              {/* Progress Bar at Bottom */}
              <div className="pt-4 border-t border-secondary/20">
                <div className="w-full bg-background-dark/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentPromptIndex + 1) / sourcePrompts.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Confirmation Section */}
          {completedDocuments.length === sourcePrompts.length && (
            <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-6 animate-fade-in">
              <h4 className="font-display text-xl font-bold text-primary mb-3">✅ Ready to Finalize Your Gem</h4>
              <p className="text-text-light/80 mb-4">
                You've successfully created all the source documents. Now let's generate your final system instruction.
              </p>
              <button
                onClick={onFilesConfirmed}
                className="w-full font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-blue transition-shadow"
              >
                Continue to Step 4: Generate Final Gem Instruction
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SourceMaterialGenerator;
