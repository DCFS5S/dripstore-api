const { Model, Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static productsOptions() {
      return {
        include: [{
          model: sequelize.models.Brand,
          as: 'brand',
          attributes: ['id', 'name'],
        }, {
          model: sequelize.models.Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        }],
        attributes: { exclude: ['createdAt', 'updatedAt', 'brandId', 'parentId'] },
      };
    }

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
        where: {
          parentId: { [Op.ne]: sequelize.col('variants.id') },
        },
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

    static list(options = {}) {
      // eslint-disable-next-line no-param-reassign
      delete options.include;
      const findOptions = {
        ...this.productsOptions,
        ...options,
      };
      return Product.findAll(findOptions);
    }

    static listAll() {
      return Product.list();
    }

    static listByCategory(id) {
      return Product.list({
        where: { '$categories->ProductCategory.CategoryId$': id },
      });
    }

    static listByBrand(id) {
      return Product.list({
        where: { brandId: id },
      });
    }

    static showDetailed(id) {
      const options = {
        ...Product.productsOptions,
      };
      options.include.push({
        model: sequelize.models.Product,
        as: 'variants',
        attributes: { exclude: ['createdAt', 'updatedAt', 'brandId', 'parentId'] },
        where: {
          parentId: { [Op.ne]: sequelize.col('variants.id') },
        },
      });

      return Product.findByPk(id, options);
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
};
