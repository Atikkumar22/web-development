require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./config/database")

app.listen(3000, ()=> {
    console.log("server started on port 3000")
})

connectToDB()