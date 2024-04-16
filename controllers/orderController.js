const { Order } = require("../models");

const showCart = async (request, response) => {

  const { orderId } = request.params;

  const selectedOrder = await Order.findByPk(orderId);

  response.json(selectedOrder);
}

module.exports = {
  showCart,
};

// const showCart = async (request, response) => {
//     const { orderId } = request.params;
  
//     const selectedOrder = await Order.getOne(orderId);
  
//     if (selectedOrder) {
//       response.json(selectedOrder)
//     } else {
//       response.status(404)
//       response.json({
//         error: 'Produto não encontrado'
//       })
//     }
//   }
