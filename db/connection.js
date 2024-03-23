const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myDB").then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("database connection error",err);
})