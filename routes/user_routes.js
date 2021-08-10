const express=require('express');

const{ body }=require('express-validator');
const userController=require('../controller/user_controller');

const router=express.Router();

router.post('/register',body('email').isEmail().withMessage('Invalid Email Id'),body('password').isLength({min : 8}).withMessage('Password length should be greater then or equal to 8'),userController.userRegistrationController);

module.exports=router;

