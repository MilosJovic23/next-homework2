import {apiAuthentication} from "../../services/productService";


    export default function handler(req,res){

        apiAuthentication(req.body.username,req.body.password)

    res.status(200).json({message:"works"})
}