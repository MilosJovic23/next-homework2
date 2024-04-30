import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {

  const response = await fetch('https://dummyjson.com/products?limit=9');
  const data = await response.json();
  console.log(data)

  return (
      <>

        <div className="productWrapper">
          {
            data.products.map((product)=>{
              return <div className="singleProduct">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <b>{product.price}&euro;</b>
                <p>{product.brand}</p>
              </div>

            })
          }
        </div>

      </>

  );
}
