'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coupon.init({
    id: DataTypes.STRING,
    code: DataTypes.STRING,
    discount: DataTypes.STRING,
    uselimit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coupons',
  });
  return coupons;
};