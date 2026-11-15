const userModel = require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function userRegister(req,res)
{
    const{userName,email,password,role} = req.body
    if(!userName || !email || !password || !role)
    {
        return res.status(400).json({
            message : "All fields are required"
        })
    }
    const isfound = await userModel.findOne({
        $or:[
            {userName:userName},
            {email:email}
        ]
    })
    if(isfound)
    {
        return res.status(409).json({
            message : "User already exists"
        })
    }

    const hashed = await bcrypt.hash(password , 10)

    const user = await userModel.create({
        userName,
        email,
        password : hashed,
        role
    })

    const token = jwt.sign({"id":user._id , "role":user.role} , process.env.JWT_SECRET)

    res.cookie("token" , token)

    res.status(201).json({
        message : "User registered successfully",
        data : {
            userName,
            email,
            token
        }
    })
}

async function loginUser(req,res)
{
    const{userName,password,email} = req.body
    const isfound = await userModel.findOne({
        $or:[
            {email:email},
            {userName:userName}
        ]
    })
    if(!isfound)
    {
        return res.status(400).json({
            message : "User not found"
        })
    }

    const isValid = await bcrypt.compare(password, isfound.password)

    if(!isValid)
    {
        return res.status(401).json({
            message : " Incorrect Password"
        })
    }

    const token = jwt.sign({"id":isfound._id , "role":isfound.role} , process.env.JWT_SECRET)

    res.cookie("token" , token)

    res.status(201).json({
        message:"User logged-in successfully",
        userData : {
            userName : userName,
            email : email,
            id : isfound._id
        }
    })
}

module.exports = {userRegister , loginUser}