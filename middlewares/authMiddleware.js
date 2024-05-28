const getUserIdFromAuthToken = require('../utils/getUserIdFromToken');

function authMiddleware(request, response, next) {
  const token = request.header('Authorization');
  const userId = getUserIdFromAuthToken(token);
  if (!userId) return response.status(401).json({ error: 'Accesso negado' });

  request.userId = userId;
  return next();
}

module.exports = authMiddleware;
