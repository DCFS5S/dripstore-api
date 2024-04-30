'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class ProductVariant extends Model {
        static associate(models) {
            ProductVariant.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'parent',
            });

            ProductVariant.belongsTo(models.Variant, {
                foreignKey: 'variant1',
                as: 'detail1',
            });

            ProductVariant.belongsTo(models.Variant, {
                foreignKey: 'variant2',
                as: 'detail2',
            });
        }
    }

    ProductVariant.init({
        variant1: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: { model: 'variant', key: 'id' },
            primaryKey: true,
            allowNull: false,
        },
        stock: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        variant2: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: { model: 'variant', key: 'id' },
            primaryKey: true,
            allowNull: true,
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: { model: 'Product', key: 'id'},
            field: 'product_id',
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'updated_at',
        },
    }, {
        sequelize,
        modelName: 'ProductVariant',
        tableName: 'product_variant',
    });

    return ProductVariant;
}
