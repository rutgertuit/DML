
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PROMPT_IMPROVER_SYSTEM_INSTRUCTION } from '../constants';
import CodeBlock from './CodeBlock';

interface PromptImproverSectionProps {
    texts: any;
}

const PromptImproverSection: React.FC<PromptImproverSectionProps> = ({ texts }) => {
    const [prompt, setPrompt] = useState('');
    const [improvedPrompt, setImprovedPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError('');
        setImprovedPrompt('');

        try {
            if (!process.env.API_KEY) {
                throw new Error("API key is not configured.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const fullPrompt = `${PROMPT_IMPROVER_SYSTEM_INSTRUCTION}\n\nUser's prompt: "${prompt}"`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: fullPrompt,
            });
            
            setImprovedPrompt(response.text);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(`Failed to improve prompt: ${errorMessage}`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const renderResult = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center h-full text-text-light/50">
                    <span className="material-symbols-outlined animate-spin text-primary mr-2">progress_activity</span>
                    Improving...
                </div>
            );
        }
        if (error) {
            return <p className="text-red-500 font-mono text-sm">{error}</p>;
        }
        if (improvedPrompt) {
            return <pre className="whitespace-pre-wrap font-mono text-sm">{improvedPrompt}</pre>;
        }
        return (
            <div className="flex items-center justify-center h-full text-text-light/50">
                <span className="material-symbols-outlined text-primary mr-2">hourglass_empty</span>
                {texts.promptImprover.awaiting}
            </div>
        );
    };

    return (
        <section className="py-24" id="prompt-improver">
            <h2 className="text-3xl font-display font-bold uppercase mb-8 text-center">{texts.promptImprover.title}</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="mb-4">{texts.promptImprover.description}</p>
                    <div className="flex flex-col gap-4">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full p-4 bg-card-dark border border-secondary text-text-light font-mono focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border-glow-blue transition-shadow"
                            placeholder={texts.promptImprover.placeholder}
                            rows={6}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full bg-primary text-background-dark font-bold uppercase py-3 px-6 hover:bg-primary/80 button-glow-purple transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Improving...' : texts.promptImprover.submit}
                        </button>
                        <div className="w-full p-4 bg-card-dark border border-text-light/20 min-h-[160px] overflow-y-auto">
                            {renderResult()}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-display uppercase text-secondary mb-2">{texts.promptImprover.howItWorks}</h3>
                    <p className="mb-4">{texts.promptImprover.howItWorksDesc}</p>
                    <CodeBlock code={PROMPT_IMPROVER_SYSTEM_INSTRUCTION} copyText={texts.copy} copiedText={texts.copied} />
                </div>
            </div>
        </section>
    );
};

export default PromptImproverSection;
