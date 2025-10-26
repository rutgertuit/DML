import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  textToCopy: string;
  buttonText: string;
}

export const CopyButton: React.FC<Props> = ({ textToCopy, buttonText }) => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2s
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 font-mono text-xs uppercase bg-secondary/70 text-text-light px-2 py-1 hover:bg-secondary hover:shadow-glow-purple transition-all"
    >
      {isCopied ? t('heroGemWizard.copied') : buttonText}
    </button>
  );
};