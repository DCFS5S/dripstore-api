const slugify = require("../utils/slugify")

const {Product, Category, Brand} = require("../models");
const product = require("../models/product");

const list = async (request, response) => {
  const productList = await Product.findAll({include: ['categories']});
  response.json({ products: productList });
}

const show = async (request, response) => {
  const { productId } = request.params;
  const selectedProduct = await Product.findByPk(productId);

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
  const { name, price, description, categories = [], slug = false, brandId } = request.body;
  let finalSlug = slug 
  if (!slug) {
    finalSlug = slugify(name)
    console.log(finalSlug)
  }

  const productId = await Product.create({name, price, description, slug: finalSlug, brandId});
  if (categories.length > 0) {
    Product.addCategory(productId, categories);
    console.log(productId.toJSON)
  }

  response.status(201);
  response.json();
}

const remove = async (request, response) => {
  const { productId } = request.params;
  const result = await Product.destroy({where: {id: productId}}); 

  if (result.affectedRows === 0) {
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
  const { productId } = request.params;

  const results = await connection.query(
    'SELECT name, price FROM product WHERE id = ?',
    [productId]
  );

  const { name, price } = {
    ...results[0][0],
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
