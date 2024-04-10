'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('./index');
const Product = require("./product");

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: 'Category',
    sequelize
})

Category.belongsToMany(Product, {through: 'ProductCategory'});

module.exports = Category;
