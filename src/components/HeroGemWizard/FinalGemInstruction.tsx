
import React, { useState, useEffect } from 'react';
import { callGeminiApi } from '../../services/aiStudioService';

interface FinalGemInstructionProps {
  gemPlan: {
    goal: string,
    researchDocuments: string[],
    userDocuments: string[]
  };
}

const FinalGemInstruction: React.FC<FinalGemInstructionProps> = ({ gemPlan }) => {
  const [finalInstruction, setFinalInstruction] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateInstruction = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const allDocuments = [...gemPlan.researchDocuments, ...gemPlan.userDocuments];
        const finalInstructionMetaPrompt = `You are a 'Vibe Coding Prompt Engineer' and your job is to write a final, RAG-ready system instruction for a user.
The user's 'Gem Plan' is: ${JSON.stringify(gemPlan)}

Your task is to generate the complete, copy-paste-ready system instruction.
- It MUST start with a persona definition based on the 'goal'.
- It MUST explicitly instruct the AI to constrain its knowledge *exclusively* to the provided source documents: ${allDocuments.join(', ')}.
- It MUST instruct the AI to *always* cite the specific source file it used.
- It MUST include a structured 4-step workflow (e.g., 1. Analyze Request, 2. Cite Source, 3. Formulate Strategy, 4. Ask Question).
- If there are userDocuments, remind the user they must upload these files themselves when using the Gem.
- Your entire output must be the final system instruction, ready for the user to copy. DO NOT add any conversational preamble.`;

        const generatedInstruction = await callGeminiApi(finalInstructionMetaPrompt);
        setFinalInstruction(generatedInstruction);

      } catch (e) {
        console.error("Error generating final instruction:", e);
        setError("The AI failed to generate the final instruction. Please try again.");
        setFinalInstruction(null);
      } finally {
        setIsLoading(false);
      }
    };

    generateInstruction();
  }, [gemPlan]);

  const handleCopy = () => {
    if (finalInstruction) {
      navigator.clipboard.writeText(finalInstruction);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Handle loading state
  if (isLoading) {
    return (
      <div>
        <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 4: Your Final Gem Instruction is Ready!</h3>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 text-4xl">✨</div>
          <p className="font-body text-text-light/80 text-lg">Building your Gem...</p>
          <p className="font-body text-text-light/60 text-sm mt-2">Generating your final system instruction. This may take a moment.</p>
        </div>
      </div>
    );
  }

  // Handle error state (no instruction generated)
  if (!isLoading && error) {
    return (
      <div>
        <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 4: Your Final Gem Instruction is Ready!</h3>
        <div className="flex flex-col items-center justify-center py-12 bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="font-body text-red-400 text-lg font-bold mb-2">{error}</p>
          <p className="font-body text-text-light/60 text-sm">Please try again or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  // Handle success state (instruction generated)
  if (!isLoading && finalInstruction) {
    return (
      <div>
        <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 4: Your Final Gem Instruction is Ready!</h3>
        <div className="code-block-container relative">
          <h4 className="font-bold text-primary mb-2">Final System Instruction</h4>
          <div className="bg-primary/10 rounded-lg p-2 pb-0 border border-primary/30">
            <button
              type="button"
              className="copy-btn flex items-center gap-2 px-4 py-2 text-base font-bold bg-primary text-background-dark rounded-lg absolute top-2 right-2 shadow hover:bg-blue-500 transition-all"
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy Instruction'}
            </button>
            <pre className="code-block max-w-full whitespace-pre-wrap break-words overflow-x-auto bg-transparent p-2 pt-8">{finalInstruction}</pre>
          </div>
        </div>
        {/* How to Create Your Gem Section */}
        <div className="mt-8 p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 rounded-xl">
          <h4 className="font-display text-xl font-bold text-text-light mb-4 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span>How to Create Your Gem in Gemini</span>
          </h4>

          <div className="space-y-4 text-text-light/90">
            <div className="flex items-start gap-3">
              <span className="font-bold text-primary text-lg flex-shrink-0">1.</span>
              <p>
                <strong className="text-primary">Go to Gemini Advanced:</strong> Open{' '}
                <a
                  href="https://gemini.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-blue-400 underline font-semibold"
                >
                  gemini.google.com
                </a>
                {' '}and make sure you have Gemini Advanced (the paid version with Gems feature).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-bold text-primary text-lg flex-shrink-0">2.</span>
              <div className="flex-1">
                <p className="mb-2">
                  <strong className="text-primary">Download your research documents:</strong> Go back to Step 3 above and download each generated research document you created (the ones you copied into Gemini and got back comprehensive research).
                </p>
                <p className="text-sm text-text-light/70 italic ml-4">
                  💡 Tip: Save them as .md or .txt files with the exact names shown below
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-bold text-primary text-lg flex-shrink-0">3.</span>
              <div className="flex-1">
                <p className="mb-2">
                  <strong className="text-primary">Create a new Gem:</strong> In Gemini, click the <strong>"Gem manager"</strong> icon (usually in the left sidebar or top menu), then click <strong>"New Gem"</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-bold text-primary text-lg flex-shrink-0">4.</span>
              <div className="flex-1">
                <p className="mb-2">
                  <strong className="text-primary">Paste your system instruction:</strong> Copy the "Final System Instruction" above and paste it into the Gem's instruction field.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-bold text-primary text-lg flex-shrink-0">5.</span>
              <div className="flex-1">
                <p className="mb-2">
                  <strong className="text-primary">Upload ALL documents:</strong> Upload both your research documents (that you downloaded) AND any personal documents you specified. These files give your Gem the knowledge it needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-bold text-secondary text-lg flex-shrink-0">6.</span>
              <div className="flex-1">
                <p>
                  <strong className="text-secondary">Save and use your Gem:</strong> Give it a name, save it, and start using your custom AI assistant! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Checklist */}
        <div className="reminder-checklist mt-6 p-5 bg-background-dark/50 border border-primary/20 rounded-lg">
          <h4 className="font-bold text-text-light mb-3 text-lg">📋 Document Upload Checklist</h4>
          <p className="font-body text-text-light/70 mb-4 text-sm">Make sure to upload these documents when creating your Gem in Gemini:</p>

          {gemPlan.researchDocuments.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-bold text-primary mb-2">✅ Research Documents (You Generated These):</p>
              <ul className="list-disc list-inside text-text-light/80 space-y-1 ml-4">
                {gemPlan.researchDocuments.map((doc: string) => <li key={doc}>{doc}</li>)}
              </ul>
              <p className="text-xs text-primary/70 mt-2 ml-4 italic">
                💾 Download these from the research you created in Step 3
              </p>
            </div>
          )}

          {gemPlan.userDocuments.length > 0 && (
            <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg">
              <p className="text-sm font-bold text-secondary mb-2">⚠️ Your Personal Documents:</p>
              <ul className="list-disc list-inside text-text-light/80 space-y-1 ml-4">
                {gemPlan.userDocuments.map((doc: string) => <li key={doc}>{doc}</li>)}
              </ul>
              <p className="text-xs text-text-light/60 mt-2 italic">
                📁 Upload your own files with these names when setting up the Gem
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Fallback (should never reach here)
  return null;
};

export default FinalGemInstruction;
