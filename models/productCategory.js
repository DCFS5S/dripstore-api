'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductCategory extends Model {
        // static associate(models) {
        //     ProductCategory.belongsTo(models.Product, {
        //         foreignKey: 'product_id',
        //         as: 'products',
        //     });
        //     ProductCategory.belongsTo(models.Category, {
        //         foreignKey: 'category_id',
        //         as: 'categories',
        //     });
        // }
    }

    ProductCategory.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {model: 'Product', key: 'id'},
            field: 'product_id',
        },
        categoryId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {model: 'Category', key: 'id'},
            field: 'category_id',
        },
    }, {
        modelName: 'ProductCategory',
        tableName: 'product_category',
        createdAt: false,
        updatedAt: false,
        sequelize,
    });

    return ProductCategory;
};
