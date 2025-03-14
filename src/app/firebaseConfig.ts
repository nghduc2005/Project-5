import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAX85ov0e6-zApLc2EUVXLQjGVUQfJs00",
  authDomain: "project-5-1d31c.firebaseapp.com",
  databaseURL: "https://project-5-1d31c-default-rtdb.firebaseio.com",
  projectId: "project-5-1d31c",
  storageBucket: "project-5-1d31c.firebasestorage.app",
  messagingSenderId: "825745653628",
  appId: "1:825745653628:web:69ac2daefa83e05d936ef9"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app)
export const authFirebase = getAuth(app)
