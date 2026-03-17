const express = require('express')
const userModel = require("../model/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
 
const authRouter =  express.Router()

authRouter.post("/register", async (req, res )=>{
    const {email, username, password, bio, profile} = req.body;

    // this is not ideal to check again n again the database to for username and email
   /*  
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
    */

    //for checking them in single check we will use an OR operator ( $or)
    const isUserExist = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserExist){
        return res.status(409).json({
            message: "User already exist" + (isUserExist.email == email ? "Email already exits" : "Username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username,
        bio:string,
        profile,
        password: hash
    })

    const token = jwt.sign(
        {
            id: user_id
        },
        process.env.JWT_SECRET, 
        { expiresIn:"1d"}
    )
})