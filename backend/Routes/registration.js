const express = require("express")
const app =express();
const bcrypt = require("bcrypt")
const user =require("../database/registration")
app.post("/registration",async(req,res)=>
{
    try{
        const {name,email,password} = req.body;
        if(!name)
        {
            res.status(400).send("name is required");
        }
        if(!email)
        {
            res.status(400).send("email is required")
        }
        if(!password)
        {
            req.status(400).send("password is requred");
        }
        const find = await usaedjf.findOne({email:email});
        if(find)
        {
            res.status(400).send("email is already exit")
        }
        else
        {
            const user3 = new user(
                {
                    name ,email,password
                }
            );
            await user3.save();
            res.status(200).send("registration  is sucess")
        }

    }
    catch(err)
    {
        console.log(err)
    }
})