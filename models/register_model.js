const mongoose = require("mongoose")
const validator= require("validator")
    
const register_model= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[10,"Minimum length should be 10"]
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validator(value){
            if(!validator.isEmail(value)){
               throw new Error("Invalid email") 
            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    
})

const Register=new mongoose.model('Register',register_model);

module.exports= Register;