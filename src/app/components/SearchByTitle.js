




export default async  function Search(){


    const response = await  fetch(`https://dummyjson.com/products/search?q=phone`);
    const result = await response.json();

    console.log(result);

    const search = (search)=>{
        console.log(search);
    }






    return <>
        <form>
            <input
                type="text"
                placeholder="search term"
            />
            <button>search</button>
        </form>
        {/*{ searchTerm && <div className="productWrapper">*/}
        {/*    {*/}
        {/*        result.products?.map((product) => {*/}
        {/*            return <div key={product.id} className="singleProduct">*/}
        {/*                <h2>{product.title}</h2>*/}
        {/*                <p>{product.description}</p>*/}
        {/*                <b>{product.price}&euro;</b>*/}
        {/*                <p>{product.brand}</p>*/}
        {/*                <a href={`/products/${product.id}`}>learn more</a>*/}
        {/*            </div>*/}
        {/*        })*/}
        {/*    }*/}
        {/*    </div>*/}
        {/*}*/}

    </>

}
