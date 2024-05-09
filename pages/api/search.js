import {searchProductByQuery} from "../../services/productService";


export default async function handler(req,res){

   const data = await searchProductByQuery(req.query.pretraga);


   if( !req.query.pretraga ){
      res.status(400).json({message:"niste prosledili parametar za pretragu"})
   }
   res.status(200).json(data)



}