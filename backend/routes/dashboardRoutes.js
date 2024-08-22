const express=require("express");
const { holdingsData, positionsData, authTest } = require("../controllers/dashboardController");
const { authUser } = require("../middlewares/authMiddleware");
const router=express.Router();


router.get('/holdings',  holdingsData)
router.get('/positions', positionsData)
router.post("/auth", authUser, authTest)

module.exports=router;