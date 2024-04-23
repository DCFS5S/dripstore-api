'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class ProductVariant extends Model {
        static associate(models) {
            ProductVariant.belongsTo(models.Product, {  
                foreignKey: 'productId',
                as: 'parent',
            })
        }
    }

    ProductVariant.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        size: {
            type: DataTypes.STRING(10),
        },
        colorName: {
            type: DataTypes.STRING(32),
            field:'color_name',
        },
        colorHex: {
            type: DataTypes.STRING(6),
            field: 'color_hex',
        },
        stock: {
            type: DataTypes.TINYINT,
            allowNull: false,
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
