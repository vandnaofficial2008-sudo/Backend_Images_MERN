const mongoose = require("mongoose")

async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
        console.log("Connected to DB...")
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports = connectDb