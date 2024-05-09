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
        parentId: null,
        name: 'Tenis Da Nike Para Teste',
        slug: 'tenis-da-nike-para-teste',
        price: 190,
        description: 'É um produto para teste',
        brandId: 1,
      },
      {
        parentId: 1,
        name: 'Tenis Da Nike Para Teste 2',
        slug: 'tenis-da-nike-para-teste-2',
        price: 210,
        description: 'É um produto para teste',
        brandId: 1,
      },
      {
        parentId: 1,
        name: 'Tenis Da Adidas Para Teste',
        slug: 'tenis-da-adidas-para-teste',
        price: 169,
        description: 'É um produto para teste',
        brandId: 2,
      },
      {
        parentId: null,
        name: 'Tenis Da Puma Para Teste',
        slug: 'tenis-da-adidas-para-teste',
        price: 900,
        description: 'É um produto para teste',
        brandId: 3,
      },
      {
        parentId: 4,
        name: 'Tenis Da Puma Para Teste 2',
        slug: 'tenis-da-adidas-para-teste',
        price: 800,
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
      {slug: 'color', value: 'ff3300', description: 'Vermelho'},
      {slug: 'color', value: '00ff00', description: 'Verde'},
      {slug: 'color', value: '0055ff', description: 'Azul'},
      {slug: 'size', value: 'P', description: 'P'},
      {slug: 'size', value: 'M', description: 'M'},
      {slug: 'size', value: 'G', description: 'G'},
    ]);
    await queryInterface.bulkInsert('ProductVariant', [
      {productId: 2, variantId: 1},
      {productId: 2, variantId: 4},
      {productId: 3, variantId: 2},
      {productId: 3, variantId: 4},
      {productId: 4, variantId: 3},
      {productId: 4, variantId: 5},
      {productId: 5, variantId: 1},
      {productId: 5, variantId: 5},
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
