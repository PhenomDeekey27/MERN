 const express=require("express");
 const cors=require("cors")
const app=express();
const mongoose=require("mongoose")
const userDataValidation=require("./Utils/authUtils")
const userModel=require("./Models/UserModel")
const profileModel=require("./Models/ProfileModel")
const generateToken=require("./Utils/TokenUtils.js")
const ProfileValidation=require("./Utils/profileUtil")
const protect=require("./Utils/VerifyToken.js")
const bcrypt=require("bcrypt")
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const path=require("path")


app.use(cors());

app.use(express.json({limit:"50mb"}));
//use the client App
app.use(express.static(path.join(__dirname,"Frontend/dist")))
//render client for any path
 app.get('*',(req,res)=>res.sendFile(path.join(__dirname,"Frontend/dist/index.html")))



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MONGODB connected")
}).catch((er)=>{
    console.log(er)
})

//storage in mongoDB

// const Storage=multer.diskStorage({
//   destination:"uploads",
//   filename:(req,file,cb)=>{
//     cb(null,file.originalname)
//   }
// })

// const upload=multer({
//   storage:Storage
// }).single("profile_pic")

app.get("/api/get",protect,async(req,res)=>{
   const {_id,name,email}=await userModel.findById(req.user._id)
   return res.send({
    status:200,
    data:{
      name:name,
      id:_id,
      email:email
    }
   })
})



app.post("/api/register",async(req,res)=>{
    
    const { name, email,password } = req.body;

    //Data validation
    try {
      await userDataValidation({ name, email,password });
    } catch (error) {
      return res.status(400).json(error);
    }
  
    //email and username exist or not
  
    const userEmailExist = await userModel.findOne({ email });
  
    if (userEmailExist) {
      return res.send({
        status: 400,
        message: "Email already exist , please try to login",
      });
    }

      //hashing the password
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT)
  );

  const userObj = new userModel({
    name,
    email,
    password: hashedPassword,
  });
  

  try{
    const userDb= await userObj.save();
    userDb.token=generateToken(userDb._id)
    return res.send({
      status:201,
      message:"User Registered Successfully",
      data:userDb

    })
  }catch(er){
    console.log(er);
    return res.send({
      status: 500,
      message: "Internal server error",
      error: er,
    });
  }

})

app.post('/api/login',async(req,res)=>{

  const {email,password}=req.body
  
  //checking for email
  

  const User=await userModel.findOne({email})
  if(!User){
    return res.send({
      status:400,
      message:"Email is not registered"
    })
  }

  if(User && (await bcrypt.compare(password,User.password))){
    return res.send({
      status:200,
      message:"Login Successful",
      data:{
        email:User.email,
        token:generateToken(User._id)
      }
    })
  }else{
    res.send({
      status:400,
      message:"Login Failed"
    })
  }

})



app.post("/api/Profile",async(req,res)=>{

  const {name,date,gender,father,mother,job,salary,religion,profile_img,id}=req.body

  try {
          await ProfileValidation({name,date,gender,father,mother,job,salary,religion})
    
  } catch (error) {
    return res.status(400).send(error)
    
  }

  const ProfileData= new profileModel({
   name,date,gender,father,mother,job,salary,religion,profile_img,id
  
  })

  try {

    const ProfileDb=await ProfileData.save();
    
    return res.send({
      status: 201,
      message: "Registeration successfull",
      data: ProfileDb,
    });
    
  } catch (error)
  {

    return res.send({
      status: 500,
      message: "Database error",
      error: error,
    });

    
  }



  


})

app.post("/api/get-profile",async(req,res)=>{
  try {
     
        const {id}=req.body
        if(!id){
          return res.send({
            status:404,
            message:"Please send Id first"
          })
        }
        const UserProfile=await profileModel.findOne({id})
        
        if(UserProfile){
          return res.send({
            status:200,
            message:"Profile Data Fetched",
            data:UserProfile
          })
        }
        if(!UserProfile){
          return res.send({
            status:404,
            message:"Profile Not Found,Please create New Profile"
          })
        }

  } catch (error) {
    return res.send({
      status:500,
      message:"Database Error",
      data:error
    })
    
  }
})

app.post("/api/update-profile/:id",async(req,res)=>{
  const profileid=req.params.id;
  const profile=await profileModel.findById(profileid)
  if(profile==null){
    return res.send({
      status:"404",
      message:"Profile Not found"
    })
  }
  try{
    const updatedProfile=await profileModel.updateOne({_id:profileid},{$set:req.body})
      return res.send({
        status:200,
        message:"profile updated successfully",
        data:updatedProfile
      })


  }catch(er){
    return res.send({
      status:501,
      error:er
    })

  }

  


})

app.get("/api/verified_profiles",async(req,res)=>{

  try {
          const Verified_Profiles=await profileModel.find()
          if(Verified_Profiles){
            return res.send({
              status:200,
              Message:"Profile With Similar Interest",
              Data:Verified_Profiles
            })
          }
          return;
    
  } catch (error) {
    return res.send({
      status:404,
      message:"No Profile Found With Similar Interest ",
      error:error
    })
    
  }

})
app.listen(process.env.port,()=>{
    console.log("working")
})




