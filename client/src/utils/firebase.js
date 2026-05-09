
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ff5cc.firebaseapp.com",
  projectId: "interviewiq-ff5cc",
  storageBucket: "interviewiq-ff5cc.firebasestorage.app",
  messagingSenderId: "877878497771",
  appId: "1:877878497771:web:98c59126d783cc48b3c9ae"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}