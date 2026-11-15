const express = require("express")
const uploadImage = require("../controller/upload.controller")
const multer = require("multer")
const {authArtist} = require("../middleware/auth.middleware.js")

const router = express.Router()

const upload = multer({"storage":multer.memoryStorage()})

router.post("/image" , authArtist , upload.single("image") ,uploadImage)

module.exports = router