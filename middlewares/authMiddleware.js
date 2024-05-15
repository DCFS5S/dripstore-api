const jwt = require('jsonwebtoken');
require('dotenv').config();

function authMiddleware(request, response, next) {
  const token = request.header('Authorization');
  if (!token) return response.status(401).json({ error: 'Accesso negado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    request.userId = decoded.userId;
    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = authMiddleware;
