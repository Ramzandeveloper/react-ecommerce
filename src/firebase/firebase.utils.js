import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCvAy7pYspIYhSfNNqNVDCojW_X9_5WCSU",
  authDomain: "ecommerce-react-29999.firebaseapp.com",
  projectId: "ecommerce-react-29999",
  storageBucket: "ecommerce-react-29999.appspot.com",
  messagingSenderId: "44022721949",
  appId: "1:44022721949:web:03c659c985eb9104f35374",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
