const { Product } = require('../models');

const list = async (request, response) => {
  const products = await Product.findAll();
  response.json({ products });
};

module.exports = {
  list,
};
