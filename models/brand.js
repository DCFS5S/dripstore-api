'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('./index');
const Product = require("./product");

class Brand extends Model {}

Brand.init({
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: 'Brand',
    sequelize
})

Brand.hasMany(Product)

module.exports = Brand;
