// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKFgDMHYxthHSdCzxvcgHGWqpkxMKsy8U",
  authDomain: "netflix-clone-strip.firebaseapp.com",
  projectId: "netflix-clone-strip",
  storageBucket: "netflix-clone-strip.appspot.com",
  messagingSenderId: "679863006025",
  appId: "1:679863006025:web:b89d58391ccaec4da36098",
  measurementId: "G-YWK83RNJHS",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
export { auth };
export default db;
