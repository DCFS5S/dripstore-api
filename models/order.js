const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Aqui você pode definir associações com outros modelos, se necessário
    }
    static async showOrder(orderId) {
      const results = await Order.showOrder();
      return results;
    }
    static async showAllOrders() {
      const allOrders = await Order.showCartOrders();
      return allOrders;
    }
    static async createOrder() {
      const newOrder = await Order.createOrder();
      return newOrder;
    }
    static async deleteOrder() {
      const results = await Order.deleteOrder();
      return results;
    }
    static async updateOrder() {
      const results = await Order.updateOrder();
      return results;
    }
  }

  Order.init({
    status: DataTypes.STRING,
    tamanho: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};
