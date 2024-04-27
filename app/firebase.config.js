// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUFPWJZQGpPnyhJEHDnpo0lehIC2eTdLQ",
  authDomain: "user-pass-df104.firebaseapp.com",
  projectId: "user-pass-df104",
  storageBucket: "user-pass-df104.appspot.com",
  messagingSenderId: "217787511168",
  appId: "1:217787511168:web:b63dbf8d9aa12555679165",
  measurementId: "G-YJ44JNYP1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);