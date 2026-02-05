//server ko start krna 
//database se connect krna 
//terminal pe mongoose install krna pe wo yaha ayega na ki app me 

/* 
const app = require("./src/app");
const mongoose = require("mongoose")


function connectToDb(){
    //ye jo mon.con method h ye hamara express server ko mongoose DB connect krti h
    mongoose.connect(" (mongoDB uri here) /day6")
    .then(() => {
        console.log("Connected to Database")
    })
}

connectToDb()
app.listen(3000, () => {
    console.log("server has started on port 3000")
})
*/



//Doing all this to hide my uri form github 
require('dotenv').config();

const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");

    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log("DB connection failed", err);
  });
