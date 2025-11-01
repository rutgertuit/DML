// Defines the message structure the API expects
interface ApiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

// Our API key from the .env file
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

/**
 * Sends a conversation history to the Gemini API and gets a response.
 * @param history The full conversation history, including the system prompt.
 * @returns The AI model's text response.
 */
export const getScribeResponse = async (history: ApiMessage[]): Promise<string> => {
  if (!API_KEY) {
    // Only log errors in development mode
    if (import.meta.env.DEV) {
      console.error('Missing VITE_GEMINI_API_KEY environment variable');
    }
    return "⚠️ API key not configured. Please set up your VITE_GEMINI_API_KEY environment variable to use the Gemini API features.";
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY // Secure: API key in header instead of URL
      },
      body: JSON.stringify({ contents: history }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (import.meta.env.DEV) {
        console.error(`API Error ${response.status}:`, errorData.error?.message);
      }
      throw new Error(`API Error ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();

    if (!data.candidates || !data.candidates[0].content) {
      throw new Error("Invalid response structure from API.");
    }

    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("Error calling Gemini API:", error);
    }
    return "Sorry, I ran into an error. Please try again.";
  }
};

/**
 * Simple wrapper to call Gemini API with a single prompt string.
 * Useful for non-conversational, one-shot prompts.
 * @param prompt The prompt text to send to Gemini
 * @returns The AI model's text response
 */
export const callGeminiApi = async (prompt: string): Promise<string> => {
  // Convert single prompt to the message format expected by the API
  const history: ApiMessage[] = [
    {
      role: 'user',
      parts: [{ text: prompt }]
    }
  ];

  return getScribeResponse(history);
};