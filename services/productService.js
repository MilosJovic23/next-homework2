

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

export async function searchProducts(searchTerm){
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
    return await response.json();
}
