const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    titlle: String,
    description: String
})

const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel