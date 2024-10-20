// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8460Gz74VqkXKozOEn_OGQr3XRjXpTK8",
  authDomain: "sign-in-gr.firebaseapp.com",
  projectId: "sign-in-gr",
  storageBucket: "sign-in-gr.appspot.com",
  messagingSenderId: "234590944984",
  appId: "1:234590944984:web:90ac629ccd68c66e6d61ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }