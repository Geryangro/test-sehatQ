import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdXZSdM6c7xsl2LXOnsxxw0HAjTGQgSR0",
    authDomain: "test-sehatq-183c8.firebaseapp.com",
    projectId: "test-sehatq-183c8",
    storageBucket: "test-sehatq-183c8.appspot.com",
    messagingSenderId: "198165074023",
    appId: "1:198165074023:web:01e3b89486427efef144c2",
    measurementId: "G-H4EWDKMCK3"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();