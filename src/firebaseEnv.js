import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCBQxl5j7pVKPJ-wBjGT7MAMhhqqCPnBXQ",
    authDomain: "facebook-clone-184b5.firebaseapp.com",
    projectId: "facebook-clone-184b5",
    storageBucket: "facebook-clone-184b5.appspot.com",
    messagingSenderId: "731441144409",
    appId: "1:731441144409:web:299bfa5d14d02c83d90748",
    measurementId: "G-HR5XDG7RJW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

 const storage = firebase.storage()
export { auth, provider, storage}
export default db