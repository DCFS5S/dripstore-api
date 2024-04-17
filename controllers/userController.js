const { User } = require("../models");
const bcrypt = require('bcrypt');
const { userSchema } = require('../validations/newUserValidation');

const create = async (request, response) => {
    const {
        name,
        cpf,
        email,
        password,
        phone,
        address,
        neighborhood,
        city,
        zip,
        addressComplement
    } = request.body;
    
    try {
        const userData = { name, cpf, email, password, phone, address, neighborhood, city, zip, addressComplement };
        const { error } = userSchema.validate(userData);
        if (error) {
            return response.status(400).json({ error: error.details[0].message });
        }

        const existingEmail = await User.findOne({ where: { email } });
        if (existingEmail) {
            return response.status(400).json({ error: 'E-mail já cadastrado' });
        }

        const existingCpf = await User.findOne({ where: { cpf } });
        if (existingCpf) {
            return response.status(400).json({ error: 'CPF já cadastrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            cpf,
            email,
            password: hashedPassword,
            phone,
            address,
            neighborhood,
            city,
            zip,
            addressComplement,
        });

        response.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        response.status(500).json({ error: 'Erro interno do servidor' });
    }
};

module.exports = {
    create,
};
