// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurc-3ydHnFb6yahE68-SprmQhS18-fNU",
  authDomain: "plant-rio.firebaseapp.com",
  projectId: "plant-rio",
  storageBucket: "plant-rio.firebasestorage.app",
  messagingSenderId: "1047184409477",
  appId: "1:1047184409477:web:2cef5389d8684dfd357aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app