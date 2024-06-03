

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDLiwj9RhO7vGcqM8GRmVsDpde7aAqORk4",
    authDomain: "fir-next-6ec67.firebaseapp.com",
    projectId: "fir-next-6ec67",
    storageBucket: "fir-next-6ec67.appspot.com",
    messagingSenderId: "597107893872",
    appId: "1:597107893872:web:a036622399dce4789e36b5"
};


const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);

export default app;