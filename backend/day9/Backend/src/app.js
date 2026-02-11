const express = require("express")
const noteModel = require("../models/note.model")


const app = express()
app.use(express.json())

app.post("/api/notes", async (req,res) => {
    const {title , description} = req.body

    //mongoDB method
    const note = await noteModel.create({
        title,description 
    })

    res.status(201).json({
        message: "Note create"
    })
})





module.exports = app