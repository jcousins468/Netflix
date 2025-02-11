import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCzCW0onfs504HYrzFD3T1NjzDYut9qipY",
  authDomain: "netflix-b1aad.firebaseapp.com",
  projectId: "netflix-b1aad",
  storageBucket: "netflix-b1aad.appspot.com",
  messagingSenderId: "592950664201",
  appId: "1:592950664201:web:dbfc69bec9242b063b2cd8",
  measurementId: "G-QDLG9SLD1P",
};

const firebaseApp = initializeApp(config);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// 2) when seeding the database you'll have to uncomment this!
//seedDatabase();
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebaseApp, firestore, auth };
