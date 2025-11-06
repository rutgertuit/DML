import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// Get this from Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
  apiKey: "AIzaSyBywEF2vRQxBg9K3v8Sh5n9_Zp3JZqN8kM",
  authDomain: "rutger-dml.firebaseapp.com",
  projectId: "rutger-dml",
  storageBucket: "rutger-dml.firebasestorage.app",
  messagingSenderId: "267738677556",
  appId: "1:267738677556:web:8e5e0d5c9f4c7a1e9f8b7c",
  measurementId: "G-XXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
