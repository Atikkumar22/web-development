const express = require("express")
const authRouter = require("./routes/auth.routes")

const app = express()

app.use(express.json())

//prefix laga arhe h api/auth naam ka iska matlab ye h ki jab bhi humko register api ko hit krna hoga to usse pehle ye lagana padeega
app.use("/api/auth", authRouter)

module.exports = app