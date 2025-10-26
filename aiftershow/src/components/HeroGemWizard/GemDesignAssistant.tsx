
import React, { useState, useEffect } from 'react';

interface GemDesignAssistantProps {
  selectedBlueprint: string;
  onPlanCreated: (plan: { goal: string, requiredDocuments: string[] }) => void;
}

// Mock function for API call
async function getGeminiFlashStream(prompt: string): Promise<string> {
  console.log("API Call with prompt:", prompt);
  // In a real implementation, this would be a call to the Gemini API
  // For now, we'll simulate a response
  if (prompt.includes("Start a debate")) {
    return "Great! Let's design your Gem. What is the primary goal of your Gem?";
  } else {
    return `FINAL PLAN: { "goal": "A helpful assistant", "requiredDocuments": ["doc1.txt", "doc2.txt"] }`;
  }
}

const GemDesignAssistant: React.FC<GemDesignAssistantProps> = ({ selectedBlueprint, onPlanCreated }) => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai', content: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const kickOffPrompt = `You are a 'Gem Design Assistant'. The user wants to build a '${selectedBlueprint}'. Start a debate to help them define their Gem's goal and the 1-5 source documents it will need for RAG. Ask your first question.`;
    getGeminiFlashStream(kickOffPrompt).then(response => {
      setMessages([{ sender: 'ai', content: response }]);
    });
  }, [selectedBlueprint]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', content: input }];
    setMessages(newMessages);
    setInput("");

    const response = await getGeminiFlashStream(input);

    if (response.startsWith("FINAL PLAN:")) {
      const planJson = response.replace("FINAL PLAN:", "").trim();
      try {
        const plan = JSON.parse(planJson);
        onPlanCreated(plan);
      } catch (error) {
        console.error("Failed to parse gem plan:", error);
        // Handle error appropriately
      }
    } else {
      setMessages([...newMessages, { sender: 'ai', content: response }]);
    }
  };

  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-text-light mb-4">Step 2: Design Your Gem with an AI Assistant</h3>
      <div className="chat-history bg-background-dark/80 rounded-lg p-4 border border-secondary/20 h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p><strong>{msg.sender === 'user' ? "You" : "AI"}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>
      <div className="chat-input flex gap-2">
        <input
          type="text"
          className="flex-grow p-3 rounded border border-secondary/30 bg-background-dark text-text-light focus:border-primary focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="hero-gem-btn font-mono uppercase text-lg bg-primary text-background-dark font-bold py-3 px-6 rounded hover:shadow-glow-blue transition-shadow">
          Send
        </button>
      </div>
    </div>
  );
};

export default GemDesignAssistant;
