// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertease-e7b51.firebaseapp.com",
  projectId: "propertease-e7b51",
  storageBucket: "propertease-e7b51.appspot.com",
  messagingSenderId: "995125233031",
  appId: "1:995125233031:web:98366a34b2b77b2814ff22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);