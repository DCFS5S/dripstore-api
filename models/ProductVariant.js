'use strict';
const {Model} = require('sequelize');
const { Sequelize } = require('.');

module.exports = (sequelize, DataTypes) =>{
    class ProductVariant extends Model {
        static associate(models) {}
    }

    ProductVariant.init({
        VariantId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: { model: 'Variant', key: 'id'},
            field: 'variant_id',
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: { model: 'Product', key: 'id'},
            field: 'product_id',
        },
    }, {
        sequelize,
        modelName: 'ProductVariant',
        tableName: 'product_variant',
        updatedAt: false,
        createdAt: false,
    });

    return ProductVariant;
}
