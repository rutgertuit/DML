
import React, { useState, useEffect } from 'react';

interface FinalGemInstructionProps {
  gemPlan: { goal: string, requiredDocuments: string[] };
}

// Mock function for API call
async function getGeminiFlashStream(prompt: string): Promise<string> {
  console.log("API Call with prompt:", prompt);
  return `## Persona\nYou are a helpful assistant.\n\n## Instructions\n- You must answer questions based on the provided documents: ${JSON.parse(prompt.split("Gem Plan:")[1].split("Instructions for the final prompt:")[0].trim()).requiredDocuments.join(', ')}\n- Always cite your sources.`;
}

const FinalGemInstruction: React.FC<FinalGemInstructionProps> = ({ gemPlan }) => {
  const [instruction, setInstruction] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const generateInstruction = async () => {
      const finalPrompt = `You are a 'Vibe Coding Prompt Engineer'. Based on the following Gem Plan, write a final, RAG-ready system instruction.
        * **Gem Plan:** ${JSON.stringify(gemPlan)}
        * **Instructions for the final prompt:**
            * 1. Start with a clear persona definition.
            * 2. Explicitly instruct the LLM to constrain its knowledge *exclusively* to the provided source documents: ${gemPlan.requiredDocuments.join(', ')}.
            * 3. Instruct the LLM to *always* cite the specific source file it used for its information.
            * 4. Include a structured workflow (Analyze, Quote, Strategize) similar to the V1 prompts.`;

      const generatedInstruction = await getGeminiFlashStream(finalPrompt);
      setInstruction(generatedInstruction);
    };

    generateInstruction();
  }, [gemPlan]);

  const handleCopy = () => {
    if (instruction) {
      navigator.clipboard.writeText(instruction);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 4: Your Final Gem Instruction is Ready!</h3>
      {instruction && (
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
            <pre className="code-block max-w-full whitespace-pre-wrap break-words overflow-x-auto bg-transparent p-2 pt-8">{instruction}</pre>
          </div>
        </div>
      )}
      <div className="reminder-checklist mt-6">
        <h4 className="font-bold text-text-light mb-2">Reminder Checklist</h4>
        <p className="text-text-light/80 mb-4">Remember to upload the following files to your LLM:</p>
        <ul className="list-disc list-inside text-text-light/80 space-y-2">
          {gemPlan.requiredDocuments.map(doc => <li key={doc}>{doc}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default FinalGemInstruction;
