const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Accesso negado' });

    try {
        const decoded = jwt.verify(token, 'sua_chave_secreta');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
}

module.exports = authMiddleware;