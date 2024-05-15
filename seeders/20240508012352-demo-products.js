module.exports = {
  up: async (queryInterface) => {
    // Seed data for Brand table
    await queryInterface.bulkInsert('Brand', [
      { name: 'Brand 1' },
      { name: 'Brand 2' },
      { name: 'Brand 3' },
    ]);

    // Seed data for Category table
    await queryInterface.bulkInsert('Category', [
      { name: 'Category 1' },
      { name: 'Category 2' },
      { name: 'Category 3' },
    ]);

    // Seed data for Product table
    await queryInterface.bulkInsert('Product', [
      {
        name: 'Product 1',
        slug: 'product-1',
        price: 20.50,
        description: 'Description for Product 1',
        brandId: 1,
        stock: 10,
        parentId: 1,
      },
      {
        name: 'Product 2',
        slug: 'product-2',
        price: 30.75,
        description: 'Description for Product 2',
        brandId: 2,
        stock: 20,
        parentId: 1,
      },
      {
        name: 'Product 3',
        slug: 'product-3',
        price: 15.00,
        description: 'Description for Product 3',
        brandId: 3,
        stock: 5,
        parentId: 3,
      },
      {
        name: 'Product 4',
        slug: 'product-4',
        price: 25.99,
        description: 'Description for Product 4',
        brandId: 1,
        stock: 15,
        parentId: 1,
      },
      {
        name: 'Product 5',
        slug: 'product-5',
        price: 18.75,
        description: 'Description for Product 5',
        brandId: 2,
        stock: 8,
        parentId: 5,
      },
      {
        name: 'Product 6',
        slug: 'product-6',
        price: 22.00,
        description: 'Description for Product 6',
        brandId: 3,
        stock: 12,
        parentId: 6,
      },
      {
        name: 'Product 7',
        slug: 'product-7',
        price: 19.99,
        description: 'Description for Product 7',
        brandId: 1,
        stock: 20,
        parentId: 7,
      },
    ]);

    // Seed data for Variant table
    await queryInterface.bulkInsert('Variant', [
      { type: 'size', value: 'Small', description: 'Small size' },
      { type: 'size', value: 'Medium', description: 'Medium size' },
      { type: 'size', value: 'Large', description: 'Large size' },
      { type: 'color', value: 'Red', description: 'Red color' },
      { type: 'color', value: 'Blue', description: 'Blue color' },
      { type: 'color', value: 'Green', description: 'Green color' },
    ]);

    // Seed data for ProductVariant table
    await queryInterface.bulkInsert('ProductVariant', [
      { productId: 1, variantId: 1 },
      { productId: 1, variantId: 4 },
      { productId: 2, variantId: 2 },
      { productId: 2, variantId: 5 },
      { productId: 3, variantId: 3 },
      { productId: 3, variantId: 6 },
      { productId: 4, variantId: 1 },
      { productId: 4, variantId: 5 },
      { productId: 5, variantId: 2 },
      { productId: 5, variantId: 4 },
      { productId: 6, variantId: 3 },
      { productId: 6, variantId: 6 },
      { productId: 7, variantId: 1 },
      { productId: 7, variantId: 4 },
    ]);

    await queryInterface.bulkInsert('ProductCategory', [
      { productId: 1, categoryId: 1 },
      { productId: 1, categoryId: 2 },
      { productId: 2, categoryId: 2 },
      { productId: 2, categoryId: 3 },
      { productId: 3, categoryId: 1 },
      { productId: 3, categoryId: 3 },
      // Add more entries as needed
    ]);
  },

  down: async (queryInterface) => {
    // Delete all data from tables
    await queryInterface.bulkDelete('Brand', null, {});
    await queryInterface.bulkDelete('Category', null, {});
    await queryInterface.bulkDelete('Product', null, {});
    await queryInterface.bulkDelete('Variant', null, {});
    await queryInterface.bulkDelete('ProductVariant', null, {});
  },
};
