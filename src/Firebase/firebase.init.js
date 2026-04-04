// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAog6kF7d6D5z2sM0zWAYLqaKXaAa3HVHE",
  authDomain: "email-password-authentic-8c932.firebaseapp.com",
  projectId: "email-password-authentic-8c932",
  storageBucket: "email-password-authentic-8c932.firebasestorage.app",
  messagingSenderId: "173040987588",
  appId: "1:173040987588:web:6c258611eba8583a704891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);