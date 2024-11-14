import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFk2G-wv0fyvs0jevR1TozjbcMGY3bZy4",
  authDomain: "todo-crud-app-c26e1.firebaseapp.com",
  projectId: "todo-crud-app-c26e1",
  storageBucket: "todo-crud-app-c26e1.firebasestorage.app",
  messagingSenderId: "26200167148",
  appId: "1:26200167148:web:df4923ba023bbfd8238bc9"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
