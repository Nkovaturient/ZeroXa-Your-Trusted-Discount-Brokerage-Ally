const Joi=require("@hapi/joi");

module.exports.signupValidation=(data)=>{
    const schema= Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(10).required(),
    });
    return schema.validate(data);

}

module.exports.loginValidation=(data)=>{
    const schema= Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(15).required(),
    });
    return schema.validate(data);

}