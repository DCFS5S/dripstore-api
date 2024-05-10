'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    static associate(models) {}
  }

  Variant.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  }, {
    modelName: 'Variant',
    tableName: 'Variant',
    sequelize
  });

  return Variant;
}
