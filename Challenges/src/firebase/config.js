// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2KnLjKaa6AbOUWYQleZXoSrQxcevHt3s",
  authDomain: "homeworksdemw.firebaseapp.com",
  projectId: "homeworksdemw",
  storageBucket: "homeworksdemw.appspot.com",
  messagingSenderId: "152624956493",
  appId: "1:152624956493:web:d06756b18db03350560804",
  measurementId: "G-PSQCM9HRJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

const googleProvider = new GoogleAuthProvider()

export {app, auth, googleProvider}