const express = require("express")

const app = express()

const diary = []

app.use(express.json()) 

app.post("/enteries", (req, res) => {
    diary.push(req.body)

    res.status(201).json({
        message: "New entery created"
    })
})

app.get("/enteries", (req,res) => {
    res.status(200).json({
        diary: diary
    })
})

app.delete("/enteries/:index" , (req,res) => (
    delete diary[req.params.index]

    res.status(204).json({
        message:"Entry deleted"
    })
))





module.exports = app;