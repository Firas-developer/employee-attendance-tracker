import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1lZ9bl78NF0AhSMJ5ancqUYjkkX64ZZE",
  authDomain: "employee-activity-tracke-ab86d.firebaseapp.com",
  projectId: "employee-activity-tracke-ab86d",
  storageBucket: "employee-activity-tracke-ab86d.appspot.com",
  messagingSenderId: "386459254737",
  appId: "1:386459254737:web:9d62a01456ab9c61936af0",
  measurementId: "G-CYQFJBP5JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth
