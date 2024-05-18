import {apiAuthentication} from "../../services/productService";


export default function handler(req,res){

    apiAuthentication()

    res.status(200).json({
        message:"success"
    })
}