const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["viewer" , "creator"],
        default : "viewer",
        required : true
    }
})

const userModel = mongoose.model("userInfo" , userSchema)

module.exports = userModel