// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlz0RvqwyXFn_xn4L2zXcirto1lpug0y8",
  authDomain: "react-zeroth-project.firebaseapp.com",
  projectId: "react-zeroth-project",
  storageBucket: "react-zeroth-project.appspot.com",
  messagingSenderId: "251778498243",
  appId: "1:251778498243:web:7c29d35ebd30809e716c76",
  measurementId: "G-W43X16CVQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
