export default async function handler(req, res) {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:'kminchelle',
                password:  '0lelplR',
                expiresInMins: 30
            })
        });

        const data = await response.json();


        res.status(200).json({
            message: "success"
        });
    } catch (error) {
        console.error('Error:', error);
    }
}