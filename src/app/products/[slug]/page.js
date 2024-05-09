import getAllProducts, { getProductById } from "../../../../services/productService";
import Search from "@/app/SearchByTitle";


export default async function Products ({ params }){

    const data = await getProductById(params.slug);


    if( !data ){
        return <h1>Ova stranice ne postoji</h1>
    }
    return<>
            <Search/>
            <div>
                <h3>{data.title}</h3>
                <p>{data.brand}</p>
                <p>{data.description}</p>
                <b>{data.price}&euro;</b>
                <p>{data.category}</p>
            </div>

        </>


};