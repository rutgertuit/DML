const express = require('express');
const { VertexAI } = require('@google-cloud/vertexai');

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Vertex AI client
const vertex_ai = new VertexAI({ project: 'YOUR_PROJECT_ID', location: 'us-central1' });
const model = 'gemini-1.5-flash-001';

// Define the generative model
const generativeModel = vertex_ai.getGenerativeModel({
  model: model,
});

// Define the prompt to get the latest AI news
const promptText = "What are the top 3 most important announcements from Google related to AI, Gemini, or AI Studio from the last 7 days? Summarize each in 1 sentence and provide the source URL.";

// Define the tools for the model
const tools = [{ googleSearch: {} }];

app.get('/', async (req, res) => {
  // Set CORS header for public access, specifically for your GitHub Pages site
  res.set('Access-Control-Allow-Origin', '*');

  try {
    // Generate content using the Vertex AI model
    const result = await generativeModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: promptText }] }],
      tools: tools,
    });

    const response = result.response;
    const candidate = response.candidates[0];

    // The model should return a response containing a function call to the search tool.
    // We are interested in the result of that tool call, which is then processed by the model
    // to generate the final text summary.
    if (candidate.content && candidate.content.parts && candidate.content.parts[0].text) {
      // Assuming the model returns a JSON string as requested implicitly by the follow-up processing.
      // For robustness, we will attempt to parse it, assuming it might be wrapped in markdown.
      let responseText = candidate.content.parts[0].text;
      responseText = responseText.replace(/^```json
/, '').replace(/
```$/, '');
      
      const parsedResponse = JSON.parse(responseText);
      res.json(parsedResponse);
    } else {
      // This case handles scenarios where the response is not in the expected format.
      res.status(500).json({ error: "Unexpected response format from AI model." });
    }
  } catch (error) {
    console.error('Error generating content from Vertex AI:', error);
    res.status(500).send('Error fetching news from the AI service.');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
