const { userModel } = require("../model/userModel");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const { signupValidation, loginValidation } = require("../middlewares/validation");


const createToken=(userId)=>{
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    });

}

module.exports.signup=async(req,res)=>{
    try{
        const { error}= signupValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

       const {email, username, password, createdAt}=req.body;

       const findUser= await userModel.findOne({email: email});
       if(findUser){
        return res.status(404).json({status: false, message: `User already exists! Try to Login` });
       }

       const salt=await bcrypt.genSalt(10);
       const hashedPassword= await bcrypt.hash(password, salt)

       const newUser= await new userModel({
        email: email,
        username: username,
        password: hashedPassword,
        createdAt: createdAt,
       });

       const saveUser=await newUser.save();
       console.log(saveUser);
       const token= createToken(saveUser._id);
       res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
       return res.status(201).json({status: true, userData: saveUser, token: token, message: 'Welcome to ZeroXa! You are registered successfully!' });


    }catch(err){
        console.log(`${err.message}`);
        return res.status(400).json({status: false, message: `${err.message}` });
    }
}

module.exports.login=async(req,res)=>{
    try{

        const { error}= loginValidation(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

       const {email, password}=req.body;

       const findUser= await userModel.findOne({email: email});
       if(!findUser){
        return res.status(401).json({status: false, message: `User with this email does not exists!` });
       }

       const verifyPassword= await bcrypt.compare(password, findUser.password);
       if(!verifyPassword){
        return res.status(404).json({status: false, message: `Invalid Credentials!` });
       }

       const token= createToken(findUser._id);
       res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });

       return res.status(201).json({status: true, userData: findUser, token: token, message: 'Welcome to ZeroXa: Smart & Trusted Discount Brokerage Ally at your fingertips!' });


    }catch(err){
        console.log(`${err.message}`);
        return res.status(400).json({status: false, message: `${err.message}` });
    }
}