const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
    dishName:{
        type:String,
        required:true,
    },
    dishPrice:{
        type:Number,
        required:true,
        default:10,
    },
    dishType:{
        type:['nonveg','veg'],
    }
},{timestamps:true})

const menu = mongoose.model("menu",menuSchema);
module.exports = menu;

