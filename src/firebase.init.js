// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0KvXLotLpH5aIC_GD4wqkC239BtPq1pA",
    authDomain: "fruits-warehouse-83911.firebaseapp.com",
    projectId: "fruits-warehouse-83911",
    storageBucket: "fruits-warehouse-83911.appspot.com",
    messagingSenderId: "523228098846",
    appId: "1:523228098846:web:62fbfd05d7dce8453c190f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
