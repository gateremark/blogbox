// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOZv0NROU9yImIfEtkEzf4jB3SA59ve50",
    authDomain: "blogbox-8250a.firebaseapp.com",
    projectId: "blogbox-8250a",
    storageBucket: "blogbox-8250a.appspot.com",
    messagingSenderId: "927822105377",
    appId: "1:927822105377:web:663ef23399b7a205324c60",
    measurementId: "G-TB1BVGBBL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const fdb = getFirestore(app);
export const storage = getStorage(app);
