
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVawomf8cHZfzUnW9mm-QKxAVWXR5sQ60",
  authDomain: "kisaan24-renxl7.firebaseapp.com",
  projectId: "kisaan24-renxl7",
  storageBucket: "kisaan24-renxl7.appspot.com",
  messagingSenderId: "681539890264",
  appId: "1:681539890264:web:a12dcf9ae19ddd06e72e2d",
  measurementId: "G-6GPH903KEW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};