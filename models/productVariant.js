'use strict';
const {Model} = require('sequelize');
const { Sequelize } = require('.');

module.exports = (sequelize, DataTypes) =>{
    class ProductVariant extends Model {
        static associate(models) {}
    }

    ProductVariant.init({
        variantId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: { model: 'Variant', key: 'id'},
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: { model: 'Product', key: 'id'},
        },
    }, {
        sequelize,
        modelName: 'ProductVariant',
        tableName: 'ProductVariant',
        updatedAt: false,
        createdAt: false,
    });

    return ProductVariant;
}
