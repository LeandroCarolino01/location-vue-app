import firebase from 'firebase';
import firestore from 'firebase/firestore'
import { FirebaseApp } from '@firebase/app-types';
var config = {
    apiKey: "AIzaSyAbaVHQfPIoy_cMDFiF5qxvIIon_nZ8SuA",
    authDomain: "geo-people.firebaseapp.com",
    databaseURL: "https://geo-people.firebaseio.com",
    projectId: "geo-people",
    storageBucket: "geo-people.appspot.com",
    messagingSenderId: "213435438508"
  };
  const firebase = firebase.initializeApp(config);

  export default FirebaseApp.firestore();
  