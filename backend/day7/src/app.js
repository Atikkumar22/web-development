const express = require("express")
const noteModel = require("./models/notes.models")

const app = express()

app.use(express.json())

app.post("/notes" , async (req,res) => {
    const { title , description} = req.body

    const note = await noteModel.create({
        title, description
    }) 

    res.status(201).json ({
        message: "Note created succesfully", 
        note
    })
})

app.get("/notes", async (req,res) => {
    //find method ka istemal hum DB read krne ke liye krte h 
    const note = await noteModel.find()
       
    res.status(200).json({
        message: "Note fetched successfully",
        note
    })
})




module.exports = app