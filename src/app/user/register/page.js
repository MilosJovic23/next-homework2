
"use client"

import { auth } from "@/app/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Register() {


    const register = async (e)=>{

        const res = await createUserWithEmailAndPassword(auth,"email@email.com","asdaadsfe23")
        e.preventDefault()

    }

    return <>
        <p>Hello World</p>
        <button onClick={e=>register(e) }>register</button>
    </>


}