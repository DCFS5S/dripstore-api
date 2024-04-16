const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Aqui você pode definir associações com outros modelos, se necessário
    }
    static async showCart(orderId) {
      const results = await Order.showCart();
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
