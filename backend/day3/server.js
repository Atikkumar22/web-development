const express = require("express")

const app = express()

// app.get("/", (req,res) => {
//     res.send("yoyo")
// })

const notes =[
    {
        title: "title1",
        desc: "title desc1"
    },
    {
        title: "title2",
        desc: "title desc2"
    }
]

app.post("/notes",(req,res) => {
    res.send("note created")
})

app.listen(3000, () => {
    console.log("serner is running on port 3000 ")
})