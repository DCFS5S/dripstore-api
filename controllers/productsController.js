const { getDBConnection } = require("../utils/getDBConnection");
const Product = require("../models/Product");

const list = async (request, response) => {
  const productList = await Product.getAll();

  response.json({ products: productList });
}

const show = async (request, response) => {
  const { productId } = request.params;
  const selectedProduct = await Product.getOne(productId)

  if (selectedProduct) {
    response.json(selectedProduct)
  } else {
    response.status(404)
    response.json({
      error: 'Produto não encontrado'
    })
  }
}

const create = async (request, response) => {
  const { name, price, categories = [] } = request.body;

  const productId = await Product.createOne(name, price);
  if (categories.length > 0) {
    Product.addCategory(productId, categories);
  }

  response.status(201);
  response.json();
}

const remove = async (request, response) => {
  const connection = await getDBConnection();
  const { productId } = request.params;

  const [results] = await connection.query(
    'DELETE FROM product WHERE id = ?',
    [productId]
  );

  if (results.affectedRows === 0) {
    response.status(404)
    response.json({
      message: 'Produto não encontrado',
    })    
  } else {
    response.json({
      message: 'Produto removido com sucesso!',
    })
  }
}

const update = async (request, response) => {
  const connection = await getDBConnection();
  const { productId } = request.params;

  const [results] = await connection.query(
    'SELECT name, price FROM product WHERE id = ?',
    [productId]
  );

  const {name, price } = {
    ...results[0],
    ...request.body,
  };

  const [{ affectedRows }] = await connection.query(
    'UPDATE product set name=?, price=? WHERE id = ? LIMIT 1',
    [name, price, productId]
  );

  if (affectedRows === 0) {
    response.status(404)
    response.json({
      message: 'Produto não encontrado',
    })    
  } else {
    response.json({
      message: 'Produto atualizado com sucesso!',
    })
  }

}

module.exports = {
  create,
  show,
  list,
  remove,
  update,
}