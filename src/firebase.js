import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0DKVivm9FhzX1sCuBZvDMWWGy6rKj5Zw",
  authDomain: "share-d7a03.firebaseapp.com",
  projectId: "share-d7a03",
  storageBucket: "share-d7a03.appspot.com",
  messagingSenderId: "714824751495",
  appId: "1:714824751495:web:091eb84bfcbf570cf11b22",
  measurementId: "G-BJX55CHVYJ",
});

export const auth = app.auth();
export default app;
