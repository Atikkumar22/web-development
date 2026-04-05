const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const identifyUser = require("../middleware/auth.middleware")

// multer(middleware) ka istemal hum isliye kare rahe h qki file jo client side se aati h usse server padh hi ni sakta  h to ussi liye hum multer ka use krte h taki jo files aa rahi h usse humara server oadh sake
const upload = multer({ storage: multer.memoryStorage() })

// ye niche api / ke baad coma laga ke "upload.single("image")" likh rahe h taki humari file hume dikha sake or "image" FE se aani wali file ka naam h jo Postman me likha h 
postRouter.post("/", upload.single("image"),identifyUser, postController.createPostController)

/**
 * @route GET /api/posts/ [protected]
 * @description Get all the posts created by the user that the request come from. also return the total number of posts created by the user
 */

postRouter.get("/",identifyUser, postController.getPostController)

//GET /api/posts/details/:postid
// return  an detail about specific post with the id. Also check whether the post belongs to the user that the request come from
postRouter.get("/details/:postId",identifyUser, postController.getPostDetails)

/**
 * @route POST /api/posts/like/:postid
 * @description like a post with the id provided in the request params. 
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

module.exports = postRouter    