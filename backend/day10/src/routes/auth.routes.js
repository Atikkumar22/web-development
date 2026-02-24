const express = require("express")
const userModel = require("../model/user.model")

const authRouter = express.Router()

//isse hit krne ke liye /api/auth/register kr ke use krna hoga
authRouter.post("/register", async(req,res) => {
    const {email, name, password } = req.body

    const isUserAlreadyExist = await userModel.findOne({email})
    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"user already exist with this email"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    res.status(201).json({
        message:"User registered",
        user
    })
})

module.exports = authRouter