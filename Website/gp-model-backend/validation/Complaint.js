const {check}=require('express-validator');
module.exports.validatePostComplaint=()=>{
    const validationMiddleware=[
        check('description').notEmpty().withMessage('description cannot be empty'),
       
        check('email').isEmail().withMessage(' email is invalid'),
        
    ]
    return validationMiddleware;
}