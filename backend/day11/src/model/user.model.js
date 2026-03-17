const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, "User name already exist"],
        required: [true, "User name is required"]
    },
    email:{
        type: String,
        unique: [true, "Email already exist"],
        required: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    bio:String,
    profile:{
        type: String,
        default:" https://ik.imagekit.io/Atik/default.webp"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel