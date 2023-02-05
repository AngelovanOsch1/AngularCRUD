import { getFirestore } from 'firebase/firestore';
import { initializeApp } from '@firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyDnyPbHBA61mnI8hjPN92nyzmCNyokpzW4",
  authDomain: "angularwebsite-f11b5.firebaseapp.com",
  projectId: "angularwebsite-f11b5",
  storageBucket: "angularwebsite-f11b5.appspot.com",
  messagingSenderId: "43026875416",
  appId: "1:43026875416:web:5357f2402a8f6006ad6f6d",
  measurementId: "G-5ZHH5BXF0B"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
