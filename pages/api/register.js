import {addProductAPI, searchProductByQuery} from "../../services/productService";


export default function handler(req,res){


    addProductAPI(req.body.title,req.body.price,req.body.description)
    console.log(req.body)

    res.status(200).json({
        message:"success"
    })

}