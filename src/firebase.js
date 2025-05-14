// Firebase configuration for school website
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your Firebase configuration
// Check if we have environment variables or use development config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDevelopmentKeyForLocalTesting",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "school-website-dev.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "school-website-dev",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "school-website-dev.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:000000000000:web:0000000000000000000000",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-MEASUREMENT_ID"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Initialize Analytics only in browser environment (not SSR)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

/**
 * Track custom event in Google Analytics
 * @param {string} eventName - The name of the event to log
 * @param {Object} eventParams - Additional parameters to log with the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (analytics && eventName) {
    logEvent(analytics, eventName, eventParams);
  }
};

// Export the initialized services
export { db, auth, storage, analytics };
export default app;
