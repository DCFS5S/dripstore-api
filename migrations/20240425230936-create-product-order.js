'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {model: 'Orders', key: 'id'},
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {model: 'Products', key: 'id'},
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductOrders');
  }
};