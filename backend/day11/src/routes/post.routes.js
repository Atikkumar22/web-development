const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")

// multer ka istemal hum isliye kare rahe h qki file jo client side se aati h usse server padh hi ni sakta  h to ussi liye hum multer ka use krte h taki jo files aa rahi h usse humara server oadh sake
const upload = multer({ storage: multer.memoryStorage() })

// ye niche api / ke baad coma laga ke "upload.single("image")" likh rahe h taki humari file hume dikha sake or "image" FE se aani wali file ka naam h jo Postman me likha h 
postRouter.post("/", upload.single("image"), postController.createPostController)

module.exports = postRouter