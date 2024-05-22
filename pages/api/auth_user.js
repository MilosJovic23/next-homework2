export default async function handler(req, res) {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: req.body.username,
                password: req.body.password,
                expiresInMins: 30
            })
        });

        const data = await response.json();

        console.log(req.body);
        console.log(data)

        res.status(200).json({
            message: "success"
        });
    } catch (error) {
        console.error('Error:', error);
    }
}