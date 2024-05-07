'use strict';
const {Model} = require('sequelize');
const { ProductCategory } = require('./relations/productCategory');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.belongsToMany(models.Product, {
                through: ProductCategory,
                foreignKey: 'categoryId',
                as: 'products',
            })
        }
    }

    Category.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        name: {
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
        modelName: 'Category',
        tableName: 'Category',
        sequelize
    });

    return Category;
}
