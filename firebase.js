import * as firebase from 'firebase';
import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WJ_0Ygv5PqFCAR8z3rm1cUeEtGg8lkg",
  authDomain: "labdpm-59a59.firebaseapp.com",
  projectId: "labdpm-59a59",
  storageBucket: "labdpm-59a59.appspot.com",
  messagingSenderId: "926596405445",
  appId: "1:926596405445:web:48f5eb0ffdfb2b11bb78ac",
  measurementId: "G-CTE4PBJFHS"
};

  let app;
  if(firebase.apps.length === 0)
  {
    app = firebase.initializeApp(firebaseConfig);
  }
  else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export  { db, auth };