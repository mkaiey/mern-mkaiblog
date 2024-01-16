import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "mern-mkaiblog.firebaseapp.com",
  projectId: "mern-mkaiblog",
  storageBucket: "mern-mkaiblog.appspot.com",
  messagingSenderId: "373179635242",
  appId: "1:373179635242:web:614d1655a02e094668d553",
};

const app = initializeApp(firebaseConfig);
