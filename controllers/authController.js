const { User } = require("../models");
const jwt = require('jsonwebtoken');
const encrypt = require("../utils/encrypt");

const login = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({
            where: { email, password: encrypt(password) }
        });
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
    login
};