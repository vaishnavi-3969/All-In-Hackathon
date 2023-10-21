import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "equihire-6badf.firebaseapp.com",
  projectId: "equihire-6badf",
  storageBucket: "equihire-6badf.appspot.com",
  messagingSenderId: "176323637851",
  appId: "1:176323637851:web:4eda45386aed46abcd057e",
  measurementId: "G-DZ66Q2VZMT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};