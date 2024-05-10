
'use client'

import { useState } from "react";
import useSWR from "swr";

const Search = ()=>{

    const [inputValue, setInputValue] = useState('');

        const fetcher = async ()=>{
            const response = await fetch(`http://localhost:3000/api/search?pretraga=${inputValue}`);
            return await response.json();
        }
        const { data:fetchData,error }=useSWR("search",fetcher,{
            refreshInterval: 1000
        });
        if (error) return <div>Error loading data</div>;
        if (!fetchData) return <div>Loading...</div>;


    return <>
        <form >
            <input
                type="text"
                placeholder="search"
                onChange={ e=>setInputValue(e.currentTarget.value) }
            />

        </form>

        { fetchData && <div className="productWrapper">
            {
                fetchData.products?.map((product) => {
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
export default Search;