const { Category } = require('../models');

const list = async (request, response) => {
  const categories = await Category.findAll();

  response.json({ categories });
};

const show = async (request, response) => {
  const { id } = request.params;
  const category = await Category.find(id);

  if(category.length > 0) {
    response.json(category);
  } else {
    response.status(404);
    response.json();
  }
};

const create = async (request, response) => {
  const { name } = request.body;
  try {
    await Category.create({ name });
    response.status(201);
  } catch (error) {
    response.status(500);
  }

  response.json();
};

const update = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const category = await Category.find(id);
  category.set({ name });

  response.status(204);
};

module.exports = {
  create,
  show,
  list,
  update,
};
