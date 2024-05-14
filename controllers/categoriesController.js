const {Category} = require("../models");

const list = async (request, response) => {

  const categories = await Category.findAll();

  response.json({ categories });
}

const create = async (request, response) => {
  const connection = await getDBConnection();
  const { name } = request.body;

  await connection.query(
    'INSERT INTO category (name) VALUES (?)',
    [name],
  );

  response.status(201);
  response.json();
};

module.exports = {
  create,
  list,
};
