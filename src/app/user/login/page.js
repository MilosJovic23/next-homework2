
"use client"

export default function Login(){





    const userInfoPostApi=()=>{
        fetch("/api/auth_user",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: 'nameTest',
                password: 'passTest',
                expiresInMinutes: 30
            })
        })

    }


    // const fetcher =  (url) => fetch(url).then(res => res.json());
    // const { data: fetchData, error } = useSWR(`http://localhost:3000/api/auth_user`, fetcher);
    // console.log(fetchData,"works")
    return<>

        <div>
            <button onClick={ userInfoPostApi }>dodaj info</button>
        </div>

    </>


};