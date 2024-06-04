



import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/compat/auth'

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app)
console.log(auth)

export default app;