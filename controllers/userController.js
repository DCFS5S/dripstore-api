const { User } = require("../models");
const encrypt = require("../utils/encrypt");

const create = async (request, response) => {
    const {
        name,
        cpf,
        email,
        password,
        cel,
        address,
        neighborhood,
        city,
        zip,
        addressComplement
    } = request.body;
    
    try {
        
        const encryptedPassword = encrypt(password);

        await User.create({
            name,
            cpf,
            email,
            password: encryptedPassword,
            cel,
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