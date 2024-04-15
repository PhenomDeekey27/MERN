const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema=new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    father:{
        type:String,
        required:true

    },
    mother:{
        type:String,
        required:true

    },
    job:{
        type:String,
        required:true

    },
    salary:{
        type:Number,
        required:true

    },
    religion:{
        type:String,
        required:true
    },
    profile_img:{
        type:String,
        required:true,
       
    }
  



},{})

module.exports=mongoose.model("Profile",ProfileSchema)