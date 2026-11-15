const mongoose = require("mongoose")

const collectionSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    images : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "imageInfo"
        }
    ],
    creator : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "userInfo"
        }
    ]
})

const collectionModel = mongoose.model("collection", collectionSchema)

module.exports = collectionModel