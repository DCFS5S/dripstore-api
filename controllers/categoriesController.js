const {Category} = require("../models");

const list = async (request, response) => {

  const categories = await Category.findAll();

  response.json({ categories });
}

const create = async (request, response) => {
  const { name } = request.body;
  try {
    await Category.findOrCreate({
      where: { name },
    });
    response.status(201);
  } catch(error){
    response.status(500);
  }
  

  response.json();
};

module.exports = {
  create,
  list,
};
