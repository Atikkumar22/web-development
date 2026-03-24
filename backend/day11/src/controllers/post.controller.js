const postModel = require("../model/post.model")
const imagekit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")

const Imagekit = new imagekit({
    privateKey: process.env.IMAGE_KIT
})

async function createPostController(req, res){
    console.log(req.body, req.file)

    const file = await Imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test"
    })

    res.send(file)
}

module.exports = {
    createPostController
}


