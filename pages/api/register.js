import {addProductAPI, searchProductByQuery} from "../../services/productService";


export default function handler(req,res){

    addProductAPI(req.body.title,req.body.price,req.body.description)

    res.status(200).json({
        message:"success"
    })

}