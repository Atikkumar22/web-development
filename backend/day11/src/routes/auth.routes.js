const express = require('express')
const userModel = require("../model/user.model")
 
const authRouter =  express.Router()

authRouter.post("/register", async (req, res )=>{
    const {email, username, password, bio, profile} = req.body;

    const isUserExistByEmail = await userModel.findOne({email}) 
    if(isUserExistByEmail){
        return res.status(409).json({
            message: "User already exist with the same email"
        })
    }

    const isUserExistByUsername = await userModel.findOne({username})
    if(isUserExistByUsername){
        return res.json(409).json({
            message: "Username already exists"
        })
    }
})