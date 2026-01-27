const express = require("express");

const app = express() //server created , or uska instance server constant me agya h 

//not adding line to get some response on the client  side from the server
app.get('/', (req,res) => {
    res.send('hello world!!')
})

app.listen(3000) //server ko start krta hai 
console.log("server started on port 3000")