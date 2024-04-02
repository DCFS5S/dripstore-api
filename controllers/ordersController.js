const { getDBConnection } = require("../utils/getDBConnection");
const Product = require("../models/Order");

const showCart = async (request, response) => {
  const { productId } = request.params;
  const selectedProduct = await Orders.getOne(productId)

  if (selectedProduct) {
    response.json(selectedProduct)
  } else {
    response.status(404)
    response.json({
      error: 'Produto não encontrado'
    })
  }
}

module.exports = {
  showOrders,
}
