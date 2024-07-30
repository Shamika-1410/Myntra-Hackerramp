import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA001Vo696Pd04b6KRLzu2HGL09aKPYKBM",
    authDomain: "myntra-thriftstore.firebaseapp.com",
    projectId: "myntra-thriftstore",
    storageBucket: "myntra-thriftstore.appspot.com",
    messagingSenderId: "566085116085",
    appId: "1:566085116085:web:7cb0661198edca83ee9efc",
    measurementId: "G-8PVJD25Y6B"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
