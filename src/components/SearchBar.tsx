import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Array<{ section: string; title: string; anchor: string }>>([]);

    // Searchable sections - these match the section IDs in the app
    const searchableContent = [
        { section: t('search.sections.tools'), title: t('promptImprover.sectionTitle'), anchor: 'tools' },
        { section: t('search.sections.promptImprover'), title: t('promptImprover.title'), anchor: 'tools' },
        { section: t('search.sections.heroGem'), title: t('heroGemWizard.title'), anchor: 'tools' },
        { section: t('search.sections.notebookLM'), title: t('notebookLM.title'), anchor: 'tools' },
        { section: t('search.sections.vibeCoding'), title: t('vibeCoding.title'), anchor: 'vibe-coding' },
        { section: t('search.sections.toolkit'), title: t('toolkit.title'), anchor: 'toolkit' },
        { section: t('search.sections.about'), title: t('aboutAuthor.title'), anchor: 'about-author' },
        { section: t('search.sections.footer'), title: t('footer.title'), anchor: 'footer' },
    ];

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            return;
        }

        const filtered = searchableContent.filter(item =>
            item.section.toLowerCase().includes(query.toLowerCase()) ||
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
    }, [query]);

    const handleResultClick = (anchor: string) => {
        const element = document.getElementById(anchor);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            onClose();
            setQuery('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background-dark/90 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            {/* Search Modal */}
            <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
                <div className="bg-card-dark border-2 border-primary/30 rounded-lg shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="p-4 border-b border-primary/20">
                        <div className="relative">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={t('search.placeholder')}
                                className="w-full bg-background-dark text-text-light px-4 py-3 pl-12 rounded border border-primary/30 focus:border-primary focus:outline-none font-body"
                                autoFocus
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl">
                                🔍
                            </span>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="max-h-96 overflow-y-auto">
                        {query.trim().length < 2 ? (
                            <div className="p-8 text-center text-text-light/50">
                                <p className="font-mono text-sm">{t('search.hint')}</p>
                            </div>
                        ) : results.length === 0 ? (
                            <div className="p-8 text-center text-text-light/50">
                                <p className="font-mono text-sm">{t('search.noResults')}</p>
                            </div>
                        ) : (
                            <ul>
                                {results.map((result, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleResultClick(result.anchor)}
                                            className="w-full text-left px-6 py-4 hover:bg-primary/10 transition-colors border-b border-primary/10 last:border-b-0"
                                        >
                                            <div className="font-body text-text-light font-semibold">
                                                {result.title}
                                            </div>
                                            <div className="font-mono text-xs text-text-light/60 mt-1">
                                                {result.section}
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-3 bg-background-dark border-t border-primary/20">
                        <p className="text-xs text-center text-text-light/50 font-mono">
                            {t('search.footer')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
