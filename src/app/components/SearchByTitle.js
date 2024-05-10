


'use client'

import {useEffect, useState} from "react";

export default function Search(){

    const [result,setResult]=useState()



    const search  = async ( searchTerm ) => {
        const response = await fetch(`http://localhost:3000/api/search?pretraga=${searchTerm}`,{
            next:{
                revalidate:5000
            }
        });
        const result = await response.json();
        setResult(result)
        console.log(result)
    }






    return <>
        <form>
            <input
                type="text"
                placeholder="search term"
                onChange={ e=> search(e.currentTarget.value) }
            />
        </form>
        { result && <div className="productWrapper">
            {
                result.products?.map((product) => {
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
        }

    </>

}
