import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase.initializeApp({
    apiKey: "AIzaSyAAfG0hlOxivCJBj4tiatp1Xy63gjqK-fM",
    authDomain: "owl-twitter-clone.firebaseapp.com",
    projectId: "owl-twitter-clone",
    storageBucket: "owl-twitter-clone.appspot.com",
    messagingSenderId: "985202561460",
    appId: "1:985202561460:web:3e6a35e52bc09de7e3a2e1",
    measurementId: "G-SK8DGEC8J9"
  });

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage, projectFirestore};