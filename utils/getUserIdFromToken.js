const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUserIdFromAuthToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded.userId;
  } catch (error) {
    return null;
  }
};

module.exports = getUserIdFromAuthToken;
