// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMkWPfOj-O5gyvUfKA8rwkJH9DYn924zs",
  authDomain: "e-commerce-d43f8.firebaseapp.com",
  projectId: "e-commerce-d43f8",
  storageBucket: "e-commerce-d43f8.appspot.com",
  messagingSenderId: "510076921344",
  appId: "1:510076921344:web:37e8c5e995b2f3fcad5ae5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
