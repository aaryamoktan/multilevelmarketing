const express = require("express");
const app = express();
const mongoose = require("mongoose")
const DB = "mongodb+srv://aaryanmoktan2000:aaryanmoktan2000@cluster1.kpi3vj2.mongodb.net/"
mongoose.connect(DB).then(()=>
{
    console.log("connection sucessfull");
}).catch((err)=>
{
    console.log("fail")
})
app.use(require("./Routes/registration"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>
{
    res.send("hello aarya moktan welcome");
});
app.listen(5000,()=>
{
    console.log("aarya");
});