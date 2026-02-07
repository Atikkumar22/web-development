const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI) //() me likhe ka use env me pade uri k liye horaha h
    .then(()=>{
        console.log("server connected to database")
    })
}

module.exports = connectToDB