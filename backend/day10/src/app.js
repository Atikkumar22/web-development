const express = require("express")
const authRouter = require("./routes/auth.routes")
const cookieparser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cookieparser())

//prefix laga arhe h api/auth naam ka iska matlab ye h ki jab bhi humko register api ko hit krna hoga to usse pehle ye lagana padeega
app.use("/api/auth", authRouter)

module.exports = app