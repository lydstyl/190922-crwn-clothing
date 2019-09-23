import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCKJB2oDLwe9wi7w8Q11A-yjW-pbipH94I',
  authDomain: 'crown-db-6e1ee.firebaseapp.com',
  databaseURL: 'https://crown-db-6e1ee.firebaseio.com',
  projectId: 'crown-db-6e1ee',
  storageBucket: '',
  messagingSenderId: '683992282067',
  appId: '1:683992282067:web:a224b566cff9f0e7aeb526'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
