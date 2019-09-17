import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './components/retoLogin';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyC9_M4-GSZAYDMKBA4pNt_GI7q7lDhJD4E",
    authDomain: "retologin.firebaseapp.com",
    databaseURL: "https://retologin.firebaseio.com",
    projectId: "retologin",
    storageBucket: "",
    messagingSenderId: "45488604558",
    appId: "1:45488604558:web:8a3abacc59d3be334290df"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
