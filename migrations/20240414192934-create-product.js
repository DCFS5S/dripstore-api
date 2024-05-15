'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      parentId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: 'Product', key: 'id' },
      },
      name: {
        type: Sequelize.STRING(160),
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING(160),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.STRING(1000),
      },
      brandId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: { model: 'Brand', key: 'id' },
      },
      stock: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product');
  }
}