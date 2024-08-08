import Cookies from 'js-cookie';

export default async function handler(req, res) {


        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username:   req.body.username,
                    password:   req.body.password,
                    expiresInMins: 30
                })
            });
        } catch(error){
            console.log(error);
            res.status(500).json({message:"internal server error"})

        }
        console.log(req.body.username , req.body.password )


        const data = await response.json();
        res.status(200).json(data.token);


}