// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABE1GX8BG0rWSfq_TO2NqkT8qJQzwTzbo',
  authDomain: 'formdb-82977.firebaseapp.com',
  projectId: 'formdb-82977',
  storageBucket: 'formdb-82977.appspot.com',
  messagingSenderId: '120072303461',
  appId: '1:120072303461:web:8dd0587ee8d6bb639ee78c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
