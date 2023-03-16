// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLU3cFHZpR1kLHkLM2qAqJ3GrG0Gb1WY",
  authDomain: "mediplus-3fd6c.firebaseapp.com",
  projectId: "mediplus-3fd6c",
  storageBucket: "mediplus-3fd6c.appspot.com",
  messagingSenderId: "386210894746",
  appId: "1:386210894746:web:c064328935faeca6c66023",
  measurementId: "G-2R8K64XDK4"
};


const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore(app)
// const analytics = getAnalytics(app);
const storage = getStorage(app)

export { app, db, storage }