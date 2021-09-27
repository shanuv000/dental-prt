import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlvO5oSD-MjJxUVmaxk4KZ98JmUa-IiFM",
  authDomain: "dental-14d0d.firebaseapp.com",
  projectId: "dental-14d0d",
  storageBucket: "dental-14d0d.appspot.com",
  messagingSenderId: "586030308017",
  appId: "1:586030308017:web:513a18259fbcdd095fe090",
  measurementId: "G-XDK6JE7J1B",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
