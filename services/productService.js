

export default async function getAllProducts(limit=9){


    const response = await fetch(process.env.PRODUCTS_API_URL+'/products?limit='+limit,{
        next:{
            revalidate:3600
        }
    });
    return await response.json();

};

export async function getProductById(productId){
    const response = await fetch(process.env.PRODUCTS_API_URL+'/products/'+productId);
    if ( response.status === 404 ){
        return false;
    }
    return await response.json();
}

export async function searchProductByQuery(query){
    const response = await fetch(process.env.PRODUCTS_API_URL+`/products/search?q=${query}`);
    return await response.json();
}

export  function addProductAPI( name,price,description){
    const res =fetch(process.env.PRODUCTS_API_URL+'/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: name,
            price: price,
            description:description
        })
    })
        .then(res=>res.json())

}
export function apiAuthentication(username,password){
    const res = fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMinutes: 30, // optional, defaults to 60
        })
    })
        .then(res => res.json())
        .then(console.log)
}