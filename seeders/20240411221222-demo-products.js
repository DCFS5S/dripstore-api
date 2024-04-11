'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brand', [
      {name: 'Nike'},
      {name: 'Adidas'},
      {name: 'Puma'},
      {name: 'Klaus'},
    ]);
    await queryInterface.bulkInsert('Product', [
      {
        name: 'Tenis Da Nike Para Teste',
        slug: 'tenis-da-nike-para-teste',
        price: 190,
        description: 'É um produto para teste',
        brand_id: 1,
      },
      {
        name: 'Tenis Da Nike Para Teste 2',
        slug: 'tenis-da-nike-para-teste-2',
        price: 210,
        description: 'É um produto para teste',
        brand_id: 1,
      },
      {
        name: 'Tenis Da Adidas Para Teste',
        slug: 'tenis-da-adidas-para-teste',
        price: 169,
        description: 'É um produto para teste',
        brand_id: 2,
      },
      {
        name: 'Tenis Da Puma Para Teste',
        slug: 'tenis-da-adidas-para-teste',
        price: 900,
        description: 'É um produto para teste',
        brand_id: 3,
      },
    ]);
    await queryInterface.bulkInsert('Category', [
      {name: 'Tenis'},
    ]);
    await queryInterface.bulkInsert('ProductCategory', [
      {product_id: 1, category_id: 1},
      {product_id: 2, category_id: 1},
      {product_id: 3, category_id: 1},
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Product', null, {});
    await queryInterface.bulkDelete('Category', null, {});
    await queryInterface.bulkDelete('Brand', null, {});
    await queryInterface.bulkDelete('ProductCategory', null, {});
  }
};
