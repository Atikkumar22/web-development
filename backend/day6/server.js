//server ko start krna 
//database se connect krna 
//terminal pe mongoose install krna pe wo yaha ayega na ki app me 


const app = require("./src/app");
const mongoose = require("mongoose")


function connectToDb(){
    //ye jo mon.con method h ye hamara express server ko mongoose DB connect krti h
    mongoose.connect("mongodb+srv://kumaratik424_db_user:G2tet1Xpbg0Syg5A@cluster0.c8zvirg.mongodb.net/day6")
    .then(() => {
        console.log("Connected to Database")
    })
}

connectToDb()
app.listen(3000, () => {
    console.log("server has started on port 3000")
})