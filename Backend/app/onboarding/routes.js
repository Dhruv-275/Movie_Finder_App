const express=require('express')
const router=express.Router()
const { signUp, loginUser, forgetAndResetPassword}= require("./controller")


router.post('/signup',signUp)
router.post('/login',loginUser)
router.post('/forget',forgetAndResetPassword)


module.exports=router