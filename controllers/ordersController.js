const { Order } = require("../models");

const showCart = async (request, response) => {
  const { orderId } = request.params;

  const selectedOrder = await Order.findByPk(orderId);

  response.json(selectedOrder);
}

module.exports = {
  showCart,
};
