
"use client"

import { getAuth,createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth"
import  { useState } from "react";
import { useAuth } from "@/app/context/authContext";

export default function Register() {

    const {user} = useAuth();
    console.log(user)
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const register = async (e)=>{

        e.preventDefault()
        const res = await createUserWithEmailAndPassword( auth,email,password );

    }

    const auth = getAuth();

    setPersistence( auth,browserSessionPersistence )
        .then(() => {
            return signInWithEmailAndPassword( auth,email,password );
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