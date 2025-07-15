const mongoose=require("mongoose");


const connectdb=async() =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ex-tracker");
        console.log("mongodb connected");
    }
        catch(error){
            console.error("mongodb not connected",error.message);
        }
        };
        module.exports=connectdb;