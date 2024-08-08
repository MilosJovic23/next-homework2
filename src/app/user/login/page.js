
"use client"

import Cookies from 'js-cookie';
import { useState } from "react";

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e)=>{

            e.preventDefault();

            if(username === null || password === null){
                alert("niste uneli username ili passwrod");
                return;
            }

            const response = await fetch('/api/auth_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username ,
                    password: password,
                    expiresInMins: 30
                })
            })

            if( response.status !== 200 ){
                alert("nesto nije uredu pokusajte ponovo")
            }

            const data = await response.json();
            localStorage.setItem("token",data.token)


    }
    return <>

        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={ handleLogin }>Login</button>
        </div>

    </>


};