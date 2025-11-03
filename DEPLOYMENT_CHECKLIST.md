# 📋 Deployment Checklist

Use this checklist to deploy your secured AI-ftershow application.

## ✅ Pre-Deployment Checklist

### Firebase Setup
- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] Logged into Firebase (`firebase login`)
- [ ] Firebase project created in console
- [ ] Blaze (pay-as-you-go) plan enabled
- [ ] Project ID noted down

### Configuration
- [ ] `.firebaserc` updated with your project ID
- [ ] `src/services/aiStudioService.ts` line 9 updated with project ID
- [ ] `functions/src/index.ts` CORS origins verified
- [ ] Gemini API key obtained from https://aistudio.google.com/apikey

### Security
- [ ] API key set in Firebase Secrets (`firebase functions:secrets:set GEMINI_API_KEY`)
- [ ] `.env` file in `.gitignore`
- [ ] No secrets in git history
- [ ] Build verified to have no API key (`npm run build && grep -r "VITE_GEMINI" dist/`)

## 🚀 Deployment Steps

### Step 1: Install Dependencies
```bash
# Root project dependencies
npm install

# Function dependencies
cd functions
npm install
cd ..
```

### Step 2: Build Functions
```bash
cd functions
npm run build
cd ..
```

### Step 3: Build Frontend
```bash
npm run build
```

### Step 4: Test Locally (Optional but Recommended)
```bash
firebase emulators:start
```
- [ ] Open http://localhost:5000
- [ ] Test Prompt Improver feature
- [ ] Check browser console for errors
- [ ] Verify network tab shows calls to `/api/gemini`

### Step 5: Deploy to Firebase
```bash
firebase deploy
```

Expected output:
```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/YOUR_PROJECT_ID/overview
Hosting URL: https://YOUR_PROJECT_ID.web.app
```

### Step 6: Verify Deployment
- [ ] Open your Hosting URL
- [ ] Test Prompt Improver tool
- [ ] Check browser DevTools → Network tab
- [ ] Verify no API key visible anywhere
- [ ] Test in incognito mode

### Step 7: Monitor Initial Traffic
```bash
firebase functions:log
```
- [ ] Watch for any errors
- [ ] Verify requests being processed
- [ ] Check Firebase Console → Functions for metrics

## 📊 Post-Deployment Verification

### Security Verification
```bash
# Verify API key not in bundle
grep -r "VITE_GEMINI_API_KEY" dist/
# Should return nothing

# Verify no direct Gemini API calls
grep -r "generativelanguage.googleapis.com" dist/
# Should return nothing

# Verify no x-goog-api-key header
grep -r "x-goog-api-key" dist/
# Should return nothing
```

### Functional Testing
- [ ] Prompt Improver returns responses
- [ ] HeroGem Wizard works
- [ ] No CORS errors in console
- [ ] Mobile responsiveness works
- [ ] All navigation links work

### Performance Testing
- [ ] Page loads in < 3 seconds
- [ ] API responses in < 5 seconds
- [ ] No console errors
- [ ] Lighthouse score > 90

## 🔄 Regular Maintenance

### Weekly
- [ ] Check Firebase Console for usage
- [ ] Review function logs for errors

### Monthly
- [ ] Run `npm audit`
- [ ] Update dependencies
- [ ] Review API usage and costs

### Quarterly
- [ ] Rotate Gemini API key
- [ ] Review security settings
- [ ] Update documentation

## 🐛 Troubleshooting

### "Function not found" error
```bash
firebase deploy --only functions
```

### "Secret not found" error
```bash
firebase functions:secrets:set GEMINI_API_KEY
```

### "CORS error" in browser
1. Check `functions/src/index.ts` origin configuration
2. Verify your domain is listed
3. Redeploy: `firebase deploy --only functions`

### "Build failed" error
```bash
cd functions
npm run build
# Check for TypeScript errors
```

### "Out of quota" error
1. Check Firebase Console → Functions → Usage
2. Review pricing at https://firebase.google.com/pricing
3. Consider implementing rate limiting

## 📞 Support

Need help?
- Read [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions
- Check [SECURITY.md](./SECURITY.md) for security information
- Open GitHub issue for bugs
- Contact Firebase Support for billing/quota issues

---

## 🎉 Success Criteria

Your deployment is successful when:
- ✅ Site loads at Firebase Hosting URL
- ✅ Prompt Improver generates responses
- ✅ No API key visible in browser DevTools
- ✅ No console errors
- ✅ Function logs show successful API calls
- ✅ No security warnings in browser
- ✅ Mobile version works perfectly

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Project URL**: _______________
**Function URL**: _______________

**Notes**:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
