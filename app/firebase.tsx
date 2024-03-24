// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIN5ridep7sgocPR-hn1P0iDdpmY2iYcI",
  authDomain: "woodworks-fcc60.firebaseapp.com",
  projectId: "woodworks-fcc60",
  storageBucket: "woodworks-fcc60.appspot.com",
  messagingSenderId: "953292624678",
  appId: "1:953292624678:web:36a4f8caeee8d1d25427e7",
  measurementId: "G-2TP1BNNGT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
