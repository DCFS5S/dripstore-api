const { Brand } = require('../models');

const list = async (request, response) => {
  const brands = await Brand.findAll();

  response.json({ brands });
};

const show = async (request, response) => {
  const { id } = request.params;
  const brand = await Brand.find(id);

  if(brand.length > 0) {
    response.json(brand);
  } else {
    response.status(404);
    response.json();
  }
};

const create = async (request, response) => {
  const { name } = request.body;
  try {
    await Brand.create({ name });
    response.status(201);
  } catch (error) {
    response.status(500);
  }

  response.json();
};

const update = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const category = await Brand.find(id);
  Brand.set({ name });

  response.status(204);
};

module.exports = {
  create,
  list,
  show,
  update,
};
