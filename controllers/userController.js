const { getDBConnection } = require("../utils/getDBConnection");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

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
        address_complement,
        registration_date = [] } = request.body;
    
    User.createOne({
        name,
        cpf,
        email,
        password,
        cel,
        address,
        neighborhood,
        city,
        zip,
        address_complement,
        registration_date 
    })
    
    response.status(201);
    response.json();
  }

  const login = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return response.status(401).json({ error: 'Usuário não encontrado' });
        }
        if (user.password !== password) {
            return response.status(401).json({ error: 'Credenciais inválidas' });
        }
        const token = jwt.sign({ userId: user._id }, 'sua_chave_secreta', { expiresIn: '1h' });
        
        response.json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        response.status(500).json({ error: 'Erro interno do servidor' });
    }
};


module.exports = {
    create,
    login
};