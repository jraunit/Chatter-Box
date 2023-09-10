import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY13knC8PFhMDYKUfxBhmKylMTOwJa6vA",
  authDomain: "chatter-box-52ed1.firebaseapp.com",
  projectId: "chatter-box-52ed1",
  storageBucket: "chatter-box-52ed1.appspot.com",
  messagingSenderId: "1035594077810",
  appId: "1:1035594077810:web:c979d9ca935d027b9c94eb",
  measurementId: "G-P7QVEV587Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
