import React from 'react';

interface ChatBubbleProps {
    sender: 'user' | 'ai';
    content: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, content }) => {
    const isUser = sender === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start gap-2 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* AI Icon */}
                {!isUser && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg">
                        ✨
                    </div>
                )}

                {/* Chat Bubble */}
                <div
                    className={`rounded-2xl px-4 py-3 shadow-md ${isUser
                            ? 'bg-primary text-background-dark rounded-tr-sm'
                            : 'bg-background-light text-text-dark rounded-tl-sm border border-secondary/20'
                        }`}
                >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {content}
                    </p>
                </div>

                {/* User Icon */}
                {isUser && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold text-sm">
                        You
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBubble;
