// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "waste-classifier-b0284.firebaseapp.com",
  projectId: "waste-classifier-b0284",
  storageBucket: "waste-classifier-b0284.appspot.com",
  messagingSenderId: "485479240960",
  appId: "1:485479240960:web:2d2e6525934b2bb4aa4fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
