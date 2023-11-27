// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiG04aHw2IorKnJ8iiGpvX2LWPstg-ETA",
	authDomain: "corona-coder.firebaseapp.com",
	projectId: "corona-coder",
	storageBucket: "corona-coder.appspot.com",
	messagingSenderId: "1084169737257",
	appId: "1:1084169737257:web:86e7b52952ec22acadf838",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
