


export default async function Products({params}){

    const response = await fetch('https://dummyjson.com/products?limit=9')
    return(<p> test </p>)
};