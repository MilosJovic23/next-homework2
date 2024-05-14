"use client"
import {useState} from "react";
import {addProductAPI} from "../../../../services/productService";


export default function Register(){

    const [ProductName,setProductName]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")


    const createProduct=()=>{
       fetch("/api/register",{
           method: 'POST',
           headers: { 'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               title:ProductName,
               price:price,
               description:description
           })
       })

    }
    return <>

        <form>
            <input type="text" placeholder="ime proizvoda" onChange={e => setProductName(e.currentTarget.value)}/>
            <input type="number" placeholder="cena proizvoda" onChange={e => setPrice(e.currentTarget.value)}/>
            <input type="text" placeholder="opis proizvoda" onChange={e => setDescription(e.currentTarget.value)}/>
            <button type="button" onClick={ createProduct }>dodaj proizvod</button>
        </form>

    </>
}