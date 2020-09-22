import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: "sportim.firebaseapp.com",
  databaseURL: "https://sportim.firebaseio.com",
  projectId: "sportim",
  storageBucket: "sportim.appspot.com",
  messagingSenderId: process.env.REACT_APP_FB_MESS_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage()


export default firebase;