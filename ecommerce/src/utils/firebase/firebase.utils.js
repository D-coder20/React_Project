// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; //doc-retrieve document from firebase database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgDfrmdGDh6IEPoseqazKEk1kRXRaGVJQ",
  authDomain: "ecommerce-db-c0d8d.firebaseapp.com",
  projectId: "ecommerce-db-c0d8d",
  storageBucket: "ecommerce-db-c0d8d.appspot.com",
  messagingSenderId: "124089658997",
  appId: "1:124089658997:web:e357b8c87935c95ce1d23c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(); //which internally give you back the provider. googleauthprovider is a class

googleProvider.setCustomParameters({
  prompt: "select_account",
}); //setcustomparameters take some kind of configuration object and with it we can tell
// different ways that we want this googleauthprovider to behave
//everytime somebody interacts with our provider we wanna always force them to select the account

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//create the db
export const db = getFirestore();

//we want some fn that will take that data getting from the authentication service and the we gonna store that inside of the firestor

export const createUserDocumentFromAuth = async (
  userAuth,
  additioanlInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additioanlInformation,
      });
    } catch (error) {
      console.log("Error creating the user ", error.message);
    }
  }
  return userDocRef;
  //if user data does not exist
  //if user data exist
  //return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
