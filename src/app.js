require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const auth = require("./routes/auth.routes.js")
const image = require("./routes/upload.routes.js")
const collection = require("./routes/collection.routes.js")
const browse = require("./routes/getImages.routes.js")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/auth/user" , auth)
app.use("/creator/upload" , image)
app.use("/creator/build" , collection)
app.use("/user/images", browse)

module.exports = app