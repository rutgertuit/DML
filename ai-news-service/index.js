const express = require('express');
const { VertexAI } = require('@google-cloud/vertexai');

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Vertex AI client
const vertex_ai = new VertexAI({ project: 'dml2025rt', location: 'europe-west1' });
const model = 'gemini-2.5-flash';

// Define the generative model
const generativeModel = vertex_ai.getGenerativeModel({
  model: model,
});

// Define the prompt to get the latest AI news
const promptText = "What are the top 3 most important announcements from Google related to AI, Gemini, or AI Studio from the last 7 days? Summarize each in 1 sentence and provide the source URL.";

// Define the tools for the model
const tools = [{ googleSearch: {} }];

app.get('/', async (req, res) => {
  // Set CORS header for public access
  res.set('Access-Control-Allow-Origin', '*');

  try {
    // A simpler prompt, just asking for a text response.
    const promptText = "What are the top 3 most important announcements from Google related to AI, Gemini, or AI Studio from the last 7 days? Summarize each in 1 sentence and provide the source URL. Format it as a simple bulleted list.";

    const result = await generativeModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: promptText }] }],
      tools: tools, // Still use tools to get fresh search data
    });

    const response = result.response;
    const candidate = response.candidates[0];

    if (candidate.content && candidate.content.parts && candidate.content.parts[0].text) {
      const aiResponseText = candidate.content.parts[0].text;
      
      console.log("Sending AI text response:", aiResponseText);
      
      // Send the raw text, not JSON
      res.status(200).send(aiResponseText);
    } else {
      throw new Error("Unexpected response format from AI model.");
    }
  } catch (error) {
    console.error("FAILED TO PROCESS AI REQUEST:", {
      errorMessage: error.message,
    });
    res.status(500).send('Error fetching news from the AI service.');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
