// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "blog-ad985.firebaseapp.com",
  projectId: "blog-ad985",
  storageBucket: "blog-ad985.appspot.com",
  messagingSenderId: "44050953342",
  appId: "1:44050953342:web:b77befa0af367c89fb142f",
  measurementId: "G-DCV088RT9E"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth(app)