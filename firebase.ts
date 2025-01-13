// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCSHaIrB6YhR6o6yTpYVWXfF04_XxZ1rNc",
   authDomain: "notion-clone-paulo.firebaseapp.com",
   projectId: "notion-clone-paulo",
   storageBucket: "notion-clone-paulo.firebasestorage.app",
   messagingSenderId: "898117190678",
   appId: "1:898117190678:web:3980c7d8954946a5c66137"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// What the code does:
// It checks if there are any Firebase app instances already initialized by checking the length of getApps().
// If no app is initialized (getApps().length === 0), it initializes a new Firebase app using the firebaseConfig.
// Otherwise, it retrieves the existing Firebase app instance.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };