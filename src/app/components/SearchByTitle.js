
'use client'

import { useEffect, useState } from "react";
import useSWR from "swr";



const Search = ()=>{

    const [inputValue, setInputValue] = useState('');
    const [delayedInputValue, setDelayedInputValue] = useState('');
    const fetcher = async (url) => fetch(url).then(res => res.json());
    const { data: fetchData, error } = useSWR(`http://localhost:3000/api/search?pretraga=${delayedInputValue}`, fetcher);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setDelayedInputValue(inputValue);
        }, 1200);

    return () => clearTimeout(delayTimer);
    }, [inputValue]);

    if (error) return <div>Error loading data. Please try again later.</div>;

    return <>
        <form >
            <input
                type="text"
                placeholder="search"
                value={inputValue}
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