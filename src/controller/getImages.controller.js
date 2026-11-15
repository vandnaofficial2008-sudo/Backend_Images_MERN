const collectionModel = require("../models/collection.model")
const imagesModel = require("../models/image.model.js")

async function getImages(req,res)
{
    const images = await imagesModel.find()
    const id = images.creator
    res.status(200).json({
        message : "Images fetched successfully!",
        images : images
    })
}

async function getCollections(req,res)
{
    const collections = await collectionModel.find()
    res.status(200).json({
        message : "Collections fetched successfully!",
        images : collections
    })
}

module.exports = {getImages , getCollections}