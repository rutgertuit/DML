# 🔥 Firebase Setup Guide

This guide will help you set up Firebase Functions to securely proxy your Gemini API calls.

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- A Google account
- Firebase CLI installed globally

## Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for authentication.

## Step 3: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., `aiftershow`)
4. Follow the setup wizard:
   - Enable Google Analytics (optional)
   - Choose your Google Analytics account
5. Click "Create project"

## Step 4: Enable Billing (Required for Cloud Functions)

1. In Firebase Console, go to the Spark plan (bottom left)
2. Click "Upgrade" to Blaze plan (pay-as-you-go)
3. Add a billing account
4. **Don't worry**: Free tier includes:
   - 2 million function invocations/month
   - 400,000 GB-seconds/month
   - 200,000 CPU-seconds/month
   - This is more than enough for your use case!

## Step 5: Link Your Local Project

```bash
# In your project root directory
firebase init
```

When prompted:
- **Which Firebase features?** Select "Functions" and "Hosting" (use spacebar to select)
- **Use an existing project**: Choose the project you just created
- **What language?** Select "TypeScript"
- **Use ESLint?** Yes (recommended)
- **Install dependencies?** Yes
- **Public directory:** `dist`
- **Configure as SPA?** Yes
- **Set up automatic builds?** No
- **Overwrite index.html?** No

## Step 6: Configure Your Project ID

Edit `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## Step 7: Update Frontend API URL

Edit `src/services/aiStudioService.ts` and replace `YOUR_FIREBASE_PROJECT_ID` on line 9:

```typescript
const API_URL = import.meta.env.DEV
  ? 'http://localhost:5001/your-actual-project-id/us-central1/geminiProxy'
  : '/api/gemini';
```

## Step 8: Set Up the Gemini API Key Secret

```bash
firebase functions:secrets:set GEMINI_API_KEY
```

When prompted, paste your Gemini API key. Get it from:
https://aistudio.google.com/apikey

**Important**: This stores the key securely in Firebase's secret manager. It will NEVER be exposed in your code or deployed files.

## Step 9: Install Function Dependencies

```bash
cd functions
npm install
cd ..
```

## Step 10: Test Locally (Optional but Recommended)

Start the Firebase emulators:

```bash
firebase emulators:start
```

This will start:
- Functions emulator at http://localhost:5001
- Hosting emulator at http://localhost:5000

Open your browser to http://localhost:5000 and test the Prompt Improver feature.

## Step 11: Deploy to Firebase

```bash
# Build your frontend
npm run build

# Deploy everything (functions + hosting)
firebase deploy
```

Or deploy separately:
```bash
# Deploy only functions
firebase deploy --only functions

# Deploy only hosting
firebase deploy --only hosting
```

## Step 12: Update Your Domain (If Using Custom Domain)

If you were using GitHub Pages at `https://rutgertuit.github.io/DML/`, you now have two options:

### Option A: Use Firebase Hosting (Recommended)

Your site is now at: `https://your-project-id.web.app`

**Custom Domain Setup:**
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify and configure DNS

### Option B: Keep GitHub Pages + Use Firebase for API Only

Update the CORS configuration in `functions/src/index.ts`:

```typescript
const corsHandler = cors({
  origin: [
    'https://rutgertuit.github.io',  // Your GitHub Pages domain
    'http://localhost:5173',
  ],
  methods: ['POST', 'OPTIONS'],
  credentials: true,
});
```

Then update `src/services/aiStudioService.ts`:

```typescript
const API_URL = import.meta.env.DEV
  ? 'http://localhost:5001/your-project-id/us-central1/geminiProxy'
  : 'https://us-central1-your-project-id.cloudfunctions.net/geminiProxy';
```

Redeploy:
```bash
firebase deploy --only functions
```

## 🎉 Done!

Your API key is now secure! Test your deployment:

1. Open your site
2. Try the Prompt Improver feature
3. Check the browser console - you should see NO API key
4. Check the Network tab - requests go to `/api/gemini` or your Cloud Function URL

## 📊 Monitoring

View your function logs:
```bash
firebase functions:log
```

Or in Firebase Console:
- Go to Functions section
- Click on "geminiProxy"
- View logs and metrics

## 🔒 Security Checklist

- ✅ API key stored in Firebase Secrets
- ✅ CORS configured for your domain only
- ✅ Function has rate limiting
- ✅ Security headers enabled in firebase.json
- ✅ No secrets in git repository
- ✅ GitHub Actions updated to not expose keys

## 💰 Cost Estimation

With your current traffic (~100 users/day, 5 prompts each):
- **Monthly invocations**: ~15,000
- **Cost**: **$0** (well within free tier)

The free tier gives you 2 million invocations/month!

## 🐛 Troubleshooting

### Error: "Missing required secret"
```bash
firebase functions:secrets:set GEMINI_API_KEY
```

### Error: "CORS policy blocked"
Check the origin configuration in `functions/src/index.ts`

### Error: "Function not found"
Make sure you deployed functions:
```bash
firebase deploy --only functions
```

### Local emulator not working
Check that you're using the correct port in `aiStudioService.ts`

## 📚 Additional Resources

- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase Secrets Management](https://firebase.google.com/docs/functions/config-env)
- [Gemini API Documentation](https://ai.google.dev/docs)

## 🔄 Updating Your Function

When you make changes to `functions/src/index.ts`:

```bash
cd functions
npm run build
cd ..
firebase deploy --only functions
```

## 🗑️ Cleanup (If Needed)

To delete the Firebase project:
1. Go to Firebase Console
2. Project Settings → General
3. Scroll to bottom → Delete project

---

**Need help?** Open an issue on GitHub or contact support.
