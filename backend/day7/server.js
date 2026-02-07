require("dotenv").config() // jab tak hum iss line ko ni likhe tab tk humare .env file me jo bhi ho wo ni use ho skta h , undefined
const app = require("./src/app")
// const mongoose = require("mongoose")
const connectToDB = require("./src/config/database")


connectToDB()

app.listen(3000, ()=> {
    console.log("Server started on the 3000 port")
})