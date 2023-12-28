const mongoose = require("mongoose")
const validator= require("validator")
    
const studentModel= new mongoose.Schema({
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
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
    
})

const Student=new mongoose.model('Student',studentModel);

module.exports= Student;

