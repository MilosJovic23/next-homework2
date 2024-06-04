
"use client"

import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Register() {


    const register = (e)=>{

        const res = await createUserWithEmailAndPassword()
        e.preventDefault()

    }

    return <>
        <p>Hello World</p>
        <button onClick={e=>register(e) }>register</button>
    </>


}