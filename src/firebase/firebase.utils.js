import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAcCetqOIfszv656kIu-FviI8aQ9niyuDM",
  authDomain: "crwn-db-6be49.firebaseapp.com",
  databaseURL: "https://crwn-db-6be49.firebaseio.com",
  projectId: "crwn-db-6be49",
  storageBucket: "",
  messagingSenderId: "511582120372",
  appId: "1:511582120372:web:a7edfe1bd414c391"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
