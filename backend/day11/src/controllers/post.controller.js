const postModel = require("../model/post.model")
const imagekit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const Imagekit = new imagekit({
    privateKey: process.env.IMAGE_KIT
})

async function createPostController(req, res){
    console.log(req.body, req.file)
/*  ISKO HUM YAHA SE UTHA KE MIDDLEWARE ME DALANGE Q KI YE BLOCK OH CODE REPEAT HO RAHA H TEENO API CONTOLLERS ME 

    //different users agar file send kare server ko to ye check krne ke liye konse se user ki taraf se file ayi h hum tokens ka use karenge, like in login
    const token = req.cookies.token

    //file aate time agar token ni ata h to denial message , reason can be user ne reg. na kiya ho ya fir reg. ke yaad login na kiya ho to token expire hogya ho
    if(!token){
        return res.status(401).json({
            message:"Token not provided , Unauthorized access"
        })
    }

    let decoded = null
    try{
       decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"User not authorized"
        })
    }
*/   
   
    const file = await Imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message:"Post created successfully",
        post
    })
}


async function getPostController(req, res){

    const userId = req.user.id

    const post =  await postModel.find({
        user: userId
    })

    res.status(200).json({
        message: "Posts fetched successfully",
        post
    })
}

async function getPostDetails(req, res){
    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"Post not found"
        })
    }

    const isValidUser = post.user.toString() === userId
    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content"
        })
    }

     return res.status(200).json({
            message:"Post fetched successfully",
            post
        })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetails
}


