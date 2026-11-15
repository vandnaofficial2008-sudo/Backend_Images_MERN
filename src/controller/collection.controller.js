const collectionModel = require("../models/collection.model.js")
const userModel = require("../models/user.model.js")

async function buildCollection(req,res)
{
    const{title , images} = req.body
    const collection = await collectionModel.create({
        title,
        images : images,
        creator : req.user.id
    })
    res.status(201).json({
        message : "Collection built successfully...",
        collection : {
            title : title,
            creator : collection.creator
        }
    })
}

module.exports = buildCollection