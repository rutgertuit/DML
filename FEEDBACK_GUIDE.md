# Feedback Form Guide

## Overview
A temporary feedback form has been added to the website to collect structured feedback from your test group of 10 people.

## How It Works

### For Users
- A floating "💬 Give Feedback" button appears in the bottom-right corner of the site
- Clicking it opens a structured feedback form with 7 questions:
  1. **Overall Rating** (1-5 scale)
  2. **Most Useful** (open text)
  3. **Confusing/Unclear** (open text)
  4. **Tools Tried** (checkboxes: Prompt Improver, Hero Gem Builder, NotebookLM Links, None)
  5. **Would Use Again** (radio: Definitely, Probably, Maybe, Probably not, Definitely not)
  6. **Suggestions** (open text)
  7. **Email** (optional for follow-up)

- All responses are stored in Firebase Firestore
- The form works in both English and Dutch

### For You (Admin)

#### Viewing Feedback in Firebase Console

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/project/rutger-dml/firestore
   - Navigate to **Firestore Database** in the left sidebar

2. **View Feedback Collection**
   - Click on the `feedback` collection
   - Each document is a single feedback submission
   - Documents contain:
     - `rating`: "1" to "5"
     - `mostUseful`: text
     - `confusing`: text
     - `toolsTried`: array of strings
     - `wouldUseAgain`: string
     - `suggestions`: text
     - `email`: string (optional)
     - `language`: "en" or "nl"
     - `timestamp`: server timestamp
     - `userAgent`: browser info

#### Exporting Feedback Data

**Option 1: Firebase Console (Manual Export)**
1. In Firestore Database, click the `feedback` collection
2. Click the three dots menu (⋮) → "Export"
3. Choose format (JSON recommended)
4. Download the file

**Option 2: Firebase CLI (Command Line)**
```bash
# Export all feedback to JSON
firebase firestore:export feedback-export

# Or use this Node.js script to get clean JSON:
node scripts/export-feedback.js
```

**Option 3: Quick View Script**
Create a file `scripts/export-feedback.js`:
```javascript
const admin = require('firebase-admin');
const fs = require('fs');

admin.initializeApp();
const db = admin.firestore();

async function exportFeedback() {
  const snapshot = await db.collection('feedback').orderBy('timestamp', 'desc').get();
  const feedback = [];

  snapshot.forEach(doc => {
    feedback.push({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp?.toDate().toISOString()
    });
  });

  fs.writeFileSync('feedback-export.json', JSON.stringify(feedback, null, 2));
  console.log(`✅ Exported ${feedback.length} feedback entries to feedback-export.json`);
  process.exit(0);
}

exportFeedback();
```

Then run:
```bash
npm install firebase-admin
node scripts/export-feedback.js
```

#### Using Feedback in Claude/VS Code

Once exported to `feedback-export.json`, you can:

1. **Direct paste into Claude:**
   ```
   Here's the feedback from my test group:
   [paste JSON content]

   Please analyze this and suggest improvements for the website.
   ```

2. **Use in VS Code with Claude Code:**
   - Open the JSON file in VS Code
   - Ask Claude Code: "Read feedback-export.json and analyze the feedback. What are the top 3 issues to fix?"

3. **Structured analysis prompt:**
   ```
   Analyze this feedback JSON and provide:
   1. Average rating and distribution
   2. Most common "useful" themes
   3. Top confusion points
   4. Tools usage breakdown
   5. Would-use-again sentiment
   6. Prioritized action items
   ```

## Removing the Feedback Form

When you're done collecting feedback:

1. **Remove from App.tsx:**
   ```tsx
   // Comment out or remove this line:
   // import FeedbackForm from './components/FeedbackForm';

   // And remove this from the JSX:
   // <FeedbackForm />
   ```

2. **Optional: Tighten Firestore rules**
   In `firestore.rules`, change:
   ```
   match /feedback/{feedbackId} {
     allow create: if true;  // Change to: if false;
   }
   ```

3. **Rebuild and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Security Note

The current Firestore rules allow ANYONE to write to the feedback collection (but not read/update/delete). This is intentional for the testing phase but should be removed or tightened after you're done collecting feedback.

## Troubleshooting

**Feedback not appearing in Firestore?**
- Check browser console for errors
- Verify Firebase Firestore is enabled in Firebase Console
- Ensure firestore rules are deployed: `firebase deploy --only firestore:rules`

**Want to test it yourself?**
- Visit your site
- Click the floating "Give Feedback" button
- Submit a test response
- Check Firebase Console → Firestore → `feedback` collection
