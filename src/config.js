// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxLEMqIvh_aYU5H4XuREd0WMirbWfKNs",
  authDomain: "myhealthmobile-dd6af.firebaseapp.com",
  projectId: "myhealthmobile-dd6af",
  storageBucket: "myhealthmobile-dd6af.appspot.com",
  messagingSenderId: "870218303097",
  appId: "1:870218303097:web:46e6ae270b7000124576a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage }
