/*Use of app.js file
-server create krna 
-server ko config krna 
*/

const express = require("express")

const app = express()

const notes = []

app.use(express.json()) //middleware use 

app.get("/", (req,res) => {
    res.send("yoyo")
})

app.post("/notes", (req,res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("Notes Created Brother")
})



module.exports = app