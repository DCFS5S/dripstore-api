const Order = require("../models/Order");

const create = async (request, response) => {
  const { nome, preco, imagem, cor, tamanho} = request.body;
  const orderId = await Order.createOne(nome, preco, imagem, cor, tamanho)

  if (orderId) {
    response.json({
      message: 'Produto criado com sucesso!',
    })
  } else {
    response.status(404);
    response.json({
      message: 'Produto não encontrado',
    })
  }
}

const update = async (request, response) => {
  const { orderId } = request.params;
  const { nome } = request.body;

  const updateOrder = await Order.updateOne(orderId, nome);

  if (updateOrder) {
    response.json({
      message: 'Produto atualizado com sucesso',
    }) 
  } else {
    response.status(404)
    response.json({
      message: 'Produto não encontrado ou nenhum dado foi atualizado',
    })
  }
}

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
  create,
  update,
}
