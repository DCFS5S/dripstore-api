const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string(),
    address: Joi.string(),
    neighborhood: Joi.string(),
    city: Joi.string(),
    zip: Joi.string(),
    addressComplement: Joi.string()
});

module.exports = {
    userSchema,
};
