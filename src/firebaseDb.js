/* eslint-disable */
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBoNO8t3DYHNeW0FsWRIqC_HtYkFHLcFOM',
  authDomain: 'subscriptions-app-248de.firebaseapp.com',
  projectId: 'subscriptions-app-248de',
  storageBucket: 'subscriptions-app-248de.appspot.com',
  messagingSenderId: '308273445240',
  appId: '1:308273445240:web:3fdf1ff21aece2a7ca708d'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();