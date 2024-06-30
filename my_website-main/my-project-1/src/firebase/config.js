import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBDtWVcNcd82X6fCfDXTgbGjB9c0HyCo4Y",
    authDomain: "learn-8d9c7.firebaseapp.com",
    projectId: "learn-8d9c7",
    storageBucket: "learn-8d9c7.appspot.com",
    messagingSenderId: "280942945836",
    appId: "1:280942945836:web:3928e3c9a58faa6a791389"
  };
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();
  export {db,auth};