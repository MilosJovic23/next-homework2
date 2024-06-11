
"use client"

import { auth } from "@/app/firebase"
import { getAuth,createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth"
import  { useState } from "react";

export default function Register() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const register = async (e)=>{

        e.preventDefault()
        const res = await createUserWithEmailAndPassword( auth,email,password );
        localStorage.setItem("uid",res.user.accessToken)

    }
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return <>
        <input
            type="text"
            value={email}
            placeholder="email"
            onChange={e => setEmail(e.currentTarget.value)}
        />
        <input
            type="password"
            value={password}
            placeholder="password"
            onChange={e => setPassword(e.currentTarget.value)}
        />
        <button onClick={e => register(e)}>register</button>
    </>
}