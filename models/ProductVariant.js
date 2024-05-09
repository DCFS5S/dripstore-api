'use strict';
const {Model} = require('sequelize');
const { Product, Variant } = require('./index');

module.exports = (sequelize, DataTypes) =>{
    class ProductVariant extends Model {
        static associate(models) {
            this.belongsTo(models.Product);
            this.belongsTo(models.Variant);
        }
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
    });

    return ProductVariant;
}
