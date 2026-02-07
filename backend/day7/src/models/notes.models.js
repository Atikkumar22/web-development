const mongoose = require("mongoose")


//Schema ki madad se hume data ka blueprint decide  krte hai  h ki Db me konsa type ka data store krne wale h or kis formate m 
const noteSchema = new mongoose.Schema({
    title: String,      // property: type 
    description: String,
})

//jo humara schema h usse me agar CRUD operations perform krne hai to uske liye hume usse related model bnana hoga taki model ke through hum given data pe work kr sake
const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel 