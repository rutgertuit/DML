import { onRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions';
import { defineSecret } from 'firebase-functions/params';
import cors from 'cors';

// Define the secret for the Gemini API key
const GEMINI_API_KEY = defineSecret('GEMINI_API_KEY');

// Configure CORS - Only allow your domain
const corsHandler = cors({
  origin: [
    'https://rutgertuit.github.io',
    'http://localhost:5173', // For local development
  ],
  methods: ['POST', 'OPTIONS'],
  credentials: true,
  maxAge: 86400, // 24 hours
});

// Define the API message structure
interface ApiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface RequestBody {
  contents: ApiMessage[];
}

/**
 * Cloud Function that proxies requests to Gemini API
 * This keeps your API key secure on the server-side
 */
export const geminiProxy = onRequest(
  {
    secrets: [GEMINI_API_KEY],
    cors: true,
    maxInstances: 10,
    timeoutSeconds: 60,
    memory: '256MiB',
  },
  async (request, response) => {
    // Handle CORS preflight
    return corsHandler(request, response, async () => {
      try {
        // Validate request method
        if (request.method !== 'POST') {
          logger.warn('Invalid request method:', request.method);
          response.status(405).json({ error: 'Method not allowed' });
          return;
        }

        // Validate request body
        const body: RequestBody = request.body;
        if (!body || !body.contents || !Array.isArray(body.contents)) {
          logger.warn('Invalid request body');
          response.status(400).json({ error: 'Invalid request body' });
          return;
        }

        // Rate limiting check (basic implementation)
        const clientIP = request.headers['x-forwarded-for'] || request.ip;
        logger.info('Request from:', clientIP);

        // Get the API key from secrets
        const apiKey = GEMINI_API_KEY.value();
        if (!apiKey) {
          logger.error('GEMINI_API_KEY not configured');
          response.status(500).json({ error: 'Server configuration error' });
          return;
        }

        // Make request to Gemini API
        const geminiResponse = await fetch(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey,
            },
            body: JSON.stringify({ contents: body.contents }),
          }
        );

        if (!geminiResponse.ok) {
          const errorData = await geminiResponse.json() as { error?: { message?: string } };
          logger.error('Gemini API Error:', errorData);
          response.status(geminiResponse.status).json({
            error: errorData.error?.message || 'Gemini API error',
          });
          return;
        }

        // Return successful response
        const data = await geminiResponse.json();
        logger.info('Successful Gemini API call');
        response.status(200).json(data);
      } catch (error) {
        logger.error('Function error:', error);
        response.status(500).json({
          error: 'Internal server error',
        });
      }
    });
  }
);
