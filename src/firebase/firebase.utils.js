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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
