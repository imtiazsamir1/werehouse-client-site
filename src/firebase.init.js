// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_GjOd2rn-uWtU-b12f4wT8rVy-iRz3Fs",
  authDomain: "fruits-warehouse-69fdb.firebaseapp.com",
  projectId: "fruits-warehouse-69fdb",
  storageBucket: "fruits-warehouse-69fdb.appspot.com",
  messagingSenderId: "244478152650",
  appId: "1:244478152650:web:9976126a87121e0fef4933",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
