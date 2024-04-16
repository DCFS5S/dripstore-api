'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {}

    Brand.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128),
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
        modelName: 'Brand',
        tableName: 'Brand',
        sequelize,
    });

    return Brand;
}
