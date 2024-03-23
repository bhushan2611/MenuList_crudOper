const express = require("express")
const menuRoute = require("./routes/menu_routes.js");
require("./db/connection.js");

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/menu',menuRoute);

app.get('/',(req,res)=>{
    res.send("hello from express");
})

app.listen(PORT,()=>{
    console.log(`server is connected to port ${PORT}`);
})