//Validation
const Joi = require('@hapi/joi');

//Register validation
const registerValidation = (data) => {
 const schema = Joi.object({
 
    name: Joi.string()
       .min(6)
       .required(),
    email: Joi.string()
       .min(6)
       .required()
       .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
       .min(6)
       .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
       .required()
 });

return schema.validate(data);

}

const loginValidation = (data) => {
    const schema = Joi.object({
    
        email: Joi.string()
           .min(6)
           .required()
           .email(),
        password: Joi.string()
           .min(6)
           .required()
     });
    
    return schema.validate(data);
    
    }

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;