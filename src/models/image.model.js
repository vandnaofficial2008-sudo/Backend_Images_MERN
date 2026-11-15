const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    url : {
        type : String,
        required : true
    },
    creator : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userInfo",
        required : true
    },
    description : {
        type : String
    },
    date : String
})

const imageModel = mongoose.model("imageInfo" , imageSchema)

module.exports = imageModel