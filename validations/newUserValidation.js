const Joi = require('joi');
const { User } = require('../models/User'); 

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

async function validateUserData(userData) {
    const existingEmail = await User.findOne({ where: { email: userData.email } });
    if (existingEmail) {
        throw new Error('E-mail já cadastrado');
    }

    const existingCpf = await User.findOne({ where: { cpf: userData.cpf } });
    if (existingCpf) {
        throw new Error('CPF já cadastrado');
    }

    return userSchema.validate(userData);
}

module.exports = {
    userSchema,
    validateUserData
};
