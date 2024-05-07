const slugify = require("../utils/slugify")

const {Product, Category, Brand, ProductVariant, Variant} = require("../models");
const product = require("../models/product");

const list = async (request, response) => {
  const productList = await Product.findAll({include: [
    {
      model: Category,
      as: 'categories',
      attributes: ['id', 'name'],
    },
  ]});

  response.json({ products: productList });
};

const show = async (request, response) => {
  const { productId } = request.params;
  const selectedProduct = await Product.findByPk(productId, {include: ['variants']})/*, {include: [
    {
      model: ProductVariant,
      as: 'variants',
      attributes: ['stock'],
      include: [],
    },
    {
      model: ProductVariant,
      as: 'variants',
      attributes: ['stock'],
      include: [{
        model: Variant,
        as: 'detail2',
        foreignKey: 'variant2'
      }],
    },
    {
      model: Category,
      as: 'categories',
      attributes: ['id', 'name'],
    },
  ]});*/

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

  const product = await Product.create({name, price, description, slug: finalSlug, brandId});
  if (categories.length > 0) {
    product.addCategories(categories);
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

  const product = await Product.findByPk(productId);

  if (!product) {
    response.status(404)
    response.json({
      message: 'Produto não encontrado',
    })

    return;
  }

  for (const [key, value] of Object.entries(request.body)) {
    product.set(key, value);
  }

  product.save();

  response.status(204);
  response.json({
    message: 'Produto atualizado com sucesso!',
  });
}

module.exports = {
  create,
  show,
  list,
  remove,
  update,
}
