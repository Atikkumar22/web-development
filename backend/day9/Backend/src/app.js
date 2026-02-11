const express = require("express")
const noteModel = require("./models/note/model.js")


const app = express()
app.use(express.json())

app.post("/api/notes", (req,res) => {
    const {title , description} = req.body
})





module.exports = app