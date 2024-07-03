// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDomqRt1_6r6BAbC2tWBZaf3LeJA0XbMtA",
  authDomain: "helphub-e252e.firebaseapp.com",
  projectId: "helphub-e252e",
  storageBucket: "helphub-e252e.appspot.com",
  messagingSenderId: "299831924818",
  appId: "1:299831924818:web:524f66766c0e1b281b678b",
  measurementId: "G-97DNBFZNRY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();