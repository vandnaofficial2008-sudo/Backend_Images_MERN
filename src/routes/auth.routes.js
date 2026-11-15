const express = require("express")
const {userRegister , loginUser} = require("../controller/auth.controller.js")

const router = express.Router()

router.post("/register" , userRegister)
router.post("/login" , loginUser)

module.exports = router