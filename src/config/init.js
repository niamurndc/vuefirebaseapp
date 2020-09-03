import firebase from 'firebase'

const firebaseConfig = {
  your firebase credantials.
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
