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
    await queryInterface.bulkInsert('Product', [
      {
        name: 'Tenis Da Nike Para Teste',
        slug: 'tenis-da-nike-para-teste',
        price: 190,
        description: 'É um produto para teste',
        brandId: 1,
      },
      {
        name: 'Tenis Da Nike Para Teste 2',
        slug: 'tenis-da-nike-para-teste-2',
        price: 210,
        description: 'É um produto para teste',
        brandId: 1,
      },
      {
        name: 'Tenis Da Adidas Para Teste',
        slug: 'tenis-da-adidas-para-teste',
        price: 169,
        description: 'É um produto para teste',
        brandId: 2,
      },
      {
        name: 'Tenis Da Puma Para Teste',
        slug: 'tenis-da-adidas-para-teste',
        price: 900,
        description: 'É um produto para teste',
        brandId: 3,
      },
    ]);
    await queryInterface.bulkInsert('Category', [
      {name: 'Tenis'},
    ]);
    await queryInterface.bulkInsert('ProductCategory', [
      {productId: 1, categoryId: 1},
      {productId: 2, categoryId: 1},
      {productId: 3, categoryId: 1},
    ]);
    await queryInterface.bulkInsert('Variant', [
      {productId: 1, slug: 'color', value: 'ff3300', name: 'Vermelho'},
      {productId: 1, slug: 'color', value: '00ff00', name: 'Verde'},
      {productId: 1, slug: 'color', value: '0055ff', name: 'Azul'},
      {productId: 1, slug: 'size', value: 'P', name: 'P'},
      {productId: 1, slug: 'size', value: 'M', name: 'M'},
      {productId: 1, slug: 'size', value: 'G', name: 'G'},
    ]);
    await queryInterface.bulkInsert('ProductVariant', [
      {productId: 1, variant1: 1, variant2: 4, stock: 5},
      {productId: 1, variant1: 1, variant2: 5, stock: 25},
      {productId: 1, variant1: 1, variant2: 6, stock: 30},
      {productId: 1, variant1: 2, variant2: 4, stock: 15},
      {productId: 1, variant1: 2, variant2: 5, stock: 90},
      {productId: 1, variant1: 3, variant2: 4, stock: 100},
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
