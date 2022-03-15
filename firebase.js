// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBagDIsWUSWi8qJj7qUYe0MkxY-Tsruf54",
    authDomain: "tesla-native-project.firebaseapp.com",
    projectId: "tesla-native-project",
    storageBucket: "tesla-native-project.appspot.com",
    messagingSenderId: "683080154065",
    appId: "1:683080154065:web:e2d30e8a4c70021dc43ef0"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }; 