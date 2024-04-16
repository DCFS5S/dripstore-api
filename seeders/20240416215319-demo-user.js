'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        status: 'fake',
        tamanho: 'g',
        quantity: 1,
        productName: 'Tênis Nike',
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'fake',
        tamanho: 'p',
        quantity: 1,
        productName: 'Tênis Adidas',
        price: 59.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais objetos aqui se necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
