# 🚀 Quick Start Guide - rutger-dml

Your Firebase project is configured and ready to deploy!

## Your Project Details

```
Project Name: rutger-dml
Project ID: rutger-dml
Project Number: 950282080603
```

## ⚡ 5-Minute Deploy

### Step 1: Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Set Your API Key
```bash
firebase functions:secrets:set GEMINI_API_KEY
```
Paste your Gemini API key when prompted.
Get it from: https://aistudio.google.com/apikey

### Step 4: Install Function Dependencies
```bash
cd functions
npm install
cd ..
```

### Step 5: Deploy Everything
```bash
firebase deploy
```

That's it! Your site will be live at:
**https://rutger-dml.web.app**

---

## 🧪 Test Locally First (Optional)

```bash
# Terminal 1: Start Firebase Emulators
firebase emulators:start

# Terminal 2: Start Vite Dev Server
npm run dev
```

Open: http://localhost:5173

---

## ✅ Verify Deployment

After deploying, test these:

1. **Visit your site**: https://rutger-dml.web.app
2. **Test Prompt Improver**:
   - Enter a prompt
   - Click "Improve"
   - Should get a response from Gemini

3. **Check Security** (Open DevTools → Network tab):
   - ✅ Requests go to `/api/gemini`
   - ✅ No API key visible anywhere
   - ✅ No direct calls to `generativelanguage.googleapis.com`

4. **Check Logs**:
   ```bash
   firebase functions:log
   ```

---

## 📊 Your Configuration Summary

### Frontend API Calls
- **Development**: `http://localhost:5001/rutger-dml/us-central1/geminiProxy`
- **Production**: `/api/gemini` (proxied by Firebase Hosting)

### Firebase Resources
- **Hosting URL**: https://rutger-dml.web.app
- **Console**: https://console.firebase.google.com/project/rutger-dml
- **Function Logs**: `firebase functions:log`

### CORS Configuration
Allowed origins:
- `https://rutgertuit.github.io` (if keeping GitHub Pages)
- `http://localhost:5173` (local development)

---

## 🔧 Common Commands

```bash
# Deploy everything
firebase deploy

# Deploy only functions
firebase deploy --only functions

# Deploy only hosting
firebase deploy --only hosting

# View logs
firebase functions:log

# Test locally
firebase emulators:start

# Build frontend
npm run build
```

---

## 📁 What's Already Configured

✅ `.firebaserc` - Project ID: `rutger-dml`
✅ `firebase.json` - Hosting + Functions config
✅ `functions/src/index.ts` - Cloud Function with CORS
✅ `src/services/aiStudioService.ts` - API URL configured
✅ `.gitignore` - Firebase files excluded
✅ Security headers enabled

---

## 🎯 Next Steps After Deployment

### 1. Custom Domain (Optional)
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow DNS configuration steps

### 2. Monitor Usage
- Firebase Console → Functions → geminiProxy
- View invocations, errors, execution time
- Set up budget alerts in Google Cloud Console

### 3. Set Up Monitoring (Optional)
```bash
# Enable Firebase Performance Monitoring
firebase init performance
```

---

## 🔒 Security Checklist

✅ API key stored in Firebase Secrets
✅ No API key in git repository
✅ No API key in build output
✅ CORS configured for your domains only
✅ Security headers enabled
✅ Request validation in Cloud Function
✅ Error handling doesn't leak secrets

---

## 💰 Estimated Costs

**Your Usage** (~100 users/day, 5 prompts each):
- Daily invocations: ~500
- Monthly invocations: ~15,000

**Firebase Free Tier**:
- 2,000,000 invocations/month
- 400,000 GB-seconds/month
- 200,000 CPU-seconds/month

**Your Cost**: **$0/month** ✅

---

## 🐛 Troubleshooting

### "Permission denied" error
```bash
firebase login --reauth
```

### "Secret not found"
```bash
firebase functions:secrets:set GEMINI_API_KEY
```

### "Function not responding"
Check logs:
```bash
firebase functions:log --limit 50
```

### "CORS error"
1. Check `functions/src/index.ts` origins array
2. Redeploy: `firebase deploy --only functions`

---

## 📞 Support Resources

- **Firebase Docs**: https://firebase.google.com/docs
- **Your Console**: https://console.firebase.google.com/project/rutger-dml
- **Gemini API**: https://ai.google.dev/docs
- **Project Issues**: https://github.com/rutgertuit/DML/issues

---

## 🎉 You're Ready!

Everything is configured. Just run:

```bash
firebase functions:secrets:set GEMINI_API_KEY
cd functions && npm install && cd ..
firebase deploy
```

Your secure, production-ready site will be live at:
**https://rutger-dml.web.app**

---

**Last Updated**: 2025-01-03
**Project**: rutger-dml
**Status**: ✅ Ready to Deploy
