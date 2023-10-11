// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9_dwjCTSS37KZMgxjhKUDLDnTCw0p3JI",
  authDomain: "rudsek-1fde1.firebaseapp.com",
  projectId: "rudsek-1fde1",
  storageBucket: "rudsek-1fde1.appspot.com",
  messagingSenderId: "956470774335",
  appId: "1:956470774335:web:ec5c66533054aacfeec68a",
  measurementId: "G-5NSFVKGCB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)

export {app, auth, db}