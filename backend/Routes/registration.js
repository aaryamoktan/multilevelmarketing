const express = require("express")
const app =express();
const bcrypt = require("bcrypt")
const user =require("../database/registration")
app.post("/registration",async(req,res)=>
{
    const {username,email,password,repassword} =req.body();
    if(!username || !email ||!password || !repassword)
    {
        return res.status(400).json({error:"PLZ FILL THE FORM"})
    }
    try{
        const finduser = await user.findOne({email:email})
        if(finduser)
        {
            res.status(500).json()({error:"email already exit"})
        }
        const bycryptpassword = bcrypt.hash(password,12)
        const user = new user({username,email,bycryptpassword})
        const userregist = await user.save();
        if(userregist){
            res.status(200).json({message:"registered sucesfully"})
        }

    }
    catch(err)
    {
        console.log(err)
    }
    
})
app.post("/login",async(req,res)=>
{
    const {email,password} =req.body()
    try{
        const finduser = await user.findOne({email:email})
        if(finduser)
        {
            const match = await bcrypt.compare(password,finduser.password)
            if(match)
            {
                res.status(200).json({message:"welcome to pur mlm orginazation"})
            }
        }    
    }
    catch(err)
    {
        console.log(err)
    }
})
