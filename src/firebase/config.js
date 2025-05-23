// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwd6kNHXqDxQdPxVWxtNQW9DIIQBvoJtU",
  authDomain: "collabx-c0007.firebaseapp.com",
  projectId: "collabx-c0007",
  storageBucket: "collabx-c0007.firebasestorage.app",
  messagingSenderId: "65030098053",
  appId: "1:65030098053:web:2330bd4d9a591040b0edec",
  measurementId: "G-P62WBYKD5W"
};

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
