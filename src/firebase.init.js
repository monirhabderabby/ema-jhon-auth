import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxwpIqidXhCtdJ6UDOTv4QMInOO8zmMPo",
  authDomain: "ema-jhon-authentication-4b0ec.firebaseapp.com",
  projectId: "ema-jhon-authentication-4b0ec",
  storageBucket: "ema-jhon-authentication-4b0ec.appspot.com",
  messagingSenderId: "378180467474",
  appId: "1:378180467474:web:9a3f3f5ca5d1049c5391cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;