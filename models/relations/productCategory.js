'use strict';

/**
 * @todo: Configurar a indexação dos models no arquivo index para ler esta pasta e
 *        refatorar este model para o padrão utilizado nos outros.
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const ProductCategory = sequelize.define('ProductCategory', {
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
    tableName: 'product_category',
    createdAt: false,
    updatedAt: false,
});

module.exports = {
    ProductCategory
}
