const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: [true, "Follower is required"]
    },
    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: [true, "Follower is required"]
    }
},{
    timestamps: true
})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel