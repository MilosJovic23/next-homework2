
'use client'


 import {searchProducts} from "../../services/productService";
 import {useState} from "react";

export default  function Search(){

    let word = "new"
    const data2 = searchProducts(word);

    const [searchTerm,setSearchTerm]=useState("")

    console.log(data2)
    const submitHandle = ()=>{
        console.log("works")
    }

    return <>
        <form>
            <input onInput={submitHandle} placeholder="search term"/>
        </form>

    </>

}
