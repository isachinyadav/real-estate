// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-8379c.firebaseapp.com",
  projectId: "estate-8379c",
  storageBucket: "estate-8379c.appspot.com",
  messagingSenderId: "737621499540",
  appId: "1:737621499540:web:256a50b8e30154228b5e81"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);