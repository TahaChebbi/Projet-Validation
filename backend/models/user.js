// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    cin:Number,
    Tel:Number,
    role:String,
    password:String,
})
// create model ( PascalCase)
const user=mongoose.model("User",userSchema)
module.exports=user;