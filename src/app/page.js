
export default async function Home() {

  const response = await fetch(process.env.PRODUCTS_API_URL+'/products?limit=9');
  const data = await response.json();

  return (
      <>

        <div className="productWrapper">
          {
            data.products.map((product)=>{
              return <div key={product.id} className="singleProduct">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <b>{product.price}&euro;</b>
                <p>{product.brand}</p>
                  <a href={`/products/${product.id}`}>learn more</a>
              </div>
            })
          }
        </div>

      </>

  );
}
