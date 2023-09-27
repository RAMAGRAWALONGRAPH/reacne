import mongoose from "mongoose"

const connectMongoDB = async() => {
  try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connection successful")
    }catch(error){
        throw new Error(error)
    }
  
}

export default connectMongoDB











// const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGODB_URI).then(()=>
//   {  console.log("connection successfull")
// }).catch((err)=>{
//     console.log(err)
// })