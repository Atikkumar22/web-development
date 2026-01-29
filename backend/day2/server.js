const express = require("express");

const app = express() //server created , or uska instance server constant me agya h 


//now adding line to get some response on the client  side from the server
app.get('/', (req,res) => {
    res.send('hello world!!')
})

app.get('/about',(req,res)=>{
    res.send('this is the about page')
})

app.get('/home',(req,res)=>{
    res.send('this is the home page')
})


app.listen(3000) //server ko start krta hai 
console.log("server started on port 3000")