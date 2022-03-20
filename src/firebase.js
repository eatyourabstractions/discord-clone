// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAJpOhXNeVTqiNza0Qdwsdc0GNaLkuMXNk",
    authDomain: "discord-clone-2add8.firebaseapp.com",
    projectId: "discord-clone-2add8",
    storageBucket: "discord-clone-2add8.appspot.com",
    messagingSenderId: "989108509256",
    appId: "1:989108509256:web:e99671669998e48d1d167d"
  };


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };