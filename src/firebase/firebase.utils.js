import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJtgIIfxxbtb0_qL4XUiA9jwu89FrNf08",
  authDomain: "my-op-gg.firebaseapp.com",
  databaseURL: "https://my-op-gg.firebaseio.com",
  projectId: "my-op-gg",
  storageBucket: "my-op-gg.appspot.com",
  messagingSenderId: "343909372641",
  appId: "1:343909372641:web:a615a2851e5206d9e79da0",
  measurementId: "G-N7HWZGNCF4",
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
