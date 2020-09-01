import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAp71Xm_tfkxwoQb8lDPcjrfmPUhWIuo-4",
    authDomain: "boligrating.firebaseapp.com",
    databaseURL: "https://boligrating.firebaseio.com",
    projectId: "boligrating",
    storageBucket: "boligrating.appspot.com",
    messagingSenderId: "363793861482",
    appId: "1:363793861482:web:dc155c2359219c12a1f313",
    measurementId: "G-8YX3B1EZJR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth;