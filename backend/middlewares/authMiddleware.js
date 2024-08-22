const jwt = require("jsonwebtoken");
const { userModel } = require("../model/userModel");
require("dotenv").config();

module.exports.authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(404)
      .json({ status: false, message: `Authentication Error` });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(data)
    req.body.userId = data.userId;
    
    next();
  } catch (err) {
    console.log(`Error in authMiddleware=${err.message}`);
    return res.status(403).json({ status: false, message: `${err.message}` });
  }
};
