'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('./index');

class Product extends Model {
}

Product.init({
  id: {
    type: DataTypes.MEDIUMINT.UNSIGNED,
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
  brand_id: {
    type: DataTypes.MEDIUMINT.UNSIGNED,
    allowNull: false,
    references: {model: 'Brand', key: 'id'}
  }
}, {
    modelName: 'Product',
    sequelize,
});

module.exports = Product;
