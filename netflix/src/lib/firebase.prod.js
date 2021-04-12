import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyD_iLrUzlx6VIawCLrNMZl-8KeHC2oh5AM",
    authDomain: "netflix-17ce6.firebaseapp.com",
    projectId: "netflix-17ce6",
    storageBucket: "netflix-17ce6.appspot.com",
    messagingSenderId: "1083633649665",
    appId: "1:1083633649665:web:1df3d84956b1a2a0a29800"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };