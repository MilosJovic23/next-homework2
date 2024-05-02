


export default async function Products({ params }){

    const response = await fetch('https://dummyjson.com/products/'+params.slug);
    const data = await response.json();
    console.log(data);

    return(
        <>
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <b>{data.price}</b>
                <p>{data.description}</p>
            </div>
        </>

    )
};