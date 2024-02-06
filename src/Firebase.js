import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase, ref, onValue, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyChg6GmlyG3m5sLiEkpkxTB4oHX9A5epqg",
  authDomain: "weather-app-3956f.firebaseapp.com",
  projectId: "weather-app-3956f",
  storageBucket: "weather-app-3956f.appspot.com",
  messagingSenderId: "701278983791",
  appId: "1:701278983791:web:4e355248bf893a1b401f9a",
  measurementId: "G-B7QYWBKQJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database };
