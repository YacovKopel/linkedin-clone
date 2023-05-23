// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut } from 'firebase/auth';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "linkedin-clone-a049a.firebaseapp.com",
  projectId: "linkedin-clone-a049a",
  storageBucket: "linkedin-clone-a049a.appspot.com",
  messagingSenderId: "699192358963",
  appId: "1:699192358963:web:24c9c6cef1e2f301280b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth =getAuth(app);

export {db, auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
  }
