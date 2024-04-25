'use strict';
const {Model} = require('sequelize');
const { ProductCategory } = require('./relations/productCategory');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.ProductVariant, {
        foreignKey: 'productId',
        as: 'variants',
      });

      Product.belongsToMany(models.Category, {
        through: ProductCategory,
        foreignKey: 'productId',
        as: 'categories',
      });
    }
  }

  Product.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {model: 'Brand', key: 'id'},
      field: 'brand_id',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
  }, {
      modelName: 'Product',
      tableName: 'Product',
      sequelize,
  });

  return Product;
}
