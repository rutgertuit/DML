import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const FeedbackForm: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        rating: '',
        mostUseful: '',
        confusing: '',
        toolsTried: [] as string[],
        wouldUseAgain: '',
        suggestions: '',
        email: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'feedback'), {
                ...formData,
                language: i18n.language,
                timestamp: serverTimestamp(),
                userAgent: navigator.userAgent
            });

            setIsSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsSubmitted(false);
                setFormData({
                    rating: '',
                    mostUseful: '',
                    confusing: '',
                    toolsTried: [],
                    wouldUseAgain: '',
                    suggestions: '',
                    email: ''
                });
            }, 2000);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleToolToggle = (tool: string) => {
        setFormData(prev => ({
            ...prev,
            toolsTried: prev.toolsTried.includes(tool)
                ? prev.toolsTried.filter(t => t !== tool)
                : [...prev.toolsTried, tool]
        }));
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-secondary text-background-dark px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-glow-pink transition-all z-50 flex items-center gap-2"
            >
                <span>💬</span>
                <span>{t('feedback.buttonText', 'Give Feedback')}</span>
            </button>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-card-dark border border-primary/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-primary/10 border-b border-primary/20 p-6 flex justify-between items-center">
                    <h2 className="font-display text-2xl font-bold text-primary">
                        {t('feedback.title', 'Help Us Improve! 🚀')}
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-text-light/60 hover:text-text-light text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {isSubmitted ? (
                    <div className="p-12 text-center">
                        <div className="text-6xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                            {t('feedback.thankYou', 'Thank you!')}
                        </h3>
                        <p className="text-text-light/80">
                            {t('feedback.submitted', 'Your feedback has been submitted.')}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Overall Rating */}
                        <div>
                            <label className="block text-text-light font-bold mb-3">
                                {t('feedback.ratingLabel', '1. Overall, how would you rate this site?')} *
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button
                                        key={num}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, rating: num.toString() }))}
                                        className={`flex-1 py-3 rounded border-2 transition-all ${
                                            formData.rating === num.toString()
                                                ? 'bg-primary border-primary text-background-dark font-bold'
                                                : 'border-primary/30 text-text-light/60 hover:border-primary/60'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-text-light/40 mt-1 px-1">
                                <span>{t('feedback.ratingLow', 'Poor')}</span>
                                <span>{t('feedback.ratingHigh', 'Excellent')}</span>
                            </div>
                        </div>

                        {/* Most Useful */}
                        <div>
                            <label className="block text-text-light font-bold mb-2">
                                {t('feedback.usefulLabel', '2. What did you find most useful?')} *
                            </label>
                            <textarea
                                required
                                value={formData.mostUseful}
                                onChange={(e) => setFormData(prev => ({ ...prev, mostUseful: e.target.value }))}
                                className="w-full bg-background-dark border border-primary/30 rounded p-3 text-text-light min-h-[80px] focus:border-primary focus:outline-none"
                                placeholder={t('feedback.usefulPlaceholder', 'e.g., The Prompt Improver helped me understand...')}
                            />
                        </div>

                        {/* Confusing */}
                        <div>
                            <label className="block text-text-light font-bold mb-2">
                                {t('feedback.confusingLabel', '3. What was confusing or unclear?')}
                            </label>
                            <textarea
                                value={formData.confusing}
                                onChange={(e) => setFormData(prev => ({ ...prev, confusing: e.target.value }))}
                                className="w-full bg-background-dark border border-primary/30 rounded p-3 text-text-light min-h-[80px] focus:border-primary focus:outline-none"
                                placeholder={t('feedback.confusingPlaceholder', 'e.g., I didn\'t understand how to...')}
                            />
                        </div>

                        {/* Tools Tried */}
                        <div>
                            <label className="block text-text-light font-bold mb-3">
                                {t('feedback.toolsLabel', '4. Which tools did you try?')} *
                            </label>
                            <div className="space-y-2">
                                {['Prompt Improver', 'Hero Gem Builder', 'NotebookLM Links', 'None'].map(tool => (
                                    <label key={tool} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.toolsTried.includes(tool)}
                                            onChange={() => handleToolToggle(tool)}
                                            className="w-5 h-5 accent-primary"
                                        />
                                        <span className="text-text-light">{tool}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Would Use Again */}
                        <div>
                            <label className="block text-text-light font-bold mb-3">
                                {t('feedback.useAgainLabel', '5. Would you use this site again?')} *
                            </label>
                            <div className="space-y-2">
                                {['Definitely', 'Probably', 'Maybe', 'Probably not', 'Definitely not'].map(option => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="wouldUseAgain"
                                            required
                                            checked={formData.wouldUseAgain === option}
                                            onChange={() => setFormData(prev => ({ ...prev, wouldUseAgain: option }))}
                                            className="w-5 h-5 accent-primary"
                                        />
                                        <span className="text-text-light">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Suggestions */}
                        <div>
                            <label className="block text-text-light font-bold mb-2">
                                {t('feedback.suggestionsLabel', '6. What would make this better?')}
                            </label>
                            <textarea
                                value={formData.suggestions}
                                onChange={(e) => setFormData(prev => ({ ...prev, suggestions: e.target.value }))}
                                className="w-full bg-background-dark border border-primary/30 rounded p-3 text-text-light min-h-[80px] focus:border-primary focus:outline-none"
                                placeholder={t('feedback.suggestionsPlaceholder', 'Any ideas, bugs, or improvements...')}
                            />
                        </div>

                        {/* Email (Optional) */}
                        <div>
                            <label className="block text-text-light font-bold mb-2">
                                {t('feedback.emailLabel', '7. Email (optional - for follow-up)')}
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full bg-background-dark border border-primary/30 rounded p-3 text-text-light focus:border-primary focus:outline-none"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 py-3 px-6 border border-primary/30 rounded text-text-light hover:bg-primary/10 transition-colors"
                            >
                                {t('feedback.cancel', 'Cancel')}
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting || !formData.rating || formData.toolsTried.length === 0}
                                className="flex-1 py-3 px-6 bg-primary text-background-dark rounded font-bold hover:shadow-glow-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? t('feedback.submitting', 'Submitting...') : t('feedback.submit', 'Submit Feedback')}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default FeedbackForm;
