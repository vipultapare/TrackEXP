// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import { getFirestore , doc , setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkVWxyzpEqphAd5Nqbf7SenSMVrJJ5Zrs",
  authDomain: "exptrack-97d0f.firebaseapp.com",
  projectId: "exptrack-97d0f",
  storageBucket: "exptrack-97d0f.appspot.com",
  messagingSenderId: "688045555690",
  appId: "1:688045555690:web:cc24c2bc9c63ae805efc93",
  measurementId: "G-6Z2QY8HR6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {db , auth , provider , doc , setDoc};