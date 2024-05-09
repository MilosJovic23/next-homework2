import getAllProducts, {searchProducts} from "../../services/productService";
import SearchByTitle from "@/app/SearchByTitle";
import Search from "@/app/SearchByTitle";

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
        <Search/>
      </>

  );
}
