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

  const results = await Order.updateOne(orderId);

  const { nome } = {
    ...results[0][0],
    ...request.body
  }

  const affectedRows = await Order.updateOne(orderId, nome)

  if (affectedRows === 0) {
    response.status(404)
    response.json({
      message: 'Produto não encontrado',
    })
  } else {
    response.json({
      message: 'Produto atualizado com sucesso',
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
