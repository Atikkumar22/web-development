/*Use of app.js file
-server create krna 
-server ko config krna 
*/

const express = require("express")

const app = express()

const notes = []

app.use(express.json()) //middleware use : iska use isliye krte taki humara server req.body ke andar ane wale data ko read kr sake 

app.get("/", (req,res) => {
    res.send("yoyo")
})

//post method api for /notes
app.post("/notes", (req,res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("Notes Created Brother")
})

//get method api for /notes
app.get("/notes", (req,res) => {
    res.send(notes)
})

//delete method api to delete /notes

/* since hume ni pata ki client konse notes ko delete karega to hum usse note ke index value ko dyanmic banate h : use kr ke 
delete/ notes/:index says ki notes me _ index pe note h use delete kr do
*/
//also we are not puri taraf se deleting note , hum bs usse null se replace kr de rahe h 
app.delete("/notes/:index",  (req,res) =>{
    console.log(req.params.index)  //data ek single value hoti h ya bahut chooti hoti h to hum params ka use krte h ni to jab data jada ho to req.body ka use krte h 

    delete notes[ req.params.index]
    res.send("note deleted successfully")
})

//Patch method api to update few things
/*PATCH .notes/:index
  req.body = {description :- "sample modified description"} 
*/

app.patch("/notes/:index", (req,res) => {
    notes[req.params.index].about = req.body.about

    res.send("notes updated")
})

module.exports = app