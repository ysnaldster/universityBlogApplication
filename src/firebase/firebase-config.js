import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLwIVbSOXUXQgUMFBGqR1H6J3NHxKUajI",
    authDomain: "universityblog-59c43.firebaseapp.com",
    projectId: "universityblog-59c43",
    storageBucket: "universityblog-59c43.appspot.com",
    messagingSenderId: "199097158690",
    appId: "1:199097158690:web:692fc55c4f2a2834634e7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}