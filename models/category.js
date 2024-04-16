'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {}
    
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
          field: 'created_at',
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'updated_at',
        },
    }, {
        modelName: 'Category',
        tableName: 'Category',
        sequelize
    });

    return Category;
}
