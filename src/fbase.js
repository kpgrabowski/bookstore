import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-qmBZWeuknfmmVFLpHjJRuW9HwThNnMs",
    authDomain: "clockworks-bookstore.firebaseapp.com",
    databaseURL: "https://clockworks-bookstore.firebaseio.com",
    projectId: "clockworks-bookstore",
    storageBucket: "clockworks-bookstore.appspot.com",
    messagingSenderId: "802052735652"
});

const fbase = Rebase.createClass(firebaseApp.database());


export {fbase, firebaseApp};
