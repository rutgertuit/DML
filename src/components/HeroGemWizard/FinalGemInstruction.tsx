
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
        <div className="reminder-checklist mt-6">
          <h4 className="font-bold text-text-light mb-2">📋 Reminder: Upload These Files to Your Gem</h4>
          <p className="font-body text-text-light/80 mb-4">When using this Gem, make sure to upload these documents:</p>

          {gemPlan.researchDocuments.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-bold text-primary mb-2">✅ Research Documents (Generated):</p>
              <ul className="list-disc list-inside text-text-light/80 space-y-1 ml-4">
                {gemPlan.researchDocuments.map((doc: string) => <li key={doc}>{doc}</li>)}
              </ul>
            </div>
          )}

          {gemPlan.userDocuments.length > 0 && (
            <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg">
              <p className="text-sm font-bold text-secondary mb-2">⚠️ User Documents (You Must Add):</p>
              <ul className="list-disc list-inside text-text-light/80 space-y-1 ml-4">
                {gemPlan.userDocuments.map((doc: string) => <li key={doc}>{doc}</li>)}
              </ul>
              <p className="text-xs text-text-light/60 mt-2 italic">
                These are your personal files. Upload them to Google AI Studio or your LLM when using this Gem.
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
