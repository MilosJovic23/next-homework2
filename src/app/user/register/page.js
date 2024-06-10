
"use client"

import { auth } from "@/app/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {useState} from "react";

export default function Register() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const register = async (e)=>{

        e.preventDefault()
        const res = await createUserWithEmailAndPassword(auth,email,password)

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