const express =  require("express");
const bcrypt = require("bcrypt"); 
const app = express();
app.post((rea,res)=>
{
    const {email,password}=req.body;
    if(!email || !password)
    {
        return res/json({error: "Plz fill the email and password"})
    }
})