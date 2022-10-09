import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBSfcLGxZ0ODlq1H5YTpAzQJwMvQ3i1sxg",
        authDomain: "assignment2-21a5d.firebaseapp.com",
        projectId: "assignment2-21a5d",
        storageBucket: "assignment2-21a5d.appspot.com",
        messagingSenderId: "508251823697",
        appId: "1:508251823697:web:365d946cf770a621d92270"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      return getDatabase(app);
}

export default StartFirebase;