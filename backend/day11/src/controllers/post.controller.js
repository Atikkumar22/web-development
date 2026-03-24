const postModel = require("../model/post.model")
const imagekit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const Imagekit = new imagekit({
    privateKey: process.env.IMAGE_KIT
})

async function createPostController(req, res){
    console.log(req.body, req.file)

    //different users agar file send kare server ko to ye check krne ke liye konse se user ki taraf se file ayi h hum tokens ka use karenge, like in login
    const token = req.cookies.token

    //file aate time agar token ni ata h to denial message , reason can be user ne reg. na kiya ho ya fir reg. ke yaad login na kiya ho to token expire hogya ho
    if(!token){
        return res.status(401).json({
            message:"Token not provided , Unauthorized access"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(decoded)
   
    const file = await Imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message:"Post created successfully",
        post
    })
}

module.exports = {
    createPostController
}


