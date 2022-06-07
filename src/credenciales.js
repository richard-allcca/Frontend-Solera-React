// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCFqGBPOlic1dRG8hxUjt8lcthE55VnyM",
  authDomain: "fir-v9-c4471.firebaseapp.com",
  projectId: "fir-v9-c4471",
  storageBucket: "fir-v9-c4471.appspot.com",
  messagingSenderId: "226615850116",
  appId: "1:226615850116:web:768e0d42f62f1ad3babed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app