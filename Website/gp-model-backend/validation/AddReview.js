const {check}=require('express-validator');
module.exports.validatePostReview=()=>{
    const validationMiddleware=[
        check('username').notEmpty().withMessage('Username cannot be empty'),
        check('email').notEmpty().withMessage('Email cannot be empty'),
        check('company').notEmpty().withMessage('Company cannot be empty'),
        check('Device').notEmpty().withMessage('Device cannot be empty'),
        check('Review_Description').notEmpty().withMessage('Review_Description cannot be empty'),
        
    ]
    return validationMiddleware;
}