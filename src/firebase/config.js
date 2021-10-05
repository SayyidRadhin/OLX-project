import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrD9EQEUT3y01ZlXW5bqqoS4NaSUB4Wxk",
    authDomain: "olx-clone-39a6f.firebaseapp.com",
    projectId: "olx-clone-39a6f",
    storageBucket: "olx-clone-39a6f.appspot.com",
    messagingSenderId: "373988462588",
    appId: "1:373988462588:web:8650e283fad126f6c36c79",
    measurementId: "G-7FER8JEHNT"
  };


 export default firebase.initializeApp(firebaseConfig)