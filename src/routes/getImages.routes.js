const express = require("express")
const {getImages , getCollections} = require("../controller/getImages.controller.js")
const {authUser} = require("../middleware/auth.middleware.js")

const router = express.Router()

router.get("/browseImages" , authUser , getImages)
router.get("/browseCollections" , authUser , getCollections)

module.exports = router