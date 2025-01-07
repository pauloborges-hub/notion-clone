// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAiSboh6z0hHbzZXOSBJe6wbssDpVG-3Ak",
   authDomain: "notion-clone-pauloborges.firebaseapp.com",
   projectId: "notion-clone-pauloborges",
   storageBucket: "notion-clone-pauloborges.firebasestorage.app",
   messagingSenderId: "172547643516",
   appId: "1:172547643516:web:7ce7bc2fa7cb44befad1f9"
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }