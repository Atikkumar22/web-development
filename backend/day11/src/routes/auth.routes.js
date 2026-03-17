const express = require('express')
const authController = require('../controllers/auth.controller')
 
const authRouter =  express.Router()

//Registration api
authRouter.post("/register", authController.RegisterController)

//Login api
authRouter.post("/login" , authController.loginController)

module.exports = authRouter 