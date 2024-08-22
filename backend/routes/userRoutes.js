const express=require("express");
const { login, signup } = require("../controllers/userController");
const { authUser } = require("../middlewares/authMiddleware");
const router=express.Router();


router.post('/login', login)
router.post('/signup', signup)
router.post('/', authUser)

module.exports=router;