const Order = require("../models/Order");

const showCart = async (request, response) => {
  const { orderId } = request.params;
  const selectedOrder = await Order.getOne(orderId);

  if (selectedOrder) {
    response.json(selectedOrder)
  } else {
    response.status(404)
    response.json({
      error: 'Produto não encontrado'
    })
  }
}

const remove = async (request, response) => {
  const { orderId } = request.params;
  const removedOrder = await Order.remove(orderId);

  if (removedOrder.affectedRows === 0) {
    response.status(404);
    response.json({
      message: 'Produto não encontrado',
    })
  } else {
    response.json({
      message: 'Produto removido com sucesso!',
    })
  }
}

module.exports = {
  showCart,
  remove,
}
