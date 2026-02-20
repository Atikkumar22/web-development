const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())

// Serve built frontend files from Backend/public
app.use(express.static(path.join(__dirname, "../public")))

//api to create data
app.post("/api/notes", async (req,res) => {
    const {title , description} = req.body

    //mongoDB method
    const note = await noteModel.create({
        title,description 
    })

    res.status(201).json({
        message: "Note created",
        note
    })
})

//api to fetch data from mongoDb and send them in the response
app.get("/api/notes", async (req,res) => {
   const notes = await noteModel.find()

   res.status(200).json({
    message:"notes send successfully",
    notes
   })
})

//api to delete the existing data using the id given by the mongo
app.delete("/api/notes/:id", async (req,res) =>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted"
    })
})

//update the desc of the note by id 
app.patch("/api/notes/:id", async (req,res) =>{
    const id = req.params.id
    const {description, title} = req.body

    await noteModel.findByIdAndUpdate(id, {description, title})

    res.status(200).json({
        message:"Note Updated",
    })
})

// Keep API above this middleware. Non-API GET requests should return frontend app.
app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api")) {
        return next()
    }

    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app
