import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        } else if (consent === 'accepted') {
            // Initialize Google Analytics if consent was previously given
            initializeGoogleAnalytics();
        }
    }, []);

    const initializeGoogleAnalytics = () => {
        // Enable Google Analytics tracking
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    };

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        initializeGoogleAnalytics();
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        // Deny Google Analytics tracking
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-r from-background-dark/95 to-card-dark/95 backdrop-blur-sm border-t border-primary/30 shadow-2xl">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        <span className="text-3xl">🍪</span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <h3 className="font-display text-lg font-bold text-text-light mb-2">
                            {t('cookieConsent.title')}
                        </h3>
                        <p className="font-body text-sm text-text-light/80 leading-relaxed">
                            {t('cookieConsent.description')}
                            {' '}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary underline transition-colors"
                            >
                                {t('cookieConsent.learnMore')}
                            </a>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={handleDecline}
                            className="font-mono text-sm uppercase px-6 py-3 bg-background-light/80 text-text-light border border-text-light/30 hover:bg-background-light hover:border-text-light transition-all rounded"
                        >
                            {t('cookieConsent.decline')}
                        </button>
                        <button
                            onClick={handleAccept}
                            className="font-mono text-sm uppercase px-6 py-3 bg-primary text-background-dark hover:bg-secondary hover:shadow-glow-purple transition-all rounded"
                        >
                            {t('cookieConsent.accept')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Extend Window interface for TypeScript
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

export default CookieConsent;
