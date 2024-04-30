'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brand', [
      {name: 'Nike'},
      {name: 'Adidas'},
      {name: 'Puma'},
      {name: 'Klaus'},
    ]);
    await queryInterface.bulkInsert('product', [
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
    await queryInterface.bulkInsert('category', [
      {name: 'Tenis'},
    ]);
    await queryInterface.bulkInsert('product_category', [
      {product_id: 1, category_id: 1},
      {product_id: 2, category_id: 1},
      {product_id: 3, category_id: 1},
    ]);
    await queryInterface.bulkInsert('variant', [
      {product_id: 1, slug: 'color', value: 'ff3300', name: 'Vermelho'},
      {product_id: 1, slug: 'color', value: '00ff00', name: 'Verde'},
      {product_id: 1, slug: 'color', value: '0055ff', name: 'Azul'},
      {product_id: 1, slug: 'size', value: 'P', name: 'P'},
      {product_id: 1, slug: 'size', value: 'M', name: 'M'},
      {product_id: 1, slug: 'size', value: 'G', name: 'G'},
    ]);
    await queryInterface.bulkInsert('product_variant', [
      {product_id: 1, variant1: 1, variant2: 4, stock: 5},
      {product_id: 1, variant1: 1, variant2: 5, stock: 25},
      {product_id: 1, variant1: 1, variant2: 6, stock: 30},
      {product_id: 1, variant1: 2, variant2: 4, stock: 15},
      {product_id: 1, variant1: 2, variant2: 5, stock: 90},
      {product_id: 1, variant1: 3, variant2: 4, stock: 100},
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('product', null, {});
    await queryInterface.bulkDelete('category', null, {});
    await queryInterface.bulkDelete('brand', null, {});
    await queryInterface.bulkDelete('product_category', null, {});
  }
};
