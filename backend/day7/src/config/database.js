const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb+srv://kumaratik424_db_user:G2tet1Xpbg0Syg5A@cluster0.c8zvirg.mongodb.net/day7")
    .then(()=>{
        console.log("server connected to database")
    })
}

module.exports = connectToDB