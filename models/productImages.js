const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    static associate(models) {
      ProductImage.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'productId',
      });
    }
  }

  ProductImage.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: 'Product', key: 'id' },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    modelName: 'ProductImage',
    tableName: 'ProductImage',
    sequelize,
  });

  return ProductImage;
};
