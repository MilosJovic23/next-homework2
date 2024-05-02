


export default async function Products ({ params }){

    const response = await fetch('https://dummyjson.com/products/'+params.slug);
    const data = await response.json();

    return(
        <>

            <div>
                <h3>{data.title}</h3>
                <p>{data.brand}</p>
                <p>{data.description}</p>
                <b>{data.price}&euro;</b>
                <p>{data.category}</p>
            </div>

        </>

    )
};