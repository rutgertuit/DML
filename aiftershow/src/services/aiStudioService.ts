// Defines the message structure the API expects
interface ApiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

// Our API key from the .env file
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

/**
 * Sends a conversation history to the Gemini API and gets a response.
 * @param history The full conversation history, including the system prompt.
 * @returns The AI model's text response.
 */
export const getScribeResponse = async (history: ApiMessage[]): Promise<string> => {
  if (!API_KEY) {
    throw new Error("VITE_GEMINI_API_KEY is not set. Please check your .env file.");
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error ${response.status}: ${errorData.error.message}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0].content) {
      throw new Error("Invalid response structure from API.");
    }
    
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I ran into an error. Please try again.";
  }
};