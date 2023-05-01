import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDdyq58NOD1zjPyaYVLICQY5rKv_ZLJcYc",
    authDomain: "instagram-clone-react-8ea19.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-8ea19.firebaseio.com",
    projectId: "instagram-clone-react-8ea19",
    storageBucket: "instagram-clone-react-8ea19.appspot.com",
    messagingSenderId: "345360711091",
    appId: "1:345360711091:web:4dfe60b60f4b8ac9fb9fc6",
    measurementId: "G-4R448VR7GK"
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
