const { Order } = require("../models");

const showOrder = async (request, response) => {
  const { orderId } = request.params;

  const selectedOrder = await Order.findByPk(orderId);

  response.json(selectedOrder);
}

const showAllOrders = async (request, response) => {
  const selectedAllOrder = await Order.findAll({});

  response.json(selectedAllOrder);
}

const createOrder = async (request, response) => {
  const {
    status,
    tamanho,
    quantity,
    productName,
    price,
    createdAt = new Date(),
    updateAt = new Date()
  } = request.body;

  // console.log(request.body)

  await Order.create({
    status,
    tamanho,
    quantity,
    productName,
    price,
    createdAt,
    updateAt
  })

  response.json();
}

const deleteOrder = async (request, response) => {
  const { orderId } = request.params;

  const deletedOrder = await Order.destroy({
    where: {
      id: orderId
    }
  });

  response.json('Produto deletado com sucesso');
}

const updateOrder = async (request, response) => {
  const { orderId } = request.params;

  const {
    quantity,
  } = request.body;

  await Order.update(
    {quantity},
    {
      where: {
        id: orderId
      }
    }
  );

  response.json();
}


module.exports = {
  showOrder,
  showAllOrders,
  createOrder,
  deleteOrder,
  updateOrder
};
