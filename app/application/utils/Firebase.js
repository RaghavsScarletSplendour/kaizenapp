
//////////////////// FIREBASE

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5FBvzDjoZb8i2sA3C0-lDG6Jzs3wW5YE",
    authDomain: "https://project-momenta.firebaseapp.com/",
    databaseURL: "https://project-momenta.firebaseio.com/",
    projectId: "project-momenta",
    storageBucket: "https://project-momenta.appspot.com",
  };

firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
    firebase.initializeApp({});
}
export default firebase;
