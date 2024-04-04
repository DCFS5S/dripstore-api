// const { getDBConnection } = require("../utils/getDBConnection");

const Order = require("../models/Order");

const showCart = async (request, response) => {
  const { orderId } = request.params;
  const selectedOrder = await Order.getOne(orderId)

  if (selectedOrder) {
    response.json(selectedOrder)
  } else {
    response.status(404)
    response.json({
      error: 'Produto não encontrado'
    })
  }
}

module.exports = {
  showCart,
}
