import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDYv8hk0nJSvosazzbC4QK3Jhhniu0hqOI",
    authDomain: "mikael-salas.firebaseapp.com",
    databaseURL: "https://mikael-salas-default-rtdb.firebaseio.com",
    projectId: "mikael-salas",
    storageBucket: "mikael-salas.appspot.com",
    messagingSenderId: "640623061914",
    appId: "1:640623061914:web:1c8dc2c926736317656823",
    measurementId: "G-RC2CHQYCM6"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
