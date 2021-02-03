import firebase from 'firebase'
 
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCvjM15TenPVQscYS400PuYN7lESZyBi9I",
  authDomain: "film-camera-review-app.firebaseapp.com",
  projectId: "film-camera-review-app",
  storageBucket: "film-camera-review-app.appspot.com",
  messagingSenderId: "481565136420",
  appId: "1:481565136420:web:dc5ff79ada484730c76ab1",
  measurementId: "G-9VHCW6VP7J"
  })
}
 
export default firebase