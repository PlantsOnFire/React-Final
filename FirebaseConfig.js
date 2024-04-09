// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// import { getDatabase }  from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW5mOZ77xLPcIOAJUEYrGGuAMjl6sbCXM",
  authDomain: "geoadventurekids.firebaseapp.com",
  projectId: "geoadventurekids",
  storageBucket: "geoadventurekids.appspot.com",
  messagingSenderId: "1040380280679",
  appId: "1:1040380280679:web:dd358ee9a0f491e06f39c2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
export const auth = getAuth(app);
export const db = getFirestore(app);