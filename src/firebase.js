// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8nP_Wqsxm0flgQOyNgynIRhSS5jgKMVU",
    authDomain: "react-homework1.firebaseapp.com",
    projectId: "react-homework1",
    storageBucket: "react-homework1.appspot.com",
    messagingSenderId: "905788861301",
    appId: "1:905788861301:web:2297b3b822031f5f10413c",
    measurementId: "G-RXLPPS7L5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
