

export default function handler(req,res){

   // console.log(req,res)
   //
   //
   //
   // console.log(req.query.pretraga)

   if( !req.query.pretraga ){
      res.status(400).json({message:"niste prosledili parametar za pretragu"})
   }
   res.status(200).json({message:"ovaj api radi"})
}