import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGsmO30slVqe2gk8iQp1l7-VXUn4Yk5Rc",
    authDomain: "universityblog-b5254.firebaseapp.com",
    projectId: "universityblog-b5254",
    storageBucket: "universityblog-b5254.appspot.com",
    messagingSenderId: "947202108730",
    appId: "1:947202108730:web:c062d8e544934e12e7f403"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}