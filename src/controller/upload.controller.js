const imageModel = require("../models/image.model")
const getURI = require("../services/storage.services.js")

async function uploadImage(req,res){
    const file = req.file
    const uri = await getURI(file.buffer.toString("base64"))

    const{description , date , creator} = req.body

    const imageData = await imageModel.create({
        url : uri,
        creator : req.user.id,
        description,
        date
    })

    res.status(201).json({
        message : "Image uploaded successfully!",
        imageData : {
            url : uri,
            creator : creator
        }
    })
}



module.exports = uploadImage 