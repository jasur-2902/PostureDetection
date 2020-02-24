import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "../serviceWorker";
import Push from "push.js";
import * as firebase from "firebase/app";
import "firebase/auth";

let pushPermission = Push.Permission.has();

window.addEventListener("pushNotification", function() {
    console.log("Push notification");
    if (pushPermission) {
        Push.create("You're Slouching", {
            body: "Sit up!",
            icon: "favicon.ico",
            // timeout: 3000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
    }
})

if (!Push.Permission.has()) {
    Push.Permission.request(onGranted);
}

function onGranted() {
    pushPermission = true;
}

var firebaseConfig = {
    apiKey: "AIzaSyDDmX-zZiw8xgBtMNXWU5H_J3jyf-E3J4M",
    authDomain: "postureml-73e03.firebaseapp.com",
    databaseURL: "https://postureml-73e03.firebaseio.com",
    projectId: "postureml-73e03",
    storageBucket: "postureml-73e03.appspot.com",
    messagingSenderId: "186563217316",
    appId: "1:186563217316:web:d228f4ae1a9f7ec2bc6331"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();