const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String ,
    //esse likhne ka reason h ki ek email se more than 1 user na bn sake
    email: {
        type: String,
        unique:[ true , "Already a user exist with this email"]
    },
    password: String,
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel