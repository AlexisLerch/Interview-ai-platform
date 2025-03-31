// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6_Mdpdbo6vqtxmllxKyLjXF04b_KoJTQ",
  authDomain: "prepw-6e1e4.firebaseapp.com",
  projectId: "prepw-6e1e4",
  storageBucket: "prepw-6e1e4.firebasestorage.app",
  messagingSenderId: "224104000729",
  appId: "1:224104000729:web:e8cb6ed02fda1f472422c8",
  measurementId: "G-GGR3ENS1DR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);