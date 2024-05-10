import getAllProducts, from "../../services/productService";

export default async function Home() {


  const data = await getAllProducts();


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
