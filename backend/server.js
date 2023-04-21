const express = require("express");
const app = express();
app.get("/",(req,res)=>
{
    res.send("hello aarya moktan welcome");
});
app.listen(5000,()=>
{
    console.log("aarya");
});