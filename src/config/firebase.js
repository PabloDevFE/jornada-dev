import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAPWB5KtIuR__KNSuB7mdA62GVBkTm5ETc",
  authDomain: "tiktok---ebac-5ad7a.firebaseapp.com",
  projectId: "tiktok---ebac-5ad7a",
  storageBucket: "tiktok---ebac-5ad7a.appspot.com",
  messagingSenderId: "602091962523",
  appId: "1:602091962523:web:05bcfb124ab54fd661463e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;