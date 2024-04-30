const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Order.belongsToMany(models.Product, {
        through: sequelize.define('ProductOrders', {
          amount: DataTypes.INTEGER,
        }),
        as: 'products',
      });
    }
  }
  Order.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
