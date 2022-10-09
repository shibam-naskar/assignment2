import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

function StartFirebase() {
    const firebaseConfig = {
        
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      return getDatabase(app);
}

export default StartFirebase;