// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ff80e.firebaseapp.com",
  projectId: "real-estate-ff80e",
  storageBucket: "real-estate-ff80e.appspot.com",
  messagingSenderId: "429675337745",
  appId: "1:429675337745:web:4415dcd81c67cbc422b9b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);