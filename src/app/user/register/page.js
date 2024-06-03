
"use client"


export default function Register() {


    const register = (e)=>{
        e.preventDefault()
        console.log("x");
    }

    return <>
        <p>Hello World</p>
        <button onClick={e=>register(e) }>register</button>
    </>


}