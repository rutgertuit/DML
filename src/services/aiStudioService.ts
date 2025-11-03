// Defines the message structure the API expects
interface ApiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

// Use Cloud Function proxy - NO API KEY IN CLIENT CODE
const API_URL = import.meta.env.DEV
  ? 'http://localhost:5001/rutger-dml/us-central1/geminiProxy'  // Local emulator
  : '/api/gemini';  // Production Cloud Function

/**
 * Sends a conversation history to the Gemini API via Cloud Function proxy.
 * This keeps your API key secure on the server-side.
 * @param history The full conversation history, including the system prompt.
 * @returns The AI model's text response.
 */
export const getScribeResponse = async (history: ApiMessage[]): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contents: history }),
      credentials: 'include', // Include credentials for CORS
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (import.meta.env.DEV) {
        console.error(`API Error ${response.status}:`, errorData.error);
      }
      throw new Error(`API Error ${response.status}: ${errorData.error || 'Unknown error'}`);
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