const getUserIdFromAuthToken = require('../utils/getUserIdFromToken');

const identityMiddleware = (request, response, next) => {
  const token = request.header('Authorization');
  const userId = getUserIdFromAuthToken(token);

  if (userId) {
    request.userId = userId;
  } else {
    request.guestId = request.header('X-Guest-Token');
  }

  next();
};

module.exports = identityMiddleware;
