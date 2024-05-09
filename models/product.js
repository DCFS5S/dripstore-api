'use strict';
const { Model } = require('sequelize');
// const { ProductCategory } = require('./relations/productCategory');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Variant, {
        as: 'details',
        through: sequelize.define('ProductVariant', null, {
          tableName: 'ProductVariant',
        }),
      });

      Product.hasMany(models.Product, {
        as: 'variants',
        foreignKey: 'parentId',
      });

      Product.belongsToMany(models.Category, {
        as: 'categories',
        through: sequelize.define('ProductCategory', null, {
          tableName: 'ProductCategory',
        }),
      });

      Product.belongsTo(models.Brand, {
        as: 'brand',
        foreignKey: 'brandId',
      });
    }

    static getOne(primaryKey) {
      let product = Product.findOne({
        attributes: { exclude: ['createdAt', 'updatedAt', 'brandId'] },
        include: [{
          model: sequelize.models.Brand,
          as: 'brand',
          attributes: ['id', 'name'],
        }, {
          model: sequelize.models.Category,
          as: 'categories',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          through: { attributes: [] },
        }, {
          model: sequelize.models.Variant,
          as: 'details',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          through: { attributes: [] },
        }, 'variants'],
        scope: { parentId: [primaryKey, null] },
      });

      return product;
    }

    static async findOneComplete(primaryKey) {
      return await Product.findByPk(primaryKey, {
        include: [{
          model: sequelize.models.Variant,
          as: 'variants',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          through: { attributes: [] },
        }, {
          model: sequelize.models.Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
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
      type: DataTypes.STRING(160),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(160),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{
        model: sequelize.models.Brand,
        as: 'brand',
        attributes: ['id', 'name'],
      }, {
        model: sequelize.models.Variant,
        as: 'details',
        attributes: ['id', 'type', 'value'],
      }],
    },
    modelName: 'Product',
    tableName: 'Product',
    sequelize,
  });

  return Product;
}
