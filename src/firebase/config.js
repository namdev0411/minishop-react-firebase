import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';  
  const firebaseConfig = {
    apiKey: "AIzaSyATkJt5KEt2geKwRhhZvRzeO57QmJ-qlj8",
    authDomain: "minishop-7c82c.firebaseapp.com",
    projectId: "minishop-7c82c",
    storageBucket: "minishop-7c82c.appspot.com",
    messagingSenderId: "803672195105",
    appId: "1:803672195105:web:11dff7a9672c59a5aa6360"
  };
    firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectFirestore,projectStorage};