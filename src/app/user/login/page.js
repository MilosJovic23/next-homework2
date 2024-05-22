
"use client"


import {useState} from "react";

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async ()=>{
        try {
            const response = await fetch('/api/auth_user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username ,
                    password: password,
                    expiresInMins: 30
                })
            })
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error('Login failed:', error);
        }

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
            <button onClick={handleLogin}>Login</button>
        </div>

    </>


};