const buildCollection = require("../controller/collection.controller.js")
const {authArtist} = require("../middleware/auth.middleware.js")

const express = require("express")

const router = express.Router()

router.post("/collection" , authArtist , buildCollection)

module.exports = router