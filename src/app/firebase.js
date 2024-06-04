
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {

};


const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);

export default app;