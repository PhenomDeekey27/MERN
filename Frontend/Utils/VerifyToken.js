const jwt=require("jsonwebtoken")
const usermodel=require("../Models/UserModel")

const protect=async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {

            //get Token from header
            token=req.headers.authorization.split(" ")[1]
            
            //verify token

            const decoded=jwt.verify(token,process.env.JWT_SECRET)

            //Get User from the token

            req.user=await usermodel.findById(decoded.id).select("-password")
            next()
            
        } catch (error) {
           return res.send({
            status:400,
            message:"Not Authorised"
           })
            
        }
    }

    if(!token){
       return res.send({
        status:401,
        message:'No Token , Not Authorised '
       })
    }
}
module.exports=protect