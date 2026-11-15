const jwt = require("jsonwebtoken")

async function authArtist(req,res,next)
{
    const token = req.cookies.token
    if(!token){
        return res.status(409).json({
            message : "User not registered/login"
        })
    }
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if(!decoded)
        {
            return res.status(409).json({
                message:"Unauthorised access"
            })
        }
        const role = decoded.role
        if(role!="creator")
        {
            return res.status(403).json({
                message : "You don't have access to perform this operation..."
            })
        }
        req.user = decoded
        next()
    }
    catch(err)
    {
        console.log(err)
        return res.status(401).json({
            message : "Some error in token verification!"
        })
    }
}

async function authUser(req,res,next)
{
    const token = req.cookies.token
    if(!token){
        return res.status(409).json({
            message : "User not registered"
        })
    }
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if(!decoded)
        {
            return res.status(409).json({
                message:"Unauthorised access"
            })
        }
        req.user = decoded
        next()
    }
    catch(err)
    {
        console.log(err)
        return res.status(401).json({
            message : "Some error in token verification!"
        })
    }
}

module.exports = {authArtist , authUser}