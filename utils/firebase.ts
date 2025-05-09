import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCosLu3Eok8f5Z3oMKoh3M6aQb93JAyoIU",
  authDomain: "codemon-fffca.firebaseapp.com",
  databaseURL: "https://codemon-fffca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "codemon-fffca",
  storageBucket: "codemon-fffca.firebasestorage.app",
  messagingSenderId: "576584644568",
  appId: "1:576584644568:web:b070fa29b7347b09c2e4ad",
  measurementId: "G-K7DYR92SY6"
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;