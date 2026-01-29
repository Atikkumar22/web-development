const express = require("express")

const app = express()

// app.get("/", (req,res) => {
//     res.send("yoyo")
// })

app.use(express.json())  //using middleware so that request kiya hua data dekh  sake wrna data ni dikhega

const notes =[
    {
        title: "title1",
        desc: "desc1"
    },
    {
        title: "title2",
        desc: "desc2"
    }
]

// post use to create new resources
app.post("/notes", (req,res) => {
    
    console.log(req.body)
    
    res.send("note created")

    notes.push(req.body)
}) 

//get api for retrieving resources(data) from the server
app.get("/notes", (req,res) => {
    res.send(notes)
})

//listen is used to start the server
app.listen(3000, () => {
    console.log("server is running on port 3000 ")
})