'use strict';
const { Model } = require('sequelize');

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

      Product.hasMany(models.ProductImage, {
        as: 'images',
        foreignKey: 'productId',
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
        attributes: { exclude: ['createdAt', 'updatedAt', 'brandId', 'parentId'] },
        where: sequelize.where(
          sequelize.col('Product.parentId'), sequelize.col('Product.id')
        ),
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
    modelName: 'Product',
    tableName: 'Product',
    sequelize,
  });

  return Product;
}
