const { holdingModel } = require("../model/HoldingsModel");
const { positionModel } = require("../model/PositionsModel");
const { userModel } = require("../model/userModel");


module.exports.holdingsData=async(req,res)=>{
    try{
        const allholdings= await holdingModel.find({});
        return res.json({status: 200, data: allholdings});

    }catch(err){
        console.log(`${err.message}`);
        return res.json({status: 400, message: `${err.message}`});
    }
}

module.exports.positionsData=async(req,res)=>{
    try{
        const allpositions= await positionModel.find({});
        return res.json({status: 200, data: allpositions});

    }catch(err){
        console.log(`${err.message}`);
        return res.json({status: 400, message: `${err.message}`});
    }
}

module.exports.authTest=async(req,res)=>{
    
    // console.log(req.body.userId);
    const user=await userModel.findOne({ _id: req.body.userId });
    return res.status(202).json({status: true, userData: user});
}