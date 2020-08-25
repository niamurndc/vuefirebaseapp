import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBfeNuk2RoH2dvuMrCuWJX32F7w5Qv01Fk",
  authDomain: "employeesvue.firebaseapp.com",
  databaseURL: "https://employeesvue.firebaseio.com",
  projectId: "employeesvue",
  storageBucket: "employeesvue.appspot.com",
  messagingSenderId: "159796448607",
  appId: "1:159796448607:web:229944370334c10b3c7aea"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();