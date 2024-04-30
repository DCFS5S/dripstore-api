'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    static associate(models) {}
  }

  Variant.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: false,
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
    modelName: 'Variant',
    tableName: 'variant',
    sequelize
  });

  return Variant;
}
