import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingIndicator: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-start">
            <div className="flex items-start gap-2 max-w-[80%]">
                {/* AI Icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg">
                    ✨
                </div>

                {/* Loading Bubble */}
                <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-background-light border border-secondary/20 shadow-md">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-text-dark/70">{t('common.loading')}</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;
