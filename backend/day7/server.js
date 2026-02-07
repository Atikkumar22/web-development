const app = require("./src/app")
// const mongoose = require("mongoose")
const connectToDB = require("./src/config/database")


connectToDB()

app.listen(3000, ()=> {
    console.log("Server started on the 3000 port")
})