import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBF3JT33PA4fNJRHN7BvUs3yb0j2ynXZto",
  authDomain: "zego-2d7a3.firebaseapp.com",
  projectId: "zego-2d7a3",
  storageBucket: "zego-2d7a3.appspot.com",
  messagingSenderId: "918705981511",
  appId: "1:918705981511:web:a7d621d5271be55daec962"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
