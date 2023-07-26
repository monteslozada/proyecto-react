// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPWP7wwNjSTJuAdry1e28zgYl_xMnJ_bg",
  authDomain: "proyecto-final-e2ef3.firebaseapp.com",
  projectId: "proyecto-final-e2ef3",
  storageBucket: "proyecto-final-e2ef3.appspot.com",
  messagingSenderId: "96560985567",
  appId: "1:96560985567:web:b83308e42456366578006a",
  measurementId: "G-6EME0PK187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);