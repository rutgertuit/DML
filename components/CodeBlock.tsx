
import React, { useState } from 'react';

interface CodeBlockProps {
    code: string;
    copyText: string;
    copiedText: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, copyText, copiedText }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="relative bg-card-dark p-4 border border-text-light/20 font-mono text-sm">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-secondary text-background-dark px-2 py-1 text-xs font-bold uppercase button-glow-purple"
            >
                {isCopied ? copiedText : copyText}
            </button>
            <pre className="whitespace-pre-wrap overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;
