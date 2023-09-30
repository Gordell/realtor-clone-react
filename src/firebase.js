// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHyItiJH6SEIqNJ4_eKAVloWDpp8rcjo",
  authDomain: "realtor-clone-react-810c1.firebaseapp.com",
  projectId: "realtor-clone-react-810c1",
  storageBucket: "realtor-clone-react-810c1.appspot.com",
  messagingSenderId: "190777259326",
  appId: "1:190777259326:web:951b1a757e71d93397a86f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()