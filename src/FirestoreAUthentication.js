

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import myFirebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX-0EBlmlWfv0OtnM5R7cjfTDv_A1Syg8",
  authDomain: "mytripapp-39102.firebaseapp.com",
  projectId: "mytripapp-39102",
  storageBucket: "mytripapp-39102.appspot.com",
  messagingSenderId: "931907897678",
  appId: "1:931907897678:web:ed93e3678e3de21acc361f",
  measurementId: "G-XP7BVB0FP2"
};

// Initialize Firebase
const app = myFirebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const myAuth = getAuth(app)//Authentication in Firebase

export const myProvider = new GoogleAuthProvider()//Google Authentication in Firebase

