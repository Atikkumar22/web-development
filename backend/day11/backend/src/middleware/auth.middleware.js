const jwt = require("jsonwebtoken")

async function identifyUser(req, res, next){
    const token = req.cookies.token

     if(!token){
        return res.status(401).json({
            message:"Unauthorized access denied"
        })
    }

    let decoded;
    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"Token invalid"
        })
    }

    req.user = decoded
    //next parameter ka use isliye kr rahe h taki yaha se user req identify hone ke baad actual api me jake kr kaam kare, bina next ke req yahi middleware me atak jayegi
    next()
}

module.exports = identifyUser