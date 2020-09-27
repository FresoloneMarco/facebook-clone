import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyChXcJKXZ7SmeEK-il-yAtVZGBj2KnCS7I",
  authDomain: "facebook-clone-b9443.firebaseapp.com",
  databaseURL: "https://facebook-clone-b9443.firebaseio.com",
  projectId: "facebook-clone-b9443",
  storageBucket: "facebook-clone-b9443.appspot.com",
  messagingSenderId: "431808556135",
  appId: "1:431808556135:web:460530809bec61b019b8c2",
  measurementId: "G-CW1W0MQS9J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;