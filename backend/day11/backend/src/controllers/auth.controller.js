const userModel = require("../model/user.model")
// const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") 
 
async function RegisterController (req, res ){
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
            message: "User already exist. " + (isUserExist.email == email ? "Email already exits" : "Username already exists")
        })
    }

    // const hash = crypto.createHash('sha256').update(password).digest('hex')
    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        bio,
        profile,
        password: hash
    })

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET, 
        { expiresIn:"1d"}
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "User registration successful",
        user:{
            email: user.email,
            username: user.username,
            bio: user.bio,
            profile: user.profile
        }
    })
}

async function loginController (req,res){
    const {email, password,  username} = req.body

    const user = await userModel.findOne({
        $or:[
            {
                username: username 
            },
            {
                email: email
            }
        ]
    })

    if(!user){
        return res.status(404).json({
            message: "user not found"
        })
    }

    // const hash = crypto.createHash('sha256').update(password).digest('hex')
    // const isPasswordValid = hash == user.password 
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Password Invalid"
        })
    }

    const token = jwt.sign(
        {id : user._id, username: user.username},
        process.env.JWT_SECRET,{expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(200).json({
        message:"User LoggedIn Successfull",
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profile: user.profile
        }
    })
}

module.exports = {
    RegisterController,
    loginController
}