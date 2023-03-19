// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7JEgYEEJeGrfCdxDg_RwGlH-QbjY9794",
  authDomain: "todo-app-e2f08.firebaseapp.com",
  projectId: "todo-app-e2f08",
  storageBucket: "todo-app-e2f08.appspot.com",
  messagingSenderId: "674999561044",
  appId: "1:674999561044:web:66d3c58ee384dc4748f6c1",
  measurementId: "G-G2D50GGXCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);