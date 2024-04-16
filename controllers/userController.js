const { User } = require("../models");
const bcrypt = require('bcrypt');

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
