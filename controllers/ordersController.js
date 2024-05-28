const { Order } = require('../models');

const list = async (request, response) => {
  const orders = await Order.findAll({
    where: { userId: request.userId },
  });

  return response.json({ orders });
};

const showCart = async (request, response) => {
  const order = await Order.findOne({
    where: { id: request.params.orderId },
    include: ['products', 'user'],
  });

  if (order) {
    return response.json({ order });
  }

  return response.status(404).json();
};

const addProduct = async (request, response) => {
  const { productId } = request.body;

  const userQuery = request.userId
    ? { userId: request.userId }
    : { guestId: request.guestId };

  let order = await Order.findOne({
    where: { ...userQuery, status: 'draft' },
    include: 'products',
  });

  if (!order) {
    order = await Order.create({ ...userQuery, status: 'draft' });
  }

  const [product] = await order.getProducts({ where: { id: productId } });

  const newAmount = product
    ? product.ProductOrders.amount + 1
    : 1;

  const [{ OrderId }] = await order.addProduct(productId, {
    through: {
      amount: newAmount,
    },
  });

  response.json({ orderId: OrderId });
};

const removeProduct = async (request, response) => {
  const { productId } = request.body;

  const userQuery = request.userId
    ? { userId: request.userId }
    : { guestId: request.guestId };

  const order = await Order.findOne({
    where: { ...userQuery, status: 'draft' },
    include: 'products',
  });

  const [product] = await order.getProducts({ where: { id: productId } });

  const newAmount = product.ProductOrders.amount - 1;

  if (newAmount === 0) {
    await order.removeProduct(productId);
  } else {
    await order.addProduct(productId, {
      through: {
        amount: newAmount,
      },
    });
  }

  response.json({ order });
};

module.exports = {
  list,
  showCart,
  addProduct,
  removeProduct,
};
