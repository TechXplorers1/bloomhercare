import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQBnzNvJduIwkDXprC81q-Uaj_VbcXTkE",
  authDomain: "bloomhercare-da350.firebaseapp.com",
  projectId: "bloomhercare-da350",
  storageBucket: "bloomhercare-da350.firebasestorage.app",
  messagingSenderId: "750052390289",
  appId: "1:750052390289:web:795417ea65fded038f9630",
  measurementId: "G-CGPYW4FYHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally to avoid errors during server-side builds/environments
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
}).catch((err) => {
  console.warn("Firebase Analytics is not supported in this environment:", err);
});

export { app, analytics };
