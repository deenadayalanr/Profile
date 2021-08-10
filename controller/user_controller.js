const User=require('../model/user');
const{ validationResult }=require('express-validator');


exports.userRegistrationController=(req,res,next) => {
    console.log(req.body.name);
    const user=new User(req.body);
    // console.log(user);
    if(user.password!==user.confirmPassword) {
        return res.json({error: 'Password and Confirm Password does not match'});
    }

    const validation=validationResult(req);
    if(!validation.isEmpty()) {
        const error=validation.array();
        // console.log(error[0].msg);
        return res.json({error : error[0].msg});

    }
    // console.log(validation);

    console.log(123);
};