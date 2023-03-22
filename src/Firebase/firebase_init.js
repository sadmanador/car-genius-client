// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQT-G6eWe74I1qne9fysV4O-5IWWph4gg",
  authDomain: "car-genius-client.firebaseapp.com",
  projectId: "car-genius-client",
  storageBucket: "car-genius-client.appspot.com",
  messagingSenderId: "6163413493",
  appId: "1:6163413493:web:985a15316d9de5036e48bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);