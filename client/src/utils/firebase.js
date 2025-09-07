// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "planwise-8d13b.firebaseapp.com",
  projectId: "planwise-8d13b",
  storageBucket: "planwise-8d13b.firebasestorage.app",
  messagingSenderId: "905381303799",
  appId: "1:905381303799:web:69aee3e7c46c5bd71e8af2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);