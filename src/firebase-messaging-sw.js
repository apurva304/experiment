importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBH5c_IF3LswnqGy5m-pyu4MYQrTb5IuhM",
    authDomain: "krushant-11d8b.firebaseapp.com",
    databaseURL: "https://krushant-11d8b.firebaseio.com",
    projectId: "krushant-11d8b",
    storageBucket: "krushant-11d8b.appspot.com",
    messagingSenderId: "789089889986"
  };
  firebase.initializeApp(config);
  
var messaging = firebase.messaging();
