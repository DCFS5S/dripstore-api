const { getDBConnection } = require('../utils/getDBConnection');

const list = async (request, response) => {
  const connection = await getDBConnection();

  const [results] = await connection.query(
    'SELECT * FROM category',
  );

  response.json({ categories: results });
};

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
