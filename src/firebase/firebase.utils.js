import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const config = {

  apiKey: "AIzaSyDkqN7e235MP5IRSmpNag-fQw4O1BRt1yY",
  authDomain: "quiz-application-996de.firebaseapp.com",
  projectId: "quiz-application-996de",
  storageBucket: "quiz-application-996de.appspot.com",
  messagingSenderId: "530094864579",
  appId: "1:530094864579:web:c1ba674b450d3505610a76",
  measurementId: "G-3CCSTD4RJG"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;