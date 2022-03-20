// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9k2PTIblb_was2A6UFsjcoQ6ahU2lG2s",
  authDomain: "rep-powerlifting.firebaseapp.com",
  projectId: "rep-powerlifting",
  storageBucket: "rep-powerlifting.appspot.com",
  messagingSenderId: "862904037729",
  appId: "1:862904037729:web:5d264909b389f69e9a5520",
  measurementId: "G-JGFJXLLB6T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const analytics = getAnalytics(app);
export const db = getDatabase(app)