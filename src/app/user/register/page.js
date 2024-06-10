
"use client"

import { auth } from "@/app/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import  { useState } from "react";

export default function Register() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const register = async (e)=>{

        e.preventDefault()
        const res = await createUserWithEmailAndPassword( auth,email,password );
        console.log(res)
        localStorage.setItem("userToken",res.user.accessToken)

    }

    const user = auth.currentUser;
    const userToken = localStorage.getItem("userToken")
    if ( user.accessToken === userToken ) {
        console.log("user is logged in")
    } else {
        console.log("user is not logged in.")
    }

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