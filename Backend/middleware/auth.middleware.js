const userModel = require("../models/user.model");
const blackListTokenModel = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.authUser = async (req,res,next)=>{
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if(!token){
    return res.status(401).json({error:"unauthorized"});
  }

  const isBlackListed = await blackListTokenModel.findOne({token});

  if(isBlackListed){
    return res.status(401).json({error:"unauthorized"});
  }

  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id).select("-password");
    if(!user){
      return res.status(401).json({error:"unauthorized"});
    }

    req.user = user;
    return next();

  }
  catch(err){
    return res.status(401).json({error:"unauthorized"});
  }
}