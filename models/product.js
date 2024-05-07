'use strict';
const { Model } = require('sequelize');
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

      Product.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand',
      });
    }

    static list(options = {}, joinsWhereClauses = {}) {
      delete options.include;
      const findOptions = {
        include: [{
          model: sequelize.models.Brand,
          as: 'brand',
          attributes: ['id', 'name'],
          where: joinsWhereClauses?.brand,
        }, {
          model: sequelize.models.Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: {attributes: []},
          where: joinsWhereClauses?.categories,
        }],
        attributes: { exclude: ['createdAt', 'updatedAt', 'brandId']},
        ...options,
      };
      return Product.findAll(findOptions);
    }

    static listAll() {
      return Product.list();
    }

    static listByCategory(id) {
      return Product.list({}, { categories: {id} });
    }

    static listByBrand(id) {
      return Product.list({}, { brand: {id} });
    }

    static showDetailed(id) {
      return Product.find(id, {
        include: [{
          model: sequelize.models.Product,
          as: 'variants',
        // }, {
        //   model: sequelize.models.Variant
        }]
      })
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
      modelName: 'Product',
      tableName: 'Product',
      sequelize,
  });

  return Product;
}
