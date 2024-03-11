// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChE1duQIJfyJsfrExTRRtyPnKevgfAfec",
  authDomain: "e-commerce-85ff1.firebaseapp.com",
  projectId: "e-commerce-85ff1",
  storageBucket: "e-commerce-85ff1.appspot.com",
  messagingSenderId: "791497681357",
  appId: "1:791497681357:web:e483c2b4135b5e30687c84",
  measurementId: "G-LN1C8DPSFC"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth(app)