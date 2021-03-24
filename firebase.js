import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDIulm2PxzFwHe7kbwrGkCWERzLjOTbQAI",
  authDomain: "learning-community-7f468.firebaseapp.com",
  projectId: "learning-community-7f468",
  storageBucket: "learning-community-7f468.appspot.com",
  messagingSenderId: "601563499498",
  appId: "1:601563499498:web:f91b20bb4ab99ebbedc093",
  measurementId: "G-PRWZ1QNDDV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
//firebase.initializeApp(config);

export default firebase;
