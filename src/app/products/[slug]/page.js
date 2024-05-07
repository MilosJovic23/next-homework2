

export default async function Products ({ params }){

    const response = await fetch(process.env.PRODUCTS_API_URL+'/products/'+params.slug);
    const data = await response.json();
    console.log(process.env.PRODUCTS_API_URL)
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