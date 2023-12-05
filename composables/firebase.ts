import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyASfa9UQjYvsQXtrzQZ17NF0T0kU-xCpM0',
  authDomain: 'cheatsheet-64aab.firebaseapp.com',
  projectId: 'cheatsheet-64aab',
  storageBucket: 'cheatsheet-64aab.appspot.com',
  messagingSenderId: '668159901234',
  appId: '1:668159901234:web:4d324eaed7e2543922c62b',
  measurementId: 'G-FDF8SL52VK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
